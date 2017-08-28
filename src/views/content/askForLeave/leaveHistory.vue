<style lang="css" scoped>
    .history{
        font-size: .34rem;
        background: #fff;
        padding: .3rem .3rem .5rem;
        margin-bottom: 1rem;
    }
    .list{
        border-bottom: .01rem solid #dfdfdf;
        padding: .2rem 0;
    }
    .list .dateTime{
        margin-bottom: .2rem;
    }
    .list .dateTime>span:first-child{
        margin-right: .4rem;
    }
    .list .checkState{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .list .checkState>span:first-child{
        font-size: .28rem;
        color: #999;
    } 
    .list .checkState>span.fail{
        color: #fb6155;
    }
    .list .checkState>span.success{
        color: #2cb8ee;
    }
    .list .checkState>span.checking{
        color: #46c45d;
    }
</style>
<template>
    <div class="history">
        <router-link tag="div" to="/askForLeave/leaveState" v-for="i in 4" :key="i.id" class="list">
            <p class="dateTime">
                <span>开始时间</span>
                <span>2017-08-02 09:30</span>
            </p>
            <p class="dateTime">
                <span>开始时间</span>
                <span>2017-08-02 09:30</span>
            </p>
            <p class="checkState">
                <span>2017.08.01发起申请</span>
                <span v-if="i===1" :class="{'fail':true}">未通过</span>
                <span v-if="i%2===0" :class="{'success':true}">审批通过</span>
                <span v-if="i===3" :class="{'checking':true}">审批中</span>
            </p>
        </router-link>
    </div>
</template>
