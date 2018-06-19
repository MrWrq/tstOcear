<template>
  <div class="weihu">
    <div class="w">
      <div class="weihu_info">
        <div class="weihu_info_l">
          <div class="info_l_top">
            <div class="title_all_bottom_line" align="left">
              <div class="title_text" style="border-left:4px #0abafe solid">
                <p> {{titL_Top}}</p>
              </div>

            </div>
            <div class="bot_chart_top_l">
              <div id="all_asysities_info_chart_panel"></div>
            </div>
          </div>
          <div class="info_l_bot">
            <div class="title_all_bottom_line" align="left">
              <div class="title_all_bottom_line" align="left">
                <div class="title_text" style="border-left:4px #0abafe solid">
                  <p> {{titL_Bot}}</p>
                </div>
              </div>
            </div>
            <div class="elTable" id="ljbyzb_eltable">
              <el-table
                :data="except"
                style="width: 100%"
                fixed
                stripe
                border
                size="mini"
                header-align="center"
                :row-class-name="tableRowClassName">
                <el-table-column
                  prop="seq"
                  align="center"
                  width="85"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="eqtype"
                  align="center"
                  label="设备类型">
                </el-table-column>
                <el-table-column
                  prop="eqNo"
                  align="center"
                  label="正常运行数量">
                </el-table-column>
                <el-table-column
                  prop="validdate"
                  align="center"
                  label="待巡检设备数量">
                </el-table-column>
                <el-table-column
                  prop="eqleader"
                  align="center"
                  label="异常设备数量">
                </el-table-column>

              </el-table>
            </div>
          </div>
        </div>
        <div class="weihu_info_r">
          <div class="info_r_top">
            <!--提示组件-->
            <div class="title_all_bottom_line" align="left">
              <div class="title_text" style="border-left:4px #0abafe solid">
                <p> {{titR_Top}}</p>
              </div>
            </div>


            <div class="chartTitle clearfix">
              <ul>
                <li><a href="#"><span>海洋站</span></a></li>
                <li><a href="#"><span>雷达站</span></a></li>
                <li><a href="#"><span>浮标</span></a></li>
                <li><a href="#"><span>潜标</span></a></li>
                <li><a href="#"><span>志愿船</span></a></li>
              </ul>
            </div>

            <div class="bot_chart_top_l">
              <div id="all_base_device"></div>
            </div>


          </div>
          <div class="info_r_bot">
            <div class="title_all_bottom_line" align="left">
              <div class="title_text" style="border-left:4px #0abafe solid">
                <p> {{titR_Bot}}</p>
              </div>
            </div>
            <div class="elTable" id="cqbyzb_eltable">
              <template>
                <el-checkbox label="海洋站" name="type"></el-checkbox>
                <el-checkbox label="雷达站" name="type"></el-checkbox>
                <el-checkbox label="浮标" name="type"></el-checkbox>
                <el-checkbox label="潜标" name="type"></el-checkbox>
                <el-checkbox label="志愿船" name="type"></el-checkbox>
              </template>
              <el-table
                :data="dataTable"
                style="width: 100%"
                fixed
                size="mini"
                stripe
                border
                header-align="center"
                :row-class-name="tableRowClassName">
                <el-table-column
                  prop="seq"
                  align="center"
                  width="85"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="eqtype"
                  align="center"
                  label="设备类型">
                </el-table-column>
                <el-table-column
                  prop="eqNo"
                  align="center"
                  label="设备编号">
                </el-table-column>
                <el-table-column
                  prop="validdate"
                  align="center"
                  label="管理单位">
                </el-table-column>
                <el-table-column
                  prop="eqleader"
                  align="center"
                  label="巡检人">
                </el-table-column>
                <el-table-column
                  prop="eqby"
                  align="center"
                  label="操作">
                  <template slot-scope="scope">
                    <el-button type="text">查看详情</el-button>
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
  import echarts from 'echarts'
  import regTitle from './../minModule/title/Title'
  import regTable from './../minModule/table/Table'

  export default {
    data() {
      return {
        titL_Top: '近五年设备巡检情况',
        titL_Bot: '2017各设备数据清单',
        titR_Top: '基础设施使用年限的数量',
        titR_Bot: '有异常的数据清单',
        topList: ['海洋站', '船舶', '潜艇', '雷达', '浮标', '潜标', '飞机'],
        iconsChart: [
          {name: '海洋站'},
          {name: '浮标'},
          {name: '海床基'},
          {name: '海啸浮标'},
          {name: '雷达'}
        ],
        dataTable: [
          {seq: '1', eqtype: '雷达', eqNo: 'X111', validdate: '东海分局', eqleader: '张大海'},
          {seq: '2', eqtype: '海洋站', eqNo: 'B212', validdate: '东海分局', eqleader: '张大海',},
          {seq: '3', eqtype: '潜标', eqNo: 'C850', validdate: '东海分局', eqleader: '张大海'},
          // {seq: '4', eqtype: '指挥车', eqNo: 'G741', validdate: '东海分局', eqleader: '张大海'},
        ],
        except: [
          {seq: '1', eqtype: '海洋站', eqNo: '3', validdate: '10', eqleader: '2'},
          {seq: '2', eqtype: '雷达站', eqNo: '6', validdate: '8', eqleader: '1', eqby: '1'},
          {seq: '3', eqtype: '浮标', eqNo: '2', validdate: '5', eqleader: '2', eqby: '1'},
          {seq: '4', eqtype: '潜标', eqNo: '3', validdate: '11', eqleader: '3', eqby: '1'},
          {seq: '5', eqtype: '志愿船', eqNo: '1', validdate: '10', eqleader: '1', eqby: '1'},
          {seq: '6', eqtype: '潜器', eqNo: '3', validdate: '12', eqleader: '1', eqby: '1'},
          {seq: '7', eqtype: '船舶', eqNo: '4', validdate: '6', eqleader: '1', eqby: '1'},
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
    mounted() {

      //统计图表
      let allasysoption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['海洋站', '雷达站', '浮标', "潜标", "志愿船"]
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
            boundaryGap: false,
            data: ['2014年', '2015年', '2016年', '2017年', '2018年']
          }
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: 350,
            splitNumber: 8
          }
        ],
        series: [
          {
            name: '海洋站',
            type: 'line',
            smooth: true,
            barWidth: 12,
            data: [30, 64, 100, 240, 330],
            itemStyle: {
              normal: {color: '#0BABFE'}
            }
          },
          {
            name: '雷达站',
            type: 'line',
            smooth: true,
            barWidth: 12,
            data: [20, 76, 180, 240, 300],
            itemStyle: {
              normal: {color: '#79A0EF'}
            }
          },
          {
            name: '浮标',
            type: 'line',
            smooth: true,
            data: [15, 77, 150, 190, 290],
            itemStyle: {
              normal: {color: '#A360FE'}
            }
          },
          {
            name: '潜标',
            type: 'line',
            smooth: true,
            data: [30, 75, 170, 210, 310],
            itemStyle: {
              normal: {color: '#90EE90'}
            }
          },
          {
            name: '志愿船',
            type: 'line',
            smooth: true,
            data: [25, 80, 95, 220, 250],
            itemStyle: {
              normal: {color: "#FFA500"}
            }
          }]
      };
      let allasysoptionchart = echarts.init(document.getElementById("all_asysities_info_chart_panel"));
      allasysoptionchart.setOption(allasysoption);
      let baseOption = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          data: ['南海', '北海', '东海']
        },
        series: [{
          name: '位置',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '30%'],

          label: {
            normal: {
              position: 'inner',
              formatter: function (params, ticket, callback) {
                console.log(params);
              },
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {value: 5, name: '南海'},
            {value: 6, name: '东海'},
            {value: 7, name: '北海'}
          ]
        }, {
          name: '设备状态',
          type: 'pie',
          radius: ['40%', '55%'],

          data: [
            {value: 1, name: '正常'},
            {value: 3, name: '待巡检'},
            {value: 1, name: '异常'},
            {value: 2, name: '正常'},
            {value: 2, name: '待巡检'},
            {value: 2, name: '异常'},
            {value: 5, name: '正常'},
            {value: 1, name: '待巡检'},
            {value: 1, name: '异常'}
          ]
        }]
      };

      let allbase = echarts.init(document.getElementById("all_base_device"));
      allbase.setOption(baseOption);


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
  .weihu
    margin-top 55px
    height 80%
    .w
      height 49%
      .weihu_info
        height 100%
        .weihu_info_l
          width 49.5%
          height 100%
          float left
          position relative
          .info_l_top
            width 100%
            height 100%
            overflow hidden
            border-radius 10px
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
            margin-top 2%
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
              margin-top 10px
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
          .info_l_bot
            width 100%
            height 100%
            padding 10px
            padding-top 2px
            box-sizing border-box
            border-radius 10px
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
        .weihu_info_r
          float left
          border-radius 10px
          width 49.5%
          height 100%
          margin-left 1%
          .bot_chart_top_l
            height 100%
            #all_base_device
              height 100%
              div
                height 100%
          .info_r_top
            width 100%
            height 100%
            padding 10px
            padding-top 2px
            box-sizing border-box
            border-radius 10px
            background-color #fff
            position relative
            .chartTitle
              position absolute
              left 19px
              top 42px
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
                  span
                    padding-left 14px
                    padding-right 14px
                    align center
                    font-size 16px
                  &:hover
                    cursor pointer
                    background-color blue
                    color: white
                    border-radius 10px
          .info_r_bot
            width 100%
            height 100%
            padding 10px
            padding-top 2px
            box-sizing border-box
            border-radius 10px
            margin-top 2%
            background-color #fff
            .elTable
              margin-top 10px
              height 80%
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
                color: #fff;
                font-size: 14px;
                font-weight: 700;
                line-height: 27px;
                text-align: left;
                width 120px

</style>
