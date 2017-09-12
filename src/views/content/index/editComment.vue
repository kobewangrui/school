<style src="assets/css/editComment.css" scoped lang="css"></style>
<template>
	<div class="edit">
			<p class="title">写评论</p>
			<textarea placeholder="评论对所有人可见" v-model="content"></textarea>
			<div class="btn">
				<button :class="{'btnTrue':$vuerify.check()}" @click="submit">提交</button>
			</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				content:'',
			}
		},
		vuerify:{
			content: 'required',
		},
		methods:{
			submit(){
				if(this.$vuerify.check()){
					this.$http.post('/api',{name:'smart_campus.comment',article_id:this.$route.query.article_id,content:this.content},{emulateJSON:true}).then((res)=>{
						if(res.body.code === 1000){
							this.$router.push({path:'/detail',query:{article_id:this.$route.query.article_id}})
						}else{
							console.log(res.body.msg)
						};
					}).catch((error)=>{
						console.log(error);
					})
				}
			}
		}
	}
</script>

