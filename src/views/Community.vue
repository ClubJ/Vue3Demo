<template>
  <div>
    <div class="nav">
      <router-link :to="{name:'games'}">游戏记录</router-link>
      <router-link :to="{name:'download'}">资源下载</router-link>
      <router-link :to="{name:'personal'}">个人中心</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav a {
    display: inline-block;
    padding: 0 10px;
    margin-right: 20px;
}
</style>