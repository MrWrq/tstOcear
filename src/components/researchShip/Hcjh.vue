<template>
  <div class="hcjh">
    <div class="w">
      <div class="hcjh_info">
        <div class="hcjh_info_l">
          <div class="info_l_top">
            <div class="search_toolbar">
              <div style="float:left">
                船舶名称： &nbsp;
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                &nbsp;
                &nbsp;
                &nbsp;
                <span class="demonstration">时间：</span>
                <el-date-picker
                  v-model="value1"
                  type="datetime"
                  style="width: 250px"
                  placeholder="选择日期">
                </el-date-picker>
                至
                <el-date-picker
                  v-model="value1"
                  type="datetime"
                  style="width: 250px"
                  placeholder="选择日期">
                </el-date-picker>
                <span class="demonstration" style="margin-left: 50px">排水量:</span>
                <el-select v-model="value2" placeholder="请选择">
                  <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <br>
                <br>
                <div>
                  <Div style="float: left">
                    <span class="demonstration">所属单位： &nbsp;</span>
                    <el-select v-model="value3" placeholder="请选择">
                      <el-option
                        v-for="item in options3"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </Div>
                </div>
              </div>
              <div style="float:right">
                <el-button type="primary" plain style="border: 0px;color: black">重置</el-button>
                <el-button type="primary" style="border: 0px;color: black">查询</el-button>
              </div>
            </div>
            <div class="colortoolbarTip">
              <div style="float: left"></div>
              <div style="float: right">
                可用船时
                <button class="line_button"></button>
                国家任务:
                <button class="line_button"></button>
                其他调查任务:
                <button class="line_button"></button>
                机动任务:
                <button class="line_button"></button>
                船舶维修/停航：
                <button class="line_button"></button>
              </div>
            </div>
            <div class="view_content">
              <el-table
                :data="tableData2"
                style="width: 100%"
                fixed
                header-align="center"
                :cell-class-name="getCellClass"
                :row-class-name="tableRowClassName">
                <el-table-column
                  prop="name"
                  align="center"
                  label="船舶名称">
                </el-table-column>
                <el-table-column
                  prop="comp"
                  align="center"
                  label="船舶单位">
                </el-table-column>
                <el-table-column
                  prop="paishui"
                  align="center"
                  sortable
                  width="150px"
                  label="排水量">
                </el-table-column>
                <el-table-column
                  prop="firstyearmonth"
                  align="center"
                  sortable
                  width="180px"
                  label="2018.1月">
                  <template slot-scope="scope">
                    &nbsp;
                  </template>
                </el-table-column>
                <el-table-column
                  prop="month2"
                  align="center"
                  sortable
                  width="100px"
                  label="2月">
                  <template slot-scope="scope">
                    &nbsp;
                  </template>
                </el-table-column>
                <el-table-column
                  prop="month3"
                  align="center"
                  sortable
                  width="100px"
                  label="3月">
                  <template slot-scope="scope">
                    &nbsp;
                  </template>
                </el-table-column>
                <el-table-column
                  prop="month4"
                  align="center"
                  sortable
                  width="100px"
                  label="4月">
                  <template slot-scope="scope">
                    &nbsp;
                  </template>
                </el-table-column>
                <el-table-column
                  prop="month5"
                  align="center"
                  sortable
                  width="100px"
                  label="5月">
                  <template slot-scope="scope">
                    &nbsp;
                  </template>
                </el-table-column>
                <el-table-column
                  prop="month6"
                  align="center"
                  sortable
                  width="100px"
                  label="6月">
                  <template slot-scope="scope">
                    &nbsp;
                  </template>
                </el-table-column>
                <el-table-column
                  prop="lastday"
                  align="center"
                  label="可用总天数">
                </el-table-column>
                <el-table-column
                  prop="remark"
                  align="center"
                  sortable
                  label="备注">
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
        topList: ['海洋站', '船舶', '潜艇', '雷达', '浮标', '潜标', '飞机'],
        iconsChart: [
          {name: '海洋站'},
          {name: '浮标'},
          {name: '海床基'},
          {name: '海啸浮标'},
          {name: '雷达'}
        ],
        dataTable: [
          {seq: '1', eqtype: '雷达', eqNo: 'X111', validdate: '2019.5.5', eqleader: '王建国', eqby: '1'},
          {seq: '2', eqtype: '海洋站', eqNo: 'B212', validdate: '2019.5.1', eqleader: '王建国', eqby: '4'},
          {seq: '3', eqtype: '潜标', eqNo: 'C850', validdate: '2019.5.8', eqleader: '王建国', eqby: '2'},
          {seq: '4', eqtype: '指挥车', eqNo: 'G741', validdate: '2019.5.12', eqleader: '王建国', eqby: '1'},
          {seq: '5', eqtype: '雷达', eqNo: 'C888', validdate: '2019.5.20', eqleader: '王建国', eqby: '3'},
          {seq: '6', eqtype: '雷达', eqNo: 'C838', validdate: '2019.5.20', eqleader: '王建国', eqby: '3'},
          {seq: '7', eqtype: '雷达', eqNo: 'C238', validdate: '2019.5.20', eqleader: '王建国', eqby: '3'}
        ],
        tableData2: [{
          name: '东方红2号',
          comp: '厦门大学',
          paishui: '90t',
          firstyearmonth: '0',
          month2: '0',
          month3: '0',
          month4: '0',
          month5: '0',
          month6: '1',
          lastday: '30-50',
          remark: '实行预约使用，可提前1周申请，并提交资料'
        },
          {
            name: '海洋石油工业',
            comp: '中国航天研究院上海第三分院',
            paishui: '23t',
            firstyearmonth: '0',
            month2: '0',
            month3: '0',
            month4: '1',
            month5: '1',
            month6: '2',
            lastday: '160',
            remark: '实行预约使用，可以提前申请'
          },
          {
            name: '东方红2号',
            comp: '中国人民大学',
            paishui: '60t',
            firstyearmonth: '0',
            month2: '0',
            month3: '0',
            month4: '0',
            month5: '0',
            month6: '1',
            lastday: '50-80',
            remark: '可提前一周申请，协调时按船排时间'
          },
          {
            name: '海洋石油2号',
            comp: '中国航天研究院上海第三分院',
            paishui: '70t',
            firstyearmonth: '0',
            month2: '0',
            month3: '0',
            month4: '0',
            month5: '2',
            month6: '1',
            lastday: '90',
            remark: '实行预约使用，可提前一周申请'
          },
          {
            name: '东方海洋石油2号',
            comp: '厦门大学',
            paishui: '85t',
            firstyearmonth: '0',
            month2: '0',
            month3: '0',
            month4: '0',
            month5: '2',
            month6: '1',
            lastday: '110',
            remark: '可提前一周申请，协调按船排时间'
          },
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
        if (column.property == 'firstyearmonth') {
          if (row[column.property] == '0') {
            return 'nowrapnoborder_canuse';
          } else if (row[column.property] == '1') {
            return 'nowrapnoborder_contask';
          } else if (row[column.property] == '2') {
            return 'nowrapnoborder_othertask';
          } else if (row[column.property] == '3') {
            return 'nowrapnoborder_jidongtask';
          } else if (row[column.property] == '4') {
            return 'nowrapnoborder_stop';
          }
        } else if (column.property == 'month2') {
          if (row[column.property] == '0') {
            return 'nowrapnoborder_canuse';
          } else if (row[column.property] == '1') {
            return 'nowrapnoborder_contask';
          } else if (row[column.property] == '2') {
            return 'nowrapnoborder_othertask';
          } else if (row[column.property] == '3') {
            return 'nowrapnoborder_jidongtask';
          } else if (row[column.property] == '4') {
            return 'nowrapnoborder_stop';
          }
        } else if (column.property == 'month3') {
          if (row[column.property] == '0') {
            return 'nowrapnoborder_canuse';
          } else if (row[column.property] == '1') {
            return 'nowrapnoborder_contask';
          } else if (row[column.property] == '2') {
            return 'nowrapnoborder_othertask';
          } else if (row[column.property] == '3') {
            return 'nowrapnoborder_jidongtask';
          } else if (row[column.property] == '4') {
            return 'nowrapnoborder_stop';
          }
        } else if (column.property == 'month4') {
          if (row[column.property] == '0') {
            return 'nowrapnoborder_canuse';
          } else if (row[column.property] == '1') {
            return 'nowrapnoborder_contask';
          } else if (row[column.property] == '2') {
            return 'nowrapnoborder_othertask';
          } else if (row[column.property] == '3') {
            return 'nowrapnoborder_jidongtask';
          } else if (row[column.property] == '4') {
            return 'nowrapnoborder_stop';
          }
        } else if (column.property == 'month5') {
          if (row[column.property] == '0') {
            return 'nowrapnoborder_canuse';
          } else if (row[column.property] == '1') {
            return 'nowrapnoborder_contask';
          } else if (row[column.property] == '2') {
            return 'nowrapnoborder_othertask';
          } else if (row[column.property] == '3') {
            return 'nowrapnoborder_jidongtask';
          } else if (row[column.property] == '4') {
            return 'nowrapnoborder_stop';
          }
        } else if (column.property == 'month6') {
          if (row[column.property] == '0') {
            return 'nowrapnoborder_canuse';
          } else if (row[column.property] == '1') {
            return 'nowrapnoborder_contask';
          } else if (row[column.property] == '2') {
            return 'nowrapnoborder_othertask';
          } else if (row[column.property] == '3') {
            return 'nowrapnoborder_jidongtask';
          } else if (row[column.property] == '4') {
            return 'nowrapnoborder_stop';
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
  .hcjh
    margin-top 55px
    height 80%
    .w
      height 100%
      .hcjh_info
        height 100%
        .hcjh_info_l
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
              margin 25px
              padding 0px
              padding-left 25px
              /*border-bottom 1px solid */
              .splitrowDiv
                height 85px
                top 85px
                position absolute
            .colortoolbarTip
              width 100%
              z-index 999
              align right
              top 170px
              position absolute
              .line_button
                width 100px
                height 10px
                border 10px
                margin-top 10px
                margin-left 12px
                margin-right 50px
                background-color blue
                border-radius 10px
                &:nth-child(1)
                  background-color #7FC4FB
                &:nth-child(2)
                  background-color #EE534F
                &:nth-child(3)
                  background-color #97A4F3
                &:nth-child(4)
                  background-color #F4C450
                &:nth-child(5)
                  background-color #616161
            .view_content
              top 210px
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
