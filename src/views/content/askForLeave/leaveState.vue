<style lang="css" src="assets/css/checkLeave.css" scoped></style>
<template>
    <div>
        <!-- 有备注 通过图片 -->
        <img class="sign successHaveIntro" :src="require('assets/image/successHaveIntro.png')" v-if="false">
        <img class="sign success" :src="require('assets/image/success.png')" v-if="false">
        <img class="sign successHaveIntro" :src="require('assets/image/fail.png')">
        <p class="illIntro" v-if="true">
            <span>备注说明</span>
            <span>11111111111111111123</span>
        </p>
        <section class="leaveDetail">
            <p>
                <span>审批编号</span>
                <span>11111111111111111123</span>
            </p>
            <p>
                <span>开始时间</span>
                <span>2017-02-02 07:00:00</span>
            </p>
            <p>
                <span>结束时间</span>
                <span>2017-02-02 07:00:00</span>
            </p>
            <p>
                <span>请假原因</span>
                <span>生病了吧</span>
            </p>
            <p>
                <span>申请人</span>
                <span>王睿龙</span>
            </p>
            <div class="noticeGroup">
                <p class="img one" v-if="false">
                        <img :src="require('assets/image/timg.jpg')"> 
                </p>		
                <p class="img two" v-if="false">
                        <img :src="require('assets/image/timg.jpg')">
                        <img :src="require('assets/image/timg.jpg')"> 
                </p>		
                <p class="img three">
                        <img :src="require('assets/image/timg.jpg')"> 
                        <img :src="require('assets/image/timg.jpg')">
                        <img :src="require('assets/image/timg.jpg')"> 
                </p>
            </div>
        </section>
    </div>
</template>
