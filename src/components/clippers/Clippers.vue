<template>
  <div class="oceaLarge">
    <div class="w">
      <div class="ocea_info">
        <div class="l info_l">
          <div class="ocea_info_name">
            <p>船舶分布实时统计地图<i class="el-icon-caret-right"></i></p>
          </div>

          <div class="info_l_list">
            <ul>
              <li><img src="./clip_02.png" alt=""><p>远洋调查船</p></li>
              <li><img src="./clip_01.png" alt=""><p>近海调查船</p></li>
              <!--<li></li>-->
            </ul>
          </div>
        </div>
        <div class="l info_r clearfix">
          <div class="info_r_top">
            <div class="chart_name">
              <div class="l">
                <p>船舶信息统计表<i class="el-icon-caret-right"></i></p>
              </div>
            </div>
            <div class="top_select">

              <!--<v-select :seleCities="cities" :seleName="sname"></v-select>-->

              <span>母港:</span>
              <el-select v-model="value_1" placeholder="请选择" size="mini" style="width: 110px;">
                <el-option
                  style="height: 24px"
                  v-for="item in cities"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                </el-option>
              </el-select>

              <span>单位:</span>
              <el-select v-model="value_1" placeholder="请选择" size="mini" style="width: 110px">
                <el-option
                  v-for="item in cities"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                </el-option>
              </el-select>

              <span>吨位:</span>
              <el-select v-model="value_1" placeholder="请选择" size="mini" style="width: 110px">
                <el-option
                  v-for="item in cities"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                </el-option>
              </el-select>
            </div>

            <div class="top_select_tab">
              <el-table
                :data="tableData1"
                style="width: 100%"
                fixed
                stripe
                size="mini"
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
          <div class="info_r_mid">
            <div class="info_r_mid_info">
              <p>船舶数量信息统计图<i class="el-icon-caret-right"></i></p>

            </div>
            <div class="info_r_mid_tab">
              <div id="echart_1"></div>
              <div id="echart_2"></div>
            </div>
          </div>
          <div class="info_r_bot">
            <div class="info_r_bot_top clearfix">
              <div class="info_r_bot_info l">
                <p>船舶数量分布统计图<i class="el-icon-caret-right"></i></p>
              </div>
            </div>
            <div class="info_r_bot_bot">
              <div id="echart_3"></div>
              <div id="echart_4"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>


