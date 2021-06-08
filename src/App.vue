<template>
  <div>
    <el-button type="primary" disabled>主要按钮</el-button>
    <!-- 路由出口 -->
    <router-link to="/">跳转</router-link>
    <!-- 6: 来一个路由出口 router-view -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>