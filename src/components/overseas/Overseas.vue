<template>
  <div class="overseas">
    <div class="w">
      <div class="ocea_info">
        <div class="l info_l">
          <div class="ocea_info_name">
            <p>基础设施实时统计地图<i class="el-icon-caret-right"></i></p>
          </div>

          <div class="overNormal">
            <v-normal></v-normal>
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
          <div class="info_r_top">
            <div class="info_r_mid_info">
              <p>海外站点设备统计表<i class="el-icon-caret-right"></i></p>
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
                  prop="name"
                  align="center"
                  label="名称">
                </el-table-column>
                <el-table-column
                  prop="shortSea"
                  align="center"
                  sortable
                  label="全部数量">
                </el-table-column>
                <el-table-column
                  prop="openSea"
                  align="center"
                  label="正常">
                </el-table-column>
                <el-table-column
                  prop="value"
                  align="center"
                  sortable
                  label="已巡检">
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
  import normal from '../minModule/normal/Normal'

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
      // window.timer1 = setInterval(function () {
      //   $('.icon_list img').each(function (index,val) {
      //     let H = Math.random() * 500
      //     let W = Math.random() * 700
      //     $(val).css({"left":W+'px','top':H+'px'})
      //   })
      // },2000)

      let LocalAPI = 'http://182.18.76.244:8090/otes/shipinfo/getCount/orga'
      this.$http.get(LocalAPI).then((res)=>{
        // console.log(res.data.data.detailNums)
        this.tableData2 = res.data.data.detailNums
      }, (err) => {
        console.log(err)
      })

    },
    beforeRouteLeave (to, from, next) {
      clearInterval(window.timer1)
      next()
    },
    created(){

    },
    components :{
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
            position relative
            ul
              position absolute
              right 20px
              top 90px
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
          box-sizing border-box
          .info_r_top
            height 100%
            padding 5px
            box-sizing border-box
            overflow hidden
            background-color #fff
            border-radius 4px
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



</style>
