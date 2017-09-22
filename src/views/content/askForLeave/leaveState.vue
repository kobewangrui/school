<style lang="css" src="assets/css/checkLeave.css" scoped></style>
<template>
    <div>
        <!-- 有备注 通过图片 -->
        <img class="sign successHaveIntro" :src="require('assets/image/successHaveIntro.png')" v-if="$route.query.status==='2' && $route.query.reply !=='' && $route.query.reply !==undefined">
        <img class="sign success" :src="require('assets/image/success.png')" v-if="$route.query.status==='2' && ($route.query.reply ==='' || $route.query.reply ===undefined)">
        <img class="sign successHaveIntro" :src="require('assets/image/failHaveIntro.png')" v-if="$route.query.status==='3' && $route.query.reply !=='' && $route.query.reply !==undefined">
        <img class="sign success" :src="require('assets/image/fail.png')" v-if="$route.query.status==='3' && ($route.query.reply ==='' || $route.query.reply ===undefined)">
        <img class="sign successHaveIntro" :src="require('assets/image/repealHaveIntro.png')" v-if="$route.query.status==='1' && $route.query.reply !=='' && $route.query.reply !==undefined">
        <img class="sign success" :src="require('assets/image/repeal.png')" v-if="$route.query.status==='1' && ($route.query.reply ==='' || $route.query.reply ===undefined)">
        <p class="illIntro" v-if="$route.query.reply !=='' && $route.query.reply !==undefined">
            <span>备注说明</span>
            <span>{{$route.query.reply}}</span>
        </p>
          <section class="leaveDetail">
            <p>
                <span>审批编号</span>
                <span>{{$route.query.id}}</span>
            </p>
            <p>
                <span>开始时间</span>
                <span>{{$route.query.start_time | formatDate}}</span>
            </p>
            <p>
                <span>结束时间</span>
                <span>{{$route.query.end_time | formatDate}}</span>
            </p>
            <p>
                <span>请假原因</span>
                <span>{{$route.query.reason}}</span>
            </p>
            <p>
                <span>申请人</span>
                <span>{{$route.query.real_name}}</span>
            </p>
            <div class="noticeGroup">
                <p class="img one" :class="{'one':$route.query.images.length===1,'two':$route.query.images.length===2,'three':$route.query.images.length===3}">
                    <img :src="img" v-for="img in $route.query.images" :key="img.id"> 
                </p>		
            </div>
        </section>  
    </div>
</template>
