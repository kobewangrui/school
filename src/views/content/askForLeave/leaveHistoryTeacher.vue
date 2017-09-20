<style lang="css" scoped src="assets/css/leaveHistory.css"></style>
<template>
    <div class="history">
        <div v-for="i in list" :key="i.id" class="list" @click="routerGo(i)">
            <p class="dateTime">
                <span>开始时间</span>
                <span>{{i.start_time | formatDate}}</span>
            </p>
            <p class="dateTime">
                <span>结束时间</span>
                <span>{{i.end_time | formatDate}}</span>
            </p>
            <p class="checkState">
                <span>{{i.created_at | formatDate}}发起申请</span>
                <span v-if="i.status === '0'" class="checking">待审核</span>
                <span v-if="i.status === '3'" class="fail">已拒绝</span>
                <span v-if="i.status === '2'" class="success">已通过</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],
        }
    },
    created(){
        this.getList();
    },
    methods:{
        getList(){
            this.$http.post('/api',{name:'smart_campus.leave.list',index:1,},{emulateJSON:true}).then((res)=>{
                if(res.body.code === 1000){
                    this.list = res.body.data.list
                }else{
                    console.log(res.body.msg)
                };
            }).catch((error)=>{
                console.log(error);
            })
        },
        routerGo(i){
            let arg = {
                id:i.id,
                student_id:i.student_id,
                start_time:i.start_time,
                end_time:i.end_time,
                images:i.images,
                real_name:i.real_name,
                reason:i.reason,
                status:i.status,
                reply:i.reply
            }
            if(i.status === '0'){
                this.$router.push({path:'/askForLeave/leaveDetail',query:arg})
            }else{
                arg.status = i.status
                this.$router.push({path:'/askForLeave/leaveState',query:arg})
            }
    }   
    }
}
</script>

