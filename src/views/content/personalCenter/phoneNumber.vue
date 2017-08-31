<style scoped lang="css" >
    .phoneNumber{
        background: #fff;
        font-size: .34rem;
        padding: .3rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .phoneNumber input{
        font-size: .34rem;
        flex-grow: 2;
        box-sizing: border-box;
        padding-left: .75rem;
    }
    .phoneNumber span:first-child{
        color: #757575;
    }
    .phoneNumber span:last-child{
        display: inline-block;
        width: .4rem;
        height: .4rem;
        line-height: .4rem;
        text-align: center;
        color: #fff;
        background: #dcdcdc;
        border-radius: 50%;
    }
    .btn{
        padding: .3rem;
        box-sizing: border-box;
        font-size: .34rem;
        margin-top: 1.9rem;
    }
    .btn button{
        width: 100%;
        font-size: .34rem;
        height: .88rem;
        border-radius: .08rem;
        color: #bbb;
        background: #e9ebec;
    }
    .btn button.active{
        background: #2cb8ee;
        color: #fff;
    }
</style>

<template>
    <div>
        <div class="phoneNumber">
            <span>手机号</span>
            <input type="text" v-model="number">
            <span @click="clear()"> x </span>
        </div>
        <div class="btn">
            <button :class="{'active':confirmActive}"> 确认</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            number:'',
            confirmActive:false
        }
    },
    methods:{
        clear(){
            this.number = '';
            this.confirmActive = false;
        }
    },
    watch:{
        number(){
            if(this.number !== '' || this.number !== undefiend){
                this.confirmActive = true;
            }
        }
    }
}
</script>

