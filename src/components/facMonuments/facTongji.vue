<template>
  <div class="tongjifenxi59">
    <div class="w">
      <div class="tongjifenxi59_info">
        <div class="tongjifenxi59_info_l">
          <div class="info_l_top">
            <div class="title_left_backgroud_div">
              <span class="title_left_backgroud_left">&nbsp;</span>
              各基础设施的基本情况
            </div>
            <div class="bot_chart_top_l">
              <div class="chartTitle clearfix">
                <ul>
                  <li><i style="background-color:#0BABFE"></i><span>&nbsp;&nbsp;&nbsp;房屋</span></li>
                  <li><i style="background-color:#79A0EF"></i><span>&nbsp;&nbsp;&nbsp;气象台</span></li>
                  <li><i style="background-color:#A360FE"></i><span>&nbsp;&nbsp;&nbsp;试验场</span></li>
                  <li><i style="background-color:#4BCEAF"></i><span>&nbsp;&nbsp;&nbsp;科研井</span></li>
                  <li><i style="background-color:#4BCEAF"></i><span>&nbsp;&nbsp;&nbsp;科研槽</span></li>
                  <li><i style="background-color:#6DB820"></i><span>&nbsp;&nbsp;&nbsp;用海</span></li>
                  <li><i style="background-color:#FFAC1E"></i><span>&nbsp;&nbsp;&nbsp;用地</span></li>
                </ul>
              </div>
              <div id="all_asysities_info_chart_panel"></div>
            </div>
          </div>
          <div class="info_l_bot">
            <div class="title_left_backgroud_div">
              <span class="title_left_backgroud_left">&nbsp;</span>
              各类基础设施基本情况
            </div>
            <div class="elTable" id="ljbyzb_eltable">
              <el-table
                :data="dataTable"
                style="width: 100%"
                fixed
                stripe
                border
                header-align="center"
                :row-class-name="tableRowClassName">
                <el-table-column
                  prop="eqtype"
                  align="center"
                  width="150"
                  label="设备类型">
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  sortable
                  label="数量">
                </el-table-column>
                <el-table-column
                  prop="pic"
                  align="center"
                  label="单位">
                </el-table-column>
                <el-table-column
                  prop="sequt"
                  align="center"
                  sortable
                  label="面积">
                </el-table-column>
                <el-table-column
                  prop="remark"
                  align="center"
                  label="备注">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
        <div class="tongjifenxi59_info_r">
          <div class="info_r_top">
            <!--提示组件-->
            <div class="title_left_backgroud_div">
              <span class="title_left_backgroud_left">&nbsp;</span>
              各基础设施使用年限数量
            </div>
            <!--表格组件-->
            <div id="right_top_char_panl"></div>
            <div class="info_top_panel_tab">
              <div class="chartTitle clearfix">
                <ul>
                  <li class="active"><a href="#"><span>海洋站</span></a></li>
                  <li><a href="#"><span>船舶</span></a></li>
                  <li><a href="#"><span>潜艇</span></a></li>
                  <li><a href="#"><span>雷达</span></a></li>
                  <li><a href="#"><span>浮标</span></a></li>
                  <li><a href="#"><span>潜艇</span></a></li>
                  <li><a href="#"><span>飞机</span></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="info_r_bot">
            <div class="title_left_backgroud_div">
              <span class="title_left_backgroud_left">&nbsp;</span>
              各单位基础设施基本情况
            </div>
            <div class="elTable" id="cqbyzb_eltable">
              <el-table
                :data="dataTable1"
                style="width: 100%"
                fixed
                stripe
                border
                header-align="center">
                <el-table-column
                  prop="compname"
                  align="center"
                  label="单位名称">
                </el-table-column>
                <el-table-column
                  prop="useland"
                  align="center"
                  width="65"
                  label="用地(幅)">
                </el-table-column>
                <el-table-column
                  prop="usesea"
                  align="center"
                  width="65"
                  label="用海(幅)">
                </el-table-column>
                <el-table-column
                  prop="usema"
                  align="center"
                  width="65"
                  label="码头(个)">
                </el-table-column>
                <el-table-column
                  prop="usehouse"
                  align="center"
                  width="65"
                  label="房屋(个)">
                </el-table-column>
                <el-table-column
                  prop="useqxt"
                  align="center"
                  width="75"
                  label="气象台(台)">
                </el-table-column>
                <el-table-column
                  prop="usesyc"
                  align="center"
                  width="75"
                  label="实验场(台)">
                </el-table-column>
                <el-table-column
                  prop="usekyyj"
                  align="center"
                  label="科研用井">
                </el-table-column>
                <el-table-column
                  prop="usekyyc"
                  align="center"
                  label="科研用槽">
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
  import echarts from 'echarts'
  import regTitle from './../minModule/title/Title'
  import regTable from './../minModule/table/Table'

  export default {
    data() {
      return {
        titL_Top: '统计图表',
        titL_Bot: '临近保养设备',
        titR_Top: '已保养设备',
        titR_Bot: '超期保养设备',
        topList: ['海洋站', '船舶', '潜艇', '雷达', '浮标', '潜标', '飞机'],
        iconsChart: [
          {name: '海洋站'},
          {name: '浮标'},
          {name: '海床基'},
          {name: '海啸浮标'},
          {name: '雷达'}
        ],
        dataTable: [
          {eqtype: '房屋', num: '452', pic: '个', sequt: '1000㎡', remark: '------------------'},
          {eqtype: '气象台', num: '126', pic: '栋', sequt: '1000㎡', remark: '-----------'},
          {eqtype: '试验场', num: '121', pic: '个', sequt: '1000㎡', remark: '-----'},
          {eqtype: '科研井', num: '258', pic: '个', sequt: '1000㎡', remark: '-------------'},
          {eqtype: '科研槽', num: '841', pic: '眼', sequt: '1000㎡', remark: '----------'},
          {eqtype: '用海', num: '756', pic: '幅', sequt: '1000h㎡', remark: '----------------'},
          {eqtype: '用地', num: '614', pic: '幅', sequt: '1000h㎡', remark: '---'}
        ],
        dataTable1: [
          {
            compname: '东海分局',
            useland: '3',
            usesea: '4',
            usema: '2',
            usehouse: '1',
            useqxt: '1',
            usesyc: '2',
            usekyyj: '5',
            usekyyc: '6'
          },
          {
            compname: '北海分局',
            useland: '2',
            usesea: '3',
            usema: '1',
            usehouse: '1',
            useqxt: '1',
            usesyc: '1',
            usekyyj: '2',
            usekyyc: '3'
          },
          {
            compname: '南海分局',
            useland: '3',
            usesea: '1',
            usema: '2',
            usehouse: '1',
            useqxt: '1',
            usesyc: '2',
            usekyyj: '3',
            usekyyc: '4'
          },
          {
            compname: '国家深海基地管理中心',
            useland: '1',
            usesea: '1',
            usema: '1',
            usehouse: '2',
            useqxt: '2',
            usesyc: '3',
            usekyyj: '1',
            usekyyc: '2'
          },
          {
            compname: '国家海洋信息中心',
            useland: '1',
            usesea: '2',
            usema: '1',
            usehouse: '1',
            useqxt: '3',
            usesyc: '4',
            usekyyj: '2',
            usekyyc: '1'
          },
          {
            compname: '国家海洋局第一海洋研究所',
            useland: '2',
            usesea: '3',
            usema: '3',
            usehouse: '3',
            useqxt: '1',
            usesyc: '2',
            usekyyj: '6',
            usekyyc: '1'
          },
          {
            compname: '国家海洋局第一海洋研究所',
            useland: '1',
            usesea: '3',
            usema: '2',
            usehouse: '4',
            useqxt: '2',
            usesyc: '1',
            usekyyj: '3',
            usekyyc: '1'
          }],
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
      let oceanHeight = document.documentElement.clientHeight
      oceanHeight = oceanHeight < 800 ? 800 * .8 : oceanHeight * .8
      $(".info_l_bot").css("margin-top", oceanHeight * .02)
      $(".info_r_bot").css("margin-top", oceanHeight * .02)

      //统计图表
      let allasysoption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['房屋', '气象台', '试验场', '科研井', '科研槽', '用海', '用地']
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          x: 'right',
          y: 'center',
          feature: {
            // mark : {show: true},
            //dataView : {show: true, readOnly: false},
            //magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            //restore : {show: true},
            //saveAsImage : {show: true}
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['房屋', '气象台', '试验场', '科研井', '科研槽', '用海', '用地']
          }
        ],
        yAxis: [
          {
            max: "3500",
            name: "(数量)",
            type: 'value'
          }
        ],
        // grid: {
        //   x: 45,
        //   y: 55,
        //   y1:20
        // },
        series: [
          {
            type: 'bar',
            stack: 'sum',
            barCategoryGap: '50%',
            itemStyle: {
              normal: {
                color: function (params) {
                  // build a color map as your need.
                  var colorList = [
                    '#0BABFF', '#79A0EF', '#A360FE', '#4BCEAF', '#4BCEAF', '#6DB820',
                    '#FFAC1E', '#FF7D1F'
                  ];
                  return colorList[params.dataIndex]
                },
                // barBorderWidth: 2,
                barBorderRadius: [45, 45, 0, 0],
                label: {
                  show: false, position: 'insideTop'
                }
              }
            },
            barWidth: '20px',
            data: [3000, 1980, 1490, 1450, 1553, 1680, 2000]
          }]

      };
      let allasysoptionchart = echarts.init(document.getElementById("all_asysities_info_chart_panel"));
      allasysoptionchart.setOption(allasysoption);

      let right_top_option = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          y: 'center',
          itemGap: 40,
          // itemWidth:'300px',
          // itemHeight:'60px',
          data: ['5年以内', '5-10年', '10-20年', '20年以上'],
          textStyle: {
            fontSize: 16
          }
        },
        toolbox: {
          show: false,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
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
            // restore : {show: true},
            // saveAsImage : {show: true}
          }
        },
        calculable: true,
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['40%', '60%'],
            label: {
              normal: {
                formatter: ' {c} 个',
              }
            },
            itemStyle: {
              normal: {
                label: {
                  show: true
                },
                labelLine: {
                  show: true
                },
                color: function (params) {
                  // build a color map as your need.
                  var colorList = [
                    '#FFAC1E', '#2A3CBA', '#0BABFF', '#6EB81F'
                  ];
                  return colorList[params.dataIndex]
                },
              },
              emphasis: {
                label: {
                  show: true,
                  position: 'center',
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              }
            },
            data: [
              {value: 123, name: '20年以上'},
              {value: 823, name: '5年以内'},
              {value: 756, name: '5-10年'},
              {value: 326, name: '10-20年'}
            ]
          }
        ]
      };
      let bottom_right_top_chart = echarts.init(document.getElementById("right_top_char_panl"));
      bottom_right_top_chart.setOption(right_top_option);

      $('.info_top_panel_tab .chartTitle ul li').on('click', function () {
        $(this).siblings('li').removeClass('active');  // 删除其他兄弟元素的样式
        $(this).addClass('active');                    // 添加当前元素的样式
      })

    },
    components: {
      'v-title': regTitle,
      'v-table': regTable
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .tongjifenxi59
    margin-top 55px
    height 80%
    .w
      height 49%
      .tongjifenxi59_info
        height 100%
        .title_left_backgroud_div
          height 12px
          line-height 12px
          font-size 15px
          font-weight bold
          border-left 3px solid #0BABFF
        .tongjifenxi59_info_l
          width 49.5%
          height 100%
          float left
          position relative
          .info_l_top
            width 100%
            height 100%
            padding 10px
            box-sizing border-box
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
                &:first-child
                  margin-top 0px
                &.active
                  background-color #2a3cba
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
            background #1b6d85
          .bot_chart_top_l
            width 100%
            height 100%
            margin-top 10px
            float left
            margin-left 3px
            align center
            #all_asysities_info_chart_panel
              width 90%
              height 90%
              margin-top 20px
              align center
              div
                height 100%
            .chartTitle
              position absolute
              right 30px
              top 10%
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
                    margin-right 15px
                    width 14px
                    height 14px
                  span
                    padding-left 14px
                  &:nth-child(2)
                    i
                      background-color red
          .info_l_bot
            width 100%
            height 100%
            padding 10px
            box-sizing border-box
            border-radius 4px
            background-color #fff
            .elTable
              margin-top 10px
              height 89%
              .el-table
                height 100%
                overflow hidden
                //border 1px solid #c6c6c6
                .el-table__body-wrapper
                  width 101% !important
                  height 100%
                  overflow hidden !important
        .tongjifenxi59_info_r
          float left
          border-radius 4px
          width 49.5%
          height 100%
          margin-left 1%
          .info_r_top
            width 100%
            height 100%
            padding 10px
            box-sizing border-box
            border-radius 4px
            background-color #fff
            position relative
            #right_top_char_panl
              position absolute
              top 50px
              width 90%
              height 90%
              align center
              div
                height 100%
            .info_top_panel_tab
              height 15%
              /*border 1px solid lightgrey*/
              border 0px
              border-bottom 1px solid lightgray
              .chartTitle
                position absolute
                left 60px
                top 40px
                ul
                  li
                    margin-left 5px
                    float left
                    box-sizing border-box
                    position relative
                    text-align center
                    line-height 21px
                    &:first-child
                      margin-left 0px
                    &.active
                      background-color blue
                      border-radius 15px
                      a
                        color: #ffffff
                    span
                      padding-left 14px
                      padding-right 14px
                      align center
                      font-size 16px
                      &:hover
                        background-color blue
                        color: white
                        border-radius 15px
          .info_r_bot
            width 100%
            height 100%
            padding 10px
            box-sizing border-box
            border-radius 4px
            margin-top 2%
            background-color #fff
            .elTable
              margin-top 10px
              height 89%
              .el-table
                height 100%
                overflow hidden
                //border 1px solid #c6c6c6
                .el-table__body-wrapper
                  width 101% !important
                  height 100%
                  overflow hidden !important
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
            background-color: #2a3cba;
            color: #fff;
            font-size: 14px;
            font-weight: 700;
            line-height: 27px;
            text-align: left;
            width 120px
</style>
