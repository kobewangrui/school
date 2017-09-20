<style lang="css" src="assets/css/checkLeave.css" scoped></style>
<template>
    <div>
          <section class="leaveDetail">
            <p>
                <span>审批编号</span>
                <span>{{$route.query.id}}</span>
            </p>
            <p>
                <span>开始时间</span>
                <span>{{$route.query.start_time | formatDate}}</span>
            </p>
            <p>
                <span>结束时间</span>
                <span>{{$route.query.end_time | formatDate}}</span>
            </p>
            <p>
                <span>请假原因</span>
                <span>{{$route.query.reason}}</span>
            </p>
            <p>
                <span>申请人</span>
                <span>{{$route.query.real_name}}</span>
            </p>
            <div class="noticeGroup">
                <p class="img one" :class="{'one':$route.query.images.length===1,'two':$route.query.images.length===2,'three':$route.query.images.length===3}">
                    <img :src="img" v-for="img in $route.query.images" :key="img.id"> 
                </p>
            </div>
        </section>  
        <router-link :to="{path:'/askForLeave/aStudentHistory',query:{student_id:$route.query.student_id}}" tag="div" class="historyChat">
            <span>查看Ta的历史记录</span>
            <span> > </span>
        </router-link>
        <textarea class="comment" placeholder="添加备注" v-model="content"></textarea>
        <div class="operate">
            <button class="reject" @click="handlerAsk(2)" v-if="$store.state.user.type==='2'">拒绝</button>
            <button class="agree" @click="handlerAsk(1)" v-if="$store.state.user.type==='2'">同意</button>
            <button class="recall" @click="studentCancel()" v-if="$store.state.user.type==='1'">撤回</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            content:''
        }
    },
    methods:{
        handlerAsk(type){
            let actions;
            type===1?actions=1:actions=2;
            this.$http.post('/api',{name:'smart_campus.leave.deal',reply:this.content,leave_id:this.$route.query.id,action:actions},{emulateJSON:true}).then((res)=>{
                if(res.body.code === 1000){
                    this.list = res.body.data.list
                    let arg = {
                        id:this.$route.query.id,
                        student_id:this.$route.query.student_id,
                        start_time:this.$route.query.start_time,
                        end_time:this.$route.query.end_time,
                        images:this.$route.query.images,
                        real_name:this.$route.query.real_name,
                        reason:this.$route.query.reason,
                        reply:this.content,
                    }
                    if(actions === 1){
                        arg.status = '2'
                    }else if(actions === 2){
                        arg.status = '3'
                    }
                    this.$router.push({path:'/askForLeave/leaveState',query:arg})
                }else{
                    console.log(res.body.msg)
                };
            }).catch((error)=>{
                console.log(error);
            })
        },
        studentCancel(){
            this.$http.post('/api',{name:'smart_campus.leave.cancel'},{emulateJSON:true}).then((res)=>{
                if(res.body.code !== 1000){
                    this.$router.push('/askForLeave/leaveHistoryStudent')
                }else{
                    console.log(res.body.msg)
                };
            }).catch((error)=>{
                console.log(error);
            })
        }
    }
}
</script>



