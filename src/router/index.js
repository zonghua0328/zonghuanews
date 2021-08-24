import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入需要路由渲染的相应组件
import Login from '@/views/Login/Login.vue'
import Home from '@/views/Home/Home.vue'
import SongList from '@/views/SongList/SongList.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/home', component: Home, name: 'Home' },
  { path: '/songlist', component: SongList, name: 'SongList' },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
