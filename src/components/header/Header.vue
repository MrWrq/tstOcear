<template>
  <div class="tst_top" ref="tst_top">
    <div class="w">
      <div class="l logo">
        <span>海洋技术装备管理系统</span>
      </div>
      <div class="l nav">
        <div v-for="item in tabs" class="nav_list" @click="isShowHome($event)">
          <router-link :to="item.path" >
            <span>{{item.name}}</span>
            <i v-if="item.icon" :class="item.icon"></i>
          </router-link>
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
          {"name": "首页", "path": "/home"},
          {"name": "大型管理装备", "path": "/about","icon":"el-icon-caret-bottom"},
          {"name": "装备巡检管理", "path": "/inspection","icon":"el-icon-caret-bottom"},
          {"name": "基础设施管理", "path": "/infrastructure","icon":"el-icon-caret-bottom"},
          {"name": "极地装备", "path": "/region"},
          {"name": "调查船队", "path": "/clippers"},
          {"name": "海外站管理", "path": "/overseas"},
          // {"name": "综合评估", "path": "/aboutScore"},
        ],
      }
    },
    methods: {
      isShowHome(el){
        if(el.target.innerHTML == '首页'){
          $('.tst_top').hide();
        }
      }
    },
    mounted() {
      if(window.location.pathname=="/home"){
        this.$refs.tst_top.style.display="none"
      } else {
        this.$refs.tst_top.style.display="block"
      }
    },
    created(){

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tst_top
    /*position: fixed;*/
    width 100%
    min-width 1330px
    top 0px
    left 0px
    height 86px
    background-color #1a2575
    z-index 99999
    .logo
      margin-right 100px
      span
        color #0abafe
        line-height 86px
        font-size 34px
        font-weight 700
    .nav
      /*width 65%*/
      border-bottom 1px solid #3045ca
      padding 0 20px
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
