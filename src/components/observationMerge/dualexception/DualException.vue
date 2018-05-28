<template>
  <div class="dualException">
    <div class="w">
      <div class="dualException_info">
        <div class="dualException_info_l">
          <div class="info_l_top">
            <div class="title_all_bottom_line" align="left">
              <div class="title_text" style="width: 220px;">
                已响应/已修复设备清单
                <i class="el-icon-caret-right"/>
              </div>
            </div>
          </div>
          <div class="info_l_content">
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
                  prop="seq"
                  align="center"
                  width="35"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="eqtype"
                  align="center"
                  width="100"
                  label="设备类型">
                </el-table-column>
                <el-table-column
                  prop="eqNo"
                  align="center"
                  width="55"
                  label="设备编号">
                </el-table-column>
                <el-table-column
                  prop="excetiontime"
                  align="center"

                  sortable
                  label="故障时间">
                </el-table-column>
                <el-table-column
                  prop="reponsetime"
                  align="center"
                  sortable
                  label="响应时间">
                </el-table-column>
                <el-table-column
                  prop="reparitime"
                  align="center"
                  sortable
                  width="100"
                  label="修复时间">
                </el-table-column>
                <el-table-column
                  prop="leader"
                  align="center"
                  width="60"
                  label="负责人">
                </el-table-column>
                <el-table-column
                  prop="status"
                  align="center"
                  width="60"
                  label="状态">
                </el-table-column>
                <el-table-column
                  align="center"
                  label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="mini" style="display: inline-block;width: 80%;height: 80%; background-color: #7f8180;color:#fff;">查看详情</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
        <div class="dualException_info_r">
          <div class="info_r_top">
            <!--提示组件-->
            <div class="title_all_bottom_line" align="left">
              <div class="title_text" style="width: 160px;margin-left: 0px">
                南北极故障处置数据
                <i class="el-icon-caret-right"/>
              </div>
            </div>
            <div class="info_r_chart_top_l">
              <div id="top_pie_chart"></div>
            </div>
          </div>
          <div class="info_r_bot" ref="info_r_mid">
            <div class="title_all_bottom_line" align="left">
              <div class="title_text" style="width: 98px;margin-left: 0px;">
                未响应数据
                <i class="el-icon-caret-right"/>
              </div>
            </div>
            <div class="info_r_content">
              <div class="elTable">
                <el-table
                  :data="dataTable1"
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
                    width="35"
                    label="序号">
                  </el-table-column>
                  <el-table-column
                    prop="eqtype"
                    align="center"
                    width="80"
                    label="设备类型">
                  </el-table-column>
                  <el-table-column
                    prop="eqNo"
                    align="center"
                    width="55"
                    label="设备编号">
                  </el-table-column>
                  <el-table-column
                    prop="excetiontime"
                    align="center"
                    sortable
                    label="故障时间">
                  </el-table-column>
                  <el-table-column
                    prop="reponsetime"
                    align="center"
                    sortable
                    label="响应时间">
                  </el-table-column>
                  <el-table-column
                    prop="reparitime"
                    align="center"
                    sortable
                    width="100"
                    label="修复时间">
                  </el-table-column>
                  <el-table-column
                    prop="leader"
                    align="center"
                    width="60"
                    label="负责人">
                  </el-table-column>
                  <el-table-column
                    prop="status"
                    align="center"
                    width="60"
                    label="状态">
                  </el-table-column>
                  <el-table-column
                    align="center"
                    label="操作">
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="text" size="mini" style="display: inline-block;width: 80%;height: 80%; background-color: #7f8180;color:#fff;">查看详情</el-button>
                    </template>
                  </el-table-column>
                </el-table>
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
  import regTitle from './../../minModule/title/Title'
  import regTable from './../../minModule/table/Table'
  import icon from './../../minModule/icon/Icon'

  export default {
    data (){
      return {
        titL_Top: '装备巡检实时统计地图',
        titR_Top: '海域选择',
        titR_Mid: '设备异常清单',
        titR_Bot: '大型装备巡检状态',
        icons: [
          {name: '海洋站',url: '/static/img/1.png'},
          {name: '浮标',url: './static/img/2.png'},
          {name: '海床基',url: '/static/img/3.png'},
          {name: '海啸浮标',url: '/static/img/4.png'},
          {name: '雷达',url: '/static/img/5.png'}
        ],
        iconsChart: [
          {name: '海洋站'},
          {name: '浮标'},
          {name: '海床基'},
          {name: '海啸浮标'},
          {name: '雷达'}
        ],
        dataTable:[
          {seq: '1',eqtype: '海洋站',eqNo: 'X111',excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已响应'},
          {seq: '2',eqtype: '浮标',eqNo: 'B212',excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已响应'},
          {seq: '3',eqtype: '海床基观测',eqNo:"C850", excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已响应'},
          {seq: '4',eqtype: '海啸浮标',eqNo:"G741" ,excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已响应'},
          {seq: '5',eqtype: '雷达',eqNo:"C888" ,excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已修复'},
          {seq: '6',eqtype: '海洋站 ',eqNo:"A790" ,excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已修复'},
          {seq: '7',eqtype: '浮标',eqNo:"P840" ,excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已修复'},
          {seq: '8',eqtype: '海洋站',eqNo: 'X111',excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已响应'},
          {seq: '9',eqtype: '浮标',eqNo: 'B212',excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已响应'},
          {seq: '10',eqtype: '海床基观测',eqNo:"C850", excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已响应'},
          {seq: '11',eqtype: '海啸浮标',eqNo:"G741" ,excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已响应'},
          {seq: '12',eqtype: '雷达',eqNo:"C888" ,excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已修复'},
          {seq: '13',eqtype: '海洋站 ',eqNo:"A790" ,excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已修复'},
          {seq: '14',eqtype: '浮标',eqNo:"P840" ,excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已修复'},
          {seq: '7',eqtype: '浮标',eqNo:"P840" ,excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已修复'},
          {seq: '8',eqtype: '海洋站',eqNo: 'X111',excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已响应'},
          {seq: '9',eqtype: '浮标',eqNo: 'B212',excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已响应'},
          {seq: '10',eqtype: '海床基观测',eqNo:"C850", excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已响应'},
          {seq: '11',eqtype: '海啸浮标',eqNo:"G741" ,excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已响应'},
        ]
        ,
        dataTable1:[
          {seq: '1',eqtype: '海洋站',eqNo: 'X111',excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已响应'},
          {seq: '2',eqtype: '浮标',eqNo: 'B212',excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已响应'},
          {seq: '3',eqtype: '海床基观测',eqNo:"C850", excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已响应'},
          {seq: '4',eqtype: '海啸浮标',eqNo:"G741" ,excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已响应'},
          {seq: '5',eqtype: '雷达',eqNo:"C888" ,excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已修复'},
          {seq: '6',eqtype: '海洋站 ',eqNo:"A790" ,excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已修复'},
          {seq: '7',eqtype: '浮标',eqNo:"P840" ,excetiontime:'2018.5.5',reponsetime:'2018.5.6',reparitime:'2018.5.7',leader:'王建国',status:'已修复'}
        ]
      }
    },
    methods: {
      //点击浮标
      listChoose: (el) => {
        // el.target
      },
      //表格各行变色
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
      //自适应高度
      //初始化海域数量分布环形图
      let  bottom_left_option = {
        title : [{
          text:'南极',
          x:'27%',
          y: '80%'
        },{
          text:'北极',
          x:'67%',
          y: '80%'
        }],
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d})"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['已响应','未响应','已修复']
        },
        series : [
          {
            name: '南极',
            type: 'pie',
            radius : '55%',
            center: ['30%', '40%'],
            data:[
              {value:20, name:'已响应'},
              {value:5, name:'未响应'},
              {value:15, name:'已修复'},
            ],
            label: {
              normal: {
                show: true,
                // formatter: '{b} : {c} ({d}%)',
                formatter: '{c}',
                position: 'inside'
              }
            },

            itemStyle: {
              normal: {
                color: function(params) {
                  // build a color map as your need.
                  var colorList = [
                    '#79A0EF','#4BCEAF','#0BABFF'
                  ];
                  return colorList[params.dataIndex]
                },
              }
            }
          },
          {
            name: '北极',
            type: 'pie',
            radius: '55%',
            center: ['70%', '40%'],
            data: [
              {value:20, name:'已响应'},
              {value:5, name:'未响应'},
              {value:15, name:'已修复'},
            ],
            label: {
              normal: {
                show: true,
                // formatter: '{b} : {c} ({d}%)',
                formatter: '{c}',
                position: 'inside'
              }
            },
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
            }
          }
        ]
      };
      let bottom_left_chart = echarts.init(document.getElementById('top_pie_chart'))
      bottom_left_chart.setOption(bottom_left_option);
      let screeH = document.documentElement.clientHeight>800?document.documentElement.clientHeight:800
      $('.info_r_bot').css('margin-top',screeH*.8*.02)
      // window.timer2 = setInterval(function () {
      //   $('.icon_list img').each(function (key, val) {
      //     let a = Math.random() * 200
      //     let b = Math.random() * 700
      //     $(val).css({"left": b + 'px', 'top': a + 'px'})
      //   })
      // }, 2000)
    },
    components: {
      'v-title': regTitle,
      'v-table': regTable,
      'v-icon': icon
    },
    beforeRouteLeave(to, from, next){
      clearInterval(window.timer2)
      next()
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .dualException
    margin-top 55px
    height 80%
    .w
      height 100%
      .dualException_info
        height 100%
        .dualException_info_l
          width 50%
          height 100%
          float left
          overflow hidden
          border-radius 4px
          position relative
          background-color white
          .info_l_top
            width 100%
            overflow hidden
            border-radius 4px
            background #FFFFFF
            position relative
            vertical-align middle
          .info_l_content
            top 20px
            height 93%
            position relative
            .elTable
             height 100%
             position relative
        .dualException_info_r
          float left
          width 49%
          height 100%
          margin-left 1%
          .info_r_top
            width 100%
            height 49%
            padding 10px
            overflow hidden
            box-sizing border-box
            border-radius 4px
            overflow hidden
            background-color white
            .info_r_chart_top_l
              width 99%
              height 98%
              margin-top 10px
              float left
              margin-left 3px
              align center
              #top_pie_chart
                width 100%
                height 80%
                margin-top 15px
          .info_r_bot
            width 100%
            height 49%
            overflow hidden
            padding 10px
            box-sizing border-box
            border-radius 4px
            background-color #fff
            position relative
            .info_l_content
             top 20px
             height 80%
             position relative
             .elTable
              height 90%
              padding 10px
              position relative
</style>
