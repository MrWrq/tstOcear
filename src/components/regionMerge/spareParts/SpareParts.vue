<template>
  <div class="spareParts">
    <div class="w">
      <div class="region_info">
        <div class="region_info_l">
          <div class="info_l_top">
            <v-title :message="titL_Top"></v-title>
            <div class="chart_top">
              <div id="chart_top"></div>
            </div>
          </div>
          <div class="info_l_bot">
            <v-title :message="titL_Bot"></v-title>
            <div class="chart_top2">
              <div id="chart_top2"></div>
            </div>
          </div>
        </div>
        <div class="region_info_r">
          <div class="info_r_top">
            <!--提示组件-->
            <v-title :message="titR_Top"></v-title>
            <!--表格组件-->
            <div class="r_top_icon">
              <v-icon :icons='icons'></v-icon>
            </div>

            <div class="r_top_chart">
              <div id="chart_r"></div>
            </div>


          </div>
          <div class="info_r_bot">
            <v-title :message="titR_Bot"></v-title>

            <div class="elTable">
              <el-table
                :data="dataTable"
                style="width: 100%"
                fixed
                stripe
                border
                size="mini"
                header-align="center"
                :row-class-name="tableRowClassName">
                <el-table-column
                  prop="date"
                  align="center"
                  width="55"
                  sortable
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="all"
                  align="center"
                  label="设备类型">
                </el-table-column>
                <el-table-column
                  prop="name"
                  align="center"
                  label="设备编号">
                </el-table-column>
                <el-table-column
                  prop="address"
                  align="center"
                  label="负责人">
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  label="存储地点">
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="mini"
                               style="display: inline-block;width: 80%;height: 80%; background-color: #7f8180;color:#fff;">
                      查看详情
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>


