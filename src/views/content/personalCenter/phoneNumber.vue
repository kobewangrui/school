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
            <input type="text" v-model="number" placeholder="请输入11位手机号">
            <span @click="clear()"> x </span>
        </div>
        <div class="btn">
            <button :class="{'active':$vuerify.check()}" @click="changePhone"> 确认</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            number:this.$store.state.user.mobile
        }
    },
    vuerify:{
        number:[
            'required',
            'phoneCheck'
        ]
    },
    methods:{
        clear(){
            this.number = '';
        },
        changePhone(){
            if(this.$vuerify.check()){
                this.$http.post('/api',{name:'smart_campus.user.reset.mobile',mobile:this.number},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                            this.$router.push('/personalCenter/changeMsg')
                    }else{
                        console.log(res.body.msg)
                    };
                }).catch((error)=>{
                    console.log(error);
                })
            }
        }
    }
}
</script>

