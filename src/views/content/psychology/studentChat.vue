<style scoped lang="css">
    .chat{
        margin-bottom: 1.6rem;
    }
    header{
        width: 100%;
        background: #fff;
        padding: .3rem .3rem .4rem;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        font-size: .32rem;
    }
    header .chatIntro{
        color: #585858;
    }
    header .connect{
        margin-top: .4rem;
    }
    header .connect img{
        width: .7rem;
        height: .7rem;
        margin-right: .3rem;
    }    
    header .studentMsg{
        display: flex;
        justify-content: space-between;
    }
    header .studentConnect{
        text-align: right;
        margin-top: .2rem;
        
    }
    header .studentConnect img{
        width: .4rem;
        height: .4rem;
        margin-right: .1rem;
    }
    header .studentConnect img,
    header .studentConnect span{
        vertical-align: middle;
    }        
    /* 老师聊天气泡 */
    section{
        margin-top: 3.3rem;
    }
    .teacher{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: .3rem;
        box-sizing: border-box;
        padding: 0 .3rem;
    }
    .student img,
    .teacher img{
        width: .64rem;
        height: .64rem;
        border-radius: 50%;
    }
    .time{
        font-size: .24rem;
        color: #909090;
    }
    .detail p.msg{
        width: 5.26rem;
        font-size: .32rem;
        padding: .2rem;
    }
    .teacher .detail p.msg{
        background: #75b5ff;
        border-radius: .32rem .32rem .32rem .08rem;
        margin-left: .15rem;
        color: #fff;
    }
    .teacher .detail .time{
        margin: .15rem 0 0 .2rem;
    }
    /* 学生聊天气泡 */
    .student{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-flow: row-reverse nowrap;
        margin-bottom: .3rem;
        box-sizing: border-box;
        padding: 0 .3rem;
    }
    .student .detail p.msg{
        background: #fff;
        border-radius: .32rem .32rem .08rem .32rem;
        margin-left: .15rem;
        color: #414852;
        margin-right: .15rem;
    }
    .student .detail .time{
        margin: .15rem .2rem 0 0;
        text-align: right;
    }
    footer{
        position: fixed;
        bottom: 0;
        background: #fff;
        font-size: .3rem;
        text-align:center;
        padding: .2rem .3rem;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    footer img{
        width: .36rem;
        height: .36rem;
        border-radius: 50%;
        
    }
    footer img:nth-child(2){
        margin-right: .1rem;
    }
    footer input{
        font-size: .3rem;
        width: 4.8rem;
        height: .6rem;
        border: 1px solid #d3d3d3;
        padding: 0 .2rem;
        box-sizing: border-box;
        border-radius: .08rem;
    }
    footer button{
        width: .78rem;
        height: .6rem;
        font-size: .3rem;
        border-radius: .08rem;
    }
</style>
<template>
    <div class="chat">
        <!-- 学生界面 -->
        <header v-if="false">
            <p class="chatIntro">为了方便即时沟通，可以选择以下方式，备注校名即可</p>
            <div class="connect">
                <img :src="require('assets/image/QQ.png')">
                <img :src="require('assets/image/wechat.png')">
                <img :src="require('assets/image/telephone.png')">
            </div>
        </header>
        <!-- 老师界面 -->
        <header v-if="true">
            <p class="studentMsg">
                <span>专业班级</span>
                <span>上官飘飘</span>
            </p>
            <p class="studentConnect">
                <img :src="require('assets/image/telephone.png')">
                <span>123-1234-0500</span>
            </p>
        </header>
        <section>
            <div :class="{'teacher':i%4===0,'student':i%3===0}" v-for="i in msg" :key="i.id">
                <img :src="require('assets/image/timg.jpg')">
                <div class="detail">
                    <p class="msg">老师，我男朋友和我分手了，我现在非常痛苦</p>
                    <p class="time">09:50 昨天</p>
                </div>
            </div>
        </section>
        <footer>
            <img :src="require('assets/image/timg.jpg')">
            <img :src="require('assets/image/timg.jpg')">
            <input type="text" placeholder="请输入消息...">
            <button>发送</button>
        </footer>
    </div>
</template>
<script>
export default{
    data(){
        return{
            msg:[3,4,6,8,9,16]
        }
    }
}
</script>

