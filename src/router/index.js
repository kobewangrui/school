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