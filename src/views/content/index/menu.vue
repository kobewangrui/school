<style lang="css" src="assets/css/menu.css" scoped></style>
<template>
    <div class="menu">
        <section class="lineMore">
            <p class="title">
                <span></span>
                <span>日常事务</span>
            </p>        
            <ul class="list">
                <router-link tag="li" to="/askForLeave/askLeave">
                     <img :src="require('assets/image/askLeave.png')"> 
                    <p>请假申请</p>
                </router-link>
                <router-link tag="li" to="/leaveSchool/leave">
                    <img :src="require('assets/image/leaveSchool.png')"> 
                    <p>离校</p>
                </router-link>
                <li @click="popToggle('report')">
                    <img :src="require('assets/image/register.png')"> 
                    <p>报道</p>
                </li>
                <router-link tag="li" to="/askForLeave/leaveHistory">
                    <img :src="require('assets/image/examineAndApprove.png')"> 
                    <p>审批</p>
                </router-link>
                <li @click="popToggle('recruit')">
                    <img :src="require('assets/image/enroll.png')"> 
                    <p>录取查询</p>
                </li>
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
        <div class="pop" :class="{'popShow':popHandle}">
                <p>
                    <img :src="require('assets/image/loginBgimg.png')" alt="">
                </p>
                <p>
                    <input type="text" :placeholder="placeholderUname">
                </p>		
                <p>
                    <input type="text" :placeholder="placeholderPwd">
                </p>	
                <p>
                    <button @click="search">{{btnText}}</button>	
                </p>		
            </div>
            <div class="cover" @click="popToggle" v-if="popHandle"></div>
    </div>
</template>
<script>
	export default{
		data(){
			return{
                popHandle:false,
                placeholderUname:'',
                placeholderPwd:'',
                btnText:'',
                searchType:''
			}
		},
		methods:{
			popToggle(arg){
                this.popHandle = !this.popHandle;
                if(arg ==='recruit'){
                    this.placeholderUname = '学号';
                    this.placeholderPwd = '身份证后六位';
                    this.btnText = '查询';
                    this.searchType = 1;
                }else if(arg === 'report'){
                    this.placeholderUname = '学号/录取通知书号（大写字母）';
                    this.placeholderPwd = '密码/身份证后六位（大写字母）';
                    this.btnText = '登录';
                    this.searchType = 2;
                }
            },
            search(){
                if(this.searchType === 1){
                    this.$router.push('/recruit/recruitDetail')
                }else if(this.searchType === 2){
                    this.$router.push('/leaveSchool/report')
                }
            }
		}
	}
</script>

