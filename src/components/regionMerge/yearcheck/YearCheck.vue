<template>
  <div class="yearChark">
    <div class="w">
      <div class="yearChark_info">
        <div class="title_all_bottom_line" align="left">
          <div class="title_text">
            年度核查统计表
            <i class="el-icon-caret-right"/>
          </div>
        </div>
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
                  type="selection"
                  width="55"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="seqno"
                  align="center"
                  width="88"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="type"
                  align="center"
                  sortable
                  label="类型">
                </el-table-column>
                <el-table-column
                  prop="xinhao"
                  align="center"
                  sortable
                  label="型号">
                </el-table-column>
                <el-table-column
                  prop="bianhao"
                  align="center"
                  sortable
                  label="编号">
                </el-table-column>
                <el-table-column
                  prop="status"
                  align="center"
                  sortable
                  label="状态">
                </el-table-column>
                <el-table-column
                  prop="usecompany"
                  align="center"
                  sortable
                  label="使用单位">
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  sortable
                  label="其他">
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  width="150"
                  label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row.num)" type="text" size="mini" style="display: inline-block;width: 45%;height: 80%; background-color: #7f8180;color:#fff;">信息确认</el-button>
                    <el-button @click="handleClick(scope.row.num)" type="text" size="mini" style="display: inline-block;width: 35%;height: 80%; background-color: #7f8180;color:#fff;">编辑</el-button>
                  </template>
                </el-table-column>
              <!--　<el-table-column label="操作" align="center" width="120">-->
          <!--　　　　<template slot-scope="scope">-->
                      <!--<el-button class="yearChark_bottom_button"  size="mini">&nbsp;&nbsp;信息确认&nbsp;&nbsp;</el-button>-->
                      <!--<v-if>-->
                       <!--<el-button class="yearChark_bottom_button"  size="mini">编辑</el-button>-->
                      <!--</v-if>-->
          <!--　　　　</template>-->
            <!--　　</el-table-column>-->
              </el-table>
            </div>
          <div class="yearChark_bottom_info" align="center">
            <el-button class="yearChark_bottom_button" size="mini">&nbsp;&nbsp;批量确认&nbsp;&nbsp;</el-button>
            <el-button class="yearChark_bottom_button"  size="mini">&nbsp;&nbsp;全部确认&nbsp;&nbsp;</el-button>
             <el-button class="yearChark_bottom_button"  size="mini">&nbsp;&nbsp;信息补全&nbsp;&nbsp;</el-button>
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
        titL_Top: '各类装备的资产总值',
        //titL_Bot: '北极装备实时统计地图',
        topList: ['海洋站','船舶','潜艇','雷达','浮标','潜标','飞机'],
        iconsChart: [
          {name: '海洋站'},
          {name: '浮标'},
          {name: '海床基'},
          {name: '海啸浮标'},
          {name: '雷达'}
        ],
        dataTable:[
          {seqno: '1',type: '海洋站',xinhao: 'HYZ001',bianhao: '1',status: '正常',usecompany:'厦门中心站','num':'','other':''},
          {seqno: '2',type: '浮标',xinhao: 'FB008',bianhao: '2',status: '待报废',usecompany:'东海预报中心','num':'','other':''},
          {seqno: '3',type: '海床基观测系统',xinhao: 'HCJGCXT',bianhao: '3',status: '遗失',usecompany:'宁波中心站','num':'','other':''},
          {seqno: '4',type: '雷达',xinhao: 'FB008',bianhao: '4',status: '损坏',usecompany:'厦门中心站','num':'','other':''},
          {seqno: '5',type: '海啸浮标',xinhao: 'HCJGCXT',bianhao: '5',status: '正常',usecompany:'东海预报中心','num':'','other':''},
          {seqno: '6',type: '海洋站',xinhao: 'HYZ001',bianhao: '1',status: '正常',usecompany:'厦门中心站','num':'','other':''},
          {seqno: '7',type: '浮标',xinhao: 'FB008',bianhao: '2',status: '待报废',usecompany:'东海预报中心','num':'','other':''},
          {seqno: '8',type: '海床基观测系统',xinhao: 'HCJGCXT',bianhao: '3',status: '遗失',usecompany:'宁波中心站','num':'','other':''},
          {seqno: '9',type: '雷达',xinhao: 'FB008',bianhao: '4',status: '损坏',usecompany:'厦门中心站','num':'','other':''},
          {seqno: '10',type: '海啸浮标',xinhao: 'HCJGCXT',bianhao: '5',status: '正常',usecompany:'东海预报中心','num':'','other':''},
          {seqno: '11',type: '海洋站',xinhao: 'HYZ001',bianhao: '1',status: '正常',usecompany:'厦门中心站','num':'','other':''},
          {seqno: '12',type: '浮标',xinhao: 'FB008',bianhao: '2',status: '待报废',usecompany:'东海预报中心','num':'','other':''},
          {seqno: '13',type: '海床基观测系统',xinhao: 'HCJGCXT',bianhao: '3',status: '遗失',usecompany:'宁波中心站','num':'','other':''},
          {seqno: '14',type: '雷达',xinhao: 'FB008',bianhao: '4',status: '损坏',usecompany:'厦门中心站','num':'','other':''},
        ]
      }
    },
    methods: {
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
    mounted (){

    },
    created(){
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
  .yearChark
    margin-top 55px
    height 80%
    .w
      height 100%
      background #ffffff
      border-radius 4px
      overflow hidden
      .yearChark_info
        width 100%
        height 100%
        border-radius 4px!important
        overflow hidden
        float left
        position relative
        .elTable
          height 85%
          overflow hidden
          margin-top 20px
          padding 0px
          .el-table__body-wrapper
            width 101%!important
            height 100%
            overflow hidden!important
          .yearChark_bottom_button
            background-color #A8A8A8
            color white
      .yearChark_bottom_info
        align center
        top 50px
        .yearChark_bottom_button
          background-color #2a3cba
          color white
          font-size 16px
      .title_all_bottom_line
        border 1px solid lightgray
        border-top 0px
        border-left 0px
        border-right 0px
        .title_text
          cursor: pointer;
          height: 27px;
          padding: 0 5px;
          margin-left: 5px;
          margin-top: 5px;
          background-color: #2a3cba;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          line-height: 27px;
          text-align: left;
          width 120px
</style>
