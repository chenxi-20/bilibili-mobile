<template>
  <!-- 头部 -->
  <AppHeader />
  <!-- 视频播放 -->
  <VideoPlay :videoInfo="videoInfo"/>
  <!-- 视频详情 -->
  <VideoInfo :videoInfo="videoInfo" />
  <!-- 相关推荐/评论 -->
  <VideoBottom />
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import { IVideoInfo } from './types'
import AppHeader from '@/components/app-header.vue'
import VideoPlay from './components/video-play.vue'
import VideoInfo from './components/video-info.vue'
import VideoBottom from './components/video-bottom.vue'

const videoInfo = ref<IVideoInfo>({})
// 获取路由对象
const route = useRoute()
axios({
  url: '/videoDetail',
  method: 'get',
  // 根据路由对象的 id 参数发送请求获取对应的视频详情
  params: { id: route.params.id }
}).then(({ data: { result } }) => { // 解构再解构{ data: { result } }
  console.log('视频详情数据为：', result)
  videoInfo.value = result
})
</script>

<style scoped>
</style>
