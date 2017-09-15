<style lang="css" scoped src="assets/css/leaveHistory.css"></style>
<template>
    <div class="history">
        <router-link tag="div" :to="{path:'/askForLeave/leaveState',query:{
            id:i.id,
            student_id:i.student_id,
            start_time:i.start_time,
            end_time:i.end_time,
            images:i.images,
            real_name:i.real_name,
            reason:i.reason,
            status:i.status,
            reply:i.reply
        }}" v-for="i in list" :key="i.id" class="list" v-if="i.status !== '1'">
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
                <span v-if="i.status === '0'" :class="{'fail':i.status === '0'}">未通过</span>
                <span v-if="i.status === '2'" :class="{'success':i.status === '2'}">审批通过</span>
                <span v-if="i.status === '3'" :class="{'checking':i.status === '3'}">审批中</span>
            </p>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.getList();
    },
    methods:{
        getList(){
            this.$http.post('/api',{name:'smart_campus.surf.leave.list',student_id:this.$route.query.student_id,index:1,},{emulateJSON:true}).then((res)=>{
                if(res.body.code === 1000){
                    this.list = res.body.data.list
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

