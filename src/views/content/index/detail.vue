<style lang="css" src="assets/css/detail.css" scoped></style>
<template>
    <div class="detail">
        <section class="content">
            <p class="title">{{detail.title}}</p>
            <p class="date">{{detail.updated_at | formatDate}}</p>
            <p class="discrib" v-html="detail.content"></p>
            <div class="img" :class="{'one':imageList.length===1,'two':imageList.length===2,'three':imageList.length===3}">
                <img v-for="i in imageList" :key="i.id" :src="i">
            </div>
        </section>
        <section class="comment">
            <div class="commentHeader">
                <p>评论（{{commonList.length}}）</p>
                <router-link tag="p" :to="{path:'/editComment',query:{article_id:$route.query.article_id}}">写评论</router-link>
            </div>
            <div class="commentDetail" v-for="i in commonList" :key="i.id">
                <div class="outer">
                    <div class="leftComment">
                        <div class="headerImg">
                            <img :src="i.head"> 
                        </div>
                        <div class="personMsg">
                            <p>{{i.nickName}}</p>
                            <p>{{i.created_at | formatDate}}</p>
                        </div>
                    </div>
                    <div class="recognize">
                        <img v-if="is_praise":src="require('assets/image/recognized.png')" @click="praiseCancel(i.id)">
                        <img v-if="!i.is_praise" :src="require('assets/image/recognize.png')" @click="praise(i.id)">
                        <span>{{i.praise_count}}</span>
                    </div>
                </div>
                <p class="detail">{{i.content}}</p>
            </div>
        </section>
        <p class="showAll" v-if="commonList.length>0" @click="showMore">查看全部</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                detail:{},
                imageList:[],
                commonList:[],
            }
        },
        created(){
            // 获取文档详情
            this.getArticleDetail()
            // 获取评论列表
            this.getCommonList()
        },
        methods:{
            showMore(){
                
            },
            getArticleDetail(){
                this.$http.post('/api',{name:'smart_campus.article.info',article_id:this.$route.query.article_id},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.detail = res.body.data.info
                        this.imageList = res.body.data.info.images.split(',')
                    }else{
                        console.log(res.body.msg)
                    };
                }).catch((error)=>{
                    console.log(error);
                })
            },
            getCommonList(){
                this.$http.post('/api',{name:'smart_campus.comment.list',article_id:this.$route.query.article_id,index:1},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.commonList = res.body.data.list
                    }else{
                        console.log(res.body.msg)
                    };
                }).catch((error)=>{
                    console.log(error);
                })
            },
            praise(id){
                this.$http.post('/api',{name:'smart_campus.praise',comment_id:id},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        alert("点赞成功")
                    }else{
                        console.log(res.body.msg)
                    };
                }).catch((error)=>{
                    console.log(error);
                })
            },
            praiseCancel(id){
                this.$http.post('/api',{name:'smart_campus.praise.cancel',comment_id:id},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        alert("取消点赞")
                    }else{
                        console.log(res.body.msg)
                    };
                }).catch((error)=>{
                    console.log(error);
                })
            }
        }
    }
</script>
