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
		font-size: .34rem;
		word-break:break-all;
	}
	ul li{
		list-style: none;
	}
	a{
		text-decoration: none;
		color: #333;
	}
	button,
	input,
	textarea{
		outline:none;
		border:none;
	}
</style>
<style lang="css" scoped>
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
		border: .01rem solid #d2d2d2;
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
	.pop .error{
		border: .01rem solid #f00;
	}
</style>
<template>
	<div>
		<router-view></router-view>
		<div class="pop" :class="{'popHide':pop}">
			<p>
				<img :src="require('assets/image/loginBgimg.png')">
			</p>
			<p>
				<input type="text" placeholder="学号/工号" v-model="number" :class="{'error':numberClass}">
			</p>		
			<p>
				<input type="text" placeholder="姓名" v-model="name" :class="{'error':nameClass}">
			</p>	
			<p>
				<input type="text" placeholder="手机号码" v-model="phone" :class="{'error':phoneClass}">
			</p>	
			<p>
				<button @click="submitCheck">提交验证</button>
			</p>		
		</div>
		<div class="cover" @click="popToggle" v-if="!pop"></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				pop:this.$store.state.user.is_authenticated===1 ? false : true,
				number:'',
				name:'',
				phone:'',
				numberClass:false,
				nameClass:false,
				phoneClass:false
			}
		},
		vuerify:{
			number:['required','onlyNumber'],
			name:'required',
			phone:['required','phoneCheck']
		},
		methods:{
			popToggle(){
				this.pop = true;  
			},
			submitCheck(){   
				this.nameClass = !this.$vuerify.check(['name'])
				this.numberClass = !this.$vuerify.check(['number'])
				this.phoneClass = !this.$vuerify.check(['phone'])
				if(this.$vuerify.check()){
					// this.$http.post('/api',{name:'smart_campus'},{emulateJSON:true}).then((res)=>{
					// 	if(res.body.code === 1000){
					// 	}else{
					// 		console.log(res.body.msg)
					// 	};
					// }).catch((error)=>{
					// 	console.log(error);
					// })
				}
			}
		},
		watch:{
			name(){
				this.nameClass = !this.$vuerify.check(['name'])
			},
			phone(){
				this.phoneClass = !this.$vuerify.check(['phone'])
			},
			number(){
				this.numberClass = !this.$vuerify.check(['number'])
			}
		}

	}  
</script>