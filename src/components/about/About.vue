<template>
  <div class="oceaLarge">
    <div class="w">
      <div class="ocea_info">
        <div class="l info_l">
          <div class="ocea_info_name">
            <p>大型装备实时统计地图<i class="el-icon-caret-right"></i></p>
          </div>

          <div class="info_l_list">
            <ul>
              <li><img src="./ocea_01.png" alt=""><p>台站</p></li>
              <li><img src="./ocea_02.png" alt=""><p>浮标</p></li>
              <li><img src="./ocea_03.png" alt=""><p>飞机</p></li>
              <li><img src="./ocea_04.png" alt=""><p>雷达</p></li>
              <li><img src="./ocea_05.png" alt=""><p>潜器</p></li>
              <li><img src="./ocea_06.png" alt=""><p>船舶</p></li>
              <li class="info_more"><img src="./more.png" alt="">
                <p>更多</p>
                <div>
                  <ul class="info_hidde">
                    <li><img src="./ocea_01.png" alt=""><p>台站</p></li>
                    <li><img src="./ocea_02.png" alt=""><p>浮标</p></li>
                    <li><img src="./ocea_03.png" alt=""><p>飞机</p></li>
                    <li><img src="./ocea_04.png" alt=""><p>雷达</p></li>
                    <li><img src="./ocea_05.png" alt=""><p>潜器</p></li>
                    <li><img src="./ocea_06.png" alt=""><p>船舶</p></li>
                  </ul>
                </div>
              </li>
              <!--<li></li>-->
            </ul>
          </div>
        </div>
        <div class="l info_r clearfix">
          <div class="info_r_top">
            <div class="chart_name">
              <div>
                <div class="l">
                  <p>统计图表</p>
                </div>
                <div class="char_r r">
                  <el-checkbox-group v-model="checkboxGroup" size="mini">
                    <el-checkbox label="站台" border style="background-color: #0babfe; color: #fff;margin-left: 0px;"></el-checkbox>
                    <el-checkbox label="雷达" border style="background-color: #4bceaf; color: #fff;margin-left: 0px;"></el-checkbox>
                    <el-checkbox label="浮标" border style="background-color: #5c6275; color: #fff;margin-left: 0px;"></el-checkbox>
                    <el-checkbox label="潜标" border style="background-color: #6db821; color: #fff;margin-left: 0px;"></el-checkbox>
                    <el-checkbox label="船舶" border style="background-color: #79a0ef; color: #fff;margin-left: 0px;"></el-checkbox>

                  </el-checkbox-group>
                </div>
              </div>

            </div>
            <div>
              <div id="chart_1"></div>
              <div id="chart_2"></div>
              <div id="chart_3"></div>
            </div>

          </div>
          <div class="info_r_mid">
            <div class="info_r_mid_info">
              <p>大型装备状态统计<i class="el-icon-caret-right"></i></p>

            </div>
            <div class="info_r_mid_tab">
              <el-table
                :data="tableData2"
                style="width: 100%"
                fixed
                stripe
                size="small"
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
                  sortable
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
                  sortable
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
          <div class="info_r_bot">
            <div class="info_r_bot_top clearfix">
              <div class="info_r_bot_info l">
                <p>大型装备状态统计<i class="el-icon-caret-right"></i></p>
              </div>
              <div class="info_r_bot_r r">
                <span class="">站台</span>
              </div>
            </div>
            <div class="info_r_bot_bot">
              <div class="bot_l l">
                <ul class="info_r_bot_icon l">
                  <li><img src="./ocea_01.png" alt=""><p>站台</p></li>
                  <li><img src="./ocea_02.png" alt=""><p>浮标</p></li>
                  <li><img src="./ocea_03.png" alt=""><p>飞机</p></li>
                  <li><img src="./ocea_04.png" alt=""><p>雷达</p></li>
                </ul>
                <ul class="info_r_bot_icon l">
                  <li><img src="./ocea_01.png" alt=""><p>站台</p></li>
                  <li><img src="./ocea_02.png" alt=""><p>浮标</p></li>
                  <li><img src="./ocea_03.png" alt=""><p>飞机</p></li>
                  <li><img src="./more.png" alt=""><p>更多</p></li>
                </ul>
              </div>
              <div class="bot_r l">
                <div id="chart2"></div>
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

  export default {
    data (){
      return {
        checkboxGroup: [],
        tableData2: [{
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
            data : ['在建', '在库', '在用', '待检', '送检', '待报废'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis : [
          {
            type : 'value'
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
      let myChart_1 = echarts.init(document.getElementById("chart_1"));
      let myChart_2 = echarts.init(document.getElementById("chart_2"));
      let myChart_3 = echarts.init(document.getElementById("chart_3"));
      myChart_1.setOption(option)
      myChart_2.setOption(option)
      myChart_3.setOption(option)

      let option2 = {
        color: ['#3398DB'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '1%',
          bottom: '2%',
          top: '2%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            data : ['在建', '在库', '在用', '待检', '送检', '待报废'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis : [
          {
            type : 'value'
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

      let myChart2 = echarts.init(document.getElementById('chart2'));

      myChart2.setOption(option2)

    },
    created(){

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
        background #aac6ee
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
          position relative
          ul
            position absolute
            right 20px
            top 80px
            &>li
              width 75px
              height 70px
              /*line-height 74px*/
              margin-top 4px
              border-radius 5px
              text-align center
              cursor pointer
              box-shadow 0 0 20px 0 rgba(0,0,0,0.18)
              &:nth-child(1)
                background-color #0babfe
              &:nth-child(2)
                background-color #5c6275
              &:nth-child(3)
                background-color #6db821
              &:nth-child(4)
                background-color #ffad1e
              &:nth-child(5)
                background-color #4bceaf
              &:nth-child(6)
                background-color #a360fe
              &:nth-child(7)
                background-color #79a0ef
                position relative
                .info_hidde
                  position absolute
                  top -76px
                  right 37px
                  width 292px
                  transition all 0.5s
                  opacity 0
                  visibility hidden
                  li
                    float left
                    margin-left 5px
                &:hover
                  .info_hidde
                    transition all 0.5s
                    visibility visible
                    opacity 1
              img
                width 43px
                /*padding-top 8px*/
              p
                font-size 16px
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
          padding-top 5px
          box-sizing border-box
          height 32%
          background-color #fff
          border-radius 10px
          .chart_name
            height 26px
            margin-left 10px
            padding-bottom 12px
            text-align center
            .l
              width 95px
              height 26px
              background-color #2a3cba
              p
                font-size 14px
                line-height 26px
                color #fff
                font-weight 700
            .char_r
              width 80%
              .el-checkbox__input.is-checked+.el-checkbox__label
                color #fff
              .el-checkbox.is-bordered.el-checkbox--mini
                padding 3px 5px 0px 5px
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
            height 200px
            margin-top 8px
            margin-left 10px
            .info_r_bot_icon
              margin-right 2px
              li
                width 48px
                height 46px
                background #ccc
                text-align center
                border-radius 5px
                vertical-align middle
                margin-top 2px
                &:first-child
                  margin-top 0px
                &:nth-child(1)
                  background-color #0babfe
                &:nth-child(2)
                  background-color #79a0ef
                &:nth-child(3)
                  background-color #6db821
                &:nth-child(4)
                  background-color #5c6275
                img
                  width 28px
                p
                  color #fff
                &:hover
                  cursor pointer
                  background-color green
            #chart2
              width 100%
              height 100%
              background-color #ccc


</style>
