<style scoped lang="css">
    .electric{
        padding: 0 .9rem;
        box-sizing: border-box;
        margin-bottom: 1.35rem;
    }
    .electric p{
        font-size: .34rem;
        color: #757575;
        border-bottom: .01rem solid #dfdfdf;
        padding: .15rem 0;
        box-sizing: border-box;
    }
    .electric p label{
        font-size: .34rem;
    }    
    .electric p input{
        width: 3.95rem;
        font-size: .38rem;
    }
    .history button{
        font-size: .34rem;
        color: #bbb;
        width: 100%;
        height: .88rem;
        border-radius: .08rem;
        background: #E9EbEC;
        height: .88rem;
        line-height: .88rem;
        border-radius: .08rem;
    }
    .history button.active{
        background: #2cb8ee;
        color: #fff;
    }
    .history .PayHistory{
        color: #2cb8ee;
        font-size: .3rem;
        text-align: center;
        margin-top: .2rem;
    }
</style>
<template>
    <div>
       <div class="electric">
            <p>
                <label for="userName">账号：</label>
                <input type="text" id="userName" v-model="userName">
            </p>
            <p>
                <label for="balance">余额：</label>
                <input type="text" id="balance" v-model="balance">
            </p>
            <p>
                <label for="pay">充值：</label>
                <input type="text" id="pay" v-model="pay">
            </p>
        </div>
        <div class="history">
                <button :class="{'active':$vuerify.check()}">充值</button>
                <router-link tag="p" to="/personalCenter/payList" class="PayHistory">充值记录</router-link>   
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            userName:'',
            balance:'',
            pay:''
        }
    },
    vuerify:{
        userName:['required'],
        balance:['required'],
        pay:['required','moreThanZero']
    },
}
</script>

