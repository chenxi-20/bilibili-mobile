<template>
  <div class="list">
    <AppVideoItem v-for="item in recomList" :key="item.id" :video="item" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { IVideoItem } from '../types'
import AppVideoItem from '@/components/app-video-item.vue'
const recomList = ref<IVideoItem[]>([])
// 获取推荐数据
axios({
  url: '/recommendList',
  method: 'get'
}).then(({ data: { result } }) => {
  console.log('推荐数据为：', result)
  recomList.value = result
})
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 1vw;
}
</style>
