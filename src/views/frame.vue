<style lang="css">
	*{
		padding:0;
		margin:0;
		font-family:"Microsoft Yahei","微软雅黑",'华文细黑',Tahoma,Arial,Helvetica,STHeiti;
	}
	body{
		color: #333;
		box-sizing: border-box;
		background: #f6f6f6; 
		width: 100%;
		height: 100%;  
	}
	ul li{
		list-style: none;
	}
	button,
	input,
	textarea{
		outline:none;
		border:none;
	}
</style>
<style lang="css" scoped>
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

	/* 弹框 */
	.pop{
		font-size: .32rem;
		width: 5.9rem;
		background: #fff;
		border-radius: .08rem;
		position: absolute;
		z-index: 2;
		margin: 0 auto;
		top: 50%;
		left: 50%;
		margin-left: -2.95rem;
		margin-top: -2.85rem;
		text-align: center;
		padding: .15rem 0 .35rem;
		box-sizing: border-box;
		transition: all .2s;
	}
	.pop p{
		margin-bottom:.15rem;
	}
	.pop p:last-child{
		margin-top: .35rem;
	}
	.pop img{
		width: 2.34rem;
		height: 1.29rem;
	}
	.pop input{
		font-size: .32rem;
		width: 4.38rem;
		height: .76rem;
		border: 1px solid #d2d2d2;
		padding: 0 .2rem;
		box-sizing: border-box;
		border-radius: .06rem;
	}
	.pop button{
		width: 1.6rem;
		height: .64rem;
		font-size: .32rem;
		border-radius: .06rem;
		color: #fff;
		background: #2cb8ee;
	}
	.popHide{
		transform: scale(0,0);
	}
	.cover{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.4);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
	}
</style>
<template>
	<div>
		<router-view></router-view>
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
				<router-link to="/personalCenter/center" tag="li">
					<img :src="require('assets/image/mine.png')" class="mine"> 
					<img :src="require('assets/image/mineActive.png')" class="mineActive">
					<p>我的</p>
				</router-link>
			</ul>
		</footer>
		<div class="pop" :class="{'popHide':pop}">
			<p>
				<img :src="require('assets/image/loginBgimg.png')" alt="">
			</p>		
			<p>
				<input type="text" placeholder="学号/工号">
			</p>		
			<p>
				<input type="text" placeholder="姓名">
			</p>	
			<p>
				<input type="text" placeholder="手机号码">
			</p>	
			<p>
				<button>提交验证</button>	
			</p>		
		</div>
		<div class="cover" @click="popToggle" v-if="!pop"></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				pop:false
			}
		},
		methods:{
			popToggle(){
				this.pop = true;
			}
		}
	}
</script>