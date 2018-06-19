<template>
  <div class="insttrumenttation1">
    <div class="w">
      <div class="insttrumenttation1_info">
        <div class="insttrumenttation1_info_l">
          <div class="info_l_top">
            <div class="search_toolbar">
              <div style="float:left">
                <el-input placeholder="请输入船舶名称" label="请输入船舶名称：" style="width: 700px"
                          suffix-icon="el-icon-search"></el-input>
              </div>
            </div>
            <div class="view_content">
              <el-table
                :data="tableData2"
                style="width: 100%"
                fixed
                header-align="center"
                :span-method="objectSpanMethod"
                :row-class-name="tableRowClassName">
                <el-table-column
                  prop="index"
                  align="center"
                  label="船舶名称">
                  <template slot-scope="scope">
                    <div>
                      <div style="float: left;width: 30%;" align="center">
                        <span
                          style="font-weight: bold;margin-top: 8%;position: absolute">{{scope.row.name}} &nbsp;</span>
                      </div>
                      <!-- 擦 ，绑定的属性不显示出来-->
                      <!--<img :src="scope.row.imgsrc"/>-->
                      <div style="float:right;width: 65%">
                        <img src="./gridImg.png"/>
                      </div>
                    </div>
                    　　　　
                  </template>
                </el-table-column>
                <el-table-column
                  prop="name"
                  align="center"
                  label="所属单位">
                </el-table-column>
                <el-table-column
                  prop="equipinfo"
                  align="center"
                  sortable
                  label="设备">
                </el-table-column>
                <el-table-column
                  prop="plan"
                  align="center"
                  sortable
                  label="增改装计划">
                  <template slot-scope="scope">
                    <div v-if="scope.row.plan === 0">
                      无改装计划
                    </div>
                    <div>
                      <a href="#" style="color: #68C897;">有改装计划</a>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="equipParams"
                  align="center"
                  sortable
                  width="180px"
                  label="设备参数信息">
                </el-table-column>
                <el-table-column
                  prop="ys"
                  align="center"
                  sortable
                  width="180px"
                  label="预算">
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="info_page">
            <div style="float: left"></div>
            <div style="float:right">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="50">
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import regTitle from './../minModule/title/Title'
  import regTable from './../minModule/table/Table'

  export default {
    data() {
      return {
        titL_Top: '统计图表',
        titL_Bot: '临近保养设备',
        titR_Top: '已保养设备',
        titR_Bot: '超期保养设备',
        colspanindex: 0,
        colspanflag: false,
        topList: ['海洋站', '船舶', '潜艇', '雷达', '浮标', '潜标', '飞机'],
        iconsChart: [
          {name: '海洋站'},
          {name: '浮标'},
          {name: '海床基'},
          {name: '海啸浮标'},
          {name: '雷达'}
        ],
        tableData2: [
          {
            index: "1",
            name: '雪龙',
            imgsrc: './gridImg.png',
            comp: '国家海洋局',
            equipinfo: '一台液压同轴缆绞车（10000M)',
            equipParams: "参数1",
            plan: '1',
            ys: '100万'
          },
          {
            index: "1",
            name: '雪龙',
            imgsrc: './gridImg.png',
            comp: '国家海洋局',
            equipinfo: '臂吊车1台',
            equipParams: "参数2",
            plan: '0',
            ys: '200万'
          },
          {
            index: "1",
            name: '雪龙',
            imgsrc: './gridImg.png',
            comp: '国家海洋局',
            equipinfo: '低温实验室/16m',
            equipParams: "参数3",
            plan: '1',
            ys: '300万'
          },
          {
            index: "1",
            name: '雪龙',
            imgsrc: './gridImg.png',
            comp: '国家海洋局',
            equipinfo: '低温实验室/16m,探测仪(FE-700)',
            equipParams: "参数4",
            plan: '1',
            ys: '1000万'
          },
          {
            index: "2",
            name: '远洋一号',
            imgsrc: './gridImg.png',
            comp: '国家海洋局',
            equipinfo: '多波束测探系统',
            equipParams: "参数1",
            plan: '1',
            ys: '100万'
          },
          {
            index: "2",
            name: '远洋一号',
            imgsrc: './gridImg.png',
            comp: '国家海洋局',
            equipinfo: '臂吊车1台',
            equipParams: "参数2",
            plan: '1',
            ys: '200万'
          },
          {
            index: "2",
            name: '远洋一号',
            imgsrc: './gridImg.png',
            comp: '国家海洋局',
            equipinfo: '重力和ADCP实验室',
            equipParams: "参数3",
            plan: '1',
            ys: '300万'
          },
          {
            index: "2",
            name: '远洋一号',
            imgsrc: './gridImg.png',
            comp: '国家海洋局',
            equipinfo: '多管取样器',
            equipParams: "参数4",
            plan: '0',
            ys: '100万'
          }
        ],
        options: [{value: '1', label: '船舶1'},
          {value: '2', label: '船舶2'},
          {value: '3', label: '船舶3'},
          {value: '4', label: '船舶4'},
          {value: '5', label: '船舶5'}],
        options1: [{value: '1', label: '<1吨'}, {value: '2', label: '1-10吨'}, {value: '3', label: '10-20吨'}, {
          value: '3',
          label: '10-20吨'
        }],
        options3: [{value: '1', label: '中国极低研究中心'},
          {value: '1', label: '中国极低研究中心1'},
          {value: '1', label: '中国极低研究中心2'},
          {value: '1', label: '中国极低研究中心3'},
          {value: '1', label: '中国极低研究中心4'}],

        tableData6: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }],

        value: '',
        value1: '',
        value2: '',
        value3: '',
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      openDetail() {
        this.$alert('<strong>这是 <i>HTML</i> 片段</strong>',
          '名称标题名称标题名称标题名称标题', {
            dangerouslyUseHTMLString: true
          });
      },
      listChoose: (el) => {
        // el.target
      },
      tableRowClassName({row, rowIndex}) {
        // alert(rowIndex);
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      getCellClass({row, column, columnIndex}) {
        //alert("测试数据");
      },

      arraySpanMethod({row, column, rowIndex, columnIndex}) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({row, column, rowIndex, columnIndex}) {
        if (columnIndex === 0) {
          if (rowIndex % 4 === 0) {
            return {
              rowspan: 4,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    },
    mounted() {
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
  .insttrumenttation1
    margin-top 55px
    height 80%
    .w
      height 100%
      .insttrumenttation1_info
        height 100%
        .insttrumenttation1_info_l
          width 100%
          height 90%
          float left
          position relative
          background-color #ffffff
          .info_l_top
            width 100%
            height 100%
            overflow hidden
            border-radius 10px
            position relative
            vertical-align middle
            .search_toolbar
              width 95%
              height 85px
              top 30px
              position absolute
              padding 0px
              padding-left 25px
              /*border-bottom 1px solid */
              .splitrowDiv
                height 85px
                top 85px
                position absolute
            .view_content
              top 110px
              width 98%
              height 100%
              position absolute
              margin-left 1%
              margin-right 1%
        .info_page
          height 10%
          background-color transparent
          position position
          padding-top 20px
</style>