</template>
<script type="es6">
  import echarts from 'echarts'
  import select from '../select/Select'
  export default {
    data (){
      return {
        sname:'111',
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value_1:'',
        checkboxGroup: [],
        tableData1: [{
          date: '台站',
          name: '100',
          address: '23',
          num: '23',
          all: '115'
        }, {
          date: '台站',
          name: '100',
          address: '34',
          num:'23',
          all: '115'
        }, {
          date: '雷达',
          name: '100',
          address: '53',
          num:'23',
          all: '115'
        }, {
          date: '潜标',
          name: '100',
          address: '13',
          num:'23',
          all: '115'
        }, {
          date: '潜标',
          name: '100',
          address: '13',
          num:'23',
          all: '115'
        }, {
          date: '潜标',
          name: '100',
          address: '13',
          num:'23',
          all: '115'
        }, {
          date: '潜标',
          name: '100',
          address: '13',
          num:'23',
          all: '115'
        }],

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
      }
    },
    mounted (){
      let screeH = document.documentElement.clientHeight
      let oceH = screeH*.8
      $('.oceaLarge').height(oceH)
      $('.info_l').height(oceH)
      $('.info_r').height(oceH)
      let infoH = $('.info_r').height()
      $('.info_r_mid').css('margin-top',infoH*.02)
      $('.info_r_bot').css('margin-top',infoH*.02)
      let info_r_botW = $('.info_r_bot_bot').width()
      let info_r_botH = $('.info_r_bot_bot').height()
      $(".bot_r").width(info_r_botW - 104 -5-15 -5)
      $(".bot_r").height(info_r_botH)
      let height_bot = $(".info_r_mid").height()- 37
      $(".info_r_mid_tab").height(height_bot)
      $('.info_r_bot_bot').height(height_bot)
      let option = {
        color: ['#3398DB'],
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
          left: '3%',
          right: '1%',
          bottom: '1%',
          top: '4%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            data : ['0-5000', '10-5000', '10000-15000'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis : [
          {
            type : 'value',
            name: '数量/膄',
            scale: true,
            min: 0,
            max: 8,
            interval: 2,
            axisLabel: {
              formatter: '{value}'
            }
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
                  var colorList = ['#5c6275','#4bceaf','#ffad1e','#79a0ef','#5c6275','#4bceaf'];
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
      let option_3 = {
        // legend: {
        //   x : 'center',
        //   y : 'bottom',
        //   data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
        // },

        calculable : true,
        series : [
          {
            name:'半径模式',
            type:'pie',
            radius : [10, 110],
            center : ['50%', '50%'],
            roseType : 'radius',
            grid: {
              x: '12',
              y: '42',
              x2: '12',
              y2: '12',
              containLabel: true
            },
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            lableLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data:[
              {value:10, name:'rose1'},
              {value:5, name:'rose2'},
              {value:15, name:'rose3'},
              {value:25, name:'rose4'},
              {value:20, name:'rose5'},
              {value:35, name:'rose6'},
              {value:30, name:'rose7'},
              {value:40, name:'rose8'}
            ]
          }
        ]
      };
      let option_4 = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // legend: {
        //   orient: 'vertical',
        //   x: 'left',
        //   data:['直达','营销广告','搜索引擎']
        // },
        grid: {
          left: '1%',
          right: '1%',
          bottom: '1%',
          top: '1%',
          containLabel: true
        },
        series: [
          {
            name:'访问来源',
            type:'pie',
            // selectedMode: 'single',
            // radius: [0, '30%'],

            label: {
              normal: {
                position: 'inner'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data:[
              {value:335, name:'直达', selected:true},
              {value:679, name:'营销广告'},
              {value:1548, name:'搜索引擎'}
            ]
          },
        ]
      };
      let echart_1 = echarts.init(document.getElementById('echart_1'))
      let echart_2 = echarts.init(document.getElementById('echart_2'))
      let echart_3 = echarts.init(document.getElementById('echart_3'))
      let echart_4 = echarts.init(document.getElementById('echart_4'))
      echart_1.setOption(option)
      echart_2.setOption(option)
      echart_3.setOption(option_3)
      echart_4.setOption(option_4)

      // let LocalAPI = 'http://182.18.76.244:8090/otes/shipinfo/getCount/orga'
      // this.$http.get(LocalAPI).then((res)=>{
      //   console.log(res)
      // }, (err) => {
      //   console.log(err)
      // })

    },
    created(){

    },
    components:{
      'v-select' : select
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .oceaLarge
    margin-top 55px
    .ocea_info
      height 100%
      .info_l
        width 60%
        height 100%
        background #7497ce
        border-radius 10px
        position relative
        .ocea_info_name
          position absolute
          left 20px
          top 20px
          padding 0 10px
          height 27px
          margin-left 10px
          background-color #2a3cba
          color #fff
          font-size 14px
          font-weight 700
          line-height 27px
          text-align center
          &:hover
            background-color #ccc
        .info_l_list
          position absolute
          right 20px
          top 50%
          margin-top -84px
          ul
            &>li
              width 85px
              height 80px
              margin-top 4px
              border-radius 5px
              text-align center
              cursor pointer
              box-shadow 0 0 20px 0 rgba(0,0,0,0.18)
              &:nth-child(1)
                background-color #2a3cba
              &:nth-child(2)
                background-color #0babfe
              img
                width 46px
                padding-top 8px
              p
                font-size 14px
                color #fff
                text-align center
                padding-top 2px
              &:hover
                background-color red
      .info_r
        width 39%
        height 100%
        margin-left 1%
        .info_r_top
          padding 5px 10px
          box-sizing border-box
          height 32%
          background-color #fff
          border-radius 10px
          overflow hidden
          .chart_name
            height 26px
            padding-bottom 5px
            text-align center
            .l
              background-color #2a3cba
              line-height 27px
              padding 0px 10px
              text-align center
              color #fff
          .top_select
            height 33px
            background-color #4d4d4d
            line-height 30px
            margin-bottom 5px
            span
              color #fff
              padding-left 10px
          &>div
            width 100%
            height 80%
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
          border-radius 10px
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
            #echart_1
              width 50%
              height 100%
              float left
            #echart_2
              width 50%
              height 100%
              float left
            .has-gutter
              tr
                th
                  text-align center
                  color #fff
                  background-color #2a3cba
            .el-table td, .el-table th
              padding 8px 0px
              .cell
                line-height 16px
        .info_r_bot
          height 32%
          padding 5px
          box-sizing border-box
          background-color #fff
          border-radius 10px
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
            #echart_3
              width 50%
              height 100%
              float left
            #echart_4
              width 50%
              height 100%
              float left
</style>
