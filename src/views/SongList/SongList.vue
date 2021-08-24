<template>
  <div class="songList-container">
    <van-nav-bar title="歌单" left-text="" left-arrow @click-left="goback">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <!-- 用户基本信息面板 -->
    <div class="user-card">
      <!-- 用户头像、姓名 -->
      <div class="songListCard">
        <!-- 使用 title 插槽来自定义标题 -->
        <img v-lazy="this.$route.query.cover" alt="" class="avatar" />
        <div class="title">
          <span>{{ this.$route.query.listName }}</span>
        </div>
      </div>
    </div>
    <!-- 歌曲列表 -->
    <div class="songList">
      <Song v-for="(item, index) in this.songDetail" @click.native="startMusic(item[0].id, item[0].name, item[0].ar[0].name, item[0].al.picUrl)" :key="item[0].id" :songName="item[0].name" :number="index + 1" :singer="item[0].ar[0].name" :album="item[0].al.name"></Song>
    </div>

    <!-- 播放器 -->
    <div class="player">
      <Player :play="this.state" :songName="this.songName" :singer="this.singer" :albumPic="this.songPic" :songUrl="this.songUrl"></Player>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import Song from '@/components/Song.vue'
import Player from '@/components/Player.vue'
export default {
  name: 'SongList',
  data() {
    return {
      state: false,
      songId: '',
      songName: '',
      singer: '',
      songPic: '',
      songUrl: '',
      audioPlayerData: {
        title: this.songName,
        artist: this.singer,
        src: this.songUrl,
        pic: this.songPic
      }
    }
  },
  created() {
    // 判断是否进行过axios请求 请求过就跳过
    if (this.songDetail.length === 0) {
      this.idList.trackIds.forEach(element => {
        this.getSongDetail(element.id)
      })
    } else {
      console.log('数据加载完毕')
    }
  },
  computed: {
    ...mapState('idListModule', ['idList']),
    ...mapState('songDetailModule', ['songDetail']),
    ...mapState('songListModule', ['songList'])
  },
  methods: {
    ...mapActions('songDetailModule', ['getSongDetail']),
    startMusic(id, songName, singer, songPic) {
      console.log('点击了')
      this.id = id
      this.songName = songName
      this.singer = singer
      this.songPic = songPic
      this.songList.some(item => {
        if (item.id === this.id) {
          console.log(this.id)
          this.songUrl = 'https://music.163.com/song/media/outer/url?id=' + item.id + '.mp3'
          console.log('找到啦')
          return true
        }
      })
    },
    goback() {
      this.$router.push('/home')
    }
  },
  components: {
    Song,
    Player
  }
}
</script>

<style lang="less" scoped>
.songList-container {
  position: fixed;
  height: 100%;
  width: 100%;
  padding-bottom: 50px;
  background: url('../../assets/bgImg.jpg') no-repeat;
  background-size: 100% 100%;
  overflow: auto;
}
.user-card {
  width: 100%;
  height: 150px;
  border-radius: 0 0 10% 10%;
  background-color: rgba(36, 51, 70);
  color: #cdd2d3;
  font-size: 17px;
  margin: auto;
}
.songListCard {
  padding-top: 12px;
  .title {
    float: left;
    margin-left: 30px;
    width: 50%;
  }
  img {
    float: left;
    margin-left: 5%;
    width: 30%;
    height: auto;
    border-radius: 15px;
  }
}
.songList {
  max-height: 400px;
  overflow: auto;
}
.player {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background-color: rgba(9, 24, 63, 0.1);
}
.van-hairline--bottom:after {
  border-bottom-width: 0px;
}
</style>
