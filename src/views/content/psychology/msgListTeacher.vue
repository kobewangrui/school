<style scoped lang="css">
    ul{
        background: #fff;
        height: 100%;
        margin-bottom: 1.6rem;
    }
    ul li{
        display: flex;
        justify-content: space-between;
        padding: .3rem;
        box-sizing: border-box;
        align-items: center;
        border-bottom: 1px solid #dcdcdc;
    }
    ul li img{
        width: .8rem;
        height: .8rem;
        border-radius: 50%;
        margin-right: .3rem;
    }
    ul li .msgDetail{
        font-size: .34rem;
        color: #151515;
    }
    ul li .msgDetail p:first-child{
        width: 5.8rem;;
        display: flex;
        justify-content: space-between;
    }
    ul li .msgDetail p:first-child .time{
        font-size: .24rem;
        color: #828282;
    }
    ul li .msgDetail p:last-child{
        font-size: .28rem;
        color: #828282;
        width: 5.8rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
<template>
    <ul>
        <router-link v-for="item in list" :key="item.id" tag="li" :to="{path:'/psychology/teacherChat',query:{consult_rec_id:item.id,is_anonymous:item.is_anonymous,mobile:item.mobile,head:item.head,name:item.real_name}}">
            <img :src="item.head" v-if="item.is_anonymous==='0'">
            <img :src="require('assets/image/noName.jpg')" v-if="item.is_anonymous==='1'">
            <div class="msgDetail">
                <p>
                    <span v-if="item.is_anonymous==='1'">匿名</span>
                    <span v-if="item.is_anonymous==='0'">{{item.real_name}}</span>
                    <span class="time">{{item.last_msg_time | formatDate}}</span>
                </p>
                <p>{{item.last_msg}}</p>
            </div>
        </router-link>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.getChatHistory()
    },
    methods:{
        getChatHistory(){
            this.$http.post('/api',{name:'smart_campus.consult.record.list',index:1,type:''},{emulateJSON:true}).then((res)=>{
                if(res.body.code === 1000){
                    this.list = res.body.data.list;
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

