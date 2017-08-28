<style lang="css" src="assets/css/menu.css" scoped></style>
<template>
    <div class="menu">
        <section class="firstList">
            <p class="title">
                <span></span>
                <span>日常事务</span>
            </p>        
            <ul class="list">
                <router-link tag="li" to="/askForLeave/askLeave">
                     <img :src="require('assets/image/askLeave.png')"> 
                    <p>请假申请</p>
                </router-link>
                <li>
                    <img :src="require('assets/image/leaveSchool.png')"> 
                    <p>离校</p>
                </li>
                <li>
                    <img :src="require('assets/image/register.png')"> 
                    <p>报道</p>
                </li>
                <router-link tag="li" to="/askForLeave/leaveHistory">
                    <img :src="require('assets/image/examineAndApprove.png')"> 
                    <p>审批</p>
                </router-link>
            </ul>
        </section>
        <section class="lineMore">
            <p class="title">
                <span></span>
                <span>校园服务</span>
            </p>        
            <ul class="list">
                <router-link to="/psychology/consult" tag="li">
                     <img :src="require('assets/image/psychologicalCounseling.png')"> 
                    <p>心理咨询</p>
                </router-link>
                <li>
                    <img :src="require('assets/image/repair.png')"> 
                    <p>后勤报修</p>
                </li>
                <li>
                    <img :src="require('assets/image/conferenceRoom.png')"> 
                    <p>会议室申请</p>
                </li>
                <li>
                    <img :src="require('assets/image/scoreInquiry.png')"> 
                    <p>成绩查询</p>
                </li>
                <li>
                    <img :src="require('assets/image/goodsReceiving.png')"> 
                    <p>物品领取</p>
                </li>
                <li>
                     <img :src="require('assets/image/calendar.png')"> 
                    <p>校历查看</p>
                </li>
                <li>
                    <img :src="require('assets/image/ItemsFor.png')"> 
                    <p>物品申请</p>
                </li>
                <li>
                    <img :src="require('assets/image/link.png')"> 
                    <p>其他链接入口</p>
                </li>
                <li>
                    <img :src="require('assets/image/campusMap.png')"> 
                    <p>校园地图</p>
                </li>
                <li>
                    <img :src="require('assets/image/edit.png')"> 
                    <p>编辑</p>
                </li>
            </ul>
        </section>
    </div>
</template>
