export default function (VueRouter) {
  const routes = [
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
				path: '/askForLeave',
				component: require('views/content/askForLeave.vue'),
				children:[
					{
						path: 'askLeave',
						component: require('views/content/askForLeave/askLeave.vue')
					},
					{
						path: 'checkLeave',
						component: require('views/content/askForLeave/checkLeave.vue')
					},
					{
						path: 'leaveHistory',
						component: require('views/content/askForLeave/leaveHistory.vue')
					},
					{
						path: 'leaveState',
						component: require('views/content/askForLeave/leaveState.vue')
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
						path: 'msgListStudent',
						component: require('views/content/psychology/msgListStudent.vue')
					},
					{
						path: 'msgListTeacher',
						component: require('views/content/psychology/msgListTeacher.vue')
					},
					{
						path: 'studentChat',
						component: require('views/content/psychology/studentChat.vue')
					}
				]
			},
			{
				path: '/personalCenter',
				component: require('views/content/personalCenter.vue'),
				children:[
					{
						path: 'center',
						component: require('views/content/personalCenter/center.vue')
					},
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
					}
				]
			},
			,
			{
				path: '/recharge',
				component: require('views/content/recharge.vue'),
				children:[
					{
						path: 'electricMoney',
						component: require('views/content/recharge/electricMoney.vue')
					}
				]
			}
		]
	}
  ]
  const router = new VueRouter({
    mode: 'history',
    routes
  })
  return router
}