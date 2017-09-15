<style scoped lang="css" src="assets/css/chat.css"></style>
<template>
    <div class="chat">
        <header>
            <p class="studentMsg">
                <span>专业班级</span>
                <span>{{$route.query.name}}</span>
            </p>
            <p class="studentConnect">
                <img :src="require('assets/image/phones.png')">
                <span>{{$route.query.mobile}}</span>
            </p>
        </header>
        <section>
            <div :class="{'teacher':!i.is_me_send,'student':i.is_me_send}" v-for="i in chatMsg" :key="i.id">
                <img :src="$route.query.head" v-if="!i.is_me_send && $route.query.is_anonymous==='0'">
                <img :src="require('assets/image/noName.jpg')" v-if="!i.is_me_send && $route.query.is_anonymous==='1'">
                <img :src="info.teacher_head" v-if="i.is_me_send">
                <div class="detail">
                    <p class="msg">{{i.msg}}</p>
                    <p class="time">{{i.created_at | formatDate}}</p>
                </div>
            </div>
        </section>
        <footer>
            <img :src="require('assets/image/eye.png')">
            <img :src="require('assets/image/icon_emotion.png')">
            <input type="text" placeholder="请输入消息..." v-model="msg">
            <button @click="sendMsg" :class="{'active':$vuerify.check(['msg'])}">发送</button>
        </footer>
    </div>
</template>
<script>
export default{
    data(){
        return{
            chatMsg:[],
            msg:'',
            info:'',
        }
    },
    created(){
        this.getMessageList()
    },
    vuerify:{
        msg:'required'
    },
    methods:{
        getMessageList(){
            this.$http.post('/api',{name:'smart_campus.consult.msg.teacher.list',index:1,consult_rec_id:this.$route.query.consult_rec_id},{emulateJSON:true}).then((res)=>{
                if(res.body.code === 1000){
                    const {
                        body:{
                            data:{
                                info,
                                list
                            }
                        }
                    } = res
                    this.chatMsg = list.reverse()
                    this.info = info
                }else{
                    console.log(res.body.msg)
                };
            }).catch((error)=>{
                console.log(error);
            })
        },
        sendMsg(){
            if(this.$vuerify.check()){
                this.$http.post('/api',{name:'smart_campus.consult.teacher.send.msg',msg:this.msg,consult_rec_id:this.$route.query.consult_rec_id},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.getMessageList()
                        this.msg = ''
                    }else{
                        console.log(res.body.msg)
                    };
                }).catch((error)=>{
                    console.log(error);
                })
            }

        },
    }
}
</script>

