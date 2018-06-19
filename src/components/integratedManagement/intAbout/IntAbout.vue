<template>
  <div class="oceaLarge">
    <div class="w">
      <div class="ocea_info">
        <div class="l info_l">
          <div class="ocea_info_name">
            <p>大型装备实时统计地图<i class="el-icon-caret-right"></i></p>
          </div>

          <div class="info_l_list">
            <ul>
              <li><img src="./fangwu.png" alt="">
                <p>台站</p></li>
              <li><img src="./ocea_02.png" alt=""><p>浮标</p></li>
              <li><img src="./ocea_10.png" alt="">
                <p>潜标</p></li>
              <li><img src="./ocea_03.png" alt=""><p>飞机</p></li>
              <li><img src="./ocea_04.png" alt=""><p>雷达</p></li>
              <!--<li><img src="./ocea_05.png" alt=""><p>漂流浮标</p></li>-->
              <li><img src="./ocea_06.png" alt=""><p>船舶</p></li>
              <li class="info_more"><img src="./more.png" alt="">
                <p>更多</p>
                <div>
                  <ul class="info_hidde">
                    <li><img src="./ocea_01.png" alt=""><p>台站</p></li>
                    <li><img src="./ocea_02.png" alt=""><p>浮标</p></li>
                    <li><img src="./ocea_03.png" alt=""><p>飞机</p></li>
                    <li><img src="./ocea_04.png" alt=""><p>雷达</p></li>
                    <li><img src="./ocea_05.png" alt=""><p>潜器</p></li>
                    <li><img src="./ocea_06.png" alt=""><p>船舶</p></li>
                  </ul>
                </div>
              </li>
              <!--<li></li>-->
            </ul>
          </div>
          <div class="pointMessage"></div>

          <!--<div class="icon_list">-->
          <!--<img src="./reg_01.png" alt="">-->
          <!--<img src="./reg_02.png" alt="">-->
          <!--<img src="./reg_03.png" alt="">-->
          <!--<img src="./reg_04.png" alt="">-->
          <!--<img src="./reg_05.png" alt="">-->
          <!--<img src="./reg_06.png" alt="">-->
          <!--<img src="./reg_07.png" alt="">-->
          <!--</div>-->

          <div id="map" class="map"></div>
        </div>
        <div class="l info_r clearfix">
          <div class="info_r_top">
            <div class="chart_name">
              <div>
                <div class="l">
                  <p>统计图表</p>
                </div>
                <div class="char_r r">
                  <el-checkbox-group v-model="checkboxGroup" size="mini">
                    <el-checkbox label="台站" border
                                 style="background-color: #0babfe; color: #fff;margin-left: 0px;"></el-checkbox>
                    <el-checkbox label="雷达" border style="background-color: #4bceaf; color: #fff;margin-left: 0px;"></el-checkbox>
                    <el-checkbox label="浮标" border
                                 style="background-color: #4884aa; color: #fff;margin-left: 0px;"></el-checkbox>
                    <el-checkbox label="潜标" border style="background-color: #6db821; color: #fff;margin-left: 0px;"></el-checkbox>
                    <el-checkbox label="船舶" border
                                 style="background-color: #a360fe; color: #fff;margin-left: 0px;"></el-checkbox>
                    <el-checkbox label="飞机" border
                                 style="background-color: #ffad1e; color: #fff;margin-left: 0px;"></el-checkbox>
                  </el-checkbox-group>
                </div>
              </div>

            </div>
            <div>
              <div id="chart_1"></div>
              <div id="chart_2"></div>
              <div id="chart_3"></div>
            </div>

          </div>
          <div class="info_r_mid">
            <div class="info_r_mid_info">
              <p>大型装备状态统计<i class="el-icon-caret-right"></i></p>

            </div>
            <div class="info_r_mid_tab">
              <el-table
                :data="tableData2"
                style="width: 100%"
                fixed
                stripe
                size="small"
                header-align="center"
                :row-class-name="tableRowClassName">
                <el-table-column
                  prop="date"
                  align="center"
                  label="名称">
                </el-table-column>
                <el-table-column
                  prop="all"
                  align="center"
                  sortable
                  label="全部数量">
                </el-table-column>
                <el-table-column
                  prop="name"
                  align="center"
                  label="正常">
                </el-table-column>
                <el-table-column
                  prop="address"
                  align="center"
                  sortable
                  label="已巡检">
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  label="损坏">
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="info_r_bot">
            <div class="info_r_bot_top clearfix">
              <div class="info_r_bot_info l">
                <p>大型装备状态统计<i class="el-icon-caret-right"></i></p>
              </div>
              <div class="info_r_bot_r r">
                <span class="">雷达</span>
              </div>
            </div>
            <div class="info_r_bot_bot">
              <div class="bot_l">
                <ul class="info_r_bot_icon l">
                  <li><img src="./ocea_01.png" alt="">
                    <p>台站</p></li>
                  <li><img src="./ocea_02.png" alt=""><p>浮标</p></li>
                  <li><img src="./ocea_07.png" alt="">
                    <p>潜标</p></li>
                  <li><img src="./ocea_03.png" alt=""><p>飞机</p></li>
                </ul>
                <ul class="info_r_bot_icon l">
                  <li><img src="./ocea_04.png" alt="">
                    <p>雷达</p></li>
                  <li><img src="./qianqi.png" alt="">
                    <p>潜器</p></li>
                  <li><img src="./ocea_06.png" alt="">
                    <p>船舶</p></li>
                  <li><img src="./more.png" alt=""><p>更多</p></li>
                </ul>
              </div>
              <div class="bot_r">
                <div id="chart2"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>


