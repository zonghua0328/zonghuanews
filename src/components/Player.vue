<template>
  <div class="player-container">
    <audio :src="songUrl" ref="music" autoplay></audio>
    <div class="songDetail">
      <div class="album"><img :src="albumPic" /></div>
      <div class="songName">
        {{ songName }} - <span>{{ singer }}</span>
      </div>
    </div>
    <div class="player-icon">
      <van-icon name="play-circle-o" v-if="play" @click="startPlayer" />
      <van-icon name="pause-circle-o" v-if="play === false" @click="stopPlayer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player',
  data() {
    return {}
  },
  props: {
    // 播放状态
    play: {
      type: Boolean,
      default: true
    },
    // 歌名
    songName: {
      type: String,
      default: ''
    },
    // 歌手
    singer: {
      type: String,
      default: ''
    },
    // 专辑图
    albumPic: {
      type: String,
      default: ''
    },
    // 歌曲地址
    songUrl: {
      type: String,
      default: ''
    }
  },
  methods: {
    startPlayer() {
      this.play = !this.play
      if (this.play === false) {
        this.$refs.music.load()
      }
    },
    stopPlayer() {
      this.play = !this.play
      if (this.play === true) {
        console.log(this.$refs)
        this.$refs.music.pause()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.player-container {
  color: white;
  font-size: 24px;
  // background-color: ;
}
.songDetail {
  float: left;
  width: 70%;
  padding-top: 4px;
  font-size: 18px;
}
.player-icon {
  float: left;
  width: 10%;
  padding-top: 8px;
  margin-left: 10%;
}
.album {
  float: left;
  margin-left: 20px;
  margin-bottom: 20px;
  width: 20%;
}
.songName {
  float: left;
  margin-left: 20px;
  width: 50%;
  font-size: 15px;
}
img {
  margin-bottom: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
span {
  font-size: 10px;
}
</style>
