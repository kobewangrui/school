// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import frame from 'views/frame'
import Router from './router/index'
import Resource from 'vue-resource'
import Vuerify from 'vuerify'
import store from './store/store'
import $ from 'jquery'


// 日期格式过滤器
import './assets/filter/formatDate'

Vue.use(VueRouter)
Vue.use(Resource)
Vue.use(Vuerify)
window.jquery = window.$ = $

Vue.config.productionTip = false
const router = Router(VueRouter,store)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<frame/>',
  components: { frame }
})
