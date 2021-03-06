export default function (VueRouter,store) {
  const routes = [
    {
		path: '/',
		component: require('views/content/home.vue'),
		children:[
			{
				path: '/',
				component: require('views/content/index.vue'),
				children:[
					{
						path: '/',
						component: require('views/content/index/index.vue')
					},
					{
						path: '/detail',
						component: require('views/content/index/detail.vue')
					},
					{
						path: '/editComment',
						component: require('views/content/index/editComment.vue')
					},
					{
						path: '/menu',
						component: require('views/content/index/menu.vue')
					},
					{
						path: 'center',
						component: require('views/content/index/center.vue')
					},
				]
			},

			{
				path: '/askForLeave',
				component: require('views/content/askForLeave.vue'),
				children:[
					{
						path: 'askLeave',
						component: require('views/content/askForLeave/askLeave.vue')
					},
					{
						path: 'leaveHistoryStudent',
						component: require('views/content/askForLeave/leaveHistoryStudent.vue')
					},
					{
						path: 'leaveHistoryTeacher',
						component: require('views/content/askForLeave/leaveHistoryTeacher.vue')
					},
					{
						path: 'leaveState',
						component: require('views/content/askForLeave/leaveState.vue')
					},
					{
						path: 'leaveDetail',
						component: require('views/content/askForLeave/leaveDetail.vue')
					},
					{
						path: 'aStudentHistory',
						component: require('views/content/askForLeave/aStudentHistory.vue')
					},
				]
			},
			{
				path: '/psychology',
				component: require('views/content/psychology.vue'),
				children:[
					{
						path: 'consult',
						component: require('views/content/psychology/consult.vue')
					},
					{
						path: 'msgListTeacher',
						component: require('views/content/psychology/msgListTeacher.vue')
					},
					{
						path: 'studentChat',
						component: require('views/content/psychology/studentChat.vue')
					},
					{
						path: 'teacherChat',
						component: require('views/content/psychology/teacherChat.vue')
					},
				]
			},
			{
				path: '/personalCenter',
				component: require('views/content/personalCenter.vue'),
				children:[
					{
						path: 'changeMsg',
						component: require('views/content/personalCenter/changeMsg.vue')
					},
					{
						path: 'phoneNumber',
						component: require('views/content/personalCenter/phoneNumber.vue')
					},
					{
						path: 'payList',
						component: require('views/content/personalCenter/payList.vue')
					},
					{
						path: 'personalInfo',
						component: require('views/content/personalCenter/personalInfo.vue')
					},
					{
						path: 'msgList',
						component: require('views/content/personalCenter/msgList.vue')
					}
				]
			},
			{
				path: '/leaveSchool',
				component: require('views/content/leaveSchool.vue'),
				children:[
					{
						path: 'report',
						component: require('views/content/leaveSchool/report.vue')
					},
					{
						path: 'leave',
						component: require('views/content/leaveSchool/leave.vue')
					},
					{
						path: 'detail',
						component: require('views/content/leaveSchool/detail.vue')
					},
					{
						path: 'reportBecause',
						component: require('views/content/leaveSchool/reportBecause.vue')
					},
					{
						path: 'studentArtInput',
						component: require('views/content/leaveSchool/studentArtInput.vue')
					},
					{
						path: 'studentArtShow',
						component: require('views/content/leaveSchool/studentArtShow.vue')
					}
				]
			},
			{
				path: '/recharge',
				component: require('views/content/recharge.vue'),
				children:[
					{
						path: 'schoolMoney',
						component: require('views/content/recharge/schoolMoney.vue')
					},
					{
						path: 'electricMoney',
						component: require('views/content/recharge/electricMoney.vue')
					},
				]
			},
			{
				path: '/recruit',
				component: require('views/content/recruit.vue'),
				children:[
					{
						path: 'recruitDetail',
						component: require('views/content/recruit/recruitDetail.vue')
					}
				]
			},

		]
	}
  ]
const router = new VueRouter({
	mode: 'history',
		routes
	})
	store.dispatch('SYNC_ALL')
	// 登录拦截
    // router.beforeEach((to, from, next) => {
    //   if(true && to.path != '/login'){
    //     console.log('尚未登录')
    //     next({
    //       path: '/login'
    //     })
    //   }else{
    //     console.warn('登录成功')
    //     next()
    //   }
    // })
	return router
}