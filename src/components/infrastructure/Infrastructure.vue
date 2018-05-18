<template>
  <div class="oceaInfra">
    <div class="w">
      <div class="ocea_info">
        <div class="l info_l">
          <div class="ocea_info_name">
            <p>基础设施实时统计地图<i class="el-icon-caret-right"></i></p>
          </div>

          <div class="info_l_list">
            <ul>
              <li><img src="./inf_01.png" alt=""><p>码头</p></li>
              <li><img src="./inf_02.png" alt=""><p>房屋</p></li>
              <li><img src="./inf_03.png" alt=""><p>气象站</p></li>
              <li><img src="./inf_04.png" alt=""><p>实验场</p></li>
              <li><img src="./inf_05.png" alt=""><p>科研井</p></li>
              <li><img src="./inf_06.png" alt=""><p>科研曹</p></li>
              <li class="info_more"><img src="./more.png" alt="">
                <p>更多</p>
                <div>
                  <ul class="info_hidde">
                    <li><img src="./inf_01.png" alt=""><p>台站</p></li>
                    <li><img src="./inf_01.png" alt=""><p>浮标</p></li>
                    <li><img src="./inf_01.png" alt=""><p>飞机</p></li>
                    <li><img src="./inf_01.png" alt=""><p>雷达</p></li>
                    <li><img src="./inf_01.png" alt=""><p>潜器</p></li>
                    <li><img src="./inf_01.png" alt=""><p>船舶</p></li>
                  </ul>
                </div>
              </li>
            </ul>
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
        <div class="l info_r clearfix">
          <div class="info_r_mid">
            <div class="info_r_mid_info">
              <p>基础设施数据统计表<i class="el-icon-caret-right"></i></p>
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
          <div class="info_r_top">
            <div class="chart_name">
              <div class="l">
                <p>基础设施面积变化趋势<i class="el-icon-caret-right"></i></p>
              </div>
            </div>
            <div class="chart_show">
              <div id="chart_1"></div>
            </div>
          </div>
          <div class="info_r_bot">
            <div class="info_r_bot_top clearfix">
              <div class="info_r_bot_info l">
                <p>基础设施面积变化趋势<i class="el-icon-caret-right"></i></p>
              </div>
            </div>
            <div class="info_r_bot_bot">
              <div class="bot_l l">
                <ul class="info_r_bot_icon l">
                  <li><p>码头</p></li>
                  <li><p>房屋</p></li>
                  <li><p>气象站</p></li>
                  <li><p>实验场</p></li>
                </ul>
                <ul class="info_r_bot_icon l">
                  <li><p>科研业务用井</p></li>
                  <li><p>用海</p></li>
                  <li><p>用地</p></li>
                  <li><p>科研业务用槽</p></li>
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
      $('.oceaInfra').height(oceH)
      $('.info_l').height(oceH)
      $('.info_r').height(oceH)
      let infoH = $('.info_r').height()
      $('.info_r_top').css('margin-top',infoH*.02)
      $('.info_r_bot').css('margin-top',infoH*.02)
      let info_r_botH = $('.info_r_bot_bot').height()
      $(".bot_r").height(info_r_botH)

      let option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data:['码头','房屋','气象站','','实验场','用海'],
          x: 'right',
          top: -3,
          right: 20,
          // orient: 'vertical'
        },
        grid: {
          left: '3%',
          right: '5%',
          bottom: '3%',
          top: '22%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          splitLine:{
            show:true
          },
          data: ['2012年','2013年','2014年','2015年','2016年','2017年','2018年']
        },
        yAxis: {
          type: 'value',
          splitLine:{
            show:true,
            lineStyle:{
              smooth:true,
              width: 1
            }
          },
        },
        series: [
          {
            name:'码头',
            type:'line',
            stack: '总量',
            smooth:false,
            itemStyle:{
              normal:{
                lineStyle:{
                  width:2,
                  type:'dotted'  //'dotted'虚线 'solid'实线
                }
              }
            },
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'房屋',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            name:'气象站',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
            name:'实验场',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
          },
          {
            name:'用海',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
      let myChart_1 = echarts.init(document.getElementById("chart_1"));
      myChart_1.setOption(option)

      let option2 = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        grid: {
          left: '3%',
          right: '2%',
          bottom: '3%',
          top: '2%',
          containLabel: true
        },
        legend: {
          x: 'right',
          data:['南海','东海','北海'],
          top: -20,
          right: 20,
        },
        series: [
          {
            name:'占有量',
            type:'pie',
            selectedMode: 'single',
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
              {value:335, name:'南海', selected:true},
              {value:679, name:'东海'},
              {value:1548, name:'北海'}
            ]
          }
        ]
      };

      let myChart2 = echarts.init(document.getElementById('chart2'));

      myChart2.setOption(option2)

      window.timer3 = setInterval(function () {
        $('.icon_list img').each(function (index,val) {
          var H = Math.random()*500
          var W = Math.random()*700
          $(val).css({"left":W+'px','top':H+'px'})
        })
      },2000)

    },
    beforeRouteLeave (to, from, next) {
      // clearInterval(this.timer)
      clearInterval(window.timer3)
      next()
    },
    created(){

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .oceaInfra
    margin-top 55px
    height 80%
    .w
      height 100%
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
                    top -77px
                    right 47px
                    width 274px
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
                  width 36px
                  padding-top 8px
                p
                  font-size 16px
                  color #fff
                  text-align center
                  padding-top 2px
                &:hover
                  background-color red
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
        .info_r
          width 39%
          height 100%
          margin-left 1%
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
          .info_r_top
            padding-top 5px
            box-sizing border-box
            height 32%
            background-color #fff
            border-radius 10px
            position relative
            .chart_name
              height 26px
              margin-left 10px
              position absolute
              text-align center
              .l
                /*width 95px*/
                height 26px
                padding 0 5px
                background-color #2a3cba
                p
                  font-size 14px
                  line-height 26px
                  color #fff
                  font-weight 700
            .chart_show
              padding 0 10px 10px 10px
              box-sizing border-box
              height 100%
              #chart_1
                width 100%
                height 100%
          .info_r_bot
            height 32%
            padding 5px
            box-sizing border-box
            background-color #fff
            border-radius 10px
            .info_r_bot_top
              .info_r_bot_info
                /*width 150px*/
                height 27px
                padding 0 5px
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
              .bot_l
                width 47%
                margin-top 40px
                margin-left 10px
                box-sizing border-box
                .info_r_bot_icon
                  margin-right 2px
                  li
                    width 106px
                    height 28px
                    line-height 28px
                    background #ccc
                    box-shadow 0 0 10px 0 #b3b3b3
                    text-align center
                    border-radius 3px
                    vertical-align middle
                    background-color #666666
                    margin-top 2px
                    &:first-child
                      margin-top 0px
                    img
                      width 28px
                    p
                      color #fff
                    &:hover
                      cursor pointer
                      background-color green
              .bot_r
                width 47%
                margin-top -10px
                margin-left 1%
                #chart2
                  /*width 100%*/
                  height 100%
                  background-color #ccc


</style>
