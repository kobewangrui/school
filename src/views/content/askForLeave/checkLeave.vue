<style lang="css" src="assets/css/checkLeave.css" scoped></style>
<template>
<!-- 学生和老师的请假详情写在一起了 -->
    <div>
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
        <router-link to="/askForLeave/leaveHistory" tag="div" class="historyChat">
            <span>查看Ta的历史记录</span>
            <span> > </span>
        </router-link>
        <textarea class="comment" placeholder="添加备注"></textarea>
        <div class="operate">
            <button class="reject">拒绝</button>
            <button class="agree">同意</button>
            <button class="recall">撤回</button>
        </div>
    </div>
</template>

