<template>
  <div class="login-container">
    <!-- 运用vant组件渲染Login页面 -->
    <!-- 头部 -->
    <van-nav-bar title="纵华小歌单" fixed />
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="用户名" label="用户名" placeholder="请填写用户名" :rules="[{ required: true }]" />
      <van-field v-model="password" type="password" name="密码" label="密码" placeholder="请填写密码" :rules="[{ required: true }]" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="login">提交</van-button>
      </div>
    </van-form>
    <!-- <ul>
      <li v-for="item in this.idList">{{ item.id }}</li>
    </ul> -->
    <!-- <p>{{ idList }}</p> -->
  </div>
</template>

<script>
import { idListAPI } from '@/api/userAPI.js'
import { songAPI } from '@/api/songAPI.js'
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  // name
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      // 存储歌单信息
      music: '',
      // idList: '',
      songId: [],
      active: 0
    }
  },
  computed: {
    ...mapState('idListModule', ['idList'])
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    },
    login() {
      if (this.username !== '') {
        this.$router.push('/home')
      } else {
        alert('？？？？？')
      }
    },
    ...mapActions('idListModule', ['initIdList']),
    ...mapActions('songListModule', ['getSong'])
    // async initIdList() {
    //   const { data: res } = await idListAPI()
    //   console.log(res)
    //   this.music = res
    //   // console.log(this.music)
    //   this.idList = this.music.playlist.trackIds
    //   this.idList.forEach(item => {
    //     this.songId.push(item)
    //   })
    //   console.log(this.songId)
    // },
  },
  created() {
    this.initIdList()
  }
}
</script>

<style lang="less" scoped>
.login-container {
  width: 600px%;
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>
