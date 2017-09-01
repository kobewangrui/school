
<style scoped lang="css">
    .recruit{
        height: 100vh;
        background: #fff;
        padding-bottom: 1.6rem;
    }
    ul{
        padding:0 .3rem;
        box-sizing: border-box;
    }
    ul li{
        font-size: .34rem;
        display: flex;
        justify-content: space-between;
        border-bottom: .01rem solid #dcdcdc;
        padding: .3rem 0;
    }
    .recruited{
        font-size: .38rem;
        color: #bbb;
        text-align: center;
        margin-top: .6rem;
    }
    .recruited img{
        width: 1.2rem;
        height: 1.75rem;
    }
    .recruited p{
        color: #2cb8ee;
        font-size: .38rem;
        margin-top: .1rem;
    }    
</style>
<template>
    <div class="recruit">
        <ul>
            <li>
                <span>总分</span>
                <span>100</span>
            </li>
            <li v-for="i in 5" :key="i.id">
                <span>科目{{i}}</span>
                <span>{{i*5}}</span>
            </li>
        </ul>
        <!-- 未被录取的状态 -->
        <p class="recruited" v-if="false">很抱歉您未被录取</p>
        <!-- 已被录取的状态 -->
        <div class="recruited">
            <img :src="require('assets/image/recruited.png')">
            <p>恭喜您已被“XXXX专业录取”</p>
        </div>
    </div>
</template>

