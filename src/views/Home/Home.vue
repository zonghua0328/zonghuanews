<template>
  <div class="home-container">
    <van-nav-bar title="纵华小歌单" fixed />
    <!-- <div class="disc"></div> -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    </van-tabbar>
    <!-- <p>{{ this.songList }}</p> -->
    <!-- <ul>
      <li><audio controls="controls" src="https://m8.music.126.net/20210823090731/b69a9eb9b3…1e/9cc2/7c4f/b13ac6e62d3625524dde95fd1b1628bf.mp3"></audio></li>
    </ul> -->
    <div class="playList-box">
      <PlayList :title="idList.name" :cover="idList.coverImgUrl"></PlayList>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import PlayList from '@/components/PlayList.vue'
export default {
  name: 'Login',
  data() {
    return {
      active: 0
    }
  },
  computed: {
    ...mapState('songListModule', ['songList']),
    ...mapState('idListModule', ['idList'])
  },
  created() {
    this.idList.trackIds.forEach(element => {
      this.getSong(element.id)
    })
  },
  methods: {
    ...mapActions('songListModule', ['getSong'])
  },
  components: {
    PlayList
  }
}
</script>

<style lang="less" scoped>
/deep/ html,
.home-container {
  position: fixed;
  height: 100%;
  width: 100%;
  padding-top: 46px;
  padding-bottom: 50px;
  background-color: rgb(15, 50, 66) !important;
}
.van-nav-bar {
  border: 1px solid #243346;
}
.van-tabbar {
  box-shadow: 0px -7px 7px -7px #243346;
  // border-top: 1px solid #243346;
}
.playList-box {
  margin: auto;
  margin-top: 20px;
  background-color: rgba(43, 76, 93, 0.35);
  height: auto;
  width: 94%;
  border-radius: 15px;
}
</style>
