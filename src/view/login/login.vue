<template>
  <!-- 最外层标签的class名字使用组件名 -->
  <div class="login">
    <div class="left"></div>
    <div class="right">
      <img src="@/assets/img/login_banner_ele.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
};
</script>

<style lang="less">

.login {
  /* 弹性盒子布局 */
  display: flex;
  // 主轴布局
  justify-content: space-around; //  中间空出的内容宽度是两侧两倍
  // 纵轴
  align-items: center;
  height: 100%;
  //   width: 1400px;
  //   height: 788px;
  background: linear-gradient(225deg, #1493fa, #01c6fa);
  .left {
    width: 478px;
    height: 550px;
    background: #f5f5f5;
  }
}
</style>