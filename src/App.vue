<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <tt/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HelloWorld from "@/components/Helloworld.vue"
import tt from './components/tt.vue'

// 导入子组件
// import 组件名 from  "路径"
// @就是代表了src路径

export default {
  name: 'App',
  components: {
    // HelloWorld
    tt
  }
}


</script>

<style>
/* 如何导入刚才的css
注意：@在style中的使用需要加一个~@ */
@import url(~@/assets/base.css);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
