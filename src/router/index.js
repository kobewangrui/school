export default function (VueRouter) {
  const routes = [
    {
      path: '/',
      component: require('views/content/index.vue'),
    },
    {
      path: '/detail',
      component: require('views/content/detail.vue'),
    }
  ]
  const router = new VueRouter({
    mode: 'history',
    routes
  })
  return router
}