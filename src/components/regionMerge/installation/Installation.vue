<template>
  <div class="region">
    <div class="w">
      <div class="region_info">
        <div class="region_info_top">
          <div class="top_l l">
            <v-title :message="titL_Top"></v-title>
            <div class="char_r">
              <el-checkbox-group v-model="checkboxGroup" size="mini">
                <el-checkbox label="海洋站" border style="background-color: #5c6275; color: #fff;margin-left: 0px;"></el-checkbox>
                <el-checkbox label="浮标" border style="background-color: #4bceaf; color: #fff;margin-left: 0px;"></el-checkbox>
                <el-checkbox label="潜标" border style="background-color: #ffad1e; color: #fff;margin-left: 0px;"></el-checkbox>
                <el-checkbox label="船舶" border style="background-color: #79a0ef; color: #fff;margin-left: 0px;"></el-checkbox>
                <el-checkbox label="飞机" border style="background-color: #CE3A41; color: #fff;margin-left: 0px;"></el-checkbox>
                <el-checkbox label="指挥车" border style="background-color: #4bceaf; color: #fff;margin-left: 0px;"></el-checkbox>
                <el-checkbox label="雷达" border style="background-color: #4C7558; color: #fff;margin-left: 0px;"></el-checkbox>
                <el-checkbox label="潜器" border style="background-color: #1B67EF; color: #fff;margin-left: 0px;"></el-checkbox>
              </el-checkbox-group>
            </div>
            <!--<div class="normal">-->
              <!--<span><img src="./normal.png" alt="">正常</span>-->
              <!--<span><img src="./error.png" alt="">异常</span>-->
            <!--</div>-->
            <div class="top_l_chart">
              <div id="chart_l">

              </div>
            </div>
          </div>


          <div class="top_r l">
            <v-title :message="titL_Bot"></v-title>
            <div class="char_r">
              <el-checkbox-group v-model="checkboxGroup" size="mini">
                <el-checkbox label="南极" border style="background-color: #0babfe; color: #fff;margin-left: 0px;"></el-checkbox>
                <el-checkbox label="北极" border style="background-color: #4bceaf; color: #fff;margin-left: 0px;"></el-checkbox>
              </el-checkbox-group>
            </div>
            <div class="top_r_chart">
              <div id="chart_r1"></div>
              <div id="chart_r2"></div>
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
                  width="60"
                  sortable
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="name"
                  align="center"
                  label="设备类型">
                </el-table-column>
                <el-table-column
                  prop="all"
                  align="center"
                  label="设备编号">
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  sortable
                  label="安装时间">
                </el-table-column>
                <el-table-column
                  prop="name1"
                  align="center"
                  label="负责人">
                </el-table-column>
                <el-table-column
                  prop="danwei"
                  align="center"
                  label="管理单位">
                </el-table-column>
                <el-table-column
                  prop="area"
                  align="center"
                  label="所属区域">
                </el-table-column>
                <el-table-column
                  prop="jielun"
                  align="center"
                  label="结论">
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row.num)" type="text" size="mini" style="display: inline-block;width: 45%;height: 80%; background-color: #7f8180;color:#fff;">查看详情</el-button>
                    <el-button @click="handleClick(scope.row.num)" type="text" size="mini" style="display: inline-block;width: 45%;height: 80%; background-color: #7f8180;color:#fff;">设备入网</el-button>
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
  import regTitle from './../../minModule/title/Title'
  import regTable from './../../minModule/table/Table'
  export default {
    data (){
      return {
        checkboxGroup: [],
        titL_Top: '统计图表',
        titL_Bot: '统计图表',
        titR_Top: '数据清单统计',
        dataTable:[
          {date: '1',name: '漂流浮标',address: '23',num: '2017.5.5',all: 'X111',name1:'王建国',area:'南极',danwei:'上海极地研究中心','jielun':'验收通过'},
          {date: '2',name: '海洋站',address: '34',num: '2017.5.5',all: 'B212',name1:'王建国',area:'南极',danwei:'中国科学院','jielun':'验收通过'},
          {date: '3',name: '海啸浮标',address: '34',num: '2017.5.5',all: 'C805',name1:'王建国',area:'北极',danwei:'国家还海洋局北海分局','jielun':'验收通过'},
          {date: '4',name: '雷达',address: '34',num: '2017.5.5',all: 'G711',name1:'王建国',area:'南极',danwei:'海洋2号','jielun':'验收通过'},
          {date: '5',name: '海洋站',address: '34',num: '2017.5.5',all: '115',name1:'王建国',area:'北极',danwei:'中国科学院','jielun':'验收通过'},
          {date: '6',name: '海洋站',address: '34',num: '2017.5.5',all: '115',name1:'王建国',area:'南极',danwei:'上海极地研究中心','jielun':'验收通过'},
          {date: '7',name: '海洋站',address: '34',num: '2017.5.5',all: '115',name1:'王建国',area:'北极',danwei:'中国科学院','jielun':'验收通过'},
          {date: '4',name: '雷达',address: '34',num: '2017.5.5',all: 'G711',name1:'王建国',area:'南极',danwei:'国家还海洋局北海分局','jielun':'验收通过'},
          {date: '5',name: '海洋站',address: '34',num: '2017.5.5',all: '115',name1:'王建国',area:'北极',danwei:'中国科学院','jielun':'验收通过'},
          {date: '6',name: '海洋站',address: '34',num: '2017.5.5',all: '115',name1:'王建国',area:'南极',danwei:'中国科学院','jielun':'验收通过'},
          {date: '7',name: '海洋站',address: '34',num: '2017.5.5',all: '115',name1:'王建国',area:'北极',danwei:'中国科学院','jielun':'验收通过'},
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
      let screeH = document.documentElement.clientHeight>800?document.documentElement.clientHeight:800
      $('.region_info_bot').css('margin-top',screeH*.8*.02)

      let option_l = {
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
        title : {
          text: '2018年',
          x:'right',
          y:20
        },
        // grid: {
        //   left: '3%',
        //   right: '1%',
        //   bottom: '1%',
        //   top: '4%',
        //   containLabel: true
        // },
        xAxis : [
          {
            type : 'category',
            data : ['海洋站', '浮标', '潜标', '船舶', '飞机', '指挥车','雷达', '潜器'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis : [
          {
            type : 'value',
            max: 50 ,
          }
        ],
        series : [
          {
            name:'2018',
            type:'bar',
            barWidth: '30%',
            data:[20, 40, 30, 10, 4, 6,8,2],
            itemStyle: {
              //通常情况下：
              normal:{
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params){
                  var colorList = ['#5c6275','#4bceaf','#ffad1e','#79a0ef','#CE3A41','#4bceaf','#4C7558','#1B67EF'];
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

      let myChart_l = echarts.init(document.getElementById('chart_l'));
      myChart_l.setOption(option_l)



      let option_r = {
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        title : {
          text: '南极',
          x:'center',
          y:'80%'
        },
        series : [
          {
            name: '南极',
            type: 'pie',
            radius : '55%',
            center: ['50%', '45%'],
            data:[
              {value:335, name:'1'},
              {value:310, name:'2'},
              {value:234, name:'3'},
              {value:135, name:'5'},
              {value:1548, name:'4'}
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
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      let option_r2 = {
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: ["#ffad1b", "#ef6481", "#fc5d1b", "#49ceb1","#32C7EF","#EFA07C"],
        title : {
          text: '北极',
          x:'center',
          y:'80%'
        },
        series : [
          {
            name: '北极',
            type: 'pie',
            radius : '55%',
            center: ['50%', '45%'],
            data:[
              {value:335, name:'1'},
              {value:310, name:'2'},
              {value:234, name:'3'},
              {value:135, name:'5'},
              {value:1548, name:'4'}
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
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      let myChart_r1 = echarts.init(document.getElementById('chart_r1'));
      myChart_r1.setOption(option_r)
      let myChart_r2 = echarts.init(document.getElementById('chart_r2'));
      myChart_r2.setOption(option_r2)
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
  .region
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
            box-sizing border-box
            background-color #fff
            .top_l_chart
              width 100%
              height 100%
              box-sizing border-box
              padding 37px 5px 5px 5px
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
            box-sizing border-box
            position relative
            background-color #fff
            .char_r
              position absolute
              top 5px
              right 5px
            .top_r_chart
              width 100%
              height 100%
              box-sizing border-box
              padding-top 32px
              #chart_r1
                width 48%
                height 100%
                float left
              #chart_r2
                width 48%
                height 100%
                float left
                margin-left 2%

        .region_info_bot
          width 100%
          height 49%
          padding 0px 5px
          overflow hidden
          box-sizing border-box
          border-radius 4px
          background-color #fff
          .info_r_top
            height 100%
            .elTable
              height 100%
              padding-top 40px
              padding-left 5px
              box-sizing border-box


</style>
