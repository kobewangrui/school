export default function (VueRouter) {
  const routes = [
    {
      path: '/',
      component: require('views/content/index.vue')
    },
    {
      path: '/detail',
      component: require('views/content/detail.vue')
    },
    {
      path: '/editComment',
      component: require('views/content/editComment.vue')
    },
    {
      path: '/menu',
      component: require('views/content/menu.vue')
    },
    {
      path: '/askLeave',
      component: require('views/content/askLeave.vue')
    },
    {
      path: '/checkLeave',
      component: require('views/content/checkLeave.vue')
    },
    {
      path: '/consult',
      component: require('views/content/consult.vue')
    }
  ]
  const router = new VueRouter({
    mode: 'history',
    routes
  })
  return router
}