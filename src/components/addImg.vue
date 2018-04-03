<style lang="css" scoped>
	input[type='file']{
		display:none;
	}
</style>
<template>
	<div class="order-line margin img-container">
		<!-- <span class="img-wrapper" v-for="(img,i) in imgs" :key="img.id"@click="$emit('clickImg', img)">
            <span class="delete" @click.stop="deleteImg(i)">×</span> -->
		    <!-- <img :src="img"> -->
		</span>
		<span class="img-wrapper add" @click="clickAddImg">上传图片</span>
		<input type="file" multiple accept="image/*"  class="c-file-input" @change="addImg">
	</div>
</template>
<script>
	import {myAlert, compressImg} from 'assets/js/utils.js'
	export default{
		name: 'addImg',
		data(){
			return{
				imgs:[],
				files:[],
				compressedFiles: [],
				imgLimit: 5
			}
		},
		methods:{
			isImg(file){
				var name = file.name;
				if(name.match(/.(jpg|jpeg|png|gif)$/i)) return true;
			},
			clickAddImg(){
				document.querySelector('.c-file-input').click();
			},
			addImg(){
				let filelists = document.querySelector('.c-file-input').files;
				Array.from(filelists).reduce((promise, file) => {
					return promise.then(() => {
						return new Promise(resolve => {
							if(!this.isImg(file)) {
								console.log('hey?')
								resolve();
								return;
							}
							const src = window.URL.createObjectURL(file);
							const img = new Image();
							this.imgs.push(src);
							this.files.push(file);
							img.src = src;
							img.onload = () => {
								const compressedFile = compressImg(img, file.type);
								this.compressedFiles.push(compressedFile);
								resolve();
							}
						})
					})
				}, Promise.resolve()).then(() => {
					// console.log(this.files)
					// console.log(this.compressedFiles)
					this.$emit('imgChange', this.compressedFiles);
				});
			},
			deleteImg(i){
				this.imgs.splice(i,1);
				this.compressedFiles.splice(i,1);
				this.$emit('imgChange', this.compressedFiles);
			}
		},
		props: ['max']
	}
</script>