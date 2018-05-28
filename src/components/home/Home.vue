<template>
    <div class="ocea_home">
      <div class="w">
        <div class="home_name"><h1>海洋技术装备管理系统</h1></div>
        <div class="home_info">
          <div class="home_list">
            <ul>
              <li v-for="item in meaus" :style="{backgroundColor:item.bgColor}">
                <div class="link_hide">
                  <router-link class="link_a" :to="item.path"></router-link>
                </div>
                <div class="li_img"><img :src="item.imgUrl" alt=""></div>
                <div class="li_p"><span></span><h2>{{item.name}}</h2><p>{{item.detail}}</p></div>
                <div class="li_link">
                  <router-link :to="item.path">进入查看 <i class="el-icon-caret-right"></i></router-link>
                </div>
                <div class="num"><p>{{item.num}}</p></div>
              </li>
            </ul>
          </div>
          <div class="home_list">
            <ul>
              <li v-for="item in meaus2" :style="{backgroundColor:item.bgColor}">
                <div class="link_hide">
                  <router-link class="link_a" :to="item.path"></router-link>
                </div>
                <div class="li_img"><img :src="item.imgUrl" alt=""></div>
                <div class="li_p"><span></span><h2>{{item.name}}</h2><p>{{item.detail}}</p></div>
                <div class="li_link">
                  <router-link :to="item.path">进入查看 <i class="el-icon-caret-right"></i></router-link>
                </div>
                <div class="num"><p>{{item.num}}</p></div>
              </li>
            </ul>
          </div>
          <div class="home_list">
            <ul>
              <li v-for="item in meaus3" :style="{backgroundColor:item.bgColor}">
                <div class="link_hide">
                  <router-link class="link_a" :to="item.path"></router-link>
                </div>
                <div class="li_img"><img :src="item.imgUrl" alt=""></div>
                <div class="li_p"><span></span><h2>{{item.name}}</h2><p>{{item.detail}}</p></div>
                <div class="li_link">
                  <router-link :to="item.path">进入查看 <i class="el-icon-caret-right"></i></router-link>
                </div>
                <div class="num"><p>{{item.num}}</p></div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>

</template>
<script>
  export default {
    data (){
      return {
        meaus:[
          //共四个图标
          {
            'num': '01',
            'name': '综合管理',
            'detail': '大型装备管理',
            'bgColor': '#14c9ff',
            'path': '/intAbout',
            'imgUrl': 'static/homeIcon/10.png'
          },
          {
            'num': '02',
            'name': '大型装备管理',
            'detail': '调查设备管理',
            'bgColor': '#14c9ff',
            'path': '/larManagement',
            'imgUrl': 'static/homeIcon/3.png'
          },
          {
            'num': '03',
            'name': '无人机管理',
            'detail': '大型装备管理',
            'bgColor': '#14c9ff',
            'path': '/#',
            'imgUrl': 'static/homeIcon/2.png'
          },
          {
            'num': '04',
            'name': '监控指挥车管理',
            'detail': '调查设备管理',
            'bgColor': '#14c9ff',
            'path': '/#',
            'imgUrl': 'static/homeIcon/23.png'
          },
          {
            'num': '05',
            'name': '视频监控管理',
            'detail': '大型装备管理',
            'bgColor': '#14c9ff',
            'path': '/#',
            'imgUrl': 'static/homeIcon/1.png'
          },
          {
            'num': '06',
            'name': '调查设备管理',
            'detail': '调查设备管理',
            'bgColor': '#14c9ff',
            'path': '/#',
            'imgUrl': 'static/homeIcon/4.png'
          },
          {
            'num': '07',
            'name': '备品备件管理',
            'detail': '大型装备管理',
            'bgColor': '#14c9ff',
            'path': '/#',
            'imgUrl': 'static/homeIcon/7.png'
          },
        ],
        meaus2:[
          {
            'num': '08',
            'name': '运行状态监控',
            'detail': '大型装备管理',
            'bgColor': '#4bceaf',
            'path': '/#',
            'imgUrl': 'static/homeIcon/21.png'
          },
          {
            'num': '09',
            'name': '年度巡检管理',
            'detail': '调查设备管理',
            'bgColor': '#4bceaf',
            'path': '/yeaInsHome',
            'imgUrl': 'static/homeIcon/6.png'
          },
          {
            'num': '10',
            'name': '观测装备管理',
            'detail': '大型装备管理',
            'bgColor': '#ffac1e',
            'path': '/obsRegionHome',
            'imgUrl': 'static/homeIcon/20.png'
          },
          {
            'num': '11',
            'name': '极地装备管理',
            'detail': '调查设备管理',
            'bgColor': '#ffac1e',
            'path': '/regionHome',
            'imgUrl': 'static/homeIcon/14.png'
          },
          {
            'num': '12',
            'name': '调查船队管理',
            'detail': '大型装备管理',
            'bgColor': '#ffac1e',
            'path': '/#',
            'imgUrl': 'static/homeIcon/17.png'
          },
          {
            'num': '13',
            'name': '大洋调查管理',
            'detail': '调查设备管理',
            'bgColor': '#ffac1e',
            'path': '/#',
            'imgUrl': 'static/homeIcon/13.png'
          },
          {
            'num': '14',
            'name': '海外站管理',
            'detail': '大型装备管理',
            'bgColor': '#ffac1e',
            'path': '/oveSeasHome',
            'imgUrl': 'static/homeIcon/15.png'
          },
        ],
        meaus3:[
          {
            'num': '15',
            'name': '基础设施管理',
            'detail': '大型装备管理',
            'bgColor': '#a360fe',
            'path': '/facBaseInstInfo',
            'imgUrl': 'static/homeIcon/11.png'
          },
          {
            'num': '16',
            'name': '重大专项管理',
            'detail': '调查设备管理',
            'bgColor': '#a360fe',
            'path': '/#',
            'imgUrl': 'static/homeIcon/12.png'
          },
          {
            'num': '17',
            'name': '基建项目管理',
            'detail': '大型装备管理',
            'bgColor': '#a360fe',
            'path': '/#',
            'imgUrl': 'static/homeIcon/22.png'
          },
          {
            'num': '18',
            'name': '知识库',
            'detail': '大型装备管理',
            'bgColor': '#f2637f',
            'path': '/#',
            'imgUrl': 'static/homeIcon/16.png'
          },
        ],
      }
    },
    methods: {},
    mounted(){


      let screeH = document.documentElement.clientHeight
      if (screeH <= 800) {
        $('.home_list .li_link').hide()
        $('.link_a').show()
      } else {
        $('.home_list .li_link').show()
        $('.link_a').hide()
      }
    },
    components :{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .ocea_home
    width 100%
    height 100%
    .w
      height 100%
      .home_name
        padding-top 54px
        height 9%
        h1
          color #15ccff
          text-align center
          font-size 42px
      .home_info
        width 100%
        height 80%
        .home_list
          width 100%
          height 30%
          margin-top 20px
          ul
            width 100%
            height 100%
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
                  font-size 18px
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
                padding-bottom 18px
                img
                  width 50px
                  height 50px
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
                height 32px
                line-height 32px
                margin-top 20px
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
