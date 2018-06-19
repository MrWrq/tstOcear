<template>
  <div class="tongji">
    <div class="w">
      <div class="info_top_panel">
        <div class="info_top_panel_tab">
          <div class="chartTitle clearfix">
            <ul>
              <li class="active"><a href="#"><span>海洋站</span></a></li>
              <li><a href="#"><span>船舶</span></a></li>
              <li><a href="#"><span>潜标</span></a></li>
              <li><a href="#"><span>雷达</span></a></li>
              <li><a href="#"><span>浮标</span></a></li>
            </ul>
          </div>
        </div>
        <div class="info_top_panel_content">
          <div class="info_top_left">
            <v-title :message="titBot_Left"></v-title>
            <div id="bottom_left_chart_panel"></div>
            <div class="">
              <ul>
                <li class="clearfix"><i></i><span>海洋站</span></li>
                <li><i></i><span>船舶</span></li>
                <li><i></i><span>潜艇</span></li>
                <li><i></i><span>雷达</span></li>
                <li><i></i><span>浮标</span></li>
                <li><i></i><span>潜艇</span></li>
                <li><i></i><span>飞机</span></li>
              </ul>
            </div>
          </div>
          <div class="info_bottom_mid">
            <v-title :message="titBot_Mid"></v-title>
            <div id="bottom_mid_chart_panel"></div>
          </div>
          <div class="info_bottom_right">
            <v-title :message="titBot_Right"></v-title>
            <div id="bottom_right_chart_panel"></div>
          </div>
        </div>
      </div>
      <div class="tongji_info">
        <div class="tongji_info_r">
          <div class="info_r_top">
            <!--提示组件-->
            <v-title :message="titR_Top"></v-title>
            <!--表格组件-->
            <div class="elTable">
              <el-table
                :data="dataTable"
                style="width: 100%"
                fixed
                stripe
                border
                size="small"
                header-align="center"
                :row-class-name="tableRowClassName">
                <el-table-column
                  prop="date"
                  align="center"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="all"
                  align="center"
                  sortable
                  label="设备名称">
                </el-table-column>
                <el-table-column
                  prop="address"
                  align="center"
                  sortable
                  label="在用数量">
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  sortable
                  label="当年新购数量">
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  sortable
                  label="待报废数量">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
        <div class="tongji_info_l">
          <div class="info_l_top">
            <v-title :message="titL_Top"></v-title>
            <div class="bot_chart_top_l">
              <div id="chartPolling"></div>
              <div class="chartTitle clearfix">
                <ul>
                  <li><i style="background-color:#0BABFE"></i><span>海洋站</span></li>
                  <li><i style="background-color:#79A0EF"></i><span>船舶</span></li>
                  <li><i style="background-color:#A360FE"></i><span>潜标</span></li>
                  <li><i style="background-color:#4BCEAF"></i><span>雷达</span></li>
                  <li><i style="background-color:#5C6175"></i><span>浮标</span></li>
                </ul>
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
  import regTitle from '../../minModule/title/Title'
  import regTable from '../../minModule/table/Table'

  export default {
    data (){
      return {
        titL_Top: '各类装备的资产总值',
        //titL_Bot: '北极装备实时统计地图',
        titR_Top: '各类装备构成统计',
        titR_Bot: '北极装备设备统计表',
        titBot_Left: '海区分布数量',
        titBot_Mid: '装备子系统占比',
        titBot_Right: '近五年来总数量年底趋势图',
        topList: ['海洋站', '船舶', '潜标', '雷达', '浮标'],
        iconsChart: [
          {name: '海洋站'},
          {name: '浮标'},
          {name: '海床基'},
          {name: '海啸浮标'},
          {name: '雷达'}
        ],
        dataTable:[
          {date: '1', name: '100', address: '23', num: '23', all: '海洋站', name1: '浮标'},
          {date: '2', name: '100', address: '34', num: '23', all: '船舶', name1: '浮标1'},
          {date: '3', name: '100', address: '34', num: '23', all: '潜标', name1: '浮标2'},
          {date: '4', name: '100', address: '34', num: '23', all: '雷达', name1: '浮标3'},
          {date: '5', name: '100', address: '34', num: '23', all: '浮标', name1: '浮标4'},
        ]
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
    mounted (){
      var data = [290, 413, 248, 305, 180];
      var xMax = 500;
      let optionPolling = {
        tooltip: {
          show: true,
          formatter: "{b} <br> {c}百万"
        },
        grid: {
          x: 15,
          y:40,
          x2:13,
          y2:10,
          borderWidth:1,
          containLabel: true
        },
        xAxis: [{
          type:'value',
          axisLine: {
            show: true,
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#000',
              fontSize:'14'
            }
          },
          splitLine: {
            show: true,
            // color:'#fff',
          }
        }],
        yAxis: [{
          type: 'category',
          data: ['海洋站', '船舶', '潜标', '雷达', '浮标'],
          boundaryGap: [0, 0.01],
          name: '名称',
          axisLabel:{
            interval:0,//横轴信息全部显示
            rotate:-30,//-30度角倾斜显示
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
          data: data.map(function(d) {
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
            name:'asdfasfsdf',
            value: 295,
            itemStyle: {
              normal:{color:'#0BABFE',barBorderRadius:[0,10,10,0],}
            }
          }, {
            value:413,
            itemStyle: {
              normal:{color:'#79A0EF',barBorderRadius:[0,10,10,0],}

            }
          }, {
            value: 248,
            itemStyle: {
              normal:{color:'#A360FE',barBorderRadius:[0,10,10,0],}

            }
          }, {
            value: 305,
            itemStyle: {
              normal:{color:'#4BCEAF',barBorderRadius:[0,10,10,0],  },
            }
          }, {

            value: 180,
            itemStyle: {
              normal:{color:'#6DB820',barBorderRadius:[0,10,10,0],}
            }
          }]
        }]
      }
      let myChart_1 = echarts.init(document.getElementById('chartPolling'))
      myChart_1.setOption(optionPolling);


      //初始化海域数量分布环形图
      let  bottom_left_option = {
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} 个"
        },
        legend: {
          orient : 'vertical',
          x : 'left',
          data: ['北海', '东海', '南海']
        },
        toolbox: {
          show : false,
          feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
              show: true,
              type: ['pie', 'funnel'],
              option: {
                funnel: {
                  x: '25%',
                  width: '50%',
                  funnelAlign: 'center',
                  max: 1548
                }
              }
            },
            restore : {show: true},
            saveAsImage : {show: true}
          }
        },
        calculable : true,
        series : [
          {
            name:'数量分布',
            type:'pie',
            radius : ['50%', '70%'],
            itemStyle : {
              normal : {
                label : {
                  show : false
                },
                labelLine : {
                  show : false
                }
              },
              emphasis : {
                label : {
                  show : true,
                  position : 'center',
                  textStyle : {
                    fontSize : '30',
                    fontWeight : 'bold'
                  }
                }
              }
            },
            data:[
              {
                value: 10886, name: '北海', itemStyle: {
                normal: {
                  color:"#4BCEAF"
                },
              }},
              {
                value: 6841, name: '东海', itemStyle: {
                  normal: {
                    color:"#0BACFE"
                  },
                }
              },
              {
                value: 6444, name: '南海', itemStyle: {
                  normal: {
                    color: "#217AFE"
                  },
                }}
            ]
          }
        ]
      };
      let bottom_left_chart = echarts.init(document.getElementById('bottom_left_chart_panel'))
      bottom_left_chart.setOption(bottom_left_option);

      //装备子系统数量占比
      let  bottom_mid_option = {
        title : {
          //text: '某地区蒸发量和降水量',
          //subtext: '%'
        },
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data: ['含GNSS', '含地震台', '含波浪观测']
        },
        toolbox: {
          show : true,
          feature : {
           //mark : {show: true},
           //dataView : {show: true, readOnly: false},
           //magicType : {show: true, type: ['line', 'bar']},
           //restore : {show: true},
           // saveAsImage : {show: true}
          }
        },
        calculable : true,
        xAxis : [
          {
            type : 'category',
            data: ['含GNSS', '含地震台', '含波浪观测']
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'',
            type:'bar',
            barWidth:'20px',
            itemStyle: {
              normal: {
                color: function(params) {
                  // build a color map as your need.
                  var colorList = [
                    '#79A0EF','#4BCEAF','#0BABFF'
                  ];
                  return colorList[params.dataIndex]
                },
                label: {
                  show: true,
                  position: 'top',
                  formatter: '{b}\n{c}'
                }
              }
            },
            data:[82, 48, 25],
          }
        ]
      };

      let bottom_mid_chart = echarts.init(document.getElementById('bottom_mid_chart_panel'))
      bottom_mid_chart.setOption(bottom_mid_option);


      //总数量年底趋势图


      let bottom_right_option = {
        title : {
          //text: '未来一周气温变化',
          //subtext: '纯属虚构'
        },
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['海洋站']
        },
        toolbox: {
          show : false,
          feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
          }
        },
        calculable : true,
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            data : ['2014','2015','2016','2017','2018']
          }
        ],
        yAxis : [
          {
            type : 'value',
            axisLabel : {
              formatter: '{value}'
            }
          }
        ],
        series : [
          {
            name:'海洋站',
            type:'line',
            itemStyle: {
              normal: {
                color:  '#0BABFF',
                label: {
                  show: true,
                  position: 'top',
                  formatter: '{b}\n{c}'
                }
              }
            },
            data:[20, 59, 23, 79, 75],
            markPoint : {
              data : [
                {type : 'max', name: '最大值'},
                {type : 'min', name: '最小值'}
              ]
            },
            markLine : {
              data : [
                {type : 'average', name: '平均值'}
              ]
            }
          }
        ]
      };


      let bottom_right_chart = echarts.init(document.getElementById('bottom_right_chart_panel'))
      bottom_right_chart.setOption(bottom_right_option);

      $('.info_top_panel_tab .chartTitle ul li').on('click',function () {
        $('.info_top_panel_tab .chartTitle ul li').each(function (val,item) {
          $(item).removeClass('active')
        })
        $(this).addClass('active');
      })
      // window.timer4 = setInterval(function () {
      //   $('.icon_list img').each(function (index,val) {
      //     let a = Math.random()*200
      //     let b = Math.random()*700
      //     $(val).css({"left":b+'px','top':a+'px'})
      //   })
      // }, 2000);
    },
    created(){
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
  .tongji
    margin-top 55px
    height 80%
    .w
      height 100%
      .tongji_info
        height 49.5%
        width 100%
        margin-top 1%
        .tongji_info_l
          width 49.5%
          height 100%
          overflow hidden
          border-radius 4px
          float left
          margin-left 1%
          position relative
          .info_l_top,.info_l_bot
            width 100%
            height 100%
            overflow hidden
            border-radius 4px
            background #ffffff
            position relative
            vertical-align middle
            .normal
              position absolute
              right 10px
              top 10px
              text-align center
              span
                display block
                width 75px
                height 30px
                line-height 30px
                background-color #fff
                border-radius 5px
                &:last-child
                  margin-top 5px
                img
                  width 22px
                  padding-right 10px
            .top_list
              position absolute
              bottom 10px
              right 10px
              li
                width 100px
                text-align center
                color #fff
                border 1px solid #a8a8aa
                line-height 30px
                background #666666
                border-radius 5px
                /*margin-top 5px*/
                font-size 20px
                &:first-child
                  margin-top 0px
            .icon_list
              img
                position absolute
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
            .normal_color_title
              position absolute
              right 10px
              top 10px
              text-align center
              width 300px
              label
                display block
                width 30px
                height 30px
                background-color #fff
                img
                  width 22px
                  padding-right 10px
          .info_l_bot
            margin-top 2%
            background #1b6d85
          .bot_chart_top_l
            width 100%
            height 100%
            margin-top 10px
            float left
            margin-left 3px
            align center
            #chartPolling
              width 90%
              height 90%
              margin-top 20px
              align center
              div
                height 100%
            .chartTitle
              position absolute
              right 30px
              top 5px
              font-size 16px
              ul
                li
                  margin-left 15px
                  float left
                  box-sizing border-box
                  position relative
                  &:first-child
                    margin-left 0px
                  i
                    display inline-block
                    position absolute
                    top 3px
                    background-color #6db821
                    width 14px
                    height 14px
                  span
                    padding-left 14px
                  &:nth-child(2)
                    i
                      background-color red
        .tongji_info_r
          float left
          border-radius 4px
          width 49.5%
          height 100%
          overflow hidden
          .info_r_top
            width 100%
            height 100%
            padding 10px
            box-sizing border-box
            border-radius 4px
            background-color #fff
            .elTable
              margin-top 40px
              height 89%
              .el-table
                height 100%
                overflow hidden
                //border 1px solid #c6c6c6
                .el-table__body-wrapper
                  width 101%!important
                  height 100%
                  overflow hidden!important
          .info_r_bot
            width 100%
            height 49%
            padding 10px
            box-sizing border-box
            border-radius 4px
            margin-top 2%
            background-color #fff
            .elTable
              margin-top 40px
              height 89%
              .el-table
                height 100%
                overflow hidden
                //border 1px solid #c6c6c6
                .el-table__body-wrapper
                  width 101%!important
                  height 100%
                  overflow hidden!important
      .info_top_panel
        width 100%
        height 49.5%
        overflow hidden
        border-radius 4px
        background #ffffff
        position relative
        vertical-align middle
        .info_top_panel_tab
          height 15%
          border 1px solid lightgrey
          .chartTitle
            position absolute
            left 60px
            top 20px
            ul
              li
                margin-left 5px
                float left
                box-sizing border-box
                position relative
                font-size 20px
                align center
                &:first-child
                  margin-left 0px
                &.active
                  background-color #2a3cba
                  color white
                  border-radius 10px
                  a
                    color #fff
                span
                  padding-left 14px
                  padding-right 14px
                  align center
                  font-size 20px
                  &:hover
                    background-color #2a3cba
                    color: white
                    border-radius 10px
        .info_top_panel_content
          height 100%
          width 100%
          //padding-top 45px
          box-sizing border-box
          position absolute
          .info_top_left
            float left
            height 80%
            margin-left 1%
            width 32%
            border: 1px solid lightgrey;
            border-left: 0px;
            border-top: 0px;
            border-bottom: 0px
            #bottom_left_chart_panel
              width 90%
              height 90%
              margin-top 10%
              align center
              div
                height 100%
          .info_bottom_mid
            float left
            height 80%
            margin-left 1%
            width 32%
            border: 1px solid lightgrey;
            border-left: 0px;
            border-top: 0px;
            border-bottom: 0px
            #bottom_mid_chart_panel
              width 90%
              height 90%
              margin-top 10%
              align center
              div
                height 100%
          .info_bottom_right
            float left
            height 80%
            margin-left 1%
            width 32%
            #bottom_right_chart_panel
              width 90%
              height 90%
              margin-top 10%
              align center
              div
                height 100%
</style>
