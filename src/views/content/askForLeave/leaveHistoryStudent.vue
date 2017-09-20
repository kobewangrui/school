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
                <span v-if="i.status === '1'" class="reset">已撤回</span>
                <span v-if="i.status === '2'" class="success">已通过</span>
                <span v-if="i.status === '3'" class="fail">已拒绝</span>
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
                    // this.list = res.body.data.list
                    this.list =    [
            {
                "id": "1",
                "created_at": "1503485519",
                "updated_at": "1503485519",
                "start_time": "1503485519",
                "end_time": "1503485519",
                "student_id": "5",
                "teacher_id": "2",
                "reason": "I'm sick",
                "images": [
                    "http://campus.zhedacxz.com/uploads/head.jpeg",
                    "http://campus.zhedacxz.com/uploads/headj.jpeg"
                ],
                "reply": "1111",
                "status": "2",
                "real_name": "陶跃跃"
            },
            {
                "id": "2",
                "created_at": "1503485519",
                "updated_at": "1504256717",
                "start_time": "1503485519",
                "end_time": "1503485519",
                "student_id": "5",
                "teacher_id": "2",
                "reason": "a little sick",
                "images": [],
                "reply": "111",
                "status": "1",
                "real_name": "陶跃跃"
            },
            {
                "id": "2",
                "created_at": "1503485519",
                "updated_at": "1504256717",
                "start_time": "1503485519",
                "end_time": "1503485519",
                "student_id": "5",
                "teacher_id": "2",
                "reason": "a little sick",
                "images": [],
                "reply": "111",
                "status": "0",
                "real_name": "陶跃跃"
            },
            {
                "id": "2",
                "created_at": "1503485519",
                "updated_at": "1504256717",
                "start_time": "1503485519",
                "end_time": "1503485519",
                "student_id": "5",
                "teacher_id": "2",
                "reason": "a little sick",
                "images": [],
                "reply": "111",
                "status": "3",
                "real_name": "陶跃跃"
            }
        ]
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

