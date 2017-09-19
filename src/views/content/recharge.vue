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
        width: 2.19rem;
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
    }
    .history .PayHistory{
        color: #2cb8ee;
        font-size: .3rem;
        text-align: center;
        margin-top: .2rem;
    }	
    footer{
		width: 100%;
		position: fixed;
		bottom: 0;
		border-top: .01rem solid #dfdfdf;
		background: #fff;
		box-sizing: border-box;
		font-size: .18rem;
	}
	footer ul li{
		width: 25%;
		float: left;
		text-align: center;
		padding: .2rem 0;
	}
	footer ul li img{
		width: .5rem;
		margin: 0 auto;
	}
	footer ul li.router-link-active{
		color: #0ba1e9;
	}
	footer ul li .home,
	footer ul li .pay,
	footer ul li .service,
	footer ul li .mine{
		display: block;
	}
	footer ul li .homeActive,
	footer ul li .payActive,
	footer ul li .serviceActive,
	footer ul li .mineActive{
		display: none;
	}
	footer ul li.router-link-active .home,
	footer ul li.router-link-active .pay,
	footer ul li.router-link-active .service,
	footer ul li.router-link-active .mine{
		display: none;
	}
	footer ul li.router-link-active .homeActive,
	footer ul li.router-link-active .payActive,
	footer ul li.router-link-active .serviceActive,
	footer ul li.router-link-active .mineActive{
		display: block;
	}
	footer ul:after{
		content: '';
		height: 0;
		clear: both;
    }
</style>
<template>
<div>
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
        <div class="history">
            <button>充值</button>
            <p class="PayHistory">充值记录</p>   
        </div>
    </div>
    <footer>
        <ul>
            <router-link to="/" tag="li" exact>
                <img :src="require('assets/image/home.png')" class="home"> 
                <img :src="require('assets/image/homeActive.png')" class="homeActive">
                <p>首页</p>
            </router-link>
            <router-link to="/recharge/electricMoney" tag="li">
                <img :src="require('assets/image/pay.png')" class="pay">
                <img :src="require('assets/image/payActive.png')" class="payActive"> 
                <p>支付</p>
            </router-link>
            <router-link to="/menu" tag="li">
                <img :src="require('assets/image/service.png')" class="service"> 
                <img :src="require('assets/image/serviceActive.png')" class="serviceActive">  
                <p>服务</p>
            </router-link>
            <router-link to="/center" tag="li">
                <img :src="require('assets/image/mine.png')" class="mine"> 
                <img :src="require('assets/image/mineActive.png')" class="mineActive">
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</div>
</template>
