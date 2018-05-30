<template>
  <div class="baseInstMainInfo">
    <div class="w">
      <div class="ocea_info">
        <div class="l info_l">
          <div class="ocea_info_name">
            <p>大型装备实时统计地图<i class="el-icon-caret-right"></i></p>
          </div>
          <div class="info_l_list">
            <ul>
              <li><img src="./ocea_01.png" alt=""><p>台站</p></li>
              <li><img src="./ocea_02.png" alt=""><p>浮标</p></li>
              <li><img src="./ocea_03.png" alt=""><p>飞机</p></li>
              <li><img src="./ocea_04.png" alt=""><p>雷达</p></li>
              <li><img src="./ocea_05.png" alt=""><p>潜器</p></li>
              <li><img src="./ocea_06.png" alt=""><p>船舶</p></li>
              <li class="info_more"><img src="./more.png" alt="">
                <p>更多</p>
                <div>
                  <ul class="info_hidde">
                    <li><img src="./ocea_01.png" alt=""><p>台站</p></li>
                    <li><img src="./ocea_02.png" alt=""><p>浮标</p></li>
                    <li><img src="./ocea_03.png" alt=""><p>飞机</p></li>
                    <li><img src="./ocea_04.png" alt=""><p>雷达</p></li>
                    <li><img src="./ocea_05.png" alt=""><p>潜器</p></li>
                    <li><img src="./ocea_06.png" alt=""><p>船舶</p></li>
                  </ul>
                </div>
              </li>
              <!--<li></li>-->
            </ul>
          </div>
          <div id="map" class="map"></div>
        </div>
        <div class="l info_r clearfix">
          <div class="info_r_top">
            <div class="info_r_top_info">
              <p>多维度选择区<i class="el-icon-caret-right"></i></p>
            </div>
            <div class="info_r_top_tab">
              <div class="singleElTableDiv">
                <el-table
                  :data="tableData1"
                  style="width: 100%"
                  stripe
                  size="mini"
                  header-align="center"
                  :row-class-name="tableRowClassName">
                  <el-table-column
                    prop="name"
                    align="center"
                    label="数量">
                    <template slot-scope="scope">
                      <!-- `checked` 为 true 或 false -->
                      <el-checkbox v-model="checked"  >&nbsp;&nbsp;&nbsp;{{ scope.row.name }} &nbsp;&nbsp;&nbsp;</el-checkbox>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div class="singleElTableDiv">
                <el-table
                  :data="tableData2"
                  style="width: 100%"
                  stripe
                  size="mini"
                  header-align="center"
                  :row-class-name="tableRowClassName">
                  <el-table-column
                    prop="name"
                    align="center"
                    label="数量">
                    <template slot-scope="scope">
                      <!-- `checked` 为 true 或 false -->
                      <el-checkbox v-model="checked"  >&nbsp;&nbsp;&nbsp;{{ scope.row.name }} &nbsp;&nbsp;&nbsp;</el-checkbox>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div class="singleElTableDiv">
                <el-table
                  :data="tableData3"
                  style="width: 100%"
                  stripe
                  size="mini"
                  header-align="center"
                  :row-class-name="tableRowClassName">
                  <el-table-column
                    prop="name"
                    align="center"
                    label="数量">
                    <template slot-scope="scope">
                      <!-- `checked` 为 true 或 false -->
                      <el-checkbox v-model="checked"  >&nbsp;&nbsp;&nbsp;{{ scope.row.name }} &nbsp;&nbsp;&nbsp;</el-checkbox>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div class="singleElTableDiv">
                <el-table
                  :data="tableData4"
                  style="width: 100%"
                  stripe
                  size="mini"
                  header-align="center"
                  :row-class-name="tableRowClassName">
                  <el-table-column
                    prop="name"
                    align="center"
                    label="数量">
                    <template slot-scope="scope">
                      <!-- `checked` 为 true 或 false -->
                      <el-checkbox v-model="checked"  >{{ scope.row.name }}</el-checkbox>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
          <div class="info_r_mid">
            <div class="info_r_mid_info">
              <p>已保养设备<i class="el-icon-caret-right"></i></p>
            </div>
            <div class="info_r_mid_tab">
              <el-table
                :data="tableData6"
                style="width: 100%"
                stripe
                size="mini"
                header-align="center"
                :row-class-name="tableRowClassName">
                <el-table-column
                  align="center"
                  type="index"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="type"
                  align="center"
                  label="设备类型">
                </el-table-column>
                <el-table-column
                  prop="name"
                  align="center"
                  label="设备名称">
                </el-table-column>
                <el-table-column
                  prop="no"
                  align="center"
                  width="85"
                  label="设备编号">
                </el-table-column>
                <el-table-column
                  prop="area"
                  align="center"
                  label="区域">
                </el-table-column>
                <el-table-column
                  prop="managerComp"
                  align="center"
                  label="管理单位">
                </el-table-column>
                <el-table-column
                  prop="status"
                  align="center"
                  label="运行状态">
                  <template slot-scope="scope">
                    <el-tag size="smail" style="padding: 0px;margin: 0px;width: 100%;border:0px;color: #00A34C;background-color: white">&bull;正常</el-tag>
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
  import ol from 'ol'
  import Map from 'ol/map';
  import View from 'ol/view';
  import TileLayer from 'ol/layer/tile';
  import XYZ from 'ol/source/xyz';
  export default {
    data (){
      return {
        checkboxGroup: [],
        tableData1: [{name: '台站'},{name:'雷达'},{name:'浮标'},{name:'漂流浮标'},{name:'潜标'},{name:'船舶'},{name:'GNSS'},{name:'地震台'}],
        tableData2: [{name: '水文'},{name:'气象'},{name:'化学'},{name:'其他'}],
        tableData3: [{name: '北海'},{name: '东海'},{name: '南海'},{name: '海外'},{name: '极地'}],
        tableData4: [{name: '国家海洋技术中心'},{name: '海华技术开发中心'},{name: '山仪所'}],
        tableData6: [
          {type: '台站',name: '台站',no: 'X001',area: '北海',managerComp: '国家海洋技术中心',"status":'0'},
          {type: '雷达',name: '雷达',no: 'L102',area: '东海',managerComp: '海华技术开发中心',"status":'0'},
          {type: '浮标',name: '浮标',no: 'F092',area: '南海',managerComp: '山仪所',"status":'0'},
          {type: '漂流浮标',name: '漂流浮标',no: 'PLFX0',area: '北海',managerComp: '国家海洋技术中心',"status":'0'},
          {type: '潜标',name: '潜标',no: 'QCDF',area: '东海',managerComp: '海华技术开发中心',"status":'1'},
          {type: '潜标',name: '潜标',no: 'QCDF',area: '南海',managerComp: '海华技术开发中心',"status":'1'},
          ],
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
      intiMap() {
        // new ol.Map({
        //   layers: [
        //     new ol.layer.TILE({
        //       source: new ol.source.OSM()
        //     })
        //   ],
        //   target: 'view',
        //   view: new ol.View({
        //     projection: 'EPSG:4326',//'EPSG:3857',
        //     center: [105.4265, 34.7782],
        //     zoom: 5,
        //     minZoom:4,
        //     maxZoom:6
        //   })
        // });
        new Map({
          target: 'map',
          layers: [
            new TileLayer({
              source: new XYZ({
                url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              })
            })
          ],
          view: new View({
            center: [0, 0],
            zoom: 5
          })
        });
        // var map = new ol.Map("view");
        // var osm = ol.Layer.OSM();
        // map.addLayer(osm);
        // map.zoomToMaxExtent();
      }
    },
    mounted (){
      this.intiMap()
      let oceanHeight = $(".oceans").height()*.8;
      $('.info_r_mid').css('margin-top',oceanHeight*.02)
      $('.info_r_bot').css('margin-top',oceanHeight*.02)
      let info_r_botW = $('.info_r_bot_bot').width()
      let info_r_botH = $('.info_r_bot_bot').height()

      $(".bot_r").width(info_r_botW - 240-5-15 -5)
      $(".bot_r").height(info_r_botH)


      //初始化海域数量分布环形图

      // $(".changeBackGroudButton").hover(function(){
      //    $(this).css("background-color","#293CBA");
      //     //鼠标进入事件
      // },function(){
      //     //鼠标移出事件
      //   $(this).css("background-color","#808080");
      // })


      $('.changeBackGroudButton').on('click',function(){
        //alert("click");
        //$(this).siblings().css("background-color","#808080");;  // 删除其他兄弟元素的样式
        //$(this).siblings(".changeBackGroudButton").css("background-color","#808080")
        $(".bot_l .changeBackGroudButton").css("background-color","#808080");
        $(this).css("background-color","#293CBA");
        // debugger;
        // $(this).addClass("active");
        // 添加当前元素的样式
      })
      // $(".changeBackGroudButton").on("click",function(){
      //   $(this).css("background-color","#293CBA");
      //   //鼠标进入事件
      // },function(){
      //   //鼠标移出事件
      //   $(this).css("background-color","#808080");
      // })
    },
    created(){
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .baseInstMainInfo
    margin-top 55px
    height 80%
    .w
      height 100%
      .ocea_info
        height 100%
        .info_l
          width 49%
          height 100%
          background #aac6ee
          border-radius 4px
          position relative
          .ocea_info_name
            position absolute
            left 20px
            top 20px
            z-index 999
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
          #map
            width 100%
            height 100%
          .info_l_list
            position relative
            ul
              position absolute
              right 20px
              top 80px
              z-index 999
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
                    top -76px
                    right 37px
                    width 292px
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
                  width 43px
                /*padding-top 8px*/
                p
                  font-size 16px
                  color #fff
                  text-align center
                  padding-top 2px
                &:hover
                  background-color red
        .info_r
          width 50%
          height 100%
          margin-left 1%
          .info_r_top
            height 39%
            padding 5px
            box-sizing border-box
            overflow hidden
            background-color #fff
            border-radius 4px
            .info_r_top_info
              width 150px
              height 27px
              margin-left 10px
              background-color #2a3cba
              color #fff
              font-size 14px
              font-weight 700
              line-height 27px
              text-align center
            .info_r_top_tab
              text-align center
              height 100%
              padding-top 10px
              overflow hidden
              .singleElTableDiv
                width 22%
                float left
                margin 1%
                padding 1px
                border 1px solid #CBE0F5
                .el-table
                 border-spacing 0;
                 border-collapse separate;/* 如果值为collapse，则element表格下方会出现滚动条*/
                 width 80%
                 height 100%
                  overflow hidden
                  //border 1px solid #c6c6c6
                 .el-table__body-wrapper
                    width 80%!important
                    height 100%
                    overflow hidden!important
          .info_r_mid
            height 59%
            padding 5px
            box-sizing border-box
            overflow hidden
            background-color #fff
            border-radius 4px
            position relative
            overflow hidden
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
              position absolute
              top 45px
              text-align center
              width 98%
              height 96%
              padding-top 10px
              overflow hidden
</style>
