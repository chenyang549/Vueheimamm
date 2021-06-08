<template>
  <div class="app">
    <!-- <div class="test"></div>
    <el-button type="primary" disabled>主要按钮</el-button> -->
    <!-- 路由出口 -->
    <!-- <router-link to="/">跳转</router-link> -->
    <!-- 6: 来一个路由出口 router-view -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
/* // 使用 less lang="less" */
@import url(~@/style/base.css);
// .app{
//   .test{
//     width: 200px;
//     height: 200px;
//     border: 1px solid red;
//   }
// } 

</style>