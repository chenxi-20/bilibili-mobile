<template>
  <div class="list">
    <AppVideoItem v-for="item in list" :key="item.id" :video="item" />
  </div>
</template>

<script setup lang="ts">
import AppVideoItem from '@/components/app-video-item.vue'
import axios from 'axios'
import { ref } from 'vue'
interface IVideoItem {
  id: number
  imgSrc: string
  playCount: string
  videoSrc: string
  desc: string
  commentCount: string
}
const list = ref<IVideoItem[]>([])
axios({
  url: '/videosList',
  method: 'get'
}).then((res) => {
  console.log('视频列表数据为', res.data.result)
  list.value = [...res.data.result]
})
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 1vw;
}
</style>
