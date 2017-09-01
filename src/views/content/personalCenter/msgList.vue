<style lang="css" scoped>
    ul{
        padding: .3rem;
        box-sizing: border-box;
        margin-bottom: 1rem;
    }
    ul li{
        border: .01rem solid #34bdff;
        border-top: .3rem solid #34bdff;
        font-size: .34rem;
        border-radius: .12rem;
        padding: .2rem;
        box-sizing: border-box;
        background: #fff;
        margin: .35rem 0;
    }
    ul li p:last-child{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
</style>
<template>
    <ul>
        <li v-for="i in 20" :key="i.id">
            <p>【后台系统消息】</p>
            <p>行以内三行以内三行以内三行以内三行以内三行以内三行以内行以内三行以内三行以内三行以内三行以内三行以内三行以内行以内三行以内三行以内三行以内三行以内三行以内三行以内行以内三行以内三行以内三行以内三行以内三行以内三行以内行以内三行以内三行以内三行以内三行以内三行以内三行以内</p>
        </li>
    </ul>
</template>
