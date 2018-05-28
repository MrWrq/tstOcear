<template>
  <div class="statistic">
    <div class="w">
      <div class="region_info">
        <div class="region_info_top">
          <div class="top_l l">
            <v-title :message="titL_Top"></v-title>

            <div class="top_l_chart">
              <div id="chart_l">
              </div>
            </div>
          </div>


          <div class="top_r l">
            <v-title :message="titL_Bot"></v-title>
            <div class="char_r">
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
                  width="50"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="all"
                  align="center"
                  sortable
                  label="设备类型">
                </el-table-column>
                <el-table-column
                  prop="name"
                  align="center"
                  label="设备编号">
                </el-table-column>
                <el-table-column
                  prop="address"
                  align="center"
                  sortable
                  label="安装时间">
                  <template slot-scope="scope">
                    <i class="el-icon-success"></i>&nbsp;&nbsp;{{scope.row.address}}
                  </template>
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  sortable
                  label="负责人">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
        <div class="region_info_bot">
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
                size="mini"
                header-align="center"
                :row-class-name="tableRowClassName">
                <el-table-column
                  prop="date"
                  align="center"
                  width="50"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="all"
                  align="center"
                  sortable
                  label="设备类型">
                </el-table-column>
                <el-table-column
                  prop="name"
                  align="center"
                  label="设备编号">
                </el-table-column>
                <el-table-column
                  prop="address"
                  align="center"
                  sortable
                  label="安装时间">
                  <template slot-scope="scope">
                     <i class="el-icon-success"></i>&nbsp;&nbsp;{{scope.row.address}}
                  </template>
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  sortable
                  label="负责人">
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
  import regTitle from '../minModule/title/Title'
  import regTable from '../minModule/table/Table'
  import echarts from 'echarts'
  export default {
    data (){
      return {
        checkboxGroup: [],
        titL_Top: '各设备的资产总值',
        titL_Bot: '各类装备构成统计表',
        titR_Top: '各海区数量分布',
        // titR_Top: '各设备类型数量',
        // titR_Top: '近五年使用数量趋势图',
        dataTable:[
          {date: '台站',name: '100',address: '23',num: '23',all: '115',name1:'浮标'},
          {date: '雷达',name: '100',address: '34',num: '23',all: '115',name1:'浮标1'},
          {date: '潜标',name: '100',address: '34',num: '23',all: '115',name1:'浮标2'},
          {date: '台站',name: '100',address: '34',num: '23',all: '115',name1:'浮标3'},
          {date: '台站',name: '100',address: '34',num: '23',all: '115',name1:'浮标4'}
        ]
      }
    },
    methods: {
      listChoose: (el) => {
        // el.target
      },
      handleClick(row) {
        console.log(row);
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
      let screeH = document.documentElement.clientHeight>780?document.documentElement.clientHeight:780
      $('.region_info_bot').css('margin-top',screeH*.8*.02)

      let option_l = {
        color: ['#3398DB'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          show: true,
          data: ['飞机','船舶','潜器','卫星']
        },
        xAxis : [
          {
            type : 'value',
            max: 50,
            name: '(千万元)',
            axisTick: {
              alignWithLabel: false
            }
          }
        ],
        yAxis : [
          {
            type : 'category',
            name: '(名称)',
            data : ['飞机', '船舶', '潜器', '卫星'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        series : [
          {
            name:'雷达',
            type:'bar',
            barWidth: '30%',
            data:[30, 35, 22, 15],
            itemStyle: {
              //通常情况下：
              normal:{
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params){
                  var colorList = ['#5c6275','#4bceaf','#ffad1e','#79a0ef','#5c6275','#4bceaf'];
                  return colorList[params.dataIndex];
                },
                barBorderRadius: 15,
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

      let myChart_l = echarts.init(document.getElementById('chart_l'));
      myChart_l.setOption(option_l)

    },
    created(){

    },
    components: {
      'v-title': regTitle,
      'v-table': regTable
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .statistic
    margin-top 55px
    height 80%
    .w
      height 100%
      .region_info
        width 100%
        height 100%
        .region_info_top
          width 100%
          height 49%
          position relative
          .top_l
            width 49.5%
            height 100%
            border-radius 4px
            overflow hidden
            position relative
            background-color #fff
            .top_l_chart
              width 100%
              height 100%
              box-sizing border-box
              /*padding-top 32px*/
              padding 32px 5px 5px 5px
              overflow hidden
              #chart_l
                width 100%
                height 100%
                background-color #fff
            .char_r
              position absolute
              top 5px
              right 5px
          .top_r
            width 49.5%
            height 100%
            border-radius 4px
            overflow hidden
            margin-left 1%
            position relative
            background-color #fff
            .char_r
              position absolute
              width 100%
              height 100%
              box-sizing border-box
              padding 38px 10px 10px 10px
            .heading
              height 20px
              line-height 20px
              background-color #fff
              border-left 3px solid #ccc
              color #000
        .region_info_bot
          width 100%
          height 49%
          padding 0px 5px
          box-sizing border-box
          overflow hidden
          border-radius 4px
          background-color #fff
          .elTable
            padding-top 42px
            padding-left 5px
            box-sizing border-box

</style>
