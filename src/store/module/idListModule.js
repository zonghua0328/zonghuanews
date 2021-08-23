import http from "@/utils/request.js";
import { idListAPI } from '@/api/userAPI.js'
const music = ''
const module = {
  namespaced: true,

  state: {
   idList: [],
  },
  mutations: {
    updateIdList(state, idinfo) {
  // 1. 把用户信息转存到 state 中
      state.idList = idinfo
  // 2. 将最新的 state 对象持久化存储到本地
      console.log(state.idList);
  // this.commit('saveStateToStorage')
}
  },
  actions: {
    async initIdList(store) {
      const { data: res } = await idListAPI()
      console.log(res)
      // console.log(this.music)
      store.commit('updateIdList', res.playlist)
      // this.idList.forEach(item => {
      //   this.songId.push(item)
      // })
      // console.log(this.songId)
    },
  }
}

export default module