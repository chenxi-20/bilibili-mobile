<template>
  <div class="video-info">
    <div class="title">{{ videoInfo.videoTitle }}</div>
    <div class="info-author">
      <div class="author">
        <img :src="videoInfo.authorIconSrc" alt="" />
        <span>{{ videoInfo.author }}</span>
      </div>
      <span>{{ videoInfo.likeCount }}观看</span>
      <span>
        <i class="iconfont dianzan"></i>
        <span>{{ videoInfo.likeCount }}</span>
      </span>
      <span>
        <i class="iconfont icon_fav"></i>
        <span>{{ videoInfo.favCount }}</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { IVideoInfo } from '../types'
defineProps({
  videoInfo: {
    type: Object as PropType<IVideoInfo>,
    required: true
  }
})
</script>

<style lang="less" scoped>
.video-info {
  padding: 3vw 2vw;
  border-bottom: 1px solid #ddd;
  .title {
    font-size: 4vw;
    line-height: 6vw;
    margin: 3vw 0;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .info-author {
    display: flex;
    align-items: center;
    font-size: 3vw;
    color: #999;
    .author {
      flex: 1;
      img {
        width: 5vw;
        height: 5vw;
        object-fit: cover;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 1vw;
        background: url(~@/assets/images/loading.png) no-repeat center #e7e7e7;
      }
      span {
        color: #212121;
      }
    }
    // > 表示不包含第一个
    > span {
      margin: 0 2vw;
    }
    .iconfont {
      font-size: 5vw;
      color: #757575;
      margin-right: 2vw;
    }
  }
}
</style>
