<style lang="css" src="assets/css/menu.css" scoped></style>
<template>
    <div class="menu">
        <section class="lineMore">
            <p class="title">
                <span></span>
                <span>日常事务</span>
            </p>  
            <ul class="list">
                <router-link tag="li" to="/askForLeave/askLeave" v-if="$store.state.user.type==='1'">
                     <img :src="require('assets/image/askLeave.png')">
                    <p>请假申请</p>
                </router-link>
                <router-link tag="li" to="/leaveSchool/leave" v-if="$store.state.user.type==='1'">
                    <img :src="require('assets/image/leaveSchool.png')" v-if="$store.state.user.type==='1'"> 
                    <p>离校</p>
                </router-link>
                <li @click="popToggle('report')" v-if="$store.state.user.type==='1'">
                    <img :src="require('assets/image/register.png')"> 
                    <p>报道</p>
                </li>
                <router-link tag="li" to="/askForLeave/leaveHistoryTeacher">
                    <img :src="require('assets/image/examineAndApprove.png')"> 
                    <p>审批</p>
                </router-link>
                <li @click="popToggle('recruit')">
                    <img :src="require('assets/image/enroll.png')">
                    <p>录取查询</p>
                </li>
                <router-link :to="chatLink" tag="li" v-if="true">
                    <img :src="require('assets/image/psychologicalCounseling.png')"> 
                    <p>心理咨询</p>
                </router-link>
            </ul>
        </section>
        <!-- <section class="lineMore">
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
        </section> -->
        <div class="pop" :class="{'popShow':popHandle}">
                <p>
                    <img :src="require('assets/image/loginBgimg.png')" alt="">
                </p>
                <p>
                    <input type="text" :placeholder="placeholderUname" v-model="userName">
                </p>		
                <p>
                    <input type="password" :placeholder="placeholderPwd" v-model="passWord">
                </p>	
                <p>
                    <button @click="search" :class="{'active':!$vuerify.check()}">{{btnText}}</button>	
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
                searchType:'',
                chatLink: '',
                isFirst:'',
                userName:'',
                passWord:''
			}
        },
        created(){
            // 验证是不是第一次咨询
            this.checkFirstChat()
        },
        vuerify:{
            userName:['required'],
            passWord:['required']
        },
		methods:{
			popToggle(arg){
                this.popHandle = !this.popHandle;
                this.userName = '';
                this.passWord = '';
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
                if(this.$vuerify.check()){
                    if(this.searchType === 1){
                            this.$router.push('/recruit/recruitDetail')
                    }else if(this.searchType === 2){
                        this.$router.push('/leaveSchool/report')
                    }
                }
            },
            checkFirstChat(){
                this.$http.post('/api',{name:'smart_campus.consult.msg.student.list',index:1},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        res.body.data.list.length > 0 ? this.isFirst = false : this.isFirst = true;
                        // 判断跳转
                        this.urlAddress()
                    }else{
                        console.log(res.body.msg)
                    };
                }).catch((error)=>{
                    console.log(error);
                })
            },
            urlAddress(){
                if(this.$store.state.user.type==='1'){
                    if(!this.isFirst){
                        this.chatLink =  '/psychology/studentChat'
                    }else{
                        this.chatLink =  '/psychology/consult'
                    }
                }else if(this.$store.state.user.type==='2'){
                    this.chatLink = '/psychology/msgListTeacher'
                }
            }
		}
	}
</script>

