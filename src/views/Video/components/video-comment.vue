<template>
  <div class="comment" v-for="item in commList" :key="item.id">
    <div class="comment-head">
      <img :src="item.avatar" />
    </div>
    <div class="comment-body">
      <p class="username">{{ item.username }}</p>
      <p class="date">{{ item.date }}</p>
      <p class="content">{{ item.content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { IComment } from '../types'
const commList = ref<IComment[]>([])
axios({
  url: '/commentsList',
  method: 'get'
}).then(
  ({
    data: {
      result: { items }
    }
  }) => {
    console.log('评论数据', items)
    commList.value = items
  }
)
</script>

<style lang="less" scoped>
.comment {
  display: flex;
  padding: 4vw;
  font-size: 3.5vw;
  line-height: 1.5;
  .comment-head {
    img {
      width: 8vw;
      height: 8vw;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 4vw;
    }
  }
  .comment-body {
    flex: 1;
    .username {
      color: #757575;
    }
    .date {
      color: #999;
      font-size: 3.2vw;
    }
    .content {
      color: #212121;
      margin-top: 3vw;
    }
  }
}
</style>
