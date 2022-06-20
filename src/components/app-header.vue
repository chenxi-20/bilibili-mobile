<template>
  <header class="app-header">
    <!-- logo -->
    <a href="#" class="logo">
      <i class="iconfont Navbar_logo"></i>
    </a>
    <!-- 搜索 -->
    <a href="#" class="search">
      <i class="iconfont ic_search_tab"></i>
    </a>
    <!-- 头像 -->
    <a href="#" class="face">
      <img src="@/assets/images/login.png" />
    </a>
    <!-- 下载按钮 -->
    <div class="down-app">下载 APP</div>
  </header>
</template>

<style lang="less" scoped>
.app-header {
  display: flex;
  align-items: center;
  padding: 2vw 3vw;
  background-color: #fff;
  .logo {
    flex: 1;
    .Navbar_logo {
      font-size: 7.46667vw;
      color: #fb7299;
    }
  }
  .search {
    padding: 0 2vw;
    .ic_search_tab {
      font-size: 5.86667vw;
      color: #ccc;
    }
  }
  .face {
    padding: 0 4vw;
    img {
      width: 6.4vw;
    }
  }
  .down-app {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 3vw;
    background-color: #fb7299;
    color: #fff;
  }
}
</style>
