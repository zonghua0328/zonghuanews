<template>
  <div class="song-container">
    <!-- 歌曲列表组件 -->
    <div class="box">
      <div class="numberId">{{ number }}</div>
      <div class="songDetail">
        <p class="songName">{{ songName }}</p>
        <p>{{ singer }} - {{ album }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Song',
  props: {
    // 歌名
    songName: {
      type: String,
      default: ''
    },
    // 歌曲id
    number: {
      type: Number,
      default: 1
    },
    // 歌手
    singer: {
      type: String,
      default: ''
    },
    // 专辑名
    album: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.song-container {
  width: 100%;
  height: 60px;
  font-size: 14px;
  color: rgb(206, 204, 204);
}
.numberId {
  float: left;
  width: 10%;
  padding: 24px 0 0 20px;
  color: #71868f;
  font-size: 16px;
}
.songDetail {
  float: left;
  width: 70%;
}
</style>
