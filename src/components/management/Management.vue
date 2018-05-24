<template>
  <div class="overseas">
    <div class="w">
      <div class="ocea_info">
        <div class="l info_l">
          <div class="ocea_info_name">
            <p>基础设施实时统计地图<i class="el-icon-caret-right"></i></p>
          </div>

          <!--<div class="overNormal">-->
          <!--<v-normal></v-normal>-->
          <!--</div>-->

          <div class="info_l_list">
            <ul>
              <li><img src="./inf_01.png" alt="">
                <p>飞机</p></li>
              <li><img src="./inf_02.png" alt="">
                <p>卫星</p></li>
              <li><img src="./inf_03.png" alt="">
                <p>浅器</p></li>
              <li><img src="./inf_04.png" alt="">
                <p>实验场</p></li>
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
          <div class="info_r_top">
            <div class="info_r_mid_info">
              <p>各类大型设备投入总值统计分析<span> &nbsp;&nbsp;(单位：千万元)</span></p>
            </div>
            <div class="info_r_mid_tab">
              <div id="myChart"></div>
            </div>
          </div>
          <div class="info_r_bot">
            <div class="info_r_mid_info">
              <p>各类大型设备资产构成统计图</p>
            </div>
            <div class="info_r_mid_tab">
              <el-table
                :data="tableData2"
                style="width: 100%"
                fixed
                stripe
                size="mini"
                header-align="center"
                :row-class-name="tableRowClassName">
                <el-table-column
                  prop="num"
                  align="center"
                  width="55"
                  sortable
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="name"
                  align="center"
                  width="55"
                  label="名称">
                </el-table-column>
                <el-table-column
                  prop="model"
                  align="center"
                  width="55"
                  label="型号">
                </el-table-column>
                <el-table-column
                  prop="unit"
                  align="center"
                  label="使用单位">
                </el-table-column>
                <el-table-column
                  prop="age"
                  align="center"
                  sortable
                  label="已使用年限">
                  <template slot-scope="scope">
                    <el-progress :percentage="scope.row.age"></el-progress>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="register"
                  align="center"
                  sortable
                  label="登记价值">
                </el-table-column>
                <el-table-column
                  prop="value"
                  align="center"
                  label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row.value)" type="text" size="mini"
                               style="display: inline-block;width: 80%;height: 80%; background-color: #7f8180;color:#fff;">
                      查看详情
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
              <!--<table>-->
              <!--<tr class="thead">-->
              <!--<th>序号</th>-->
              <!--<th>名称</th>-->
              <!--<th>型号</th>-->
              <!--<th>使用单位</th>-->
              <!--<th>已使用年限</th>-->
              <!--<th>登记价值</th>-->
              <!--<th>操作</th>-->
              <!--</tr>-->
              <!--<tr class="tbody">-->
              <!--<td>1</td>-->
              <!--<td>船舶</td>-->
              <!--<td>B12</td>-->
              <!--<td>东海分局</td>-->
              <!--<td>-->
              <!--<el-progress :percentage="50"></el-progress>-->
              <!--</td>-->
              <!--<td>51900</td>-->
              <!--<td><a href="#">详细信息</a></td>-->
              <!--</tr>-->
              <!--<tr class="tbody">-->
              <!--<td>1</td>-->
              <!--<td>1</td>-->
              <!--<td>1</td>-->
              <!--<td>1</td>-->
              <!--<td>-->
              <!--<el-progress :percentage="80"></el-progress>-->
              <!--</td>-->
              <!--<td>1</td>-->
              <!--<td>1</td>-->
              <!--</tr>-->
              <!--<tr class="tbody">-->
              <!--<td>1</td>-->
              <!--<td>1</td>-->
              <!--<td>1</td>-->
              <!--<td>1</td>-->
              <!--<td>1</td>-->
              <!--<td>1</td>-->
              <!--<td>1</td>-->
              <!--</tr>-->
              <!--</table>-->
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import normal from '../normal/Normal'
  import echarts from 'echarts'

  export default {
    data() {
      return {
        checkboxGroup: [],
        tableData2: [{
          num: '1',
          name: '船舶',
          model: 'B12',
          unit: '东海分局',
          age: '7',
          register: '51800万元',
        }, {
          num: '2',
          name: '飞机',
          model: 'B12',
          unit: '东海分局',
          age: '7',
          register: '51800万元',
        }, {
          num: '3',
          name: '潜器',
          model: 'B12',
          unit: '北海分局',
          age: '14',
          register: '51800万元',
        }, {
          num: '4',
          name: '船舶',
          model: 'B12',
          unit: '东海分局',
          age: '1',
          register: '51800万元',
        }, {
          num: '5',
          name: '卫星',
          model: 'B12',
          unit: '南海分局',
          age: '8',
          register: '51800万元',
        }, {
          num: '6',
          name: '船舶',
          model: 'B12',
          unit: '北海分局',
          age: '7',
          register: '51800万元',
        }, {
          num: '7',
          name: '飞机',
          model: 'B12',
          unit: '南海分局',
          age: '9',
          register: '51800万元',
        }, {
          num: '8',
          name: '卫星',
          model: 'B12',
          unit: '南海分局',
          age: '8',
          register: '51800万元',
        }, {
          num: '9',
          name: '卫星',
          model: 'B12',
          unit: '南海分局',
          age: '8',
          register: '51800万元',
        }, {
          num: '10',
          name: '卫星',
          model: 'B12',
          unit: '南海分局',
          age: '8',
          register: '51800万元',
        },]
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
    mounted() {
      let screeH = document.documentElement.clientHeight >= 780 ? document.documentElement.clientHeight : 780
      $('.info_l_list').css('margin-top', -$('.info_l_list').height() / 2 + 'px')
      $('.info_r_top .info_r_mid_tab').height(screeH * .8 * .49 - 28)
      $('.info_r_bot .info_r_mid_tab').height(screeH * .8 * .49 - 38)
      $('.info_r_bot').css('margin-top', screeH * .8 * .02 + 'px')
      window.timer1 = setInterval(function () {
        $('.icon_list img').each(function (index, val) {
          let H = Math.random() * 500
          let W = Math.random() * 700
          $(val).css({"left": W + 'px', 'top': H + 'px'})
        })
      }, 2000)

      // let LocalAPI = 'http://182.18.76.244:8090/otes/shipinfo/getCount/orga'
      // this.$http.get(LocalAPI).then((res) => {
      //   console.log(res.data.data.detailNums)
      //   this.tableData2 = res.data.data.detailNums
      // }, (err) => {
      //   console.log(err)
      // })
      var colors = ['#393939', '#f5b031', '#fad797', '#59ccf7', '#c3b4df'];
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color: ['#ffac1e', '#a273e7', '#77a0f0', '#1497ab'],
        // legend: {
        //   orient: 'vertical',
        //   x: 'left',
        //   data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
        // },
        series: [

          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            data: [
              {value: 31, name: '卫星'},
              {value: 30, name: '潜器'},
              {value: 258, name: '飞机'},
              {value: 350, name: '船舶'}
            ],
            label: {
              normal: {
                formatter: '{b} {c}',
                rich: {
                  c: {
                    fontSize: 25,
                  }
                },
              }
            }
          }
        ]
      }
      let myChart = echarts.init(document.getElementById("myChart"));
      myChart.setOption(option)

    },
    beforeRouteLeave(to, from, next) {
      clearInterval(window.timer1)
      next()
    },
    created() {

    },
    components: {
      "v-normal": normal
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .overseas
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
          border-radius 4px
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
          .overNormal
            position absolute
            right 20px
            top 10px
          .info_l_list
            position absolute
            top 50%
            right 20px
            ul /*position absolute
              right 20px
              top 90px*/
              & > li
                width 75px
                height 70px
                /*line-height 74px*/
                margin-top 4px
                border-radius 5px
                text-align center
                cursor pointer
                box-shadow 0 0 20px 0 rgba(0, 0, 0, 0.18)
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
          box-sizing border-box
          .info_r_top
            height 49%
            padding 5px
            box-sizing border-box
            overflow hidden
            background-color #fff
            border-radius 4px
            .info_r_mid_info
              width 350px
              line-height 18px
              margin-left 10px
              margin-top 5px
              border-left 3px solid #0babfe
              p
                color #000
                font-weight 700
                font-family '微软雅黑'
                font-size 14px
                padding-left 10px
                span
                  font-size 12px
                  font-family '微软雅黑'
                  font-weight 400
                  color #c0c4cc
            .info_r_mid_tab
              text-align center
              padding-top 5px
              overflow hidden
              #myChart
                width 100%
                height 100%
          .info_r_bot
            height 49%
            padding 5px
            box-sizing border-box
            overflow hidden
            background-color #fff
            border-radius 4px
            .info_r_mid_info
              width 230px
              line-height 18px
              margin-left 10px
              margin-top 5px
              border-left 3px solid #0babfe
              p
                color #000
                font-weight 700
                font-family '微软雅黑'
                font-size 14px
                padding-left 10px
            .info_r_mid_tab
              text-align center
              height 100%
              padding-top 10px
              overflow hidden
              table
                width 100%
                border-collapse collapse
                .thead
                  width 100%
                  background-color #203aa9
                  color #fff
                  th
                    text-align center
                    width 11%
                    line-height 25px
                    &:nth-child(4)
                      width 17%
                    &:nth-child(5)
                      width 17%
                    &:nth-child(6)
                      width 17%
                    &:nth-child(7)
                      width 16%

  /*.tbody*/
  /*td*/
  /*line-height 27px*/
  /*border-bottom 1px solid #f7f7f7*/
  /*a*/
  /*color #203aa9*/


</style>
