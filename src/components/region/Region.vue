<template>
  <div class="region">
    <div class="w">
      <div class="region_info">
        <div class="region_info_l">
          <div class="info_l_top">
            <v-title :message="titL_Top"></v-title>
            <div class="normal">
              <span><img src="./normal.png" alt="">正常</span>
              <span><img src="./error.png" alt="">异常</span>
            </div>
            <div class="top_list">
              <ul>
                <li v-for="item in topList" @click="listChoose($event)">{{item}}</li>
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
          <div class="info_l_bot">
            <v-title :message="titL_Bot"></v-title>
            <div class="normal">
              <span><img src="./normal.png" alt="">正常</span>
              <span><img src="./error.png" alt="">异常</span>
            </div>
            <div class="top_list">
              <ul>
                <li v-for="item in topList" @click="listChoose($event)">{{item}}</li>
              </ul>
            </div>
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
                size="small"
                header-align="center"
                :row-class-name="tableRowClassName">
                <el-table-column
                  prop="date"
                  align="center"
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
                  label="设备名称">
                </el-table-column>
                <el-table-column
                  prop="address"
                  align="center"
                  sortable
                  label="运行状态">
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  sortable
                  label="报到率">
                </el-table-column>
              </el-table>
            </div>


          </div>
          <div class="info_r_bot">
            <v-title :message="titR_Top"></v-title>

            <div class="elTable">
              <el-table
                :data="dataTable"
                style="width: 100%"
                fixed
                stripe
                border
                size="small"
                header-align="center"
                :row-class-name="tableRowClassName">
                <el-table-column
                  prop="date"
                  align="center"
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
                  label="设备名称">
                </el-table-column>
                <el-table-column
                  prop="address"
                  align="center"
                  sortable
                  label="运行状态">
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  sortable
                  label="报到率">
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
  import regTitle from './../title/Title'
  import regTable from './../table/Table'

  export default {
    data (){
      return {
        titL_Top: '南极装备实时统计地图',
        titL_Bot: '北极装备实时统计地图',
        titR_Top: '南极装备设备统计表',
        titR_Bot: '北极装备设备统计表',
        topList: ['浮标','漂流浮标','智能台站','海床基'],
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
      window.timer4 = setInterval(function () {
        $('.icon_list img').each(function (index,val) {
          var a = Math.random()*200
          var b = Math.random()*700
          $(val).css({"left":b+'px','top':a+'px'})
        })
      }, 2000)
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
  .region
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
            border-radius 10px
            background #aac6ee
            position relative
            vertical-align middle
            .normal
              position absolute
              right 10px
              top 10px
              text-align center
              span
                display block
                width 75px
                height 30px
                line-height 30px
                background-color #fff
                border-radius 5px
                &:last-child
                  margin-top 5px
                img
                  width 22px
                  padding-right 10px
            .top_list
              position absolute
              bottom 10px
              right 10px
              li
                width 100px
                text-align center
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
          .info_l_bot
            margin-top 2%
            background #1b6d85
        .region_info_r
          float left
          border-radius 10px
          width 49.5%
          height 100%
          margin-left 1%
          .info_r_top
            width 100%
            height 49%
            padding 10px
            box-sizing border-box
            border-radius 10px
            background-color #fff
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
          .info_r_bot
            width 100%
            height 49%
            padding 10px
            box-sizing border-box
            border-radius 10px
            margin-top 2%
            background-color #fff
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
