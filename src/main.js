import Vue from 'vue'
import App from './App.vue'

// 导入element插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 1、导入vue-router
// import VueRouter from 'vue-router'
import router from './router/router.js'

/* 路由基本使用
1：安装vue-router   npm i vue-router
2: 导入vue-router   import VueRouter from 'vue-router'
3: 注册 Vue.use(vue-router)
4: 实例化VueRouter  const router = new VueRouter({routes:})
5: 注入到vue实例 new Vue({router})
6: 来一个路由出口 router-view
*/

Vue.use(ElementUI);
// 2、注册路由

Vue.config.productionTip = false
// 3、实例化VueRouter


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
