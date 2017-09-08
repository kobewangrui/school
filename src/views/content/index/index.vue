 <style src="assets/css/index.css" scoped lang="css"></style> 
<template>
	<div class="index">
		<header>
			<ul>
				<router-link :to="{path:'/',query:{id:item.id}}" tag="li" v-for="item in titleList" :key="item.id" v-on:click.native="getMsgList" exact>
					<p>{{item.name}}</p>
					<p>
						<span></span>
					</p> 
				</router-link>
			</ul>
			<div class="line"></div>
		</header>
		<section>
			<router-link v-for="item in articleList" class="noticeGroup" :key="item.id" :to="{path:'detail',query:{article_id:item.id}}" tag="div">
				<p class="title">{{item.title}}</p>
				<p class="date">
					<span class="top" v-if="item.is_global_top === '1' || item.is_top === '1'">置顶</span>
					<span class="time">{{item.updated_at | formatDate}}</span>
				</p>
				<p class="content" v-html="item.content"></p>
				<p class="img" :class="{'one':item.images.length===1,'two':item.images.length===2,'three':item.images.length===3}">
					 <img v-for="i in item.images" :key="i.id" :src="i">
				</p>
			</router-link>
		</section>
	</div>
</template>
 <script src="assets/js/index.js"></script>