</template>
<script type="es6">
  import echarts from 'echarts'
  import $ from 'jquery'

  export default {
    data (){
      return {
        clickData: [{}, {}, {}],
        checkboxGroup: [],
        tableData2: [{
          date: '台站',
          name: '100',
          address: '100',
          num: '0',
          all: '100'
        }, {
          date: '雷达',
          name: '100',
          address: '100',
          num: '0',
          all: '100'
        }, {
          date: '浮标',
          name: '100',
          address: '100',
          num: '0',
          all: '100'
        }, {
          date: '潜器',
          name: '100',
          address: '100',
          num: '0',
          all: '100'
        }, {
          date: '潜标',
          name: '100',
          address: '100',
          num: '0',
          all: '100'
        }, {
          date: '船舶',
          name: '100',
          address: '100',
          num: '0',
          all: '100'
        }, {
          date: '飞机',
          name: '100',
          address: '100',
          num: '0',
          all: '100'
        }]
      }
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
    },
    mounted (){
      let oceanHeight = document.documentElement.clientHeight
      oceanHeight = oceanHeight < 800 ? 800 : oceanHeight
      $('.info_r_mid').css('margin-top', oceanHeight * 0.8*.02)
      $('.info_r_bot').css('margin-top', oceanHeight * 0.8*.02)
      $('.info_r_bot_bot').height(oceanHeight * .8 * .32 - 37 - 8)
      let info_r_botW = $('.info_r_bot_bot').width()
      let info_r_botH = $('.info_r_bot_bot').height()

      $(".bot_r").width(info_r_botW - 82 - 5 - 10 - 5)
      $(".bot_r").height(info_r_botH)

      let option = {
        color: ['#3398DB'],
        title: {
          text: '北海 设备总计：25',
          x: '19%',
          y: '85%',
          backgroundColor: '#ccc',
          borderRadius: 7, textStyle: {
            fontStyle: 'normal',
            fontWeight: '400',
            //字体系列
            fontFamily: 'sans-serif',
            //字体大小
            fontSize: 13,

          }
        },
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        // legend: {
        //   data:['台站','雷达','浮标','潜标','船舶']
        // },
        grid: {
          // left: '3%',
          // right: '1%',
          bottom: '20%',
          top: '1%',
          // containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            data : ['在建', '在库', '在用', '待检', '送检', '待报废'],
            show: false,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'雷达',
            type:'bar',
            barWidth: '30%',
            data:[3, 5, 2, 1, 6, 8],
            itemStyle: {
              //通常情况下：
              normal:{
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params){
                  var colorList = ['#0babfe', '#4884aa', '#6db821', '#ffad1e', '#4bceaf', '#a360fe'];
                  return colorList[params.dataIndex];
                }
              },
              //鼠标悬停时：
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
          }
        ]
      };
      let myChart_1 = echarts.init(document.getElementById("chart_1"));
      let myChart_2 = echarts.init(document.getElementById("chart_2"));
      let myChart_3 = echarts.init(document.getElementById("chart_3"));
      var ol_all = option

      myChart_1.setOption(option)
      var option4 = ol_all
      option4.title.text = '东海 设备总计：25'
      myChart_2.setOption(option4)
      var option5 = ol_all
      option4.title.text = '南海 设备总计：25'
      myChart_3.setOption(option5)

      let option2 = {
        color: ['#3398DB'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '1%',
          bottom: '2%',
          top: '2%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            data : ['在建', '在库', '在用', '待检', '送检', '待报废'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'雷达',
            type:'bar',
            barWidth: '30%',
            data:[3, 5, 2, 1, 6, 8],
            itemStyle: {
              //通常情况下：
              normal:{
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params){
                  var colorList = ['#0babfe', '#4884aa', '#6db821', '#ffad1e', '#4bceaf', '#a360fe'];
                  return colorList[params.dataIndex];
                }
              },
              //鼠标悬停时：
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
          }
        ]
      };

      let myChart2 = echarts.init(document.getElementById('chart2'));
      myChart2.setOption(option2)
      var a = true;
      $('.info_r_bot_bot .info_r_bot_icon li').on('click', function () {
        if (a) {
          $(this).css({"background": "#666"})
          a = false;
          return;
        } else {
          $(this).css({"background": ""})
          a = true;
          return;
        }


      })

    },
    created(){

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .oceaLarge
    margin-top 45px
    height 80%
    .w
      height 100%
    .ocea_info
      height 100%
      .info_l
        width 60%
        height 100%
        background #aac6ee
        border-radius 4px
        overflow hidden
        position relative
        .pointMessage
          position fixed
          display none
          top 50px
          left 50px
          width 250px
          height 200px
          background #fff
          opacity .9
          z-index 999
          i
            position absolute
            right 5px
            top 3px
          div
            padding 5px
          ul
            li
              float left
          & > p
            line-height 20px
            font-size 15px
            background #0088fe
            text-align left
            color #fff
        .ocea_info_name
          position absolute
          left 20px
          top 20px
          z-index 999
          padding 0 10px
          height 27px
          margin-left 10px
          background-color #2a3cba
          color #fff
          font-size 14px
          font-weight 700
          line-height 27px
          text-align center
        .icon_list
          img
            position absolute
            z-index 999
            &:nth-child(1)
              left 50px
              top 100px
            &:nth-child(2)
              left 150px
              top 80px
            &:nth-child(3)
              left 320px
              top 100px
            &:nth-child(4)
              left 33px
              top 64px
            &:nth-child(5)
              left 170px
              top 222px
            &:nth-child(6)
              left 50px
              top 100px
            &:nth-child(7)
              left 110px
              top 200px
        #map
          width 100%
          height 100%
          background url("/static/img/nanbeiji.png") no-repeat center top
        /* background-size cover*/
        .info_l_list
          position relative
          ul
            position absolute
            right 20px
            top 80px
            z-index 999
            &>li
              width 68px
              height 65px
              /*line-height 74px*/
              margin-top 4px
              border-radius 5px
              text-align center
              cursor pointer
              box-shadow 0 0 20px 0 rgba(0,0,0,0.18)
              &:nth-child(1)
                background-color #0babfe
              &:nth-child(2)
                background-color #4884aa
              &:nth-child(3)
                background-color #6db821
              &:nth-child(4)
                background-color #ffad1e
              &:nth-child(5)
                background-color #4bceaf
              &:nth-child(6)
                background-color #a360fe
              &:nth-child(7)
                background-color #79a0ef
                position relative
                .info_hidde
                  position absolute
                  top -73px
                  right 74px
                  width 292px
                  transition all 0.5s
                  opacity 0
                  visibility hidden
                  li
                    float left
                    margin-left 5px
                &:hover
                  .info_hidde
                    transition all 0.5s
                    visibility visible
                    opacity 1
              img
                width 30px
                padding-top 6px
              p
                font-size 16px
                color #fff
                text-align center
                padding-top 2px
              &:hover
                background-color #ccc

      .info_r
        width 39%
        height 100%
        margin-left 1%
        .info_r_top
          padding-top 5px
          box-sizing border-box
          height 32%
          background-color #fff
          border-radius 4px
          overflow hidden
          .chart_name
            height 26px
            margin-left 10px
            padding-bottom 12px
            text-align center
            .l
              width 95px
              height 26px
              background-color #2a3cba
              p
                font-size 14px
                line-height 26px
                color #fff
                font-weight 700
            .char_r
              width 80%
              .el-checkbox__input.is-checked+.el-checkbox__label
                color #fff
              .el-checkbox.is-bordered.el-checkbox--mini
                padding 3px 5px 0px 5px
          &>div
            width 100%
            height 84%
            #chart_1
              height 100%
              float left
              width 33%
            #chart_2
              height 100%
              float left
              width 33%
            #chart_3
              height 100%
              float left
              width 33%
        .info_r_mid
          height 32%
          padding 5px
          box-sizing border-box
          overflow hidden
          background-color #fff
          border-radius 4px
          overflow hidden
          .info_r_mid_info
            width 150px
            height 27px
            margin-left 10px
            background-color #2a3cba
            color #fff
            font-size 14px
            font-weight 700
            line-height 27px
            text-align center
          .info_r_mid_tab
            text-align center
            height 100%
            padding-top 10px
            overflow hidden
        .info_r_bot
          height 32%
          padding 5px
          box-sizing border-box
          background-color #fff
          border-radius 4px
          overflow hidden
          .info_r_bot_top
            .info_r_bot_info
              width 150px
              height 27px
              margin-left 10px
              background-color #2a3cba
              color #fff
              font-size 14px
              font-weight 700
              line-height 27px
              text-align center
            .info_r_bot_r
              display inline-block
              width 65px
              height 27px
              margin-right 10px
              background #4bceaf
              color #fff
              font-size 14px
              line-height 27px
              text-align center
          .info_r_bot_bot
            margin-top 8px
            margin-left 10px
            position relative
            .bot_l
              position absolute
              top 50%
              margin-top -77px
              .info_r_bot_icon
                margin-right 2px
                li
                  width 39px
                  height 40px
                  background #ccc
                  text-align center
                  border-radius 2px
                  vertical-align middle
                  margin-top 2px
                  img
                    width 20px
                  p
                    color #fff
                    font-size 12px
                  &:hover
                    cursor pointer
                    background-color green
                &:first-child
                  li
                    &:nth-child(1)
                      background-color #0babfe
                    &:nth-child(2)
                      background-color #5c6275
                    &:nth-child(3)
                      background-color #6db821
                    &:nth-child(4)
                      background-color #ffad1e
                &:last-child
                  li
                    &:nth-child(1)
                      background-color #4bceaf
                    &:nth-child(2)
                      background-color #a360fe
                    &:nth-child(3)
                      background-color #79a0ef
                    &:nth-child(4)
                      background-color #5c6275

            .bot_r
              height 100%
              position absolute
              margin-left 86px
              #chart2
                width 100%
                height 100%
                background-color #ccc


</style>
