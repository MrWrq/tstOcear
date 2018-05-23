<template>
  <div class="about_score">
    <div class="w">
      <div class="ocea_info">
        <div class="info_top">
          <div class="list">
            <ul>
              <li>
                <div class="li_top">
                  <img src="./16.png" alt="">
                  <p>海洋站</p>
                </div>
                <div class="li_bot">
                  <div id="chart_l"></div>
                  <!--<img src="./top_1.png" alt="">-->
                </div>
              </li>
              <li>
                <div class="li_top">
                  <img src="./16.png" alt="">
                  <p>海洋站</p>
                </div>
                <div class="li_bot">
                  <img src="./top_1.png" alt="">
                </div>
              </li>
              <li>
                <div class="li_top">
                  <img src="./16.png" alt="">
                  <p>海洋站</p>
                </div>
                <div class="li_bot">
                  <img src="./top_1.png" alt="">
                </div>
              </li>
              <li>
                <div class="li_top">
                  <img src="./16.png" alt="">
                  <p>海洋站</p>
                </div>
                <div class="li_bot">
                  <img src="./top_1.png" alt="">
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="info_mid">
          <div class="mid_info_l l">
            <div class="mid_name">
              <p>稳定运行周期</p>
            </div>
            <div class="mid_chart">
              <img src="./mid_1.png" alt="">
            </div>
          </div>
          <div class="mid_info_r l">
            <div class="mid_name">
              <p>装备综合评定指标</p>
            </div>
            <div class="mid_table">
              <el-table
                :data="tableData2"
                style="width: 100%"
                fixed
                stripe
                size="small"
                header-align="center"
                :row-class-name="tableRowClassName">
                <el-table-column
                  prop="title"
                  align="center"
                  width="80"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="name"
                  align="center"
                  sortable
                  label="型号">
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  label="数量">
                </el-table-column>
                <el-table-column
                  align="center"
                  sortable
                  label="年度故障数">
                  <template slot-scope="scope">
                    <i class="el-icon-warning"></i>
                    <span style="margin-left: 10px">{{ scope.row.break }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="endTime"
                  align="center"
                  min-width="110"
                  label="平均稳定运行时长">
                  <template slot-scope="scope">
                    <el-progress :percentage="70"></el-progress>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  label="平均故障恢复时间">
                  <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.startTime }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  min-width="110"
                  label="用户评分">
                  <template slot-scope="scope">
                    <el-rate
                      v-model="scope.row.score"
                      disabled
                      show-score
                      text-color="#ff9900">
                    </el-rate>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>

        <div class="info_bot">
          <div class="mid_info_l l">
            <div class="mid_name">
              <p>故障恢复时间</p>
            </div>
            <div class="mid_chart">
              <img src="./mid_1.png" alt="">
            </div>
          </div>
          <div class="mid_info_r l">
            <div class="mid_name">
              <p>年度故障数的趋势图</p>
            </div>
            <div class="mid_table">
              <div id="last_chart"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script type="es6">
  import echarts from 'echarts'

  export default {
    data() {
      return {
        value5: '2.7',
        tableData2: [{
          title: '1',
          name: '台站',
          num: '23',
          startTime: '7个月',
          endTime: '5个月',
          break: '5',
          score: '3'
        }, {
          title: '1',
          name: '台站',
          num: '23',
          startTime: '7个月',
          endTime: '5个月',
          break: '35',
          score: '2'
        }, {
          title: '1',
          name: '台站',
          num: '23',
          startTime: '7个月',
          endTime: '5个月',
          break: '35',
          score: '2'
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
    mounted() {
      let screeH = document.documentElement.clientHeight
      // $('.about_score').height(screeH)
      $('.li_bot').css("line-height", ($('.li_bot').height() - 40) + 'px')
      $('.info_mid').css('margin-top', screeH * .8 * .015)
      $('.info_bot').css('margin-top', screeH * .8 * .015)
      let option_l = {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '1%',
          bottom: '1%',
          top: '4%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value',
            show: false,
            max: 100,
            name: '(千万元)',
            axisTick: {
              alignWithLabel: false
            }
          }
        ],
        yAxis: [
          {
            type: 'category',
            data: ['Top1', 'Top2', 'Top3'],
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: '#fff',
                width: 1,//这里是为了突出显示加上的
              }
            }
          }
        ],
        series: [
          {
            name: '雷达',
            type: 'bar',
            barWidth: '30%',
            data: [60, 80, 70],
            label: {
              normal: {
                show: true,
                position: 'right',
                textStyle: {
                  //  color: '#ddd'
                }
              }
            },
            itemStyle: {
              //通常情况下：
              normal: {
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params) {
                  var colorList = ['#5c6275', '#4bceaf', '#ffad1e'];
                  return colorList[params.dataIndex];
                },
                barBorderRadius: 15,
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

      let myChart_l = echarts.init(document.getElementById('chart_l'));
      myChart_l.setOption(option_l)


      let option = {
        tooltip: {
          trigger: 'axis',
          formatter: function (params, ticket) {
            var text = "<center><b>" + params[0].name + "故障数" + "</center></b>";
            var legendData = option.legend.data;
            for (var i = 0; i < legendData.length; i++) {
              for (var j = 0; j < params.length; j++) {
                if (params[j].seriesName == legendData[i]) {
                  text = text + '&nbsp;&nbsp;&nbsp;&nbsp;' + option.series[params[j].seriesIndex].mc + ' : ' + params[j].data + "  台<br/>";
                }
              }
            }
            return text;
          },
          fontSize: 9,

        },
        color: ["#EC870E", "#50A625", "#00A06B"],
        legend: {
          top: 5,
          right: 10,
          data: ['型号1', '型号2', '型号3']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          name: '月份',
          boundaryGap: false,
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        },
        yAxis: [{
          type: 'value',
          name: '故障数',
          axisLabel: {
            formatter: '{value}'
          },
          min: 200,
          max: 240
        }],
        dataZoom: [{
          type: 'inside',
          start: 0,
          end: 50
        }, {
          show: true,
          type: 'slider',
          y: '90%',
          start: 0,
          end: 50
        }],
        series: [
          {
            name: '型号1',
            mc: '型号1',
            type: 'line',
            smooth: true,
            data: [223.18, 223.44, 221.62, 222.48, 222.35, 224.56,
              223.32, 223.71, 222.77, 221.49, 224.79, 223.70]
          },
          {
            name: '型号2',
            mc: '型号2',
            type: 'line',
            smooth: true,
            data: [216.71, 215.14, 223.03, 214.99, 215.00, 213.21,
              216.09, 217.38, 214.79, 218.46, 213.53, 212.81]
          },
          {
            name: '型号3',
            mc: '型号3',
            type: 'line',
            smooth: true,
            data: [236.71, 235.14, 223.03, 234.99, 235.00, 233.23,
              236.09, 237.38, 234.79, 238.46, 233.53, 232.81]
          }]
      }

      let myChart = echarts.init(document.getElementById('last_chart'));
      myChart.setOption(option)
    },
    created() {

    },
    components: {}
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .about_score
    margin-top 55px
    height 80%
    .w
      height 100%
      /*background-color #ccc*/
      .ocea_info
        height 100%
        .info_top
          height 32.3%
          /*background-color #0babfe*/
          .list
            width 100%
            height 100%
            overflow hidden
            ul
              /*width 100%*/
              height 100%
              li
                width 28%
                height 100%
                margin-left 1%
                /*display inline-block*/
                float left
                position relative
                border-radius 4px
                overflow hidden
                background-color #fff
                &:first-child
                  margin-left 0px
                  .li_top
                    background-color #0babfe
                &:nth-child(2)
                  .li_top
                    background-color #3dbb9d
                &:nth-child(3)
                  .li_top
                    background-color #5c6175
                &:nth-child(4)
                  .li_top
                    background-color #478044
                .li_top
                  width 100%
                  height 40px
                  line-height 40px
                  color #fff
                  text-align center
                  background-color #0babfe
                  img
                    width 30px
                    position absolute
                    left 10px
                    top 5px
                  p
                    font-size 16px
                .li_bot
                  width 100%
                  height 80%
                  text-align center
                  #chart_l
                    width 100%
                    height 100%
        .info_mid
          height 32.3%
          background-color #5c6275
          .mid_info_l
            width 28%
            border-radius 4px
            height 100%
            overflow hidden
            background-color #fff
            position relative
            .mid_name
              position absolute
              left 20px
              top 15px
              padding-left 10px
              line-height 15px
              border-left 3px solid #0babfe
              p
                font-size 15px
                font-weight 700
                font-family '微软雅黑'
            .mid_chart
              width 100%
              height 100%
              padding-left 20px
              padding-top 62px
              box-sizing border-box
              img
                width 95%
          .mid_info_r
            width 71%
            height 100%
            margin-left 1%
            border-radius 4px
            overflow hidden
            position relative
            background-color #fff
            .mid_name
              position absolute
              left 20px
              top 15px
              padding-left 10px
              line-height 15px
              border-left 3px solid #0babfe
              p
                font-size 15px
                font-weight 700
                font-family '微软雅黑'
            .mid_table
              position absolute
              width 100%
              height 100%
              padding 40px 5px 5px 5px
              box-sizing border-box
            .el-icon-warning
              color #f8b551
        .info_bot
          height 32.4%
          border-radius 4px
          background-color #a4da89
          .mid_info_l
            width 28%
            border-radius 4px
            height 100%
            overflow hidden
            background-color #fff
            position relative
            .mid_name
              position absolute
              left 20px
              top 15px
              padding-left 10px
              line-height 15px
              border-left 3px solid #0babfe
              p
                font-size 15px
                font-weight 700
                font-family '微软雅黑'
            .mid_chart
              width 100%
              height 100%
              padding-left 20px
              padding-top 62px
              box-sizing border-box
              img
                width 95%
          .mid_info_r
            width 71%
            height 100%
            margin-left 1%
            border-radius 4px
            overflow hidden
            position relative
            background-color #fff
            .mid_name
              position absolute
              left 20px
              top 15px
              padding-left 10px
              line-height 15px
              border-left 3px solid #0babfe
              p
                font-size 15px
                font-weight 700
                font-family '微软雅黑'
            .mid_table
              position absolute
              width 100%
              height 100%
              padding 40px 5px 5px 5px
              box-sizing border-box
              #last_chart
                width 100%
                height 100%
            .el-icon-warning
              color #f8b551

</style>
