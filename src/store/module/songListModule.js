import http from "@/utils/request.js";
import { songAPI } from '@/api/songAPI.js'
const module = {
  namespaced: true,

  state: {
   songList: [],
  },
  mutations: {
    updatesongList(state, songUrl) {
  // 1. 把用户信息转存到 state 中
      state.songList.push(songUrl)
  // 2. 将最新的 state 对象持久化存储到本地
      // console.log(state.songList);
  // this.commit('saveStateToStorage')
}
  },
  actions: {
    async getSong(store,id){
        const { data: res } = await songAPI(id)
        console.log(res.data[0]);
        store.commit('updatesongList', res.data[0])
        // state.songList.push(res.data.url)
        // console.log(state.songList);
      }
    }
}

export default module