</template>
<script type="es6">
  import regTitle from './../../minModule/title/Title'
  import regTable from './../../minModule/table/Table'
  import icon from './../../minModule/icon/Icon'
  import normal from './../../minModule/normal/Normal'
  import echarts from 'echarts'

  export default {
    data() {
      return {
        titL_Top: '资金投入',
        titL_Bot: '当年不同类型设备备品备件数',
        titR_Top: '当年不同种类设备数量构成',
        titR_Bot: '数据清单区域',
        topList_1: ['浮标', '漂流浮标', '智能台站', '海床基'],
        dataTable: [
          {date: '1', name: 'B242', address: '王建国', num: '北极站一号库房', all: '海洋站', name1: '浮标'},
          {date: '2', name: 'F20', address: '王建国', num: '北极站一号库房', all: '浮标', name1: '浮标1'},
          {date: '3', name: 'B242', address: '王建国', num: '北极站一号库房', all: '海洋站', name1: '浮标2'},
          {date: '4', name: 'F20', address: '王建国', num: '北极站一号库房', all: '浮标', name1: '浮标3'},
          {date: '5', name: 'F20', address: '王建国', num: '北极站一号库房', all: '海洋站', name1: '浮标4'},
          {date: '2', name: 'F20', address: '王建国', num: '北极站一号库房', all: '浮标', name1: '浮标1'},
          {date: '2', name: 'F20', address: '王建国', num: '北极站一号库房', all: '浮标', name1: '浮标1'},
        ],
        icons: [
          {name: '海洋站', url: 'static/img/1.png', bgColor: '#ffad1b'},
          {name: '浮标', url: 'static/img/2.png', bgColor: '#ef6481'},
          {name: '潜标', url: 'static/img/3.png', bgColor: '#fc5d1b'},
          {name: '雷达', url: 'static/img/4.png', bgColor: '#49ceb1'},
        ],
      }
    },
    methods: {
      listChoose: (el) => {
        // el.target
      },
      handleClick(row) {
        console.log(row);
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }

    },
    mounted() {
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          name: '年份',
          type: 'category',
          boundaryGap: true,
          data: ['2013', '2014', '2015', '2016', '2017', '2018']
        },
        yAxis: {
          name: '百万',
          type: 'value',
        },
        series: [{
          data: [901, 932, 820, 934, 1290, 1330],
          markPoint: {
            data: [
              {type: 'max', name: '最大值'},
              {type: 'min', name: '最小值'}
            ],
            itemStyle: {
              normal: {
                color: '#c69fa0',
                borderColor: '#c69fa0',
                borderWidth: 1,            // 标注边线线宽，单位px，默认为1
                label: {
                  show: true
                }
              }
            },
          },
          type: 'line',
          itemStyle: {
            normal: {
              lineStyle: {
                color: '#96bbc3'
              },
              areaStyle: {
                color: 'rgba(150,187,195,.7)'
              }
            }
          },
        }]
      };
      let myChart_top = echarts.init(document.getElementById('chart_top'));
      myChart_top.setOption(option)


      let option2 = {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: [
          {
            type: 'category',
            name: '类型',
            data: ['海洋站', '浮标', '潜标', '雷达'],
            // axisTick: {
            //   alignWithLabel: true
            // }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '数量',
            max: 45,
            splitNumber: 5,
            axisTick: {
              show: true
            }
          }
        ],
        series: [
          {
            type: 'bar',
            barWidth: '20%',
            data: [20, 40, 30, 6],
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
          }
        ]
      };
      let myChart_top2 = echarts.init(document.getElementById('chart_top2'));
      myChart_top2.setOption(option2)

      let option_r = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        color: ["#ffad1b", "#ef6481", "#fc5d1b", "#49ceb1"],
        title: {
          // text: '南极',
          // x:'center',
          // y:'80%'
        },
        series: [
          {
            type: 'pie',
            radius: '55%',
            center: ['50%', '45%'],
            data: [
              {value: 335, name: '海洋站'},
              {value: 310, name: '浮标'},
              {value: 234, name: '潜标'},
              {value: 135, name: '雷达'},
            ],
            label: {
              normal: {
                show: true,
                // formatter: '{b} : {c} ({d}%)',
                formatter: '{b} : {c}',
                position: 'inside'
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      let myChart_r = echarts.init(document.getElementById('chart_r'));
      myChart_r.setOption(option_r)

    },
    created() {

    },
    components: {
      'v-title': regTitle,
      'v-table': regTable,
      'v-icon': icon,
      'v-normal': normal
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .spareParts
    margin-top 55px
    height 80%
    .w
      height 100%
      .region_info
        height 100%
        .region_info_l
          width 49.5%
          height 100%
          float left
          position relative
          .info_l_top
            width 100%
            height 49%
            overflow hidden
            border-radius 4px
            background #fff
            position relative
            vertical-align middle
            .chart_top
              width 100%
              height 100%
              padding-top 32px
              box-sizing border-box
              #chart_top
                width 100%
                height 100%
          .info_l_bot
            width 100%
            height 49%
            overflow hidden
            border-radius 4px
            margin-top 2%
            background #fff
            .chart_top2
              width 100%
              height 100%
              padding-top 32px
              box-sizing border-box
              #chart_top2
                width 100%
                height 100%
        .region_info_r
          float left
          border-radius 4px
          width 49.5%
          height 100%
          margin-left 1%
          .info_r_top
            width 100%
            height 49%
            padding 0 5px
            box-sizing border-box
            border-radius 4px
            background-color #fff
            position relative
            .heading
              margin-left 0px
            .r_top_icon
              position absolute
              top 53%
              left 50px
              margin-top -124px
            .r_top_chart
              width 100%
              height 100%
              box-sizing border-box
              padding 32px 5px 5px 118px
              /*background-color #2E2D3C*/
              #chart_r
                width 100%
                height 100%
          .info_r_bot
            width 100%
            height 49%
            padding 1px 5px
            box-sizing border-box
            overflow hidden
            border-radius 4px
            margin-top 2%
            background-color #fff
            .heading
              margin-left 0px
            .elTable
              margin-top 40px
              height 89%
              overflow hidden
              .el-table
                height 100%
                overflow hidden
                //border 1px solid #c6c6c6
                .el-table__body-wrapper
                  width 101% !important
                  height 100%
                  overflow hidden !important
</style>
