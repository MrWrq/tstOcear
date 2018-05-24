// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '../static/css/reset.css'
// import '../static/js/globalviewer.js'
// import ol from 'ol'
// import '../static/js/mapcore.js'
import axios from 'axios'
//路由
import Home from './components/home/Home'
import About from './components/about/About'
import Clippers from './components/clippers/Clippers'
import Region from './components/region/Region'
import Infrastructure from './components/infrastructure/Infrastructure'
import Inspection from './components/inspection/Inspection'
import Overseas from './components/overseas/Overseas'
import AboutScore from './components/aboutScore1/AboutScore'
import Management from './components/management/Management'
import RegionTable from './components/regionTable/RegionTable'
import RegionHome from './components/regionHome/RegionHome'
import Installation from './components/installation/Installation'
import Calibration from './components/calibration/Calibration'
import SpareParts from './components/spareParts/SpareParts'
import Statistic from './components/statistic/Statistic'
import Tongji from './components/tongji/Tongji'
import Weihu from './components/weihu/Weihu'
import DualException from './components/dualexception/DualException'
import DualScrap from './components/dualScrap/DualScrap'
import YearCheck from './components/yearcheck/YearCheck'
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.prototype.$http = axios //用axios代替$http进行接口请求
Vue.config.productionTip = false


const routes = [
  {path: '/', redirect: '/regionHome'},
  {path: '/home', component: Home},
  {path: '/about', component: About},
  {path: '/clippers', component: Clippers},
  {path: '/region', component: Region},
  {path: '/infrastructure', component: Infrastructure},
  {path: '/inspection', component: Inspection},
  {path: '/overseas', component: Overseas},
  {path: '/aboutScore', component: AboutScore},
  {path: '/management', component: Management},
  {path: '/regionTable', component: RegionTable},
  {path: '/regionHome', component: RegionHome},
  {path: '/installation', component: Installation},
  {path: '/calibration', component: Calibration},
  {path: '/spareParts', component: SpareParts},
  {path: '/statistic', component: Statistic},
  {path: '/tongji', component: Tongji},
  {path: '/weihu', component: Weihu},
  {path: '/dualException', component: DualException},
  {path: '/dualScrap', component: DualScrap},
  {path: '/yearCheck', component: YearCheck}
]

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes
})

// 跳转后返回顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
  if (to.path == '/regionHome' || to.path == '/') {
    $(".tst_top").hide()
  } else {
    $(".tst_top").show()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
