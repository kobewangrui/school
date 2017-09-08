<style src="assets/css/editComment.css" scoped lang="css"></style>
<template>
	<div class="edit">
		<p class="title">写评论</p>
		<textarea placeholder="评论对所有人可见" v-model="content" :class="{'error':!btnSubmit}"></textarea>
		<div class="btn">
			<button :class="{'btnTrue':btnSubmit}" @click="submit">提交</button>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				btnSubmit:false,
				content:'',
			}
		},
		created(){
			this.btnChange();
		},
		watch:{
			content(){
				this.btnChange();
			}
		},
		methods:{
			btnChange(){
				if(this.content !== '' && this.content !== undefined){
					this.btnSubmit = true;
				}else{
					this.btnSubmit = false;
				}
			},
			submit(){
				if(this.btnSubmit){
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

