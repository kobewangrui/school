 <style src="assets/css/index.css" scoped lang="css"></style> 
<template>
	<div class="index">
		<header>
			<ul>
				<router-link tag="li" to="/">
					<p>每日之星</p>
					<p> 
						<span></span>
					</p> 
				</router-link>
				<router-link tag="li" to="/">
					<p>优秀学生</p>
					<p>
						<span></span>
					</p>
				</router-link>
				<router-link tag="li" to="/">
					<p>辅导员之声</p>
					<p>
						<span></span>
					</p>
				</router-link>
				<router-link tag="li" to="/">
					<p>公告</p>
					<p>
						<span></span>
					</p>
				</router-link>
			</ul>
			<div class="line"></div>
		</header>
		<section>
			<router-link v-for="i in 3" class="noticeGroup" :key="i.id" to="/detail" tag="div">
				<p class="title">国庆放假通知</p>
				<p class="date">
					<span class="top">置顶</span>
					<span class="time">2017-09-28 09:30</span>
				</p>
				<p class="content">国庆放假通知国庆放假通知国庆放假通知国庆放假通知国庆放假通知国庆放假通知国庆放假通知国庆放假通知</p>
				<p class="img one" v-if="i===1">
					 <img :src="require('assets/image/timg.jpg')"> 
				</p>		
				<p class="img two" v-if="i===2">
					 <img :src="require('assets/image/timg.jpg')">
					 <img :src="require('assets/image/timg.jpg')"> 
				</p>		
				<p class="img three" v-if="i===3">
					 <img :src="require('assets/image/timg.jpg')"> 
					 <img :src="require('assets/image/timg.jpg')">
					 <img :src="require('assets/image/timg.jpg')"> 
				</p>
			</router-link>
		</section>
	</div>
</template>
 <script src="assets/js/index.js"></script> 
