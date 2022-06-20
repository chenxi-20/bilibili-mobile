<template>
  <!-- 频道组件 -->
  <van-tabs v-model:active="active">
    <van-tab :title="item.text" v-for="item in list" :key="item.id"></van-tab>
    <!-- <van-tab title="标签 1">内容 1</van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 4">内容 4</van-tab> -->
  </van-tabs>
</template>

<script setup lang="ts">
// ref函数用于定义模板中使用的响应式数据，相当于vue2的data
import { ref } from 'vue'
import axios from 'axios'
const active = ref(0) // active表示当前选中标签的下标为0
// ts的接口（定义数据格式）用于标记数据格式
interface INavItem {
  id: string
  text: string
}
// 频道数据， <INavItem[]> 表示 list 数据为数组，数组的每一项需要复合 INavItem 接口的格式
// TypeScript 好处：模板中使用 list 和 item 的时候，鼠标移入有类型提醒
const list = ref<INavItem[]>([])
axios({
  url: '/navList',
  method: 'get'
}).then((res) => {
  console.log('获取频道数据', res.data)
  // 区别：赋值应该是value
  list.value = [...res.data.result]
})
</script>
