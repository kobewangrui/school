<style scoped lang="css" src="assets/css/chat.css"></style>
<template>
    <div class="chat">
        <header>
            <p class="chatIntro">为了方便即时沟通，可以选择以下方式，备注校名即可</p>
            <div class="connect">
                    ---qq：{{info.qq}}---
                    ---微信：{{info.wechat}}---
                    ---电话：{{info.mobile}}---
                <a>
                    <img :src="require('assets/image/QQ.png')">
                </a>
                <a>
                    <img :src="require('assets/image/wechat.png')">
                </a>
                <a>
                    <img :src="require('assets/image/telephone.png')">
                </a>
            </div>
        </header>
        <section>
            <div :class="{'teacher':!i.is_me_send,'student':i.is_me_send}" v-for="i in chatMsg" :key="i.id">
                <img :src="info.teacher_head" v-if="!i.is_me_send">
                <img :src="info.user_head" v-if="i.is_me_send">
                <div class="detail">
                    <p class="msg">{{i.msg}}</p>
                    <p class="time">{{i.created_at | formatDate}}</p>
                </div>
            </div>
        </section>
        <footer>
            <img :src="require('assets/image/eye.png')" v-if="!is_anonymous" @click="anonymousToggle">
            <img :src="require('assets/image/eyesAnonymous.png')" v-if="is_anonymous" @click="anonymousToggle">
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
            is_anonymous:false
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
            this.$http.post('/api',{name:'smart_campus.consult.msg.student.list',index:1,},{emulateJSON:true}).then((res)=>{
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
                this.$http.post('/api',{name:'smart_campus.consult.student.send.msg',msg:this.msg,},{emulateJSON:true}).then((res)=>{
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
        anonymousToggle(){
            this.is_anonymous = !this.is_anonymous;
            this.is_anonymous = this.is_anonymous ? 1 : 0;
            this.$http.post('/api',{name:'smart_campus.consult.anonymous',is_anonymous:this.is_anonymous,},{emulateJSON:true}).then((res)=>{
                if(res.body.code === 1000){
                    console.log('toggle')
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

