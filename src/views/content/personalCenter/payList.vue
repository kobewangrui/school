<style scoped lang="css">
    .payList{
        margin-bottom: 1.6rem;
    }
    section ul{
        background: #fff;
        box-sizing: border-box;
        padding: 0 .3rem;
    }
    section ul li{
        display: flex;
        justify-content: space-between;
        font-size: .34rem;
        padding: .3rem 0;
        border-bottom: 1px solid #dfdfdf;
    }
    section p{
        font-size: .34rem;
        color: #585858;
    }
    section .month{
        padding: .3rem;
        box-sizing: border-box;
    }
    section ul li .time{
        font-size: .28rem;
        color: #999;
    }
    section ul li .time span:first-child{
        margin-right: .3rem;
    }    
</style>
<template>
    <div class="payList">
        <section>
            <p class="month">8月</p>
            <ul>
                <li v-for="i in 8" :key="i.id">
                    <div>
                        <p>校园卡-2014556111</p>
                        <p class="time">
                            <span>08-08</span>
                            <span>12:25</span>
                        </p>
                    </div>
                    <div>-609</div>
                </li>
            </ul>
        </section>
    </div>
</template>
