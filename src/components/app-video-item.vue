<template>
  <router-link class="v-card" :to="`/video/${video.id}`">
    <div class="card">
      <div class="card-img">
        <img :src="video.imgSrc"/>
      </div>
      <div class="count">
        <span>
          <i class="iconfont icon_shipin_bofangshu"></i>
          {{video.playCount}}
        </span>
        <span>
          <i class="iconfont icon_shipin_danmushu"></i>
          {{ video.commentCount }}
        </span>
      </div>
    </div>
    <p class="title">{{video.desc}}</p>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
interface IVideoItem {
  id: number
  imgSrc: string
  playCount: string
  videoSrc: string
  desc: string
  commentCount: string
}
// 父传子需要通过 defineProps 接收
// 🔔 PropType 用于指定数据格式
defineProps({
  video: {
    // Object 对象为 IVideoItem 接口格式
    type: Object as PropType<IVideoItem>,
    required: true
  }
})
</script>

<style lang="less" scoped>
.v-card {
  width: 50%;
  padding: 2vw 1vw;
  .card {
    position: relative;
    // 设置默认图片
    background: #f3f3f3 url(~@/assets/images/default.png) center no-repeat;
    background-size: 36%;
    border-radius: 0.53333vw;
    overflow: hidden;
  }
  .card-img {
    img {
      height: 100px;
      width: 100%;
      object-fit: cover;// 保持图片原来的比例
    }
  }
  .count {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2vw 1.5vw;
    background-image: linear-gradient(0deg, #000000d9, #0000);
    color: #fff;
    span {
      .iconfont {
        font-size: 3vw;
      }
    }
  }
  .title {
    margin-top: 1.5vw;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #212121;
    font-size: 3.2vw;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
