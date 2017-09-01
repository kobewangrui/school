<style scoped lang="css">
    .money{
        font-size: .34rem;
        padding: .3rem;
        box-sizing: border-box;
        background: #fff;
        height: 100vh;
    }
    header p{
        color: #585858;
    }
    header ul{
        display: flex;
        justify-content: flex-start;
        flex-flow: row wrap;
        margin: .25rem 0 .9rem;
    }
    header ul li:nth-child(1),
    header ul li:nth-child(2),
    header ul li:nth-child(3){
        margin-bottom: .25rem;
    }
    header ul li:nth-child(2),
    header ul li:nth-child(3),
    header ul li:last-child{
        margin-left: .1rem;
    }
    header ul li label{
        display:inline-block;
        width: 2.2rem;
        height: 1.2rem;
        border-radius: .08rem;
        border: 0.01rem solid #c2c2c2;
        line-height: 1.2rem;
        text-align: center;
    }
    input[type="radio"]{
        display: none;
    }
    input[type="radio"] + label.router-link-active{
        border: 0.01rem solid #2cb8ee;
        color: #2cb8ee;
    }
    footer button{
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
    footer button.active{
        background: #2cb8ee;
    }
    footer .PayHistory{
        color: #2cb8ee;
        font-size: .3rem;
        text-align: center;
        margin-top: .2rem;
    }
</style>
<template>
    <div class="money">
        <header>
            <p>选择充值类型</p>
            <ul>
                <li>
                    <input type="radio" id="schoolCard" name="pay">
                    <router-link to="/recharge/schoolMoney" tag="label" for="schoolCard">校园卡</router-link>
                </li>
                <li>
                    <input type="radio" id="electric" name="pay">
                    <router-link to="/recharge/electricMoney" tag="label" for="electric">电费</router-link>
                </li>
                <li>
                    <input type="radio" id="net" name="pay">
                    <label for="net">网费</label>
                </li>
                <li>
                    <input type="radio" id="CET-4" name="pay">
                    <label for="CET-4">CET-4</label>
                </li>
                <li>
                    <input type="radio" id="CET-6" name="pay">
                    <label for="CET-6">CET-6</label>
                </li>
            </ul>
        </header>
        <router-view></router-view>
        <footer>
            <button>充值</button>
            <p class="PayHistory">充值记录</p>   
        </footer>
    </div>
</template>
