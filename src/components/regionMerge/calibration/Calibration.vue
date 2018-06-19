<template>
  <div class="calibration">
    <div class="w">
      <div class="region_info">
        <div class="region_info_l">
          <div class="info_l_top">
            <v-title :message="titL_Top"></v-title>
            <div class="normal">
            <span><img src="./5.png" alt="">临近校准</span>
            <span><img src="./6.png" alt="">超期末校准</span>
            </div>

            <div class="top_list" ref="top_list">
              <!--<v-icon :icons='icons'></v-icon>-->
              <ul>
                <li v-for="item in icons">
                  <img :src="item.url" alt="">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>

            <div class="icon_list">
              <img src="./9.png" alt="">
              <img src="./10.png" alt="">
              <img src="./3.png" alt="">
              <img src="./4.png" alt="">
              <img src="./6.png" alt="">
              <img src="./7.png" alt="">
              <img src="./8.png" alt="">
            </div>
            <div class="region_img_top">
              <!--<img src="static/img/region_01.png" width="100%" alt="">-->
            </div>
            <!--<div id="map" style="width: 100%;height: 100%;z-index:1;"></div>-->

          </div>
          <div class="info_l_bot">
            <v-title :message="titL_Bot"></v-title>

            <div class="normal">
              <span><img src="./5.png" alt="">临近校准</span>
              <span><img src="./6.png" alt="">超期末校准</span>
            </div>

            <div class="top_list" ref="top_list">
              <!--<v-icon :icons='icons'></v-icon>-->
              <ul>
                <li v-for="item in icons">
                  <img :src="item.url" alt="">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>



            <div class="icon_list">
              <img src="./9.png" alt="">
              <img src="./10.png" alt="">
              <img src="./3.png" alt="">
              <img src="./4.png" alt="">
              <img src="./6.png" alt="">
              <img src="./7.png" alt="">
              <img src="./8.png" alt="">
            </div>
            <div class="region_img_bot">
              <!--<img src="static/img/region_01.png" width="100%" alt="">-->
            </div>
            <!--<div id="map1" style="width: 100%;height: 100%;z-index:1;"></div>-->
          </div>
        </div>
        <div class="region_info_r">
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
                <!--{date: '1',name: '漂流浮标',address: '23',num: '2017.5.5',all: 'X111',name1:'王建国',area:'6个月',danwei:'上海极地研究中心','jielun':'王建国'},-->
                <el-table-column
                  prop="date"
                  align="center"
                  width="55"
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
                  label="到期时间">
                  <template slot-scope="scope">
                   &nbsp;&nbsp;{{scope.row.num}}
                  </template>
                </el-table-column>
                <el-table-column
                  prop="jielun"
                  align="center"
                  label="责任人">
                </el-table-column>
                <el-table-column
                  prop="area"
                  align="center"
                  sortable
                  label="校准周期">
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row.num)" type="text" size="mini" style="display: inline-block;width: 80%;height: 80%; background-color: #7f8180;color:#fff;">查看详情</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>


          </div>
          <div class="info_r_bot">
            <v-title :message="titR_Bot"></v-title>

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
                  width="33"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="all"
                  align="center"
                  sortable
                  label="名称">
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
                  label="面积">
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  label="负责人">
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  label="所属区域">
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  label="全部详情">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="mini"
                       style="display: inline-block;width: 80%;height: 80%; background-color: #7f8180;color:#fff;">查看详情</el-button>
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
  // import globalviewercore from '../../../../static/js/mapcore1'
  import regTitle from './../../minModule/title/Title'
  import regTable from './../../minModule/table/Table'
  import icon from './../../minModule/icon/Icon'
  import normal from './../../minModule/normal/Normal'

  export default {
    data (){
      return {
        titL_Top: '南极鉴定校准分布地图',
        titL_Bot: '北极极鉴定校准分布地图',
        titR_Top: '临近校准时间设备清单',
        titR_Bot: '超期未校准设备清单',
        topList_1: ['浮标', '漂流浮标', '智能台站', '海床基'],
        dataTable:[
          {date: '1',name: '漂流浮标',address: '23',num: '2017.5.5',all: 'X111',name1:'王建国',area:'6个月',danwei:'上海极地研究中心','jielun':'王建国'},
          {date: '2',name: '海洋站',address: '34',num: '2017.5.5',all: 'B212',name1:'王建国',area:'6个月',danwei:'中国科学院','jielun':'王建国'},
          {date: '3',name: '海啸浮标',address: '34',num: '2017.5.5',all: 'C805',name1:'王建国',area:'6个月',danwei:'国家还海洋局北海分局','jielun':'王建国'},
          {date: '4',name: '雷达',address: '34',num: '2017.5.5',all: 'G711',name1:'王建国',area:'6个月',danwei:'海洋2号','jielun':'王建国'},
          {date: '5',name: '海洋站',address: '34',num: '2017.5.5',all: '115',name1:'王建国',area:'6个月',danwei:'中国科学院','jielun':'王建国'},
          {date: '6',name: '海洋站',address: '34',num: '2017.5.5',all: '115',name1:'王建国',area:'6个月',danwei:'上海极地研究中心','jielun':'王建国'},
          {date: '7',name: '海洋站',address: '34',num: '2017.5.5',all: '115',name1:'王建国',area:'6个月',danwei:'中国科学院','jielun':'王建国'},
          {date: '4',name: '雷达',address: '34',num: '2017.5.5',all: 'G711',name1:'王建国',area:'6个月',danwei:'国家还海洋局北海分局','jielun':'王建国'},
          {date: '5',name: '海洋站',address: '34',num: '2017.5.5',all: '115',name1:'王建国',area:'6个月',danwei:'中国科学院','jielun':'王建国'},
          {date: '6',name: '海洋站',address: '34',num: '2017.5.5',all: '115',name1:'王建国',area:'6个月',danwei:'中国科学院','jielun':'王建国'},
          {date: '7',name: '海洋站',address: '34',num: '2017.5.5',all: '115',name1:'王建国',area:'6个月',danwei:'中国科学院','jielun':'王建国'},
        ],
        icons: [
          {name: '海啸浮标',url: 'static/regionCalibrationImg/haixiaofubiao.png'},
          {name: '浮标',url: 'static/regionCalibrationImg/fubiao.png'},
          {name: '海洋站',url: 'static/regionCalibrationImg/haiyangzhan.png'},
          {name: '海床基',url: 'static/regionCalibrationImg/haichuang.png'},
        ],
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


      // }

    },
    created(){

    },
    components: {
      'v-title': regTitle,
      'v-table': regTable,
      'v-icon': icon,
      'v-normal':normal,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .calibration
    margin-top 55px
    height 80%
    .w
      height 100%
      .region_info
        height 100%
        .region_info_l
          width 49.5%
          height 100%
          float left
          position relative
          .info_l_top,.info_l_bot
            width 100%
            height 49%
            overflow hidden
            border-radius 4px
            background #aac6ee
            position relative
            vertical-align middle
            .region_img_top
              position absolute
              height 100%
              width 100%
              background url('/static/img/region_02.png') no-repeat center top
              background-size cover
            .normal
              position absolute
              z-index 999
              right 10px
              top 10px
              box-sizing border-box
              span
                display block
                width 108px
                height 20px
                padding-left 5px
                box-sizing border-box
                font-size 14px
                line-height 20px
                background-color #fff
                border-radius 5px
                &:last-child
                  margin-top 5px
                img
                  width 22px
                  margin-top -9px
                  padding-right 5px
            .top_list
              position absolute
              z-index 999
              bottom 10px
              right 10px
              ul
                li
                  width 60px
                  height 57px
                  text-align center
                  color #fff
                  box-sizing border-box
                  border 1px solid #a8a8aa
                  box-shadow 0 0 3px 0 #5c6275
                  background #666666
                  border-radius 5px
                  margin-top 2px
                  img
                    width 29px
                  p
                    font-size 12px
                  &:hover
                    background #1b6d85
                    cursor pointer
              li
                width 75px
                height 70px
                /*text-align center*/
                color #fff
                border 1px solid #a8a8aa
                line-height 30px
                background #666666
                border-radius 5px
                /*margin-top 5px*/
                &:first-child
                  margin-top 0px
                &.active
                  background-color #2a3cba
                img
                  padding 0 5px
            .icon_list
              img
                position absolute
                z-index 999
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
            .region_img_bot
              position absolute
              height 100%
              width 100%
              background url('/static/img/region_04.png') no-repeat center top
              background-size cover
        .region_info_r
          float left
          border-radius 4px
          width 49.5%
          height 100%
          margin-left 1%
          .info_r_top
            width 100%
            height 49%
            padding 10px
            box-sizing border-box
            border-radius 4px
            background-color #fff
            .heading
              margin-left 0px
              background-color #fdae1e
            .elTable
              margin-top 40px
              height 89%
              .el-icon-success
                color forestgreen
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
            height 49%
            padding 10px
            box-sizing border-box
            border-radius 4px
            margin-top 2%
            background-color #fff
            .heading
              margin-left 0px
              background-color #fd0200
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
</style>
