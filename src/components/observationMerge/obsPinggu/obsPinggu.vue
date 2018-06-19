<template>
  <div class="pingGu">
    <div class="w">
      <div class="pingGu_info">
        <div class="pingGu_top">
          <div class="top_info">
            <ul class="scheme_sider">


              <li class="active slide">
                <div class="name"><img src="./04.png" alt="">
                  <p>海洋站</p></div>
                <div class="chartMore" id="chartMore1"></div>
                <!--<div class="chartMore"><img src="./top_1.png" alt=""></div>-->

                <i class="el-icon-caret-bottom"></i>
              </li>
              <li class="slide">
                <div class="name"><img src="./leida.png" alt="">
                  <p>雷达</p></div>
                <!--<div class="chartMore"><img src="./top_1.png" alt=""></div>-->

                <div class="chartMore" id="chartMore2"></div>
                <i class="el-icon-caret-bottom"></i>
              </li>
              <li class="slide">
                <div class="name"><img src="./fubiao.png" alt="">
                  <p>浮标</p></div>
                <!--<div class="chartMore"><img src="./top_1.png" alt=""></div>-->

                <div class="chartMore" id="chartMore3"></div>
                <i class="el-icon-caret-bottom"></i>
              </li>

              <li class="slide">
                <div class="name"><img src="./piaoliufubiao.png" alt="">
                  <p>潜标</p></div>
                <!--<div class="chartMore"><img src="./top_1.png" alt=""></div>-->

                <div class="chartMore" id="chartMore4"></div>
                <i class="el-icon-caret-bottom"></i>
              </li>

              <li class="slide">
                <div class="name"><img src="./piaoliufubiao.png" alt="">
                  <p>潜标</p></div>
                <!--<div class="chartMore"><img src="./top_1.png" alt=""></div>-->

                <div class="chartMore" id="chartMore5"></div>
                <i class="el-icon-caret-bottom"></i>
              </li>
              <li class="slide">
                <div class="name"><img src="./piaoliufubiao.png" alt="">
                  <p>潜标</p></div>
                <!--<div class="chartMore"><img src="./top_1.png" alt=""></div>-->

                <div class="chartMore" id="chartMore6"></div>
                <i class="el-icon-caret-bottom"></i>
              </li>

              <!--<li class="slide">-->
              <!--<div class="name"><img src="./fubiao.png" alt=""><p>风向标1</p></div>-->
              <!--&lt;!&ndash;<div class="chartMore"><img src="./top_1.png" alt=""></div>&ndash;&gt;-->

              <!--<div class="chartMore" id="chartMore5"></div>-->
              <!--<i class="el-icon-caret-bottom"></i>-->
              <!--</li>-->
            </ul>
          </div>

          <div class="choseClick">
            <span class="click_l" @click="clickL"><img src="./arrowl.png" alt=""></span>
            <span class="click_r" @click="clickR"><img src="./arrowr.png" alt=""></span>
          </div>
        </div>
        <div class="pingGu_merge">
          <div class="pingGu_mid">
            <div class="mid_left">
              <div class="midName"><p>稳定运行周期</p></div>
              <div class="midChart" id="midChart"></div>
            </div>
            <div class="mid_right">
              <div class="midName"><p>装备综合评价指标</p></div>
              <div class="midTable">
                <el-table
                  :data="tableData2"
                  style="width: 100%"
                  fixed
                  stripe
                  border
                  size="small"
                  header-align="center"
                  :row-class-name="tableRowClassName">
                  <el-table-column
                    prop="xuhao"
                    align="center"
                    width="75"
                    label="序号">
                  </el-table-column>
                  <el-table-column
                    prop="xinghao"
                    align="center"
                    label="型号">
                  </el-table-column>
                  <el-table-column
                    prop="num"
                    align="center"
                    sortable
                    label="数量">
                  </el-table-column>
                  <el-table-column
                    prop="guzhang"
                    align="center"
                    sortable
                    label="年度故障数">
                    <template slot-scope="scope">
                      <el-tag size="smail"
                              style="padding: 0px;margin: 0px;width: 100%;border:0px;color: #f6b444;background-color:transparent;">
                        &bull;&nbsp;<span style="color:#606266;">{{scope.row.guzhang}}</span></el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="time"
                    align="center"
                    sortable
                    label="平均稳定运行时长">
                    <template slot-scope="scope">
                      <el-progress :percentage="scope.row.time*10" color="#39b885"></el-progress>
                      <span style="position: absolute;top: 0px; right: 10px;">{{scope.row.time}}个月</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="huifuTime"
                    align="center"
                    sortable
                    label="平均故障恢复时间">
                    <template slot-scope="scope">
                      <el-tag size="smail" style="border: none;color:#000;background-color: transparent;"><i
                        class="el-icon-time"></i>&nbsp;&nbsp;<span style="color:#606266;">{{scope.row.huifuTime}}</span>
                      </el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="rote"
                    align="center"
                    width="170"
                    label="用户评分">
                    <template slot-scope="scope">
                      <el-rate
                        v-model="scope.row.rote"
                        disabled
                        show-score
                        text-color="#ff9900"
                        :score-template="scope.row.rote+'分'">
                      </el-rate>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
          <div class="pingGu_bot">
            <div class="bot_left">
              <div class="midName"><p>故障恢复时间</p></div>
              <div class="botLeftChart" id="botLeftChart"></div>
            </div>
            <div class="bot_right">
              <div class="midName"><p>年度故障数趋势图</p></div>
              <div class="botRightChart" id="botRightChart"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script type="es6">
  import echarts from 'echarts'
  import regTitle from './../../minModule/title/Title'
  import regTable from './../../minModule/table/Table'

  export default {
    data() {
      return {
        tableData2: [
          {"xuhao": 1, "xinghao": '型号1', "num": "240", "guzhang": "1", "time": 4, "huifuTime": "6天", "rote": 5},
          {"xuhao": 2, "xinghao": '型号2', "num": "240", "guzhang": "1", "time": 7, "huifuTime": "7天", "rote": 4.5},
          {"xuhao": 3, "xinghao": '型号3', "num": "240", "guzhang": "1", "time": 2, "huifuTime": "4天", "rote": 4},
          {"xuhao": 4, "xinghao": '型号4', "num": "240", "guzhang": "1", "time": 7, "huifuTime": "4天", "rote": 4},
          {"xuhao": 5, "xinghao": '型号5', "num": "240", "guzhang": "1", "time": 6, "huifuTime": "3天", "rote": 3},
        ],
        clientWidth: '',
        count_l: 1,
        count_r: 1,


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
      clickL() {
        this.count = 1
        var offLeft = parseInt($('.scheme_sider').css('marginLeft'))
        var _w = this.clientWidth * .9 * .325 + this.clientWidth * .9 * .0125
        if (offLeft < 0) {
          return;
        } else {
          $('.scheme_sider').animate({"margin-left": (offLeft - _w * this.count_l) + 'px'})
          $('.click_l').hide(200)
          $('.click_r').show()

        }


      },
      clickR() {
        this.count_r = 1
        var offLeft = parseInt($('.scheme_sider').css('marginLeft'))
        var _w = this.clientWidth * .9 * .325 + this.clientWidth * .9 * .0125
        if (offLeft >= 0) {
          // $('.scheme_sider').css("margin-left" , 0+'px')
          return;
        } else {
          $('.scheme_sider').animate({"margin-left": (offLeft + _w * this.count_r) + 'px'})
          $('.click_r').hide(200)
          $('.click_l').show()
        }
      },

    },
    mounted() {
      let screeH = document.documentElement.clientHeight >= 800 ? document.documentElement.clientHeight : 800
      this.clientWidth = document.documentElement.clientWidth >= 1330 ? document.documentElement.clientWidth : 1330
      $('.scheme_sider li').width(this.clientWidth * .9 * .325)

      $('.scheme_sider li').css("margin-left", this.clientWidth * .9 * .0125 + 'px')
      $('.scheme_sider li:first-child').css("margin-left", 0)
      $('.scheme_sider').width(($('.scheme_sider li').lenght) * (this.clientWidth * .9 * .325) + this.clientWidth * .9 * .0125 * (($('.scheme_sider li').lenght) - 1))
      let oceanHeight = screeH * .8;
      $('.pingGu_merge').css("margin-top", oceanHeight * .02 + 'px')
      $('.pingGu_bot').css("margin-top", oceanHeight * .01 + 'px')
      $('.top_info .chartMore').height(oceanHeight * .34 - 30)
      $('.midChart').height(oceanHeight * .32 - 30)
      $('.midTable').height(oceanHeight * .32 - 30)
      $('.botLeftChart').height(oceanHeight * .31 - 30)
      $('.botRightChart').height(oceanHeight * .31 - 30)
      $('.scheme_sider').css({
        "margin-left": "0px",
        "width": this.clientWidth * .9 * .325 * ($('.scheme_sider li').length) + 'px'
      })
      $('.click_r').hide()
      // $('.scheme_sider').bxSlider({
      //   slideWidth: screeW*.8*.325,
      //   auto: false,
      //   autoHover: false,
      //   minSlides: 3,
      //   maxSlides: 3,
      //   moveSlides: 1,
      //   startSlide: 0,
      //   slideMargin: screeW*.8*.0125
      // });

      let option1 = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        color: ['#5793f3', '#d14a61', '#675bba'],
        grid: {
          top: '15%',
          left: '3%',
          right: '4%',
          bottom: '13%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          show: false
        },
        yAxis: {
          type: 'category',
          data: ['TOP1', 'TOP2', 'TOP3'],
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
        },
        series: [
          {
            name: 'TOP1',
            type: 'bar',
            barWidth: '15',
            data: [90, 80, 70],
            label: {
              normal: {
                position: 'right',
                show: true,
                formatter: '{c}分'
              },
            },
            itemStyle: {
              normal: {
                barBorderRadius: [0, 30, 30, 0],
                color: function (params) {
                  var colorList = ['#7e92e8', '#b894eb', '#7bcdf3'];
                  return colorList[params.dataIndex];
                }
              }
            },
          }
        ]
      };
      let myChart1 = echarts.init(document.getElementById('chartMore1'));
      myChart1.setOption(option1);

      let myChart2 = echarts.init(document.getElementById('chartMore2'));
      myChart2.setOption(option1);

      let myChart3 = echarts.init(document.getElementById('chartMore3'));
      myChart3.setOption(option1);

      let myChart4 = echarts.init(document.getElementById('chartMore4'));
      myChart4.setOption(option1);

      let option2 = {
        color: ['#7ecdf6'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['TOP3'],
          x2: '10%'
        },
        grid: {
          top: "18%",
          left: '10%',
          right: '12%',
          bottom: '9%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['型号1', '型号2', '型号3'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            name: '(t)',
            max: '30',
            type: 'value'
          }
        ],
        series: [
          {
            name: 'TOP3',
            type: 'bar',
            barWidth: '15%',
            data: [22, 13, 24],
            itemStyle: {
              normal: {
                barBorderRadius: [30, 30, 0, 0],
              }
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          }
        ]
      };
      let myChart_mid = echarts.init(document.getElementById('midChart'));
      myChart_mid.setOption(option2);
      let myChart_left = echarts.init(document.getElementById('botLeftChart'));
      myChart_left.setOption(option2);

      let allasysoption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['型号1', '型号2', '型号3', "平均值"]
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          x: 'right',
          y: 'center',
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '故障数',
            min: 0,
            max: 15,
            splitNumber: 8
          }
        ],
        series: [
          {
            name: '型号1',
            type: 'line',
            smooth: true,
            barWidth: 12,
            data: [3, 2, 1, 5, 6, 3, 2, 1, 5, 3, 2, 1],
            itemStyle: {
              normal: {color: '#0BABFE'}
            }
          },
          {
            name: '型号2',
            type: 'line',
            smooth: true,
            barWidth: 18,
            data: [3, 2, 1, 2, 1, 5, 7, 5, 3, 2, 1, 3],
            itemStyle: {
              normal: {color: '#79A0EF'}
            }
          },
          {
            name: '型号3',
            type: 'line',
            smooth: true,
            data: [4, 1, 5, 8, 8, 6, 5, 6, 8, 9, 11, 3],
            itemStyle: {
              normal: {color: '#A360FE'}
            }
          },
          {
            name: '平均值',
            type: 'line',
            smooth: true,
            data: [3, 2, 2, 5, 4, 1, 5, 8, 6, 8, 9, 7],
            itemStyle: {
              normal: {color: '#90EE90'}
            }
          },]
      };
      let botRightChart = echarts.init(document.getElementById("botRightChart"));
      botRightChart.setOption(allasysoption);

      $('.top_info ul li').on('click', function () {
        $('.top_info ul li').each(function (key, val) {
          $(val).removeClass("active")
        })
        $(this).addClass("active")
      })


    },
    created() {
    },
    components: {
      'v-title': regTitle,
      'v-table': regTable
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .pingGu
    margin-top 55px
    height 80%
    .w
      height 100%
      .pingGu_info
        width 100%
        height 100%

        .pingGu_top
          width 100%
          height 34%
          position relative
          .choseClick
            height 100%
            span
              display inline-block
              width 30px
              height 100%
              top 0
              position absolute
              img
                height 30px
                display inline-block
                position absolute
                top 50%
                margin-top -15px
                vertical-align middle
                text-align center
              &:hover
                cursor pointer
            .click_l
              left -30px
            .click_r
              right -40px
          .top_info
            width 100%
            height 100%
            overflow hidden
            position relative /*.clickL
              height 100%
              width 70px
              background-color rgba(26,37,117,.8)
              box-shadow 10px 0 0 10px rgba(26,37,117,.8)
              position absolute
              cursor pointer
              right 0px
              top 0
              &:hover
                opacity .7*/
            .bx-wrapper
              max-width 100% !important
              height 100%
              margin 0px !important
            ul
              height 100%
              li
                cursor pointer
                /*width 32.5%*/
                height 100%
                float left
                box-sizing border-box
                /*margin-left 1.25%*/
                border-radius 4px
                overflow hidden
                background-color #fff
                position relative
                i
                  display none
                &.active
                  i
                    color #fff
                    display block
                    position absolute
                    left 50%
                    margin-left -13px
                    font-size 26px
                    bottom -15px
                    z-index 99
                .name
                  width 100%
                  height 40px
                  text-align center
                  img
                    width 23px
                    position absolute
                    left 6px
                    top 8px
                  p
                    text-align center
                    line-height 40px
                    color #fff
                    font-size 15px
                &:nth-child(1)
                  margin-left 0px
                  .name
                    background-color #0bacfd
                &:nth-child(2)
                  .name
                    background-color #3cbb9d
                &:nth-child(3)
                  .name
                    background-color #5c6175
                &:nth-child(4)
                  .name
                    background-color #4b8440
                &:nth-child(5)
                  .name
                    background-color #0bacfd
                &:nth-child(6)
                  .name
                    background-color #3cbb9d
                &:nth-child(7)
                  .name
                    background-color #5c6175
                &:nth-child(8)
                  .name
                    background-color #4b8440
                &:nth-child(9)
                  .name
                    background-color #5c6175
                &:nth-child(10)
                  .name
                    background-color #4b8440
                .chartMore
                  width 100%
                  padding-left 10px
                  img
                    width 80% !important
                    padding-top 50px
                    padding-left 10px
        .pingGu_merge
          width 100%
          height 64%
          border-radius 4px
          overflow hidden
          .pingGu_mid
            width 100%
            height 50%
            border-radius 4px
            overflow hidden
            .mid_left
              width 32.5%
              height 100%
              border-radius 4px
              float left
              background-color #fff
              .midName
                height 16px
                line-height 16px
                padding-left 8px
                margin-left 10px
                margin-top 10px
                border-left 3px solid #38bdf8
                p
                  font-weight 700
                  font-size 15px
              .midChart
                width 100%
            .mid_right
              width 66.25%
              margin-left 1.25%
              height 100%
              border-radius 4px
              float left
              background-color #fff
              .midName
                height 16px
                line-height 16px
                padding-left 8px
                margin-left 10px
                margin-top 10px
                border-left 3px solid #38bdf8
                p
                  font-weight 700
                  font-size 15px
              .midTable
                margin-top 10px
                padding-left 10px
                padding-right 10px
                box-sizing border-box
          .pingGu_bot
            width 100%
            height 49%
            border-radius 4px
            /*overflow hidden*/
            .midName
              height 16px
              line-height 16px
              padding-left 8px
              margin-left 10px
              margin-top 10px
              border-left 3px solid #38bdf8
              p
                font-weight 700
                font-size 15px
            .bot_left
              width 32.5%
              float left
              /*height 100%*/
              box-sizing border-box
              border-radius 4px
              overflow hidden
              background-color #fff
            .bot_right
              width 66.25%
              float left
              /*height 100%*/
              margin-left 1.25%
              box-sizing border-box
              border-radius 4px
              overflow hidden
              background-color #fff
              .botRightChart
                width 100%
                border-radius 4px
              .botLeftChart
                width 100%
                border-radius 4px


</style>
