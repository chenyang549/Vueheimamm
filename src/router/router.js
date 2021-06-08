/* 路由基本使用
1：安装vue-router   npm i vue-router
2: 导入vue-router   import VueRouter from 'vue-router'
3: 注册 Vue.use(vue-router)
4: 实例化VueRouter  const router = new VueRouter({routes:[//写相应的路径配置]})
     输出 该路由实例化对象  export default router
5: 注入到vue实例 
     导入路由实例化对象
     import router from "路径" 
     new Vue({router})
      
6: 来一个路由出口 router-view
*/

// 2: 导入vue-router  和 vue

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false
// 3、实例化VueRouter
const router = new VueRouter({
  routes:[
  ]
})

// 输出出去
export default router
