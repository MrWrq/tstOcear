<template>
  <div class="inspection">
    <div class="w">
      <div class="region_info">
        <div class="region_info_l">
          <div class="info_l_top">
            <div class="top_title">
              <v-title :message="titL_Top"></v-title>
            </div>
            <div class="normal">
              <span><img src="./normal.png" alt="">正常</span>
              <span><img src="./error.png" alt="">异常</span>
            </div>
            <div class="top_list" ref="top_list">
              <v-icon :icons='icons'></v-icon>
            </div>
            <div class="icon_list">
              <img src="./reg_01.png" alt="">
              <img src="./reg_02.png" alt="">
              <img src="./reg_03.png" alt="">
              <img src="./reg_04.png" alt="">
              <img src="./reg_05.png" alt="">
              <img src="./reg_06.png" alt="">
              <img src="./reg_07.png" alt="">
            </div>
          </div>

        </div>
        <div class="region_info_r">
          <div class="info_r_top">
            <!--提示组件-->
            <v-title :message="titR_Top"></v-title>
            <div class="round">
              <div class="round_1">北海</div>
              <div class="round_2">南海</div>
              <div class="round_3">东海</div>
            </div>

          </div>
          <div class="info_r_mid" ref="info_r_mid">
            <v-title :message="titR_Mid"></v-title>

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
                  sortable
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="name"
                  align="center"
                  label="类型">
                </el-table-column>
                <el-table-column
                  prop="address"
                  align="center"
                  sortable
                  label="异常数量">
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="info_r_bot" ref="info_r_bot">
            <v-title :message="titR_Bot"></v-title>
            <div class="bot_chart">
              <div class="bot_chart_l">
                <ul>
                  <li v-for="item in iconsChart">{{item.name}}</li>
                </ul>
              </div>
              <div class="bot_chart_r">
                <div id="chartPolling"></div>
                <div class="chartTitle clearfix">
                  <ul>
                    <li class="clearfix"><i></i><span>已巡检</span></li>
                    <li><i></i><span>未巡检</span></li>
                  </ul>
                </div>
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
  import regTitle from './../minModule/title/Title'
  import regTable from './../minModule/table/Table'
  import icon from './../minModule/icon/Icon'

  export default {
    data (){
      return {
        titL_Top: '装备巡检实时统计地图',
        titR_Top: '海域选择',
        titR_Mid: '设备异常清单',
        titR_Bot: '大型装备巡检状态',
        icons: [
          {name: '海洋站', url: 'static/img/1.png'},
          {name: '浮标', url: '.static/img/2.png'},
          {name: '海床基', url: 'static/img/3.png'},
          {name: '海啸浮标', url: 'static/img/4.png'},
          {name: '雷达', url: 'static/img/5.png'}
        ],
        iconsChart: [
          {name: '海洋站'},
          {name: '浮标'},
          {name: '海床基'},
          {name: '海啸浮标'},
          // {name: '雷达'}
        ],
        dataTable:[
          {date: '台站',name: '100',address: '23'},
          {date: '雷达',name: '100',address: '11'},
          {date: '潜标',name: '100',address: '44'},
          {date: '台站',name: '100',address: '62'},
          {date: '台站',name: '100',address: '3'}
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
      let _H = $(".oceans").height() * .8;
      this.$refs.info_r_mid.style.marginTop = _H * .02 + 'px'
      this.$refs.info_r_bot.style.marginTop = _H * .02 + 'px'
      let _top = this.$refs.top_list.offsetHeight
      this.$refs.top_list.style.marginTop = -_top/2 + 'px'
      $('#chartPolling > div').height($("#chartPolling").height())

      var data = [53, 85, 60, 45, 53];
      var xMax = 100;
      let optionPolling = {
        tooltip: {
          show: true,
          formatter: "{b} <br> {c}件"
        },
        grid: {
          x:-10,
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
          data: ['海洋站', '浮标', '海床基', '海啸浮标', '雷达', ],
          axisTick: {
            // color:'#fff',
            show: false,
          },
          axisLine: {
            //  color:'#fff',
            show: true,
          },
          splitLine: {
            show: true,
            // color:'#fff',
          },
          axisLabel: {
            show: false,
          }

        }],
        series: [{
          name: ' ',
          type: 'bar',
          barWidth: 12,
          silent: true,
          itemStyle: {
            normal: {
              color: 'red',
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
              formatter: '{c}%',
            }
          },
          data: [{
            value: 53,
            itemStyle: {
              normal:{color:'#ccc',barBorderRadius:[0,10,10,0],}
            }
          }, {
            value:45,
            itemStyle: {
              normal:{color:'#6db821',barBorderRadius:[0,10,10,0],}

            }
          }, {
            value: 53,
            itemStyle: {
              normal:{color:'#4f9aff',barBorderRadius:[0,10,10,0],}

            }
          }, {
            value: 32,
            itemStyle: {
              normal:{color:'#6db821',barBorderRadius:[0,10,10,0],  },


            }
          }, {

            value: 12,
            itemStyle: {
              normal:{color:'#6db821',barBorderRadius:[0,10,10,0],}

            }
          }, ],
        }]
      };
      let myChart_1 = echarts.init(document.getElementById('chartPolling'))
      myChart_1.setOption(optionPolling)

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
  .inspection
    margin-top 55px
    height 80%
    .w
      height 100%
      .region_info
        height 100%
        .region_info_l
          width 60%
          height 100%
          float left
          position relative
          .info_l_top
            width 100%
            height 100%
            overflow hidden
            border-radius 4px
            background #aac6ee
            position relative
            vertical-align middle
            .top_title
              position relative
              top 15px
              left 20px
            .normal
              position absolute
              right 10px
              top 10px
              text-align center
              span
                display block
                width 75px
                height 27px
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
              top 50%
              right 20px
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
          .info_l_bot
            margin-top 2%
            background #1b6d85
        .region_info_r
          float left
          border-radius 4px
          width 39%
          height 100%
          margin-left 1%
          .info_r_top
            width 100%
            height 32%
            padding 10px
            overflow hidden
            box-sizing border-box
            border-radius 4px
            background-color #e5e8ed
            .round
              height 150px
              width 430px
              margin 0 auto
              margin-top 50px
              div
                float left
                width 100px
                height 100px
                line-height 100px
                font-size 45px
                color #d9dee1
                font-weight 700
                background-color #f6f7fa
                margin-left 10px
                border-radius 50%
                text-align center
                box-shadow 0 20px 10px 0 #d9dee1
                text-shadow: 1px 1px white, -1px -1px #d4dadd;
                border 15px solid rgba(214,218,226,.3)
                cursor pointer
                &.round_1
                  margin-left 0px
                &.round_2
                  width 120px
                  height 120px
                  color #28369b
                  text-shadow: 1px 1px white, -1px -1px #28369b;
                  line-height 120px
                &:hover
                  background-color #ccc
                  border 15px solid #ccc
          .info_r_mid
            width 100%
            height 32%
            overflow hidden
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
            height 32%
            overflow hidden
            padding 10px
            box-sizing border-box
            border-radius 4px
            background-color #fff
            position relative
            .bot_chart
              width 100%
              height 100%
              position absolute
              .bot_chart_l
                width 30%
                margin-top 50px
                float left
                ul
                  li
                    height 28px
                    line-height 28px
                    color #fff
                    border-radius 5px
                    text-align center
                    margin-top 5px
                    background-color #2a3cba
                    transition all .5s
                    &:first-child
                      margin-top 0px
                    &:hover
                      background-color #0babfe
                      cursor pointer
                      font-size 15px
              .bot_chart_r
                width 66%
                height 100%
                margin-top -10px
                float left
                margin-left 3px
                #chartPolling
                  width 100%
                  height 100%
                  div
                    height 100%
                .chartTitle
                  position absolute
                  right 30px
                  top 0px
                  ul
                    li
                      margin-left 5px
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
</style>
