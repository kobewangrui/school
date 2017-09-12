import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
import user from './modules/user'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
      user
    },
    state: {},
    mutations: {},
    actions:{
        SYNC_ALL(context){
          context.dispatch('SYNC_USER')
        }
    }
})