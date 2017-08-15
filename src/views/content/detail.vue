<style lang="css" src="assets/css/detail.css" scoped></style>
<template>
    <div class="detail">
        <section class="content">
            <p class="title">国庆放假通通知</p>
            <p class="date">2017-09-28 09:30</p>
            <p class="discrib">国庆放假同孩子国庆放假同孩子国庆放假同孩子国庆放假同孩子国庆放假同孩子国庆放假同孩子国庆放假同孩子</p>
            <div class="img three">
                <img :src="require('assets/image/timg.jpg')">
                <img :src="require('assets/image/timg.jpg')">
                 <img :src="require('assets/image/timg.jpg')"> 
            </div>
            <p class="discrib">国庆放假同孩子国庆放假同孩子国庆放假同孩子国庆放假同孩子国庆放假同孩子国庆放假同孩子国庆放假同孩子</p>
        </section>
        <section class="comment">
            <div class="commentHeader">
                <p>评论（1456）</p>
                <router-link tag="p" to="/editComment">写评论</router-link>
            </div>
            <div class="commentDetail" v-for="i in 10" :key="i.id" v-if="i<4">
                <div class="outer">
                    <div class="leftComment">
                        <div class="headerImg">
                            <img :src="require('assets/image/timg.jpg')"> 
                        </div>
                        <div class="personMsg">
                            <p>欧阳帅帅</p>
                            <p>2017-08-28 09:30</p>
                        </div>
                    </div>
                    <div class="recognize">
                        <img :src="require('assets/image/recognized.png')">
                        <img v-if="false" :src="require('assets/image/recognize.png')">
                        <span>1234</span>
                    </div>
                </div>
                <p class="detail">以北京院方，以北京古巷，毛不易</p>
            </div>            
        </section>
        <p class="showAll" v-if="!showAll" @click="showAll = !showAll">查看全部</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                showAll:false
            }
        }
    }
</script>
