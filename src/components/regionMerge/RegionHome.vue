<template>
    <div class="ocea_home">
      <div class="w">
        <div class="home_name"> <router-link to="/home" class="goHome" title="返回首页"><i class="el-icon-back"></i></router-link>  <h1>极地智能装备综合管理系统</h1></div>
        <div class="home_info">
          <div class="home_list">
            <ul class="list_1">
              <li v-for="item in meaus" :style="{backgroundColor:item.bgColor}">
                <div class="link_hide"><router-link class="link_a" :to="item.path"></router-link></div>
                <div class="li_img"><div :style="{backgroundImage:'url('+item.imgUrl+')'}"></div><!--<img :src="item.imgUrl" alt="" width="50">--></div>
                <div class="li_p"><span></span><h2>{{item.name}}</h2><!--<p>{{item.detail}}</p>--></div>
                <div class="li_link"><router-link :to="item.path" >进入查看 <i class="el-icon-caret-right"></i> </router-link> </div>
                <div class="num"><p>{{item.num}}</p></div>
              </li>
            </ul>
          </div>
          <div class="home_list">-
            <ul class="list_2">
              <li v-for="item in meaus2" :style="{backgroundColor:item.bgColor}">
                <div class="link_hide"><router-link class="link_a" :to="item.path"></router-link></div>
                <div class="li_img">  <div :style="{backgroundImage:'url('+item.imgUrl+')'}"></div>  <!--<p>{{item.detail}}</p>--></div>
                <div class="li_p"><span></span><h2>{{item.name}}</h2></div>
                <div class="li_link"><router-link :to="item.path">进入查看 <i class="el-icon-caret-right"></i> </router-link> </div>
                <div class="num"><p>{{item.num}}</p></div>
              </li>
            </ul>
          </div>
          <div class="home_list">
            <ul>
              <li v-for="item in meaus3" :style="{backgroundColor:item.bgColor}">
                <div class="link_hide"><router-link class="link_a" :to="item.path"></router-link></div>
                <div class="li_img">  <div :style="{backgroundImage:'url('+item.imgUrl+')'}"></div>  <!--<p>{{item.detail}}</p>--></div>
                <div class="li_p"><span></span><h2>{{item.name}}</h2></div>
                <div class="li_link"><router-link :to="item.path">进入查看 <i class="el-icon-caret-right"></i> </router-link> </div>
                <div class="num"><p>{{item.num}}</p></div>
              </li>
            </ul>
          </div>
          <!--<div class="home_list">-->
            <!--<ul>-->
              <!--<li v-for="item in meaus3" :style="{backgroundColor:item.bgColor}">-->
                <!--<div class="link_hide"><router-link class="link_a" :to="item.path"></router-link></div>-->
                <!--<div class="li_img"><img :src="item.imgUrl" alt=""></div>-->
                <!--<div class="li_p"><span></span><h2>{{item.name}}</h2><p>{{item.detail}}</p></div>-->
                <!--<div class="li_link" @click="showHeader"><router-link :to="item.path">进入查看 <i class="el-icon-caret-right"></i> </router-link> </div>-->
                <!--<div class="num"><p>{{item.num}}</p></div>-->
              <!--</li>-->
            <!--</ul>-->
          <!--</div>-->
        </div>

      </div>
    </div>

