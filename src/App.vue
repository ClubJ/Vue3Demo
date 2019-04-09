<template>
  <div id="app">
    <div class="header">
      <div class="center">
        <div class="logo">
          <img src="./assets/images/logo.png" alt>
        </div>

        <ul class="nav">
          <router-link tag="li" to="/home">首页</router-link>
          <router-link tag="li" to="/gamecenter">游戏中心</router-link>
          <router-link tag="li" to="/news">新闻资讯</router-link>
          <router-link tag="li" to="/about">关于</router-link>
          <router-link tag="li" to="/community">社区</router-link>
        </ul>
      </div>
    </div>
    <router-view class="router-view"/>
    <div class="footer"></div>
  </div>
</template>

<style>
/* 子组件会触发该事件 */
/* .router-link-exact-active{
  border-bottom: 2px solid #fff;
} */

/* 域满足的组件都能触发该事件 */
.router-link-active{
  border-bottom: 2px solid #fff;
}

.header {
  line-height: 70px;
}

.header .center {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.header .center img {
  width: 50px;
  height: 50px;
  vertical-align: middle;
}

.header .center ul {
  display: flex;
}

.header .center ul li {
  color: #fff;
  background-color: blue;
  border-radius: 20px;
  line-height: 50px;
  text-align: center;
  width: 120px;
  height: 50px;
  vertical-align: middle;
  margin: 10px 30px;
  cursor: pointer;
}

.router-view {
  width: 1000px;
  margin: 0 auto;
  padding-top: 40px;
}
</style>
