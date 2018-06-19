<template>
  <div class="yearChark">
    <div class="w">
      <div class="yearChark_info">
        <div class="title_all_bottom_line" align="left">
          <div class="title_text" style="border-left:4px #0abafe solid">
            年度核查
          </div>
          <div class="yearChark_bottom_info" align="right">
            <el-button class="yearChark_bottom_button" size="mini">&nbsp;&nbsp;批量确认&nbsp;&nbsp;</el-button>
            <el-button class="yearChark_bottom_button" size="mini">&nbsp;&nbsp;全部确认&nbsp;&nbsp;</el-button>
            <el-button class="yearChark_bottom_button" size="mini">&nbsp;&nbsp;信息补全&nbsp;&nbsp;</el-button>
          </div>

        </div>
        <!--表格组件-->
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
              type="selection"
              width="55"
              align="center">
            </el-table-column>
            <el-table-column
              prop="seqno"
              align="center"
              label="序号">
            </el-table-column>
            <el-table-column
              prop="type"
              align="center"
              label="类型">
            </el-table-column>
            <el-table-column
              prop="xinhao"
              align="center"
              label="型号">
            </el-table-column>
            <el-table-column
              prop="bianhao"
              align="center"
              label="编号">
            </el-table-column>
            <el-table-column
              prop="status"
              align="center"
              label="状态">
            </el-table-column>
            <el-table-column
              prop="usecompany"
              align="center"
              label="使用单位">
            </el-table-column>
            <el-table-column
              prop="num"
              align="center"
              label="备注">
            </el-table-column>
            　
            <el-table-column label="操作" align="center" width="250">
              　　　　
              <template slot-scope="scope">
                <el-button class="yearChark_bottom_button" size="mini">&nbsp;&nbsp;信息确认&nbsp;&nbsp;</el-button>
                <v-if>
                  <el-button class="yearChark_bottom_button" size="mini">编辑</el-button>
                </v-if>
                　　　　
              </template>
              　　
            </el-table-column>
          </el-table>
          <div align="right">
            <el-pagination
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>
<script type="es6">
  import echarts from 'echarts'
  import regTitle from './../title/Title'
  import regTable from './../table/Table'

  export default {
    data() {
      var type = ["飞机", "船舶", "潜器", "卫星"];
      var status = ["正常使用", "待报废", "丢失", "损坏"];
      var station = ["厦门中心站", "青岛中心站", "武汉中心站", "天津中心站", "国家海洋局研究所", "北京中心站", "东海预报站"];

      var data = [];
      for (var i = 1; i <= 12; i++) {
        data.push({
          seqno: i,
          type: type[Math.floor(Math.random() * (type.length))],
          xinhao: "P" + Math.floor(Math.random() * (10000)),
          bianhao: Math.floor(Math.random() * (100)),
          status: status[Math.floor(Math.random() * (status.length))],
          usecompany: station[Math.floor(Math.random() * (station.length))],
          num: '================',
          'other': ''
        });
      }
      return {
        titL_Top: '各类装备的资产总值',
        //titL_Bot: '北极装备实时统计地图',
        topList: ['海洋站', '船舶', '潜艇', '雷达', '浮标', '潜标', '飞机'],
        iconsChart: [
          {name: '海洋站'},
          {name: '浮标'},
          {name: '海床基'},
          {name: '海啸浮标'},
          {name: '雷达'}
        ],
        dataTable: data
      }
    },
    methods: {
      listChoose: (el) => {
        // el.target
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
      var data = [290, 413, 248, 305, 180, 143, 346];
      var xMax = 500;
      let optionPolling = {
        tooltip: {
          show: true,
          formatter: "{b} <br> {c}百万"
        },
        grid: {
          x: -10,
          y: 40,
          x2: 13,
          y2: 10,
          borderWidth: 1,
          containLabel: true
        },
        xAxis: [{
          type: 'value',
          axisLine: {
            show: true,
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#000',
              fontSize: '14'
            }
          },
          splitLine: {
            show: true,
            // color:'#fff',
          }
        }],
        yAxis: [{
          type: 'category',
          data: ['海洋站', '船舶', '潜艇', '雷达', '潜标', '浮标', '飞机'],
          boundaryGap: [0, 0.01],
          name: '名称',
          axisLabel: {
            interval: 0,//横轴信息全部显示
            rotate: -30,//-30度角倾斜显示
          },
          axisTick: {
            // color:'#fff',
            show: false,
          },
          axisLine: {
            //  color:'#fff',
            show: true,
          },
          splitLine: {
            show: false,
            // color:'#fff',
          },
          axisLabel: {
            show: true,
          }
        }],
        series: [{
          name: ' ',
          type: 'bar',
          barWidth: 12,
          silent: true,
          itemStyle: {
            normal: {
              color: '#FFF',
              barBorderRadius: [0, 5, 5, 0],
            }
          },
          barGap: '-100%',
          barCategoryGap: '50%',
          data: data.map(function (d) {
            return xMax
          }),
        }, {
          name: ' ',
          type: 'bar',
          barWidth: 12,
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: '{c}百万',
            }
          },
          data: [{
            name: 'asdfasfsdf',
            value: 295,
            itemStyle: {
              normal: {color: '#0BABFE', barBorderRadius: [0, 10, 10, 0],}
            }
          }, {
            value: 413,
            itemStyle: {
              normal: {color: '#79A0EF', barBorderRadius: [0, 10, 10, 0],}

            }
          }, {
            value: 248,
            itemStyle: {
              normal: {color: '#A360FE', barBorderRadius: [0, 10, 10, 0],}

            }
          }, {
            value: 305,
            itemStyle: {
              normal: {color: '#4BCEAF', barBorderRadius: [0, 10, 10, 0],},
            }
          }, {

            value: 180,
            itemStyle: {
              normal: {color: '#6DB820', barBorderRadius: [0, 10, 10, 0],}
            }
          }, {

            value: 143,
            itemStyle: {
              normal: {color: '#5C6175', barBorderRadius: [0, 10, 10, 0],}
            }
          },
            {
              value: 346,
              itemStyle: {
                normal: {color: '#FFAC1E', barBorderRadius: [0, 10, 10, 0],}
              }
            },]
        }]
      }
      let myChart_1 = echarts.init(document.getElementById('chartPolling'))
      myChart_1.setOption(optionPolling);
      //总数量年底趋势图
      let bottom_right_option = {
        title: {
          //text: '未来一周气温变化',
          //subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['海洋站']
        },
        toolbox: {
          show: false,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['2014', '2015', '2016', '2017', '2018']
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '海洋站',
            type: 'line',
            itemStyle: {
              normal: {
                color: '#0BABFF',
                label: {
                  show: true,
                  position: 'top',
                  formatter: '{b}\n{c}'
                }
              }
            },
            data: [20, 59, 23, 79, 75],
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          }
        ]
      };


      let bottom_right_chart = echarts.init(document.getElementById('bottom_right_chart_panel'))
      bottom_right_chart.setOption(bottom_right_option);

      window.timer4 = setInterval(function () {
        $('.icon_list img').each(function (index, val) {
          let a = Math.random() * 200
          let b = Math.random() * 700
          $(val).css({"left": b + 'px', 'top': a + 'px'})
        })
      }, 2000);
    },
    created() {
    },
    components: {
      'v-title': regTitle,
      'v-table': regTable
    },
    beforeRouteLeave(to, from, next) {
      clearInterval(window.timer4)
      next()
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .yearChark
    margin-top 55px
    height 80%
    .w
      height 100%
      background #ffffff
      .yearChark_info
        width 100%
        height 100%
        float left
        position relative
        .elTable
          height 85%
          overflow hidden
          margin-top 20px
          padding 0px
          .el-table__body-wrapper
            width 101% !important
            height 100%
            overflow hidden !important
          .yearChark_bottom_button
            background-color #A8A8A8
            color white
      .yearChark_bottom_info
        align center
        top 50px
        .yearChark_bottom_button
          background-color #2a3cba
          color white
          font-size 16px
      .title_all_bottom_line
        border 1px solid lightgray
        border-top 0px
        border-left 0px
        border-right 0px
        .title_text
          cursor: pointer;
          height: 27px;
          padding: 0 5px;
          margin-left: 5px;
          margin-top: 5px;
          background-color: #ffffff;
          color: #000000
          font-size: 14px;
          font-weight: 700;
          line-height: 27px;
          text-align: left;
          width 120px
</style>
