<template>
  <div class="oceans">
    <v-intHeader></v-intHeader> <!--综合管理-->
    <v-larHeader></v-larHeader> <!--大型装备-->
    <v-obsHeader></v-obsHeader> <!--观测系统-->
    <v-regHeader></v-regHeader> <!--极地智能-->
    <v-facHeader></v-facHeader> <!--基础设施-->
    <v-yeaHeader></v-yeaHeader> <!--年度巡检-->
    <v-oveHeader></v-oveHeader> <!--海外站-->
    <v-resHeader></v-resHeader> <!--调查船-->

    <router-view />
  </div>
</template>

<script>
  import RegHeader from './components/header/RegHeader'
  import ObsHeader from './components/header/ObsHeader'
  import IntHeader from './components/header/IntHeader'
  import LarHeader from './components/header/LarHeader'
  import FacHeader from './components/header/FacHeader'
  import YeaHeader from './components/header/YeaHeader'
  import OveHeader from './components/header/OveHeader'
  import ResHeader from './components/header/ResHeader'

  import $ from 'jquery'

  export default {
    data() {
      return {
        fullHeight: document.documentElement.clientHeight,
      }
    },
    methods: {

    },
    mounted(){
      let screeH = document.documentElement.clientHeight
      screeH = screeH <= 800 ? 800 : screeH
      $('.oceans').height(screeH)
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight
          that.fullHeight = window.fullHeight
        })()
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

    },
    components: {
      'v-obsHeader': ObsHeader,
      'v-regHeader': RegHeader,
      'v-intHeader': IntHeader,
      'v-larHeader': LarHeader,
      'v-facHeader': FacHeader,
      'v-yeaHeader': YeaHeader,
      'v-oveHeader': OveHeader,
      'v-resHeader': ResHeader,
    },
    created() {

    },
    watch: {
      fullHeight(val) {
        if (!this.timer) {
          this.fullHeight = val
          $(".oceans").height(this.fullHeight)
          if (this.fullHeight <= 870) {
            $('.home_list .li_link').hide()
            $('.link_a').show()
          } else {
            $('.home_list .li_link').show()
            $('.link_a').hide()
          }
          this.timer = true
          let that = this
          setTimeout(function () {
            that.timer = false
          }, 400)
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .oceans
    width 100%
    min-height 810px
    background url("/static/homeIcon/bg.jpg") no-repeat center top
    background-size cover
    .tst_top
      /*position: fixed;*/
      width 100%
      min-width 1330px
      top 0px
      left 0px
      height 86px
      /*background-color #1a2575*/
      z-index 99999
      .logo
        margin-right 130px
        span
          a
            color #0abafe
            line-height 86px
            font-size 34px
            font-weight 700
      .nav
        /*width 65%*/
        border-bottom 1px solid #3045ca
        padding 0 20px
        position relative
        .nav_list
          float left
          //width 100px
          line-height 86px
          text-align center
          margin-left 30px
          &:first-child
            margin-left 0px
          a
            color: #fff
            font-size 16px
            font-family '微软雅黑'
            transition all 0.5s
            i
              transition all 0.5s
            &:hover
              color: #17cfff
              text-decoration none
              i
                color: #17cfff
                transform rotate(180deg)
            &.active
              color #17cfff
              position relative
              font-size 18px
              &::after
                position: absolute;
                bottom: -35px;
                left 50%
                transform: translateX(-50%);
                content: "";
                width: 100% + 22;
                height: 2px;
                background: #11c6ff
        .search_icon
          float right
          line-height 86px
          margin-left 30px
          i
            color: #fff
            font-size 20px
            cursor pointer
            &:hover
              color red
          .inp
            position absolute
            display none
            top 31px
            right 100px
            input
              height 25px
              width 120px
              background #eee
        .more
          cursor pointer
          color #fff
          font-size 28px
          .active
            color red
            &::after
              background transparent !important
        .moreMeau
          position absolute
          padding 15px
          border-radius 4px
          background-color #293cb4
          display none
          z-index 9999
          right -13px
          top 60px
          &::after
            background transparent !important
          .el-icon-caret-bottom
            position absolute
            color #293cb4
            font-size 30px
            transform rotateX(180deg)
            z-index 9999
            top -17px
            left 50%
            margin-left -15px
          ul
            li
              a
                display block
                padding 10px 5px
                border-bottom 1px solid #3344c8
                transition all .5s
                font-size 16px
                line-height 25px
                color #fff
                &.active
                  border-bottom 1px solid #17cfff
              &:hover
                a
                  color #17cfff
      .manage
        ul
          li
            border-radius 4px
            height 86px
            line-height 86px
            float left
            line-height 86px
            font-size 30px
            line-height 86px
            color #fff
            position relative
            margin-left 15px


</style>