</template>
<script>

  export default {
    data (){
      return {
        isShow:false,
        meaus:[
          {'num':'01','name':'综合管理','detail':'大型装备管理','bgColor':'#00bbfe','path':'/regRegionTable','imgUrl':'static/regionImg/10.png'},
          {'num':'02','name':'装备信息','detail':'调查设备管理','bgColor':'#00bbfe','path':'/regionHome','imgUrl':'static/regionImg/14.png'},//no
          {'num':'03','name':'基建信息','detail':'大型装备管理','bgColor':'#00bbfe','path':'/regionHome','imgUrl':'static/regionImg/6.png'},//no
          {'num':'04','name':'备品备件','detail':'调查设备管理','bgColor':'#00bbfe','path':'/regSpareParts','imgUrl':'static/regionImg/7.png'},
          {'num':'','name':' ','detail':' ','bgColor':'','path':'','imgUrl':''},
          {'num':'05','name':'测试评估','detail':'大型装备管理','bgColor':'#4ccdaf','path':'/regionHome','imgUrl':'static/regionImg/13.png'},//no
          {'num':'06','name':'安装验收','detail':'调查设备管理','bgColor':'#4ccdaf','path':'/regInstallation','imgUrl':'static/regionImg/8.png'},
        ],
        meaus2:[
          {'num':'07','name':'维护保养','detail':'大型装备管理','bgColor':'#4bceaf','path':'/regWeihu','imgUrl':'static/regionImg/1.png'},
          {'num':'08','name':'验定校准','detail':'大型装备管理','bgColor':'#4bceaf','path':'/regCalibration','imgUrl':'static/regionImg/4.png'},
          {'num':'09','name':'故障处置','detail':'调查设备管理','bgColor':'#4bceaf','path':'/regDualException','imgUrl':'static/regionImg/5.png'},
          {'num':'10','name':'报废处置','detail':'大型装备管理','bgColor':'#4bceaf','path':'/regDualScrap','imgUrl':'static/regionImg/9.png'},
          {'num':'','name':' ','detail':' ','bgColor':'','path':'','imgUrl':''},
          {'num':'11','name':'设备巡检','detail':'调查设备管理','bgColor':'#ffac1e','path':'/regionHome','imgUrl':'static/regionImg/11.png'}, //no
          {'num':'12','name':'年度核查','detail':'大型装备管理','bgColor':'#ffac1e','path':'/regYearCheck','imgUrl':'static/regionImg/12.png'},
        ],
        meaus3:[
          {'num':'13','name':'统计分析','detail':'调查设备管理','bgColor':'#a360fe','path':'/regTongji','imgUrl':'static/regionImg/2.png'},
          {'num':'14','name':'综合评估','detail':'大型装备管理','bgColor':'#a360fe','path':'/regionHome','imgUrl':'static/regionImg/3.png'},
        ],
      }
    },
    methods: {

    },
    mounted(){
      let screeH = document.documentElement.clientHeight
      if(screeH<=910) {
        $('.home_list .li_link').hide()
        $('.link_a').show()
      }else {
        $('.home_list .li_link').show()
        $('.link_a').hide()
      }

    },
    components :{

    },
    watch: {
      // fullHeight (val) {
      //   if(!this.timer) {
      //     this.fullHeight = val
      //     console.log(this.fullHeight)
      //     $(".oceans").height(this.fullHeight)
      //     if(this.fullHeight<=800) {
      //       $('.home_list .li_link').hide()
      //     } else {
      //       $('.home_list .li_link').show()
      //     }
      //     this.timer = true
      //     let that = this
      //     setTimeout(function (){
      //       that.timer = false
      //     },400)
      //   }
      // }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .ocea_home
    width 100%
    height 100%
    background url("/static/regionImg/bg.png") no-repeat center top
    background-size cover
    .w
      height 100%
      .home_name
        padding-top 54px
        height 9%
        position relative
        .goHome
          position absolute
          font-size 20px
          color #15ccff
          top 68px
          left 10px
          opacity 0.5
        h1
          color #15ccff
          text-align center
          font-size 42px
      .home_info
        width 100%
        height 80%
        .list_2
          li
            &:nth-child(5)
              visibility hidden
        .home_list
          width 100%
          height 30%
          margin-top 20px
          ul
            width 100%
            height 100%
          .list_1
              li
                &:nth-child(5)
                  visibility hidden
            li
              width 13%
              height 90%
              float left
              padding 15px
              box-sizing border-box
              position relative
              border-radius 5px
              background-color #ccc
              margin-left 1.5%
              background-color #17d0ff
              &:first-child
                background-color #4bceaf
                margin-left 0px
              .li_p
                position relative
                h2
                  display inline-block
                  font-size 22px
                  padding-left 10px
                  color #fff
                p
                  padding-left 10px
                  color #fff
                span
                  position absolute
                  left -3px
                  top 22px
                  display inline-block
                  width 8px
                  height 8px
                  margin-top -10px
                  border-radius 50%
                  background-color #bdede2
              .li_img
                padding-bottom 15px
                div
                  width 50px
                  height 50px
                  background-size cover
                /*img*/
                  /*width 50px*/
                  /*height 50px*/
              .num
                position absolute
                right 20px
                top 20px
                p
                  font-size 18px
                  color #8be7ff
                  font-weight 700
              .li_link
                width 70%
                height 38px
                line-height 38px
                margin-top 30px
                border-bottom 1px solid #fff
                background-color rgba(0,0,0,.1)
                box-shadow 0 1px 1px 0 #fff
                box-sizing border-box
                a
                  display block
                  width 100%
                  height 100%
                  padding-left 15px
                  box-sizing border-box
                  color #fff
                &:hover
                  a
                    color #15ccff
              .link_hide
                /*position absolute*/
                /*top 0*/
                /*left 0*/
                /*width 100%*/
                /*height 100%*/
                /*z-index 99*/
                /*cursor pointer*/
                /*background-color #0babfe*/
                .link_a
                  position absolute
                  display none
                  top 0
                  left 0
                  width 100%
                  height 100%
                  z-index 99
                  cursor pointer
                  opacity transition
</style>
