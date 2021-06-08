<template>
  <!-- 最外层标签的class名字使用组件名 -->
  <div class="login">
    <div class="left">
      <div class="title">
        <img src="@/assets/img/loginLogo.png" alt="" />
        <span class="titleName">黑马面面</span>
        <span class="titleLine">|</span>
        <span class="titleName2">用户登录</span>
      </div>
    </div>
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
    padding: 43px;
    .titleName {
      font-size: 24px;
      margin-left: 15px;
      margin-right: 15px;
      font-weight: 400;
      color: #0c0c0c;
    }
    .titleLine {
        color: #ccc;
        font-size: 24px;
    }
    .titleName2 {
        font-size: 22px;
        margin-left: 15px;
    }
  }
}
</style>