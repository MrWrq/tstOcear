<template>
  <div class="yea_top" ref="yea_top">
    <div class="w">
      <div class="l logo">
        <span> <router-link to="/home" title="返回首页">年度巡检管理系统</router-link> </span>
      </div>
      <div class="l nav">
        <div v-for="item in tabs" class="nav_list" @click="isShowHome($event)">

          <a :href="item.href" v-if="item.href" target="_blank">
            <span>{{item.name}}</span>
            <i v-if="item.icon" :class="item.icon"></i>
          </a>

          <router-link :to="item.path" class="meau" v-else>
            <span>{{item.name}}</span>
            <i v-if="item.icon" :class="item.icon"></i>
          </router-link>


        </div>

        <div class="nav_list more" v-if="moreTabs.length != '0'">· · ·
          <div class="moreMeau">
            <i class="el-icon-caret-bottom"></i>
            <ul>
              <li v-for="item in moreTabs">
                <router-link :to="item.path" class="meau">
                  <span>{{item.name}}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <!--<div class="search_icon">-->
        <!--<i class="el-icon-more-outline"></i>-->
        <!--<i class="el-icon-search"></i>-->
        <!--</div>-->
      </div>
      <!--<div class="r manage">-->
      <!--<ul>-->
      <!--<li> <div class="man_quan"><i class="el-icon-bell"></i></div> </li>-->
      <!--<li><i class="el-icon-news"></i></li>-->
      <!--<li><i class="el-icon-setting"></i></li>-->
      <!--</ul>-->
      <!--</div>-->
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        tabs: [
          {"name": "首页", "path": "/yeaInsHome"},
          // {"name": "巡检管理", "path": "/#"},
          // {"name": "统计分析", "path": "/#"},
          {"name": "统计分析", "path": "/yeaYearcheck"},

          {"name": "巡检信息", "href": "http://71.0.1.192:8080/otes/#modules/generator/inspectionbuoyinfo.html"},
          {"name": "巡检信息填报", "href": "http://71.0.1.192:8080/otes/#modules/generator/inspectionbuoyinfo.html"},



        ],
        moreTabs: []
      }
    },
    methods: {
      isShowHome(el) {

      },
    },
    mounted() {
      let pathName = window.location.pathname
      if (pathName == "/regionHome" || pathName == "/" || pathName == "/home" || pathName == '/obsRegionHome') {
        $(".yea_top").hide()
      }
      if (pathName.substring(0, 4) == '/yea') {
        $(".yea_top").show()
      }

      $('.more').on('mouseenter', function () {
        $('.moreMeau').show(100)
      }).stop().mouseleave(function () {
        $('.moreMeau').hide(100)
      }).stop()
    },

    created() {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .yea_top
    /*position: fixed;*/
    width 100%
    min-width 1330px
    top 0px
    left 0px
    height 86px
    /*background-color #1a2575*/
    z-index 99999
    display none
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
