<template>
  <div class="zydcgl">
    <div class="w">
      <div class="zydcgl_info">
        <div class="zydcgl_info_l">
          <div class="info_l_top">
            <el-tabs type="border-card">
              <el-tab-pane label="航次轨迹查询">
                <div class="search_toolbar">
                  <div style="float:left">
                    船舶 &nbsp;
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
                    <span class="demonstration">开始时间：</span>
                    <el-date-picker
                      v-model="value1"
                      type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <span class="demonstration">结束时间：</span>
                    <el-date-picker
                      v-model="value2"
                      type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                  </div>
                  <div style="float:right">
                    <el-button type="primary" size="medium" plain style="border: 0px;color: black">数据导出选择</el-button>
                    <el-button type="primary" size="medium" plain style="border: 0px;color: black">查询</el-button>
                    <el-button type="primary" size="medium" plain @click="dialogTableVisible = true"
                               style="border: 0px;color: black">确定
                    </el-button>
                  </div>
                </div>
                <div class="view_content">
                  <div class="back_map"></div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="航次轨迹计算">
                <div class="search_toolbar">
                  <div style="float:left">
                    船舶 &nbsp;
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
                    <span class="demonstration">开始时间：</span>
                    <el-date-picker
                      v-model="value1"
                      type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                    <span class="demonstration">结束时间：</span>
                    <el-date-picker
                      v-model="value2"
                      type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                    &nbsp;&nbsp;
                    区域
                    &nbsp;&nbsp;
                    <el-select v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                  <div style="float:right">
                    <el-button type="primary" plain style="border: 0px;color: black">数据导出选择</el-button>
                    <el-button type="primary" plain style="border: 0px;color: black">查询</el-button>
                    <el-button type="primary" plain autofocus="true" style="border: 0px;color: black">确定</el-button>
                  </div>
                </div>
                <div class="view_content">
                  <div class="back_map1"></div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div class="info_dialog_info" style="width: 50%">
            <el-dialog title="名称标题名称标题名称标题" :visible.sync="dialogFormVisible">
              <el-tabs type="border-card">
                <el-tab-pane label="岸基AIS">
                  <el-form :model="formInline" :inline="true" class="demo-from-inline">
                    <div>
                      <Table width="100%">
                        <TR style="height: 50px">
                          <TD><span class="demonstration">开始时间：</span></TD>
                          <TD>
                            <el-date-picker
                              v-model="value1"
                              type="date"
                              size="small"
                              width="150px"
                              placeholder="选择日期"></el-date-picker>
                          </TD>
                          <TD>
                            <el-tag style="background-color: transparent;border: 0px;color:blue">更长轨迹</el-tag>
                          </TD>
                          <TD>
                            <el-button type="primary" size="medium">选择</el-button>
                          </TD>
                        </TR>
                        <TR style="height: 50px">
                          <TD><span class="demonstration">结束时间：</span></TD>
                          <TD>
                            <el-date-picker
                              v-model="value2"
                              type="date"
                              size="small"
                              width="150px"
                              placeholder="选择日期">
                            </el-date-picker>
                          </TD>
                          <TD>
                            <el-button type="primary" size="medium" plain>重置</el-button>
                          </TD>
                          <TD>
                            <el-button type="primary" size="medium" plain>查询</el-button>
                          </TD>
                        </TR>
                      </Table>
                    </div>
                    <div style="margin-top: 25px;margin-bottom:50px">
                      <el-form-item label="MSSI:" type="mini" style="width: 40%;margin-top: 10px">
                        <el-tag size="mini"
                                style="background-color:transparent;border: 0;color: black;top:5px;padding: 0px;">
                          45289661
                        </el-tag>
                      </el-form-item>
                      <el-form-item label="航首向:" style="width: 55%;margin-top: 10px">
                        <el-tag size="mini"
                                style="background-color:transparent;border: 0;color: black;top:5px;padding: 0px;">140度
                        </el-tag>
                      </el-form-item>
                      <el-form-item label="呼号:" style="width: 40%;margin-top: 10px">
                        <el-tag size="mini"
                                style="background-color:transparent;border: 0;color: black;top:5px;padding: 0px;">BNTM
                        </el-tag>
                      </el-form-item>
                      <el-form-item label="航迹向:" style="width: 55%;margin-top: 10px">
                        <el-tag size="mini"
                                style="background-color:transparent;border: 0;color: black;top:5;padding: 0px;">15.4度
                        </el-tag>
                      </el-form-item>

                      <el-form-item label="IMQ:" style="width: 40%;margin-top: 10px">
                        <el-tag size="mini"
                                style="background-color:transparent;border: 0;color: black;top:5px;padding: 0px;">
                          82256951
                        </el-tag>
                      </el-form-item>
                      <el-form-item label="航速:" style="width: 55%;margin-top: 10px">
                        <el-tag size="mini"
                                style="background-color:transparent;border: 0;color: black;top:5px;padding: 0px;">
                          24-14.85N
                        </el-tag>
                      </el-form-item>
                      <el-form-item label="类型:" style="width: 40%;margin-top: 10px">
                        <el-tag size="mini"
                                style="background-color:transparent;border: 0;color: black;top:5px;padding: 0px;">
                          在他类型的船舶
                        </el-tag>
                      </el-form-item>
                      <el-form-item label="纬度:" style="width: 55%;margin-top: 10px">
                        <el-tag size="mini"
                                style="background-color:transparent;border: 0;color: black;top:5px;padding: 0px;">15.4度
                        </el-tag>
                      </el-form-item>

                      <el-form-item label="状态:" style="width: 40%;margin-top: 10px">
                        <el-tag size="mini"
                                style="background-color:transparent;border: 0;color: black;top:5px;padding: 0px;">
                          在航（主机推动）
                        </el-tag>
                      </el-form-item>
                      <el-form-item label="目的地:" style="width: 55%;margin-top: 10px">
                        <el-tag size="mini"
                                style="background-color:transparent;border: 0;color: black;top:5px;padding: 0px;">
                          ECEGRYFRE
                        </el-tag>
                      </el-form-item>
                      <el-form-item label="船长:" style="width: 40%;margin-top: 10px">
                        <el-tag size="mini"
                                style="background-color:transparent;border: 0;color: black;top:5px;padding: 0px;">104米
                        </el-tag>
                      </el-form-item>
                      <el-form-item label="预到时:" style="width: 55%;margin-top: 10px">
                        <el-tag size="mini"
                                style="background-color:transparent;border: 0;color: black;top:5px;padding: 0px;">
                          2018-05-28 10：20：01
                        </el-tag>
                      </el-form-item>

                      <el-form-item label="船宽:" style="width: 40%;margin-top: 10px">
                        <el-tag size="mini"
                                style="background-color:transparent;border: 0;color: black;top:5px;padding: 0px;">16米
                        </el-tag>
                      </el-form-item>
                      <el-form-item label="预到时:" style="width: 55%;margin-top: 10px">
                        <el-tag size="mini"
                                style="background-color:transparent;border: 0;color: black;top:5px;padding: 0px;">
                          2018-06-28 10：20：01
                        </el-tag>
                      </el-form-item>
                      <el-form-item label="吃水:" style="width: 40%;margin-top: 10px">
                        <el-tag size="mini"
                                style="background-color:transparent;border: 0;color: black;top:5px;padding: 0px;">6米
                        </el-tag>
                      </el-form-item>
                    </div>
                    <div align="center">
                      <img src="./info_111.png" style="width: 150px;height: 150px"/>
                    </div>
                  </el-form>
                </el-tab-pane>
                <el-tab-pane label="劳氏微档案">
                </el-tab-pane>
                <el-tab-pane label="气象信息">
                </el-tab-pane>
              </el-tabs>
              <!--<div slot="footer" class="dialog-footer">-->
              <!--<el-button @click="dialogFormVisible = false">取 消</el-button>-->
              <!--<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>-->
              <!--</div>-->
            </el-dialog>
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
        options: [{
          value: '1',
          label: '船舶1'
        }, {
          value: '2',
          label: '船舶2'
        }, {
          value: '3',
          label: '船舶3'
        }, {
          value: '4',
          label: '船舶4'
        }, {
          value: '5',
          label: '船舶5'
        }],
        options: [{value: '1', label: '南极'}],
        value: '',
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
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
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
  .zydcgl
    margin-top 55px
    height 80%
    .w
      height 100%
      .zydcgl_info
        height 100%
        .zydcgl_info_l
          width 100%
          height 100%
          float left
          position relative
          .info_l_top
            width 100%
            height 100%
            overflow hidden
            border-radius 10px
            position relative
            vertical-align middle
            .el-tabs
              height 100%
              width 100%
              .el-tabs__content
                height 100%
                position absolute
              .search_toolbar
                height 55px
                width 98%
                top 30px
                position absolute
              .view_content
                top 65px
                width 100%
                height 100%
                position absolute
                margin-left -15px
                .back_map
                  top 40px
                  position absolute
                  background-size 100% auto
                  background-repeat no-repeat
                  background-image url('./backgroud_map.png')
                  width 100%
                  height 100%
                .back_map1
                  top 40px
                  position absolute
                  background-size 100% auto
                  background-repeat no-repeat
                  background-image url('./backgroud_tab2.png')
                  width 100%
                  height 100%
          .info_dialog_info
            padding 5px
            margin 5px
            .mainDialogInfoTable
              tr
                margin 5px
</style>
