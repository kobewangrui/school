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
        <router-link tag="li" to="/psychology/studentChat">
            <img :src="require('assets/image/timg.jpg')">
            <div class="msgDetail">
                <p>
                    <span>匿名</span>
                    <span class="time">2017/06/23</span>
                </p>
                <p>老师，我和我我和我我和我我和我我老师我和,我我和我我和我我和我我</p>
            </div>
        </router-link>
    </ul>
</template>
