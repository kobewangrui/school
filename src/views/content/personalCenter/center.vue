<style lang="css" scoped>
    header{
        font-size: .36rem;
        display: flex;
        justify-content: space-between;
        background: #fff;
        padding: .35rem .3rem .25rem;
        align-items: center;
        margin-bottom: .2rem;
    }
    .headerImg img{
        margin-right: .5rem;
    }
    .headerImg img,
    .headerImg span{
        vertical-align: middle;
    }
    header img{
        width: 1.2rem;
        height: 1.2rem;
        border-radius: .08rem;
    }
    header .change{
        font-size: .32rem;
    }
    section{
        background:#fff;
        padding: 0 .3rem;
    }
    section .list{
        font-size: .34rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #dcdcdc;
        padding: .35rem 0;
    }
    section .list .title img{
        margin-right: .22rem;
        width: .48rem;
        height: .39rem;
    }    
    section .list .title span,
    section .list .title img{
        vertical-align: middle;
    }    
    section .list .more{
        color: #757575;
        transform: scale(.8,1.8);
    }
</style>

<template>
    <div>
        <header>
            <div class="headerImg">
                <img :src="require('assets/image/timg.jpg')" alt="">
                <span>欧阳帅帅</span>
            </div>
            <router-link to="/personalCenter/changeMsg" tag="div" class="change">修改</router-link>
        </header>
        <section>
            <router-link to="/personalCenter/msgList" tag="div" class="list">
                <div class="title">
                    <img :src="require('assets/image/mineActive.png')">
                    <span>我的消息</span>
                </div>
                <div class="more"> > </div>
            </router-link>
            <router-link to="/personalCenter/payList" tag="div" class="list">
                <div class="title">
                    <img :src="require('assets/image/mineActive.png')">
                    <span>支付记录</span>
                </div>
                <div class="more"> > </div>
            </router-link>
        </section>
    </div>
</template>