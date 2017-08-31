<style scoped lang="css">
    .change{
        padding: 0 .3rem;
        box-sizing: border-box;
    }
    .list{
        display: flex;
        justify-content: space-between;
        font-size: .34rem;
        align-items: center;
        border-bottom: 1px solid #dcdcdc;
        padding: .3rem 0;
        box-sizing: border-box;
    }
    .list .more img{
        width: 1.2rem;
        height: 1.2rem;
        border-radius: .08rem;
        margin-right: .1rem;
    }
    .list span.right{
        display: inline-block;
        color: #757575;
        transform: scale(.8,1.8);
    }
    .list .more img,
    .list .more .right{
        vertical-align: middle;
    }
</style>
<template>
    <div class="change">
        <router-link to="/personalCenter/phoneNumber" tag="div" class="list">
            <span>头像</span>
            <div class="more">
                <img :src="require('assets/image/timg.jpg')">
                <span class="right"> > </span>
            </div>
        </router-link>
        <router-link to="/personalCenter/phoneNumber" tag="div" class="list">
            <span>手机号</span>
            <span class="right"> > </span>
        </router-link>
    </div>
</template>
