<style lang="css" scoped src="assets/css/leaveHistory.css"></style>
<template>
    <div class="history">
        <pre>{{list}}</pre>
        <router-link tag="div" to="/askForLeave/leaveState" v-for="i in list" :key="i.id" class="list">
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
                <span class="checking">待审核</span>
                <!-- <span v-if="i===1" :class="{'fail':true}">未通过</span>
                <span v-if="i%2===0" :class="{'success':true}">审批通过</span>
                <span v-if="i===3" :class="{'checking':true}">审批中</span> -->
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
            this.$http.post('/api',{name:'smart_campus.leave.list',index:1,},{emulateJSON:true}).then((res)=>{
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

