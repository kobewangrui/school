<style lang="css">
	*{
		padding:0;
		margin:0;
		font-family:"Microsoft Yahei","微软雅黑",'华文细黑',Tahoma,Arial,Helvetica,STHeiti;
	}
	body{
		color: #333;
		box-sizing: border-box;
		overflow: hidden;
		background: #f6f6f6;   
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
		/* content: '';
		height: 0;
		clear: both; */
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
				<router-link to="/checkLeave" tag="li">
					<img :src="require('assets/image/pay.png')" class="pay">
					<img :src="require('assets/image/payActive.png')" class="payActive"> 
					<p>支付</p>
				</router-link>
				<router-link to="/menu" tag="li">
					<img :src="require('assets/image/service.png')" class="service"> 
					<img :src="require('assets/image/serviceActive.png')" class="serviceActive">  
					<p>服务</p>
				</router-link>
				<router-link to="/askLeave" tag="li">
					<img :src="require('assets/image/mine.png')" class="mine"> 
					<img :src="require('assets/image/mineActive.png')" class="mineActive">
					<p>我的</p>
				</router-link>
			</ul>
		</footer>
	</div>
</template>