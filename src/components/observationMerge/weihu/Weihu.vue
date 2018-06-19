<template>
  <div class="weihu">
    <div class="w">
      <div class="weihu_info">
        <div class="weihu_info_l">
          <div class="info_l_top">
            <div class="title_all_bottom_line" align="left">
              <div class="title_text">
                统计图表
                <i class="el-icon-caret-right"/>
              </div>
            </div>
            <div class="bot_chart_top_l">
              <div id="all_asysities_info_chart_panel"></div>
            </div>
          </div>
          <div class="info_l_bot">
            <div class="title_all_bottom_line" align="left">
              <div class="title_text">
                临近保养装备
                <i class="el-icon-caret-right"/>
              </div>
            </div>
            <div class="elTable" id="ljbyzb_eltable">
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
                  prop="seq"
                  align="center"
                  width="85"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="eqtype"
                  align="center"
                  sortable
                  label="设备类型">
                </el-table-column>
                <el-table-column
                  prop="eqNo"
                  align="center"
                  sortable
                  label="设备编号">
                </el-table-column>
                <el-table-column
                  prop="validdate"
                  align="center"
                  sortable
                  label="到期时间">
                </el-table-column>
                <el-table-column
                  prop="eqleader"
                  align="center"
                  sortable
                  label="负责人">
                </el-table-column>
                <el-table-column
                  prop="eqby"
                  align="center"
                  sortable
                  label="结构保养">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
        <div class="weihu_info_r">
          <div class="info_r_top">
            <!--提示组件-->
            <div class="title_all_bottom_line" align="left">
              <div class="title_text">
                已保养装备
                <i class="el-icon-caret-right"/>
              </div>
            </div>
            <!--表格组件-->
            <div class="elTable" id = 'ybyzb_eltable'>
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
                  prop="seq"
                  align="center"
                  width="85"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="eqtype"
                  align="center"
                  sortable
                  label="设备类型">
                </el-table-column>
                <el-table-column
                  prop="eqNo"
                  align="center"
                  sortable
                  label="设备编号">
                </el-table-column>
                <el-table-column
                  prop="validdate"
                  align="center"
                  sortable
                  label="到期时间">
                </el-table-column>
                <el-table-column
                  prop="eqleader"
                  align="center"
                  sortable
                  label="负责人">
                </el-table-column>
                <el-table-column
                  prop="eqby"
                  align="center"
                  sortable
                  label="结构保养">
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="info_r_bot">
            <div class="title_all_bottom_line" align="left">
              <div class="title_text">
                  超期保养装备
                <i class="el-icon-caret-right"/>
              </div>
            </div>
            <div class="elTable" id="cqbyzb_eltable">
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
                  sortable
                  label="设备类型">
                </el-table-column>
                <el-table-column
                  prop="eqNo"
                  align="center"
                  sortable
                  label="设备编号">
                </el-table-column>
                <el-table-column
                  prop="validdate"
                  align="center"
                  sortable
                  label="到期时间">
                </el-table-column>
                <el-table-column
                  prop="eqleader"
                  align="center"
                  sortable
                  label="负责人">
                </el-table-column>
                <el-table-column
                  prop="eqby"
                  align="center"
                  sortable
                  label="结构保养">
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
  import regTitle from '../../minModule/title/Title'
  import regTable from '../../minModule/table/Table'

  export default {
    data (){
      return {
        titL_Top: '统计图表',
        titL_Bot: '临近保养设备',
        titR_Top: '已保养设备',
        titR_Bot: '超期保养设备',
        topList: ['海洋站','船舶','潜艇','雷达','浮标','潜标','飞机'],
        iconsChart: [
          {name: '海洋站'},
          {name: '浮标'},
          {name: '海床基'},
          {name: '海啸浮标'},
          {name: '雷达'}
        ],
        dataTable:[
          {seq: '1',eqtype: '雷达',eqNo: 'X111',validdate: '2019.5.5',eqleader: '王建国',eqby:'1'},
          {seq: '2',eqtype: '海洋站',eqNo: 'B212',validdate: '2019.5.1',eqleader: '王建国',eqby:'4'},
          {seq: '3',eqtype: '潜标',eqNo: 'C850',validdate: '2019.5.8',eqleader: '王建国',eqby:'2'},
          {seq: '4',eqtype: '指挥车',eqNo: 'G741',validdate: '2019.5.12',eqleader: '王建国',eqby:'1'},
          {seq: '5',eqtype: '雷达',eqNo: 'C888',validdate: '2019.5.20',eqleader: '王建国',eqby:'3'},
          {seq: '6',eqtype: '雷达',eqNo: 'C838',validdate: '2019.5.20',eqleader: '王建国',eqby:'3'},
          {seq: '7',eqtype: '雷达',eqNo: 'C238',validdate: '2019.5.20',eqleader: '王建国',eqby:'3'}
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
      var data = [290, 413, 248, 305, 180,143,346];
      var xMax = 500;

      //统计图表
      let allasysoption = {
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['已保养', '临近保养', '超期未保养']
        },
        toolbox: {
          show : true,
          orient: 'vertical',
          x: 'right',
          y: 'center',
          feature : {
           // mark : {show: true},
            //dataView : {show: true, readOnly: false},
            // magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            magicType : {show: true, type: ['stack']},

            //restore : {show: true},
            //saveAsImage : {show: true}
          }
        },
        calculable : true,
        xAxis : [
          {
            type : 'category',
            data: ['海洋站', '浮标', '潜标', '船舶', '雷达']
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name: '已保养',
            type:'bar',
            barWidth: 12,
            stack: '已保养',
            data: [320, 332, 301, 334, 390],
            itemStyle: {
              normal: {color: '#6DB820'}
            }
          },
          {
            name:'临近保养',
            type:'bar',
            barWidth: 12,
            stack: '临近保养',
            data: [120, 132, 101, 134, 90],
            itemStyle: {
              normal: {color: '#FFAC1E'}
            }
          },
          {
            name: '超期未保养',
            type:'bar',
            barWidth: 12,
            stack: '未保养',
            data: [220, 182, 191, 234, 290],
            itemStyle: {
              normal: {color: 'red'}
            }
          }]

      };
      let allasysoptionchart = echarts.init(document.getElementById("all_asysities_info_chart_panel"));
      allasysoptionchart.setOption(allasysoption);

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
  .weihu
    margin-top 55px
    height 80%
    .w
      height 50%
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
          .info_l_bot
            width 100%
            height 100%
            padding 10px
            padding-top 2px
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
                  width 101%!important
                  height 100%
                  overflow hidden!important
        .weihu_info_r
          float left
          border-radius 4px
          width 49.5%
          height 100%
          margin-left 1%
          .info_r_top
            width 100%
            height 100%
            padding 10px
            padding-top 2px
            box-sizing border-box
            border-radius 4px
            overflow hidden
            background-color #fff
            .elTable
              margin-top 10px
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
            height 100%
            padding 10px
            padding-top 2px
            box-sizing border-box
            border-radius 4px
            overflow hidden
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
                  width 101%!important
                  height 100%
                  overflow hidden!important
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
