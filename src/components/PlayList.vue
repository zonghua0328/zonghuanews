<template>
  <div class="playList-container">
    <div class="box">
      <!-- 封面-->
      <div class="cover"><img v-lazy="cover" /></div>
      <div class="playListName">
        <p class="title">{{ title }}</p>
        <p>欢迎听歌</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayList',
  // 接受传过来的文章信息
  props: {
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 封面
    cover: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.playList-container {
  margin: auto;
  width: 100%;
  height: 70px;
  background-color: rgba(38, 65, 82, 0.7);
  font-size: 12px;
  color: rgb(206, 204, 204);
  border-radius: 15px;
}
.box {
  padding-top: 5px;
}
.cover {
  margin-left: 15px;
  float: left;
  width: 20%;
}
.playListName {
  float: left;
  margin: 0 0 0 8px;
  padding: auto;
  width: 70%;
  height: 60px;
}
.title {
  font-size: 14px;
  margin: 5px auto;
  color: white;
}
img {
  width: 60px;
  height: 60px;
  border-radius: 8px;
}
</style>
