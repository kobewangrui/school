<style src="assets/css/editComment.css" scoped lang="css"></style>
<template>
	<div class="edit">
		<p class="title">写评论</p>
		<textarea placeholder="评论对所有人可见" v-model="content" :class=""></textarea>
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
					alert()
				}
			}
		}
	}
</script>

