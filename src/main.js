// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/reset.css'
import axios from 'axios'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios //用axios代替$http进行接口请求

//路由
import Home from './components/home/Home'
import About from './components/about/About'
import Clippers from './components/clippers/Clippers'
import Region from './components/region/Region'
import Infrastructure from './components/infrastructure/Infrastructure'
import Inspection from './components/inspection/Inspection'
import Overseas from './components/overseas/Overseas'

const routes = [
  {path: '/', redirect: '/home'},
  {path: '/home', component: Home},
  {path: '/about', component: About},
  {path: '/clippers', component: Clippers},
  {path: '/region', component: Region},
  {path: '/infrastructure', component: Infrastructure},
  {path: '/inspection', component: Inspection},
  {path: '/overseas', component: Overseas}
]

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes
})

// 跳转后返回顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
