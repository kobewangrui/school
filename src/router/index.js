export default function (VueRouter) {
  const routes = [
    {
      path: '/',
      component: require('views/content/index.vue'),
    }
  ]
  const router = new VueRouter({
    mode: 'history',
    routes
  })
  return router
}