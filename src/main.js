import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入和使用vant
import Vant,{ Lazyload } from 'vant'
import aplayer from 'vue-aplayer'
import 'vant/lib/index.less'
// 配置vant rem布局
import 'amfe-flexible'

Vue.config.productionTip = false
// 使用Vant组件库
Vue.use(Vant)
Vue.use(aplayer)
Vue.use(Lazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
