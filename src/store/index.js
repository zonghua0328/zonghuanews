import Vue from 'vue'
import Vuex from 'vuex'
// 导入持久化存储插件
import createPersistedState from 'vuex-persistedstate'
// 导入模块
import idListModule from './module/idListModule.js'
import songListModule from './module/songListModule.js'
import songDetailModule from './module/songDetailModule.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  // 持久化存储插件
  plugins:[
        createPersistedState()
    ],
  modules: {
    idListModule,
    songListModule,
    songDetailModule,

  }
})
