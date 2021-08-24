<template>
  <div class="home-container">
    <van-nav-bar title="纵华小歌单" fixed />
    <div class="playList-box">
      <PlayList :title="idList.name" :cover="idList.coverImgUrl" @click.native="toSongList"></PlayList>
    </div>
    <div class="bottom">
      <van-tabbar v-model="active" border="false" fixed class="tabbar">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
    <!-- <p>{{ this.songList }}</p> -->
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
    console.log(van - tabbar)
    if (this.songList.length === 0) {
      this.idList.trackIds.forEach(element => {
        this.getSong(element.id)
      })
    } else {
      console.log('数据加载完毕')
    }
  },
  methods: {
    toSongList() {
      console.log('跳转')
      this.$router.push({
        path: '/songlist',
        query: {
          listName: this.idList.name,
          cover: this.idList.coverImgUrl
        }
      })
    },
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
  background: url('../../assets/bgImg.jpg') no-repeat;
  background-size: 100% 100%;
}
.playList-box {
  margin: auto;
  margin-top: 20px;
  height: auto;
  width: 94%;
}
.bottom {
  color: white;
}
/deep/.tabbar {
  border: false;
}
.van-hairline--bottom:after {
  border-bottom-width: 0px;
}
</style>
