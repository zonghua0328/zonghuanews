import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入和使用vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 配置vant rem布局
import 'amfe-flexible'

Vue.config.productionTip = false
// 使用Vant组件库
Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
