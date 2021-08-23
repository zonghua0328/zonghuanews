import Vue from 'vue'
import Vuex from 'vuex'

// 导入模块
import idListModule from './module/idListModule.js'
import songListModule from './module/songListModule.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    idListModule,
    songListModule
  }
})
