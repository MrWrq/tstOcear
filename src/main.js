// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import layer from 'vue-layer'
//首页
import Home from './components/home/Home'
//综合管理
import intAbout from './components/integratedManagement/intAbout/IntAbout'
//大型装备
// import About from './components/intAbout/About'
// import Clippers from './components/clippers/Clippers'
// import Region from './components/region/Region'
import Infrastructure from './components/infrastructure/Infrastructure'
// import Inspection from './components/inspection/Inspection'
// import Statistic from './components/statistic/Statistic'
import larManagement from './components/largeMonuments/management/Management'
//基础设施
import facBaseInstInfo from './components/facMonuments/baseInstInfo/BaseInstInfo'
//年度巡检
import yeaInsHome from './components/yeaInspection/yearHome/YearCheck'
//海外站
import oveSeasHome from './components/oveManage/overseas/Overseas'
//极地
import regAboutScore from './components/regionMerge/aboutScore/AboutScore'
import regRegionTable from './components/regionMerge/regionTable/RegionTable'
import regRegionHome from './components/regionMerge/RegionHome'
import regCalibration from './components/regionMerge/calibration/Calibration'
import regSpareParts from './components/regionMerge/spareParts/SpareParts'
import regTongji from './components/regionMerge/tongji/Tongji'
import regWeihu from './components/regionMerge/weihu/Weihu'
import regDualException from './components/regionMerge/dualexception/DualException'
import regDualScrap from './components/regionMerge/dualScrap/DualScrap'
import regYearCheck from './components/regionMerge/yearcheck/YearCheck'
import regInstallation from './components/regionMerge/installation/Installation'
//观测
import ObsAboutScore from './components/observationMerge/aboutScore/AboutScore'
import ObsRegionTable from './components/observationMerge/regionTable/RegionTable'
import ObsRegionHome from './components/observationMerge/ObsRegionHome'
import ObsCalibration from './components/observationMerge/calibration/Calibration'
import ObsSpareParts from './components/observationMerge/spareParts/SpareParts'
import ObsTongji from './components/observationMerge/tongji/Tongji'
import ObsWeihu from './components/observationMerge/weihu/Weihu'
import ObsDualException from './components/observationMerge/dualexception/DualException'
import ObsDualScrap from './components/observationMerge/dualScrap/DualScrap'
import ObsYearCheck from './components/observationMerge/yearcheck/YearCheck'
import ObsInstallation from './components/observationMerge/installation/Installation'

Vue.prototype.$layer = layer(Vue);
// import ol from '../static/js/globalviewer.js'
// Vue.prototype.$ol = ol;

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.prototype.$http = axios //用axios代替$http进行接口请求
Vue.config.productionTip = false


const routes = [
  //首页
  {path: '/', redirect: '/home'},
  {path: '/home', component: Home},
  //综合管理
  {path: '/intAbout', component: intAbout},
  //大型
  {path: '/larManagement', component: larManagement},
  //基础设施
  {path: '/facBaseInstInfo', component: facBaseInstInfo},
  //年度巡检
  {path: '/yeaInsHome', component: yeaInsHome},

  //海外站
  {path: '/oveSeasHome', component: oveSeasHome},

  // {path: '/intAbout', component: About},
  // {path: '/regClippers', component: Clippers},
  // {path: '/region', component: Region},
  {path: '/regInfrastructure', component: Infrastructure},
  // {path: '/regInspection', component: Inspection},
  // {path: '/regOverseas', component: Overseas},
  //极地
  {path: '/regionHome', component: regRegionHome},
  {path: '/regAboutScore', component: regAboutScore},
  {path: '/regRegionTable', component: regRegionTable},
  {path: '/regInstallation', component: regInstallation},
  {path: '/regCalibration', component: regCalibration},
  {path: '/regSpareParts', component: regSpareParts},
  {path: '/regTongji', component: regTongji},
  {path: '/regWeihu', component: regWeihu},
  {path: '/regDualException', component: regDualException},
  {path: '/regDualScrap', component: regDualScrap},
  {path: '/regYearCheck', component: regYearCheck},
  //观测
  {path: '/obsRegionHome', component: ObsRegionHome},
  {path: '/obsAboutScore', component: ObsAboutScore},
  {path: '/obsRegionTable', component: ObsRegionTable},
  {path: '/obsCalibration', component: ObsCalibration},
  {path: '/obsSpareParts', component: ObsSpareParts},
  {path: '/obsTongji', component: ObsTongji},
  {path: '/obsWeihu', component: ObsWeihu},
  {path: '/obsDualException', component: ObsDualException},
  {path: '/obsDualScrap', component: ObsDualScrap},
  {path: '/obsYearCheck', component: ObsYearCheck},
  {path: '/obsInstallation', component: ObsInstallation},

]

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes
})

// 跳转后返回顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
  var strPath = to.path
  if (strPath == '/home' || strPath == '/regionHome' || strPath == '/obsRegionHome' || strPath == '/') {
    $(".reg_top").hide();
    $(".obs_top").hide();
    $(".int_top").hide();
    $(".lar_top").hide();
    $(".fac_top").hide();
    $(".yea_top").hide();
    $(".ove_top").hide();
  }
  if (strPath.substring(0, 4) == '/obs' && strPath != '/obsRegionHome') {
    $(".obs_top").show();
  }
  if (strPath.substring(0, 4) == '/reg' && strPath != '/regionHome') {
    $(".reg_top").show();
  }
  if (strPath.substring(0, 4) == '/int') {
    $(".int_top").show();
  }
  if (strPath.substring(0, 4) == '/lar') {
    $(".lar_top").show();
  }
  if (strPath.substring(0, 4) == '/fac') {
    $(".fac_top").show();
  }
  if (strPath.substring(0, 4) == '/yea') {
    $(".yea_top").show();
  }
  if (strPath.substring(0, 4) == '/ove') {
    $(".ove_top").show();
  }


  function fullScreen() {

    var el = document.documentElement;

    var rfs = el.requestFullScreen || el.webkitRequestFullScreen ||

      el.mozRequestFullScreen || el.msRequestFullScreen;

    if (typeof rfs != "undefined" && rfs) {

      rfs.call(el);

    } else if (typeof window.ActiveXObject != "undefined") {

      //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏

      var wscript = new ActiveXObject("WScript.Shell");

      if (wscript != null) {

        wscript.SendKeys("{F11}");

      }

    }
  }

  // 启动全屏!
  fullScreen()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
