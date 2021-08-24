import http from "@/utils/request.js";
import { songDetailAPI } from '@/api/songDetailAPI.js'
const module = {
  namespaced: true,

  state: {
   songDetail: [],
  },
  mutations: {
    updatesongDetail(state, songDetail) {
      // 1. 把歌曲信息转存到 state 中
      state.songDetail.push(songDetail)
}
  },
  actions: {
    async getSongDetail(store,id){
        const { data: res } = await songDetailAPI(id)
        console.log(res.songs);
        store.commit('updatesongDetail', res.songs)
        // state.songList.push(res.data.url)
        // console.log(state.songList);
      }
    }
}

export default module