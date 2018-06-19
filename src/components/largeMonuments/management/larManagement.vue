<template>
  <div class="overseas">
    <div class="w">
      <div class="ocea_info">
        <div class="l info_l">
          <div class="ocea_info_name">
            <p>大型装备实时统计地图<i class="el-icon-caret-right"></i></p>
          </div>

          <!--<div class="overNormal">-->
          <!--<v-normal></v-normal>-->
          <!--</div>-->

          <div class="info_l_list">
            <ul>
              <li><img src="./ocea_03.png" alt="">
                <p>飞机</p></li>
              <li><img src="./ocea_06.png" alt="">
                <p>船舶</p></li>
              <li><img src="./qianqi.png" alt="">
                <p>潜器</p></li>
              <li><img src="./weixing.png" alt="">
                <p>卫星</p></li>
            </ul>
          </div>

          <div class="pointMessage"></div>
          <div id="map" style="width: 100%;height: 100%;z-index:1;"></div>

        </div>
        <div class="l info_r clearfix">
          <div class="info_r_top">
            <div class="info_r_mid_info">
              <p>各类大型设备投入总值统计分析<span> &nbsp;&nbsp;(单位：千万元)</span></p>
            </div>
            <div class="info_r_mid_tab">
              <div id="myChart"></div>
            </div>
          </div>
          <div class="info_r_bot">
            <div class="info_r_mid_info">
              <p>各类大型设备资产构成统计图</p>
            </div>
            <div class="larCheck" style="position: absolute;right: 10px;top: 5px;">
              <el-radio-group size="mini" v-model="radio1" @change="getNus">
                <el-radio label="all" border style="background-color: #5c6275; color: #fff;margin-left: 0px;">全部
                </el-radio>
                <el-radio label="shipsituation" border style="background-color: #79a0ef; color: #fff;margin-left: 0px;">
                  船舶
                </el-radio>
                <el-radio label="planesituation" border
                          style="background-color: #ffad1e; color: #fff;margin-left: 0px;">飞机
                </el-radio>
                <el-radio label="submersible" border style="background-color: #008b99; color: #fff;margin-left: 0px;">
                  潜器
                </el-radio>
                <el-radio label="atellite" border style="background-color: #a360fe; color: #fff;margin-left: 0px;">卫星
                </el-radio>
              </el-radio-group>
            </div>
            <div class="info_r_mid_tab">
              <el-table
                :data="showNum"
                style="width: 100%;max-height: 100%"
                fixed
                stripe
                :height="tabHeight"
                size="mini"
                header-align="center"
                :row-class-name="tableRowClassName">
                <el-table-column
                  prop="number"
                  align="center"
                  type="index"
                  width="55"
                  sortable
                  label="序号">
                </el-table-column>
                <!--<el-table-column-->
                <!--prop="number"-->
                <!--align="center"-->
                <!--width="55"-->
                <!--sortable-->
                <!--label="序号">-->
                <!--</el-table-column>-->
                <el-table-column
                  prop="name"
                  align="center"
                  label="名称">
                </el-table-column>
                <el-table-column
                  prop="model"
                  align="center"
                  label="型号">
                </el-table-column>

                <el-table-column
                  prop="useunits"
                  align="center"
                  label="使用单位">
                </el-table-column>
                <el-table-column
                  prop="useyear"
                  align="center"
                  width="55"
                  label="已用年限">
                </el-table-column>
                <el-table-column
                  prop="regmoney"
                  align="center"
                  sortable
                  label="登记价值">
                </el-table-column>
                <!--<el-table-column-->
                <!--align="center"-->
                <!--width="70"-->
                <!--label="操作">-->
                <!--<template slot-scope="scope">-->
                <!--<el-button @click="handleClick(scope.row.type)" type="text" size="mini"-->
                <!--style="display: inline-block;width: 80%;height: 80%; background-color: #7f8180;color:#fff;">-->
                <!--查看详情-->
                <!--</el-button>-->
                <!--</template>-->
                <!--</el-table-column>-->
              </el-table>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import ol from '../../../../static/js/globalviewer'
  import echarts from 'echarts'

  export default {
    data() {
      return {
        nums: '',
        radio1: 'all',
        tableData2: [
          {
            'number': '1',
            'name': '中国海警2901',
            'model': '10000吨级',
            'useunits': '中国海监总队',
            'useyear': '3',
            'regmoney': '599350500',
            'type': 'shipsituation'
          },
          {
            'number': '2',
            'name': '中国海警3901',
            'model': '',
            'useunits': '中国海监总队',
            'useyear': '1',
            'regmoney': '599350500',
            'type': 'shipsituation'
          },
          {
            'number': '3',
            'name': '雪龙号极地考察船',
            'model': '',
            'useunits': '中国极地研究中心',
            'useyear': '13',
            'regmoney': '484713984.74',
            'type': 'shipsituation'
          },
          {
            'number': '4',
            'name': '向阳红01',
            'model': '',
            'useunits': '国家海洋局第一海洋研究所',
            'useyear': '0',
            'regmoney': '459417300',
            'type': 'shipsituation'
          },
          {
            'number': '5',
            'name': '中国海警2350',
            'model': '',
            'useunits': '中国海监总队',
            'useyear': '7',
            'regmoney': '344295340.05',
            'type': 'shipsituation'
          },
          {
            'number': '6',
            'name': '向阳红03科学考察船',
            'model': '4500吨',
            'useunits': '国家海洋局第三海洋研究所',
            'useyear': '0',
            'regmoney': '310000000',
            'type': 'shipsituation'
          },
          {
            'number': '7',
            'name': '中国海警2501',
            'model': '5000吨级',
            'useunits': '中国海监总队',
            'useyear': '3',
            'regmoney': '298871700',
            'type': 'shipsituation'
          },
          {
            'number': '8',
            'name': '中国海警1501',
            'model': '5000吨级',
            'useunits': '中国海监总队',
            'useyear': '3',
            'regmoney': '296981700',
            'type': 'shipsituation'
          },
          {
            'number': '9',
            'name': '中国海警3501',
            'model': '5000吨级',
            'useunits': '中国海监总队',
            'useyear': '3',
            'regmoney': '295691700',
            'type': 'shipsituation'
          },
          {
            'number': '10',
            'name': '中国海警2502',
            'model': '5000吨级',
            'useunits': '中国海监总队',
            'useyear': '3',
            'regmoney': '295271700',
            'type': 'shipsituation'
          },
          {
            'number': '11',
            'name': '中国海警1306',
            'model': '3000吨级',
            'useunits': '中国海监总队',
            'useyear': '3',
            'regmoney': '275831500',
            'type': 'shipsituation'
          },
          {
            'number': '12',
            'name': '中国海警3308',
            'model': '3000吨级',
            'useunits': '中国海监总队',
            'useyear': '3',
            'regmoney': '275541500',
            'type': 'shipsituation'
          },
          {
            'number': '13',
            'name': '中国海警1307',
            'model': '3000吨级',
            'useunits': '中国海监总队',
            'useyear': '3',
            'regmoney': '275211500',
            'type': 'shipsituation'
          },
          {
            'number': '14',
            'name': '中国海警3306',
            'model': '3000吨级',
            'useunits': '中国海监总队',
            'useyear': '3',
            'regmoney': '275171500',
            'type': 'shipsituation'
          },
          {
            'number': '15',
            'name': '中国海警2305',
            'model': '3000吨级',
            'useunits': '中国海监总队',
            'useyear': '3',
            'regmoney': '275020200',
            'type': 'shipsituation'
          },
          {
            'number': '16',
            'name': '中国海警3307',
            'model': '3000吨级',
            'useunits': '中国海监总队',
            'useyear': '3',
            'regmoney': '274301500',
            'type': 'shipsituation'
          },
          {
            'number': '17',
            'name': '中国海警2306',
            'model': '3000吨级',
            'useunits': '中国海监总队',
            'useyear': '3',
            'regmoney': '273580200',
            'type': 'shipsituation'
          },
          {
            'number': '18',
            'name': '中国海警2307',
            'model': '3000吨级',
            'useunits': '中国海监总队',
            'useyear': '3',
            'regmoney': '273490200',
            'type': 'shipsituation'
          },
          {
            'number': '19',
            'name': '中国海警1305',
            'model': '3000吨级',
            'useunits': '中国海监总队',
            'useyear': '3',
            'regmoney': '272920200',
            'type': 'shipsituation'
          },
          {
            'number': '20',
            'name': '中国海警2308',
            'model': '3000吨级',
            'useunits': '中国海监总队',
            'useyear': '3',
            'regmoney': '272380200',
            'type': 'shipsituation'
          },
          {
            'number': '21',
            'name': '中国海警2401',
            'model': '4000吨级',
            'useunits': '中国海监总队',
            'useyear': '3',
            'regmoney': '244369900',
            'type': 'shipsituation'
          },
          {
            'number': '22',
            'name': '中国海警3401',
            'model': '4000吨级',
            'useunits': '中国海监总队',
            'useyear': '3',
            'regmoney': '244369900',
            'type': 'shipsituation'
          },
          {
            'number': '23',
            'name': '中国海警1401',
            'model': '4000吨级',
            'useunits': '中国海监总队',
            'useyear': '3',
            'regmoney': '240734900',
            'type': 'shipsituation'
          },
          {
            'number': '24',
            'name': '中国海警3402',
            'model': '4000吨级',
            'useunits': '中国海监总队',
            'useyear': '3',
            'regmoney': '240734900',
            'type': 'shipsituation'
          },
          {
            'number': '1',
            'name': '海监执法直升机B-70LQ',
            'model': 'AC313',
            'useunits': '中国海监总队',
            'useyear': '0',
            'regmoney': '187668600',
            'type': 'planesituation'
          },
          {
            'number': '2',
            'name': '海监执法直升机B-70LR',
            'model': 'AC313',
            'useunits': '中国海监总队',
            'useyear': '0',
            'regmoney': '187668600',
            'type': 'planesituation'
          },
          {
            'number': '3',
            'name': '雪鹰12直升机',
            'model': '',
            'useunits': '中国极地研究中心',
            'useyear': '4',
            'regmoney': '94107254.75',
            'type': 'planesituation'
          },
          {
            'number': '4',
            'name': 'B-70HF直升机',
            'model': 'h425',
            'useunits': '中国海监总队',
            'useyear': '1',
            'regmoney': '86505864',
            'type': 'planesituation'
          },
          {
            'number': '5',
            'name': 'B-70HG直升机',
            'model': 'h425',
            'useunits': '中国海监总队',
            'useyear': '1',
            'regmoney': '86505864',
            'type': 'planesituation'
          },
          {
            'number': '6',
            'name': 'B-70HH直升机',
            'model': 'h425',
            'useunits': '中国海监总队',
            'useyear': '1',
            'regmoney': '86505864',
            'type': 'planesituation'
          },
          {
            'number': '7',
            'name': 'B-70HJ直升机',
            'model': 'h425',
            'useunits': '中国海监总队',
            'useyear': '1',
            'regmoney': '86505864',
            'type': 'planesituation'
          },
          {
            'number': '8',
            'name': 'B-70HP直升机',
            'model': 'h425',
            'useunits': '中国海监总队',
            'useyear': '1',
            'regmoney': '86505864',
            'type': 'planesituation'
          },
          {
            'number': '9',
            'name': 'B-70HQ直升机',
            'model': 'h425',
            'useunits': '中国海监总队',
            'useyear': '1',
            'regmoney': '86505864',
            'type': 'planesituation'
          },
          {
            'number': '10',
            'name': 'B-70HR直升机',
            'model': 'h425',
            'useunits': '中国海监总队',
            'useyear': '1',
            'regmoney': '86505864',
            'type': 'planesituation'
          },
          {
            'number': '11',
            'name': 'B-70HS直升机',
            'model': 'h425',
            'useunits': '中国海监总队',
            'useyear': '1',
            'regmoney': '86505864',
            'type': 'planesituation'
          },
          {
            'number': '12',
            'name': 'B-70HT直升机',
            'model': 'h425',
            'useunits': '中国海监总队',
            'useyear': '1',
            'regmoney': '86505864',
            'type': 'planesituation'
          },
          {
            'number': '13',
            'name': 'B-70HV直升机',
            'model': 'h425',
            'useunits': '中国海监总队',
            'useyear': '1',
            'regmoney': '86505864',
            'type': 'planesituation'
          },
          {
            'number': '14',
            'name': 'B-H70HD直升机',
            'model': 'h425',
            'useunits': '中国海监总队',
            'useyear': '1',
            'regmoney': '86505864',
            'type': 'planesituation'
          },
          {
            'number': '15',
            'name': 'B-H70HE直升机',
            'model': 'h425',
            'useunits': '中国海监总队',
            'useyear': '1',
            'regmoney': '86505864',
            'type': 'planesituation'
          },
          {
            'number': '16',
            'name': 'B-H70HU直升机',
            'model': 'h425',
            'useunits': '中国海监总队',
            'useyear': '1',
            'regmoney': '86505864',
            'type': 'planesituation'
          },
          {
            'number': '17',
            'name': 'B-H70HW直升机',
            'model': 'h425',
            'useunits': '中国海监总队',
            'useyear': '1',
            'regmoney': '86505864',
            'type': 'planesituation'
          },
          {
            'number': '18',
            'name': '固定翼飞机',
            'model': 'BASLERBT-67',
            'useunits': '中国极地研究中心',
            'useyear': '0',
            'regmoney': '71785049.51',
            'type': 'planesituation'
          },
          {
            'number': '19',
            'name': '海监执法直升机',
            'model': 'H410(Z9A)',
            'useunits': '中国海监总队',
            'useyear': '10',
            'regmoney': '52929365.12',
            'type': 'planesituation'
          },
          {
            'number': '20',
            'name': '海监直升机B7112',
            'model': 'Z9A',
            'useunits': '国家海洋局南海分局本级',
            'useyear': '7',
            'regmoney': '44651520.84',
            'type': 'planesituation'
          },
          {
            'number': '21',
            'name': '海监执法固定翼飞机B-3843',
            'model': 'Y12IV',
            'useunits': '中国海监总队',
            'useyear': '10',
            'regmoney': '26106961.68',
            'type': 'planesituation'
          },
          {
            'number': '22',
            'name': '海监执法固定翼飞机B-3845',
            'model': 'Y12IV',
            'useunits': '中国海监总队',
            'useyear': '10',
            'regmoney': '26106961.68',
            'type': 'planesituation'
          },
          {
            'number': '23',
            'name': '新舟60固定翼飞机B-5002',
            'model': '',
            'useunits': '中国海监总队',
            'useyear': '1',
            'regmoney': '18800090',
            'type': 'planesituation'
          },
          {
            'number': '24',
            'name': '海监执法直升机B-7072',
            'model': '',
            'useunits': '中国海监总队',
            'useyear': '5',
            'regmoney': '11999000',
            'type': 'planesituation'
          },
          {
            'number': '25',
            'name': 'Y12F固定翼飞机',
            'model': '',
            'useunits': '中国海监总队',
            'useyear': '1',
            'regmoney': '10552000',
            'type': 'planesituation'
          },
          {
            'number': '1',
            'name': '“蛟龙号”7000米载人潜水器',
            'model': '',
            'useunits': '中国大洋矿产资源研究开发协会办公室',
            'useyear': '2',
            'regmoney': '307920000',
            'type': 'submersible'
          },
          {
            'number': '2',
            'name': 'CCROV智能水下潜水器',
            'model': '微孚智能',
            'useunits': '国家海洋局第二海洋研究所',
            'useyear': '0',
            'regmoney': '49800',
            'type': 'submersible'
          },
          {
            'number': '1',
            'name': '海洋一号A',
            'model': 'HY-1A',
            'useunits': '卫星中心',
            'useyear': '2',
            'regmoney': '307920000',
            'type': 'atellite'
          },
          {
            'number': '2',
            'name': '海洋一号B',
            'model': 'HY-1B',
            'useunits': '卫星中心',
            'useyear': '3',
            'regmoney': '49800',
            'type': 'atellite'
          },
          {
            'number': '3',
            'name': '海洋二号',
            'model': 'HY-2',
            'useunits': '卫星中心',
            'useyear': '3',
            'regmoney': '49800',
            'type': 'atellite'
          }
        ],
        showNum: [],
        tabHeight: '',
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
      getNus() {
        let that = this
        if (this.radio1 == "all") {
          this.showNum = this.tableData2
          return
        }
        this.showNum = []
        this.tableData2.forEach(function (item, index) {
          if (item.type == that.radio1) {
            that.showNum.push(item)
          }
        })

        return this.showNum
      }

    },
    mounted() {
      // $('.det_tab_ul li').on('click',function () {
      //   $('.det_tab_ul li').each(function(key,val){
      //     $(val).removeClass('active')
      //   })
      //   $(this).addClass('active')
      // })


      this.showNum = this.tableData2
      let screeH = document.documentElement.clientHeight >= 800 ? document.documentElement.clientHeight : 800
      this.tabHeight = screeH * .49 - 40
      $('.info_l_list').css('margin-top', -$('.info_l_list').height() / 2 + 'px')
      $('.info_r_top .info_r_mid_tab').height(screeH * .8 * .49 - 28)
      $('.info_r_bot .info_r_mid_tab').height(screeH * .8 * .49 - 45)
      $('.info_r_bot').css('margin-top', screeH * .8 * .02 + 'px')
      // $('.info_r_mid_tab .el-table .el-table__body').height(screeH * .8 * .49 - 40)
      var layer = this.$layer;
      var serverip = 'http://127.0.0.1';

      var tiandituserverip = "http://10.0.4.72:81";
      var configip = "http://71.0.1.192:8085"

      // var tiandituserverip="http://t0.tianditu.com";
      // var configip = "http://127.0.0.1:3000"

      var localmapip = "http://127.0.0.1:3000/tiles/mongo"

      function globalviewercore() {
        var j;
        var scale;
        var c;
        var a;
        var r;
        var l = 0;
        var s = 0;
        var e = "";
        var o = "";
        var t = "";
        var u = "";
        var f = "";
        var n = 1;
        var g = "";
        var v = "";
        var d = {};
        d["noopeartion"] = 0;
        d["singletargetselection"] = 1;
        d["modifycoordinate"] = 2;
        d["boxselection"] = 3;
        d["circleselection"] = 4;
        d["regionselection"] = 5;
        d["measuredistance"] = 6;
        d["measurearea"] = 6;
        d["drawpath"] = 7;
        d["drawpathminmax"] = 8;
        var m = d["noopeartion"];
        var y = {};
        y["国防交通机构"] = "HQ_JJ_JZ_J_JG_JGQK";
        y["国防交通专业保障队伍"] = "HQ_JJ_JZ_J_DW_DWQK";
        y["公路重点桥梁"] = "HQ_JJ_JZ_J_GL_QLQK";
        y["公路重点隧道"] = "HQ_JJ_JZ_J_GL_SDQK";
        y["国防交通物资储备仓库"] = "HQ_JJ_JZ_J_WZ_CKQK";
        y["公路收费站情况"] = "HQ_JJ_JZ_J_GL_GSSF";
        y["交通重点目标"] = "HQ_JJ_JZ_J_ZD_BZMB";
        y["公路加油站情况"] = "HQ_JJ_JZ_J_GL_JYQK";
        y["高速公路服务区"] = "HQ_JJ_JZ_J_GL_GSFW";
        var p = {};

        function w(e, o, t, r) {
          layer.open({type: 2, area: [e, o], title: t, shadeClose: true, content: r})
        }

        function h(e, o, t) {
          var r = e.toString(t || 10);
          while (r.length < o) {
            r = "0" + r
          }
          return r
        }

        var x = new ol.layer.Tile({source: new ol.source.XYZ({url: serverip + ":3000/Tiles/shandongxin/{z}/{x}/{y}.png"})});
        var S = new ol.layer.Tile({source: new ol.source.XYZ({url: serverip + ":3000/Tiles/indonesia/{z}/{x}/{y}.png"})});
        var P = new ol.layer.Tile({source: new ol.source.XYZ({url: localmapip + "/{z}/{x}/{y}.png"})});
        var G = new ol.layer.Tile({
          source: new ol.source.XYZ({url: tiandituserverip + "/DataServer?T=vec_c&x={x}&y={y}&l={z}"}),
          projection: "EPSG:4326"
        });
        var b = new ol.layer.Tile({
          source: new ol.source.XYZ({
            tileUrlFunction: function (e) {
              var o = e[0];
              var t = e[1];
              var r = -e[2] - 1;
              console.log(t);
              console.log(r);
              console.log(o);
              return tiandituserverip + "/DataServer?T=vec_c&x={x}&y={y}&l={z}"
            }
          }), projection: "EPSG:3857"
        });
        var E = new ol.layer.Tile({
          source: new ol.source.XYZ({url: tiandituserverip + "/DataServer?T=vec_w&x={x}&y={y}&l={z}"}),
          projection: "EPSG:3857"
        });
        var _ = new ol.layer.Tile({
          source: new ol.source.XYZ({url: tiandituserverip + "/DataServer?T=cva_c&x={x}&y={y}&l={z}"}),
          projection: "EPSG:3857"
        });
        var L = ol.proj.get("EPSG:4326");
        var J = L.getExtent();
        var T = ol.extent.getWidth(J) / 256;
        var M = new Array(18);
        var F = new Array(18);
        for (var Z = 1; Z <= 18; ++Z) {
          M[Z] = T / Math.pow(2, Z);
          F[Z] = Z
        }
        var k = new ol.layer.Tile({
          name: "offlinetiandituivector",
          type: "base",
          source: new ol.source.WMTS({
            url: tiandituserverip + "/vec_c/wmts",
            layer: "vec",
            matrixSet: "c",
            format: "tiles",
            projection: L,
            tileGrid: new ol.tilegrid.WMTS({origin: ol.extent.getTopLeft(J), resolutions: M, matrixIds: F}),
            style: "default"
          })
        });
        var C = new ol.layer.Tile({
          name: "offlinetianditutext",
          type: "base",
          source: new ol.source.WMTS({
            url: tiandituserverip + "/cva_c/wmts",
            layer: "cva",
            matrixSet: "c",
            format: "tiles",
            projection: L,
            tileGrid: new ol.tilegrid.WMTS({origin: ol.extent.getTopLeft(J), resolutions: M, matrixIds: F}),
            style: "default"
          })
        });
        var V = new ol.layer.Tile({
          name: "offlinetiandituimage",
          type: "base",
          source: new ol.source.WMTS({
            url: tiandituserverip + "/img_c/wmts",
            layer: "img",
            matrixSet: "c",
            format: "tiles",
            projection: L,
            tileGrid: new ol.tilegrid.WMTS({origin: ol.extent.getTopLeft(J), resolutions: M, matrixIds: F}),
            name: "offlinetiandituimage",
            style: "default"
          })
        });
        var I = new ol.layer.Tile({
          name: "offlinetianditutext",
          type: "base",
          source: new ol.source.WMTS({
            url: tiandituserverip + "/cia_c/wmts",
            layer: "cia",
            matrixSet: "c",
            format: "tiles",
            projection: L,
            tileGrid: new ol.tilegrid.WMTS({origin: ol.extent.getTopLeft(J), resolutions: M, matrixIds: F}),
            style: "default"
          })
        });
        var O = new ol.layer.Tile({
          type: "base",
          source: new ol.source.XYZ({url: "http://127.0.0.1:23666/{z}/{x}/{y}.png"}),
          projection: "EPSG:3857"
        });
        var z = new ol.layer.Tile({
          type: "base", source: new ol.source.XYZ({
            tileUrlFunction: function (e) {
              var o = "C" + h(e[1], 8, 16);
              var t = "R" + h(-e[2] - 1, 8, 16);
              var r = "L" + h(e[0], 2, 10);
              return serverip + ":3000/Tiles/world" + "/" + r + "/" + t + "/" + o + ".png"
            }, projection: "EPSG:3857"
          })
        });
        var D = new ol.source.Vector;
        var N = new ol.layer.Vector({
          source: D,
          style: new ol.style.Style({
            fill: new ol.style.Fill({color: "rgba(255,255,255,0.2)"}),
            stroke: new ol.style.Stroke({color: "#e21e0a", width: 2}),
            image: new ol.style.Circle({radius: 5, fill: new ol.style.Fill({color: "#ffcc33"})})
          })
        });
        var W = function (e) {
          var o = e.getGeometry();
          var a = [new ol.style.Style({stroke: new ol.style.Stroke({color: "#ffcc33", width: 2})})];
          o.forEachSegment(function (e, o) {
            var t = o[0] - e[0];
            var r = o[1] - e[1];
            var n = Math.atan2(r, t);
            a.push(new ol.style.Style({
              geometry: new ol.geom.Point(o),
              image: new ol.style.Icon({
                src: "./resources/png/arrow.png",
                anchor: [.75, .5],
                rotateWithView: true,
                rotation: -n
              })
            }))
          });
          return a
        };
        var Q = new ol.source.Vector;
        var Y = new ol.layer.Vector({source: Q, style: W});
        var A = false;
        var H = new WebSocket("ws://localhost:20186");
        H.onerror = function (e) {
          B(e)
        };
        H.onopen = function (e) {
          K(e)
        };
        H.onclose = function (e) {
          q(e)
        };
        H.onmessage = function (e) {
          X(e)
        };

        function X(e) {
        }

        function K(e) {
          A = true
        }

        function q(e) {
          A = false
        }

        function B(e) {
        }

        function R(e) {
          if (A == false) {
            H = new WebSocket("ws://localhost:20186");
            H.onopen = function (e) {
              K(e)
            };
            H.onclose = function (e) {
              q(e)
            }
          }
          if (A == true) {
            H.send(e)
          }
        }

        this.initmap = function (e, o, t) {
          a = new ol.View({
            center: ol.proj.transform([parseFloat(e), parseFloat(o)], "EPSG:4326", "EPSG:3857"),
            minZoom: 3,
            maxZoom: 19,
            zoom: 6
          });
          var r = new ol.layer.Tile({
            source: new ol.source.XYZ({url: "http://mt2.google.cn/vt/lyrs=y&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=G"}),
            projection: "EPSG:3857"
          });
          c = new ol.Map({
            target: t,
            layers: [z],
            view: a,
            logo: false,
            controls: ol.control.defaults({attributionOptions: {collapsible: false}})
          });
          var n = new ol.control.ScaleLine({units: "metric", target: "scalebar", className: "ol-scale-line"});
          c.addControl(n);
          c.addLayer(N);
          $(c.getViewport()).on("contextmenu", function (e) {
            e.preventDefault();
            le();
            m = d["noopeartion"]
          });
          c.on("moveend", function (e) {
            return;
            var o = c.getView();
            var t = o.getZoom();
            var r = o.getCenter();
            var n = o.calculateExtent(c.getSize());
            if (n.length > 3) {
              var a = ol.proj.transform([n[0], n[1]], "EPSG:3857", "EPSG:4326");
              var l = ol.proj.transform([n[2], n[3]], "EPSG:3857", "EPSG:4326");
              var i = "2dextent," + a[0].toString() + "," + a[1].toString() + "," + l[0].toString() + "," + l[1].toString();
              R(i)
            }
          });
          c.on("click", function (e) {
            if (m == d["singletargetselection"]) {
              ee(e.pixel)
            } else if (m == d["regionselection"]) {
              console.log("i am in region selection!");
              console.log(u);
              U(e.pixel);
              console.log(u);
              if (u != "") {
                g = "&qhdm=" + u;
                console.log(g);
                v = serverip + ":3500/gettabledatas?tablename=";
                var o = f;
                o = o + "xxxx资源情况一览";
                layer.open({
                  type: 2,
                  area: ["1024px", "600px"],
                  title: o,
                  shadeClose: true,
                  content: "./popup/indextableboxselection.html"
                })
              }
            } else if (m == d["modifycoordinate"]) {
              var t = ol.proj.transform(e.coordinate, "EPSG:3857", "EPSG:4326");
              console.log(t);
              console.log(t[0]);
              console.log(t[1]);
              l = t[0];
              s = t[1];
              layer.open({
                type: 2,
                area: ["600px", "300px"],
                title: "请确认您修改的坐标",
                shadeClose: true,
                content: "./popup/modifycoordinate.html"
              });
              m = d["noopeartion"]
            }
          })
        };
        var U = function (e) {
          var t = [];
          c.forEachFeatureAtPixel(e, function (e, o) {
            t.push(e)
          });
          if (t.length > 0) {
            for (j = 0; j != t.length; ++j) {
              var o = t[j].getGeometry();
              if (o instanceof ol.geom.MultiPolygon) {
                u = t[j].get("CNTY_CODE");
                f = t[j].get("NAME")
              }
            }
          }
        };
        var ee = function (e) {
          var t = [];
          c.forEachFeatureAtPixel(e, function (e, o) {
            t.push(e)
          });
          if (t.length > 0) {
            var o = "";
            var r = "";
            var n = "";
            for (j = 0; j != t.length; ++j) {
              var a = t[j].getGeometry();
              if (a instanceof ol.geom.Point) {
                o = t[j].get("tablename");
                r = t[j].get("id");
                n = t[j].get("type");
                console.log(r);
                console.log(n)
              }
            }
            if (o != "" && r != "") {
              g = "&uid=" + r;
              v = serverip + ":3500/getdetialdatas?tablename=" + o;
              console.log("last point is");
              console.log(r);
              popupinfo(n, r);
              w("100px", "100px", "abcdefg", "http://www.baidu.com")
            }
          }
        };
        var oe = function (e) {
          var t = [];
          c.forEachFeatureAtPixel(e, function (e, o) {
            t.push(e)
          });
          if (t.length > 0) {
            console.log(t.length);
            for (j = 0; j != t.length; ++j) {
              var o = t[j].getGeometry();
              if (o instanceof ol.geom.Point) {
              } else if (o instanceof ol.geom.MultiPolygon) {
                console.log("polygon!");
                console.log(t[j].get("CNTY_CODE"))
              } else if (o instanceof ol.geom.LineString) {
                console.log("line!")
              } else if (o instanceof ol.geom.MultiLineString) {
                console.log("line!");
                console.log(t[j].get("编号"))
              }
            }
          }
        };

        function te() {
          var e = new ol.source.Vector({
            format: new ol.format.GeoJSON,
            projection: "EPSG:3857",
            url: "shan_dong_geo.json"
          });
          vectorLayerxingzhengquhua = new ol.layer.Vector({source: e});
          c.addLayer(vectorLayerxingzhengquhua)
        }

        this.jumptolocation = function (e, o) {
          var t = [parseFloat(e), parseFloat(o)];
          var r = ol.proj.transform(t, "EPSG:4326", "EPSG:3857");
          a.animate({center: r, duration: 2e3})
        };
        var re = new Array;

        function ne() {
          if (pe) {
            pe.parentNode.removeChild(pe)
          }
          pe = document.createElement("div");
          pe.className = "tooltip hidden";
          we = new ol.Overlay({element: pe, offset: [15, 0], positioning: "center-left"});
          c.addOverlay(we)
        }

        function ae() {
          he = document.createElement("div");
          he.setAttribute("id", "lengthLabel");
          he.className = "tooltip tooltip-measure";
          xe = new ol.Overlay({element: he, offset: [0, -15], positioning: "bottom-center"});
          c.addOverlay(xe);
          re.push(xe)
        }

        function le() {
          if (fe) {
            c.removeInteraction(fe);
            c.removeLayer(Y)
          }
          for (var e in re) {
            c.removeOverlay(re[e]);
            re[e] = null
          }
          re = new Array;
          if (ce) c.removeInteraction(ce);
          if (ie) c.removeInteraction(ie);
          if (r) {
            console.log("begin remove action");
            c.removeInteraction(r);
            c.removeOverlay(xe);
            c.removeOverlay(we)
          }
          D.clear()
        }

        var ie = null;

        function se() {
          le();
          if (ie) c.removeInteraction(ie);
          ie = new ol.interaction.DragBox({condition: ol.events.condition.platformModiferKeyOnly});
          c.addInteraction(ie);
          ie.on("boxend", function () {
            var e = ie.getGeometry().getExtent();
            var o = ol.proj.transform([e[0], e[1]], "EPSG:3857", "EPSG:4326");
            var t = ol.proj.transform([e[2], e[3]], "EPSG:3857", "EPSG:4326");
            g = "&minx=" + o[0] + "&maxx=" + t[0] + "&miny=" + o[1] + "&maxy=" + t[1];
            console.log(g);
            v = serverip + ":3500/gettabledataswithregion?tablename=";
            var r = "框选范围内";
            r = r + "xxxx资源情况一览";
            layer.open({
              type: 2,
              area: ["1024px", "600px"],
              title: r,
              shadeClose: true,
              content: "./popup/indextableboxselection.html"
            })
          });
          ie.on("boxstart", function () {
            D.clear();
            g = "";
            v = ""
          })
        }

        var ce = null;

        function ue() {
          le();
          if (ce) c.removeInteraction(ce);
          console.log("begin circle selection!");
          ce = new ol.interaction.Draw({
            source: D,
            type: "Circle",
            freehand: true,
            style: new ol.style.Style({
              fill: new ol.style.Fill({color: "rgba(255,255,255,0.2)"}),
              stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: [10, 10], width: 2}),
              image: new ol.style.Circle({
                radius: 5,
                stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.7)"}),
                fill: new ol.style.Fill({color: "rgba(255,255,255,0.2)"})
              })
            })
          });
          c.addInteraction(ce);
          ce.on("drawend", function (e) {
            var o = e.feature.getGeometry();
            var t = o.getCenter();
            var r = ol.proj.transform(t, "EPSG:3857", "EPSG:4326");
            var n = o.getRadius();
            v = serverip + ":3500/gettabledataswithcircle?tablename=";
            g = "&centerx=" + r[0] + "&centery=" + r[1] + "&radius=" + n;
            console.log(g);
            var a = "圈选范围内";
            a = a + "xxxx资源情况一览";
            layer.open({
              type: 2,
              area: ["1024px", "600px"],
              title: a,
              shadeClose: true,
              content: "./popup/indextableboxselection.html"
            })
          });
          ce.on("drawstart", function (e) {
            D.clear();
            g = "";
            v = ""
          })
        }

        var fe = null;

        function ge() {
          le();
          if (fe) c.removeInteraction(fe);
          console.log("begin draw path!");
          c.removeLayer(Y);
          c.addLayer(Y);
          fe = new ol.interaction.Draw({source: Q, type: "LineString", freehand: true});
          c.addInteraction(fe);
          fe.on("drawend", function (e) {
            var l = new Map;
            var o = e.feature.getGeometry();
            o.forEachSegment(function (e, o) {
              var t = c.getPixelFromCoordinate(o);
              var r = [];
              c.forEachFeatureAtPixel(t, function (e, o) {
                r.push(e)
              });
              if (r.length > 0) {
                for (j = 0; j != r.length; ++j) {
                  var n = "";
                  var a = r[j].getGeometry();
                  if (a instanceof ol.geom.LineString) {
                    n = r[j].get("编号")
                  } else if (a instanceof ol.geom.MultiLineString) {
                    n = r[j].get("编号")
                  }
                  if (n != null && n != "") {
                    l[n] = n
                  }
                }
              }
            });
            console.log("begin output");
            var t = "";
            for (var r in l) {
              if (r.length > 8) r = r.substr(0, r.length - 6);
              r += "%";
              t += ",";
              t += r
            }
            t = t.substr(1, t.length - 1);
            console.log("end output");
            var n = o.getExtent();
            var a = ol.proj.transform([n[0], n[1]], "EPSG:3857", "EPSG:4326");
            var i = ol.proj.transform([n[2], n[3]], "EPSG:3857", "EPSG:4326");
            querycoordinateconditions = "&minx=" + a[0] + "&maxx=" + i[0] + "&miny=" + a[1] + "&maxy=" + i[1];
            g = "&roadids=" + t + querycoordinateconditions;
            console.log(g);
            if (m == d["drawpath"]) {
              v = serverip + ":3500/gettabledataswithroadnos?tablename=";
              var s = "路径";
              s = s + "周边保障资源情况一览";
              layer.open({
                type: 2,
                area: ["1024px", "600px"],
                title: s,
                shadeClose: true,
                content: "./popup/indextablesupport.html"
              })
            } else if (m == d["drawpathminmax"]) {
              v = serverip + ":3500/getbridgedataswithregion?tablename=";
              g += "&needdetail=0";
              var s = "路径";
              s = s + "通过能力分析";
              layer.open({
                type: 2,
                area: ["600px", "500px"],
                title: s,
                shadeClose: true,
                content: "./popup/propertymin_max2.html"
              })
            }
          });
          fe.on("drawstart", function (e) {
            console.log("begin draw path :)");
            Q.clear();
            g = "";
            v = ""
          })
        }

        function ve(e) {
          var o;
          if (e != "LineString" && e != "Polygon") return;
          o = e;
          console.log(o);
          if (r) c.removeInteraction(r);
          r = new ol.interaction.Draw({
            source: D,
            type: o,
            style: new ol.style.Style({
              fill: new ol.style.Fill({color: "rgba(255,255,255,0.2)"}),
              stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: [10, 10], width: 2}),
              image: new ol.style.Circle({
                radius: 5,
                stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.7)"}),
                fill: new ol.style.Fill({color: "rgba(255,255,255,0.2)"})
              })
            })
          });
          c.addInteraction(r);
          ae();
          ne();
          var t;
          var n = 0;
          r.on("drawstart", function (e) {
            ye = e.feature;
            var r = e.coordinate;
            t = ye.getGeometry().on("change", function (e) {
              var o = e.target;
              var t;
              if (o instanceof ol.geom.Polygon) {
                c.removeEventListener("singleclick");
                c.removeEventListener("dblclick");
                t = Ge(o);
                r = o.getInteriorPoint().getCoordinates()
              } else if (o instanceof ol.geom.LineString) {
                t = je(o);
                r = o.getLastCoordinate()
              }
              he.innerHTML = t;
              xe.setPosition(r)
            });
            c.on("singleclick", function (e) {
              if (m == d["measuredistance"] || m == d["measurearea"]) {
                console.log("i am in draws single click");
                xe.setPosition(e.coordinate);
                if (n == 0) {
                  he.innerHTML = "起点"
                }
                var o = new ol.geom.Point(e.coordinate);
                D.addFeature(new ol.Feature(o));
                he.className = "tooltip tooltip-static";
                ae();
                n++
              }
            });
            c.on("dblclick", function (e) {
              if (m == d["measuredistance"] || m == d["measurearea"]) {
                var o = new ol.geom.Point(e.coordinate);
                D.addFeature(new ol.Feature(o))
              }
            })
          }, this);
          r.on("drawend", function (e) {
            n = 0;
            he.className = "tooltip tooltip-static";
            xe.setOffset([0, -7]);
            ye = null;
            he = null;
            ae();
            ol.Observable.unByKey(t);
            c.removeEventListener("singleclick")
          }, this)
        }

        var de = true;
        var me = new ol.Sphere(6378137);
        var ye = new ol.Feature;
        var pe;
        var we;
        var he;
        var xe;
        var Se = "请单击完待量测区域绘制";
        var Pe = "请单击完成线段绘制";
        var je = function (e) {
          var o;
          if (de) {
            var t = e.getCoordinates();
            o = 0;
            var r = c.getView().getProjection();
            for (var n = 0; n < t.length - 1; n++) {
              var a = ol.proj.transform(t[n], r, "EPSG:4326");
              var l = ol.proj.transform(t[n + 1], r, "EPSG:4326");
              o += me.haversineDistance(a, l)
            }
          } else {
            o = Math.round(e.getLength() * 100) / 100
          }
          var i;
          if (o > 1e3) {
            i = Math.round(o / 1e3 * 100) / 100 + " " + "km"
          } else {
            i = Math.round(o * 100) / 100 + " " + "m"
          }
          return i
        };
        var Ge = function (e) {
          var o;
          if (de) {
            var t = c.getView().getProjection();
            var r = e.clone().transform(t, "EPSG:4326");
            var n = r.getLinearRing(0).getCoordinates();
            o = Math.abs(me.geodesicArea(n))
          } else {
            o = e.getArea()
          }
          var a;
          if (o > 1e4) {
            a = Math.round(o / 1e6 * 100) / 100 + " " + "km<sup>2</sup>"
          } else {
            a = Math.round(o * 100) / 100 + " " + "m<sup>2</sup>"
          }
          return a
        };
        var be = function (e) {
          if (e.dragging) {
            return
          }
          var o = "Click to start drawing";
          if (ye) {
            var t = ye.getGeometry();
            if (t instanceof ol.geom.Polygon) {
              o = Se
            } else if (t instanceof ol.geom.LineString) {
              o = Pe
            }
          }
          pe.innerHTML = o;
          we.setPosition(e.coordinate);
          $(pe).removeClass("hidden")
        };
        this.insidePolygon = function (e, o) {
          var t = o[0], r = o[1];
          var n = false;
          for (var a = 0, l = e.length - 1; a < e.length; l = a++) {
            var i = e[a][0], s = e[a][1];
            var c = e[l][0], u = e[l][1];
            var f = s > r != u > r && t < (c - i) * (r - s) / (u - s) + i;
            if (f) n = !n
          }
          return n
        };
        this.pointInsideCircle = function (e, o, t) {
          if (t === 0) return false;
          var r = o[0] - e[0];
          var n = o[1] - e[1];
          return r * r + n * n <= t * t
        };
        var Ee = {};
        this.addresourcelayer = function (e) {
          if (Ee[e] != null) return;
          var o = y[e];
          console.log(e);
          console.log(o);
          var t = new ol.layer.Vector({
            source: new ol.source.Vector({
              url: serverip + ":3500/gettargets?tablename=" + o,
              format: new ol.format.GeoJSON,
              dataProjection: "EPSG:4326",
              featureProjection: "EPSG:3857"
            })
          });
          Ee[e] = t;
          c.addLayer(t)
        };
        var _e = {};
        _e["山东省县界"] = "shandong_xianjie.geojson";
        _e["山东省境内高速"] = "shandong_highway.geojson";
        _e["山东省境内国道"] = "shandong_guodao.geojson";
        _e["山东省省道"] = "shandong_shengdao.geojson";
        var Le = {};
        Le["山东省县界"] = 0;
        Le["山东省境内高速"] = 0;
        Le["山东省境内国道"] = 0;
        Le["山东省省道"] = 0;

        function Je(e) {
          return Le[e]
        }

        function Te(e) {
          if (Ee[e] != null) return;
          console.log(e);
          var o = "./geojson/" + _e[e];
          console.log(o);
          var t = new ol.layer.Vector({
            source: new ol.source.Vector({
              url: o,
              format: new ol.format.GeoJSON,
              dataProjection: "EPSG:4326",
              featureProjection: "EPSG:3857"
            })
          });
          Ee[e] = t;
          c.addLayer(t);
          Le[e] = 1
        }

        this.addbaselayerexx = function (e) {
          var o = new ol.layer.Vector({
            source: new ol.source.Vector({
              url: "http://127.0.0.1:3600/getfakegeojson",
              format: new ol.format.GeoJSON,
              dataProjection: "EPSG:4326",
              featureProjection: "EPSG:3857"
            }),
            style: new ol.style.Style({
              fill: new ol.style.Fill({color: "rgba(255,255,255,0.2)"}),
              stroke: new ol.style.Stroke({color: "rgba(255,0,0,0.8)", width: 2}),
              image: new ol.style.Circle({radius: 5, fill: new ol.style.Fill({color: "rgba(255,0,0,0.8)"})})
            })
          });
          Ee[e] = o;
          c.addLayer(o);
          Le[e] = 1
        };
        var Me = function (e) {
          var o = e.get("name");
          var t = e.get("imgUrl");
          var r = e.get("id");
          var n = new ol.style.Text;
          p[r] = e;
          if (o != "") {
            n = new ol.style.Text({
              text: o,
              offsetY: -15,
              offsetX: 9,
              font: "12px serif",
              textBaseline: "middle",
              stroke: new ol.style.Stroke({color: "#fff", width: 0}),
              fill: new ol.style.Fill({color: "#fff"})
            })
          }
          var a = 50;
          scale = a / 10;
          var l = null;
          if (!l) {
            l = new ol.style.Style({image: new ol.style.Icon({src: t}), text: n})
          }
          return l
        };
        this.removepoints = function (e, o) {
          var t = o.split(",");
          if (Ee[e] != null) {
            for (i = 0; i != t.length; ++i) {
              var r = t[i];
              Ee[e].getSource().removeFeature(p[r]);
              p[r] = null
            }
          }
        };

        function Fe(e) {
          var o = new ol.proj.Projection({code: "EPSG:4326"});
          var t = new ol.proj.Projection({code: "EPSG:3857"});
          e.getGeometry().transform(o, t)
        }

        function Ze(e, o) {
          var t = (new ol.format.GeoJSON).readFeatures(o, {featureProjection: "EPSG:4326"});
          t.forEach(Fe);
          var r = new ol.source.Vector({features: t});
          var n = new ol.layer.Vector({source: r, style: Me});
          Ee[e] = n;
          c.addLayer(n);
          n.setZIndex(98);
          Le[e] = 1
        }

        this.addrawjsonpoints = function (e, o) {
          Ze(e, o)
        };
        this.addpoints = function (e, o) {
          var t = new ol.layer.Vector({
            source: new ol.source.Vector({
              url: o,
              format: new ol.format.GeoJSON,
              dataProjection: "EPSG:4326",
              featureProjection: "EPSG:3857"
            }), style: Me
          });
          Ee[e] = t;
          c.addLayer(t);
          t.setZIndex(98);
          Le[e] = 1
        };
        this.removelayer = function (e) {
          if (Ee[e]) {
            c.removeLayer(Ee[e]);
            Ee[e] = null;
            Le[e] = 0
          }
        };
        this.addpieview = function () {
          var g = {};

          function o(e, o) {
            var t = $("#graph").val() + "-" + $("#color").val() + "-" + (o ? "1-" : "") + e.get("data");
            var r = g[t];
            if (!r) {
              var n = 15;
              n = 8 * Math.sqrt(e.get("sum") / Math.PI);
              var a = e.get("data");
              n *= o ? 1.2 : 1;
              r = [new ol.style.Style({
                image: new ol.style.Chart({
                  type: "pie",
                  radius: n,
                  data: a,
                  rotateWithView: true,
                  stroke: new ol.style.Stroke({color: "#fff", width: 2})
                })
              })];
              if (o) {
                var l = e.get("sum");
                var i = 0;
                for (var s = 0; s < a.length; s++) {
                  var c = a[s];
                  var u = (2 * i + c) / l * Math.PI - Math.PI / 2;
                  var f = Math.round(c / l * 1e3);
                  if (f > 0) {
                    r.push(new ol.style.Style({
                      text: new ol.style.Text({
                        text: f / 10 + "%",
                        offsetX: Math.cos(u) * (n + 3),
                        offsetY: Math.sin(u) * (n + 3),
                        textAlign: u < Math.PI / 2 ? "left" : "right",
                        textBaseline: "middle",
                        stroke: new ol.style.Stroke({color: "#fff", width: 2.5}),
                        fill: new ol.style.Fill({color: "#333"})
                      })
                    }))
                  }
                  i += c
                }
              }
            }
            g[t] = r;
            return r
          }

          var e = c.getView().calculateExtent(c.getSize());
          var t = [];
          for (var r = 0; r < 30; ++r) {
            var n, a = 0, l = [];
            for (var i = 0; i < 4; i++) {
              n = Math.round(8 * Math.random());
              l.push(n);
              a += n
            }
            t[r] = new ol.Feature({
              geometry: new ol.geom.Point([e[0] + (e[2] - e[0]) * Math.random(), e[1] + (e[3] - e[1]) * Math.random()]),
              data: l,
              sum: a
            })
          }
          var s = new ol.layer.Vector({
            name: "Vecteur",
            source: new ol.source.Vector({features: t}),
            renderOrder: ol.ordering.yOrdering(),
            style: function (e) {
              return o(e)
            }
          });
          c.addLayer(s);
          s.setZIndex(99)
        };
        var ke = {LAYERS: "navigate:navigate", FORMAT: "image/png"};
        var Ce = new ol.Feature;
        var Ve = new ol.Feature;
        var Ie = new ol.layer.Vector({source: new ol.source.Vector({features: [Ce, Ve]})});
        var Oe = new ol.layer.Vector({source: new ol.source.Vector({features: [Ce, Ve]})});

        function ze() {
          var o = [];
          c.getLayers().forEach(function (e) {
            if (e.get("type") == "base") {
              o.push(e)
            }
          });
          for (var e = 0; e < o.length; e++) {
            c.removeLayer(o[e])
          }
          o.splice(0, o.length)
        }

        this.switchlayer = function (e) {
          if (e == "local") {
            ze();
            c.addLayer(z);
            z.setZIndex(0)
          } else if (e == "lantiandituvector") {
            ze();
            c.addLayer(k);
            c.addLayer(C)
          } else if (e == "lantiandituraster") {
            ze();
            c.addLayer(V);
            c.addLayer(I)
          } else if (e == "localtianditu") {
            console.log("localtianditu");
            ze();
            c.addLayer(O);
            O.setZIndex(0)
          }
        };
        this.switchoperation = function (e) {
          if (e == "measurearea") {
            le();
            c.on("pointermove", be);
            ve("Polygon");
            m = d["measurearea"]
          } else if (e == "measuredistance") {
            le();
            c.on("pointermove", be);
            ve("LineString");
            m = d["measuredistance"]
          } else if (e == "singletargetselection") {
            le();
            m = d["singletargetselection"]
          } else if (e == "boxselection") {
            le();
            m = d["boxselection"];
            se()
          } else if (e == "circleselection") {
            le();
            m = d["circleselection"];
            ue()
          } else if (e == "regionselection") {
            m = d["regionselection"];
            u = "";
            f = ""
          } else if (e == "drawpath") {
            if (m != d["drawpath"]) {
              m = d["drawpath"];
              le();
              ge()
            }
          } else if (e == "drawpathminmax") {
            if (m != d["drawpathminmax"]) {
              m = d["drawpathminmax"];
              le();
              ge()
            }
          } else if (e == "noopeartion") {
            m = d["noopeartion"];
            le()
          } else if (e == "zoomin") {
            a.setZoom(a.getZoom() - 1)
          } else if (e == "zoomout") {
            a.setZoom(a.getZoom() + 1)
          } else if (e == "modifycoordinate") {
            m = d["modifycoordinate"]
          }
        }
      }

      var g_core = new globalviewercore();
      g_core.initmap(121.56301, 34.36754, 'map');
      g_core.switchlayer('lantiandituvector')
      g_core.switchoperation('singletargetselection');

      //offsetY 字体
      function DegreeConvert(value) {
        var du, fen, miao, ret;
        du = value.split("°")[0];
        value = value.split("°")[1]
        ret = Math.abs(du);
        if (value.indexOf("′") > 0) {
          fen = value.split("′")[0];
          value = value.split("′")[1];
          ret += Math.abs(fen) / 60;
        }
        if (value.indexOf('″') > 0) {
          miao = value.split('″')[0];
          value = value.split('″')[1];
          ret += Math.abs(miao) / 3600;
        }
        if (value == 'W' || value == 'S')
          ret = -ret;
        return ret;
      }


      var arr = [
        {'name': '2', 'id': '中国极地研究中心', 'lat': '121°34\′27.11″', 'lng': '31°15\′54.62″', 'type': 'planesituation'},
        {'name': '9', 'id': '国家海洋局东海分局', 'lat': '121°33\′59.20″', 'lng': '31°19\′15.14″', 'type': 'planesituation'},
        {'name': '9', 'id': '国家海洋局南海分局', 'lat': '113°18\′1.25″', 'lng': '23°05\′47.92″', 'type': 'planesituation'},
        {'name': '1', 'id': '国家深海基地管理中心', 'lat': '120°40\′2.95″', 'lng': '36°22\′1.94″', 'type': 'submersible'},
        {
          'name': '3',
          'id': '中国大洋矿产资源研究开发协会办公室',
          'lat': '116°21\′18.61″',
          'lng': '39°54\′30.99″',
          'type': 'shipsituation'
        },
        {'name': '6', 'id': '中国极地研究中心', 'lat': '121°34\′27.11″', 'lng': '31°15\′54.62″', 'type': 'shipsituation'},
        {'name': '23', 'id': '中国海监第一支队', 'lat': '120°20\′24.62″', 'lng': '36°04\′34.24″', 'type': 'shipsituation'},
        {'name': '13', 'id': '中国海监第七支队', 'lat': '113°22\′41.99″', 'lng': '23°04\′38.65″', 'type': 'shipsituation'},
        {'name': '4', 'id': '中国海监第三支队', 'lat': '121°40\′58.58″', 'lng': '39°0\′49.42″', 'type': 'shipsituation'},
        {'name': '4', 'id': '中国海监第九支队', 'lat': '109°07\′15.82″', 'lng': '21°27\′30.27″', 'type': 'shipsituation'},
        {'name': '4', 'id': '中国海监第二支队', 'lat': '117°44\′4.42″', 'lng': '39°05\′20.27″', 'type': 'shipsituation'},
        {'name': '14', 'id': '中国海监第五支队', 'lat': '121°33\′59.58″', 'lng': '31°19\′19.25″', 'type': 'shipsituation'},
        {'name': '19', 'id': '中国海监第八支队', 'lat': '113°26\′16.19″', 'lng': '23°04\′38.49″', 'type': 'shipsituation'},
        {'name': '9', 'id': '中国海监第六支队', 'lat': '118°04\′36.44″', 'lng': '24°28\′48.46″', 'type': 'shipsituation'},
        {'name': '4', 'id': '中国海监第十支队', 'lat': '110°17\′53.88″', 'lng': '20°01\′17.42″', 'type': 'shipsituation'},
        {'name': '14', 'id': '中国海监第四支队', 'lat': '121°37\′3.43″', 'lng': '29°54\′40.89″', 'type': 'shipsituation'},
        {'name': '1', 'id': '国家海洋局北海分局', 'lat': '120°28\′32.54″', 'lng': '36°06\′28.64″', 'type': 'shipsituation'},
        {
          'name': '2',
          'id': '国家海洋局北海海洋工程勘察研究院',
          'lat': '120°28\′32.54″',
          'lng': '36°06\′28.64″',
          'type': 'shipsituation'
        },
        {'name': '1', 'id': '国家海洋局北海环境监测中心', 'lat': '120°22\′5.29″', 'lng': '36°06\′9.18″', 'type': 'shipsituation'},
        {'name': '4', 'id': '国家海洋局第一海洋研究所', 'lat': '120°27\′34.66″', 'lng': '36°06\′16.32″', 'type': 'shipsituation'},
        {'name': '1', 'id': '国家海洋局第三海洋研究所', 'lat': '118°05\′39.19″', 'lng': '24°26\′14.00″', 'type': 'shipsituation'},
        {'name': '1', 'id': '国家海洋环境监测中心', 'lat': '121°32\′29.57″', 'lng': '38°52\′16.86″', 'type': 'shipsituation'},
        {'name': '1', 'id': '国家深海基地管理中心', 'lat': '120°40\′2.95″', 'lng': '36°22\′1.94″', 'type': 'shipsituation'},
        {'name': '3', 'id': '国家卫星海洋应用中心', 'lat': '116°19\′41.04″', 'lng': '39°57\′17.66″', 'type': 'atellite'}
      ]

      function sendJson(arr) {
        var iconType = {}
        iconType.type = "FeatureCollection";
        iconType.features = [];
        arr.forEach(function (item, index) {
          //飞机
          if (item.type == "planesituation") {
            item.imgUrlPath = configip + '/static/showIcon/04.png'
          }
          //船舶
          if (item.type == "shipsituation") {
            item.imgUrlPath = configip + '/static/showIcon/03.png'
          }
          //潜标
          if (item.type == "subsurfacebuoyinfo") {
            item.imgUrlPath = configip + '/static/showIcon/haixiao.png'
          }
          //潜器
          if (item.type == "submersible") {
            item.imgUrlPath = configip + '/static/showIcon/02.png'
          }
          //卫星
          if (item.type == "atellite") {
            item.imgUrlPath = configip + '/static/showIcon/05.png'
          }
          var coorArr = []
          coorArr.push(DegreeConvert(item.lat))
          coorArr.push(DegreeConvert(item.lng))
          iconType.features.push({
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": coorArr
            },
            "properties": {
              "name": item.name,
              "imgUrl": item.imgUrlPath,
              "id": item.id,
              "type": item.type,
            }
          })
        })
        return iconType
      }

      var arr_planesituation = [], arr_shipsituation = [], arr_submersible = [], arr_xbandradarinfo = [],
        arr_subsurfacebuoyinfo = [], arr_atellite = [];
      arr.forEach(function (item, index) {
        if (item.type == 'planesituation') { //飞机
          arr_planesituation.push(item)
        }
        if (item.type == 'shipsituation') { //船舶
          arr_shipsituation.push(item)
        }
        if (item.type == 'submersible') { //潜器
          arr_submersible.push(item)
        }
        if (item.type == 'xbandradarinfo') { //雷达
          arr_xbandradarinfo.push(item)
        }
        if (item.type == 'subsurfacebuoyinfo') { //潜标
          arr_subsurfacebuoyinfo.push(item)
        }
        if (item.type == 'atellite') { //卫星
          arr_atellite.push(item)
        }
      })
      g_core.addrawjsonpoints('gro_planesituation', sendJson(arr_planesituation));//飞机
      g_core.addrawjsonpoints('gro_shipsituation', sendJson(arr_shipsituation));//船舶
      g_core.addrawjsonpoints('gro_submersible', sendJson(arr_submersible));//潜器
      g_core.addrawjsonpoints('gro_xbandradarinfo', sendJson(arr_xbandradarinfo));//雷达
      g_core.addrawjsonpoints('gro_subsurfacebuoyinfo', sendJson(arr_subsurfacebuoyinfo));//潜标
      g_core.addrawjsonpoints('gro_atellite', sendJson(arr_atellite));//卫星


      var a = true;
      var b = true;
      var c = true;
      var d = true;
      var e = true;
      var f = true;
      var bgc = '#5A5A5A';
      //点击显示与隐藏
      $('.info_l_list>ul>li').on('click', function () {
        $('.pointMessage').hide(200)

        if ($(this).text() == "飞机") {
          if (a) {
            g_core.removelayer('gro_planesituation');
            a = false;
            $(this).css('background', bgc)
          } else {
            g_core.addrawjsonpoints('gro_planesituation', sendJson(arr_planesituation));//飞机
            a = true;
            $(this).css('background', '')
          }
        }
        if ($(this).text() == "船舶") {
          if (b) {
            g_core.removelayer('gro_shipsituation');
            b = false;
            $(this).css('background', bgc)
          } else {
            g_core.addrawjsonpoints('gro_shipsituation', sendJson(arr_shipsituation));//浮标
            b = true;
            $(this).css('background', '')
          }
        }
        if ($(this).text() == "潜器") {
          if (c) {
            g_core.removelayer('gro_submersible');
            c = false;
            $(this).css('background', bgc)
          } else {
            g_core.addrawjsonpoints('gro_submersible', sendJson(arr_submersible));//潜标
            c = true;
            $(this).css('background', '')
          }
        }
        if ($(this).text() == "雷达") {
          if (d) {
            g_core.removelayer('gro_xbandradarinfo');
            d = false;
            $(this).css('background', bgc)
          } else {
            g_core.addrawjsonpoints('gro_xbandradarinfo', sendJson(arr_xbandradarinfo));//雷达
            d = true;
            $(this).css('background', '')
          }
        }
        if ($(this).text() == "潜标") {
          if (e) {
            g_core.removelayer('gro_subsurfacebuoyinfo');
            e = false;
            $(this).css('background', bgc)
          } else {
            g_core.addrawjsonpoints('gro_subsurfacebuoyinfo', sendJson(arr_subsurfacebuoyinfo));//潜标
            e = true;
            $(this).css('background', '')
          }
        }
        if ($(this).text() == "卫星") {
          if (f) {
            g_core.removelayer('gro_atellite');
            f = false;
            $(this).css('background', bgc)
          } else {
            g_core.addrawjsonpoints('gro_atellite', sendJson(arr_atellite));//卫星
            f = true;
            $(this).css('background', '')
          }
        }

      })

      var arr_plane = [
        {
          'id': '中国极地研究中心',
          'name': '雪鹰12（B-7817）',
          'planemodel': '直升机',
          'propertyunit': '中国极地研究中心',
          'useunit': '中国极地研究中心',
          'regmoney': '9410.73万元'
        },
        {
          'id': '中国极地研究中心',
          'name': '雪鹰601 C-FGCX',
          'planemodel': '固定翼飞机',
          'propertyunit': '中国极地研究中心',
          'useunit': '中国极地研究中心',
          'regmoney': '1012.13 万美元'
        },
        {
          'id': '国家海洋局东海分局',
          'name': '暂无',
          'planemodel': '直升机',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '国家海洋局东海分局',
          'regmoney': '0'
        },
        {
          'id': '国家海洋局东海分局',
          'name': 'B-50AS',
          'planemodel': '固定翼',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '国家海洋局东海分局',
          'regmoney': '0'
        },
        {
          'id': '国家海洋局东海分局',
          'name': 'B-3837',
          'planemodel': '固定翼',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '国家海洋局东海分局',
          'regmoney': '3440.78万元'
        },
        {
          'id': '国家海洋局东海分局',
          'name': 'B-70HT',
          'planemodel': '直升机',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '国家海洋局东海分局',
          'regmoney': '0'
        },
        {
          'id': '国家海洋局东海分局',
          'name': 'B-70HR',
          'planemodel': '直升机',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '国家海洋局东海分局',
          'regmoney': '0'
        },
        {
          'id': '国家海洋局东海分局',
          'name': 'B-70HQ',
          'planemodel': '直升机',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '国家海洋局东海分局',
          'regmoney': '0'
        },
        {
          'id': '国家海洋局东海分局',
          'name': 'B-70HP',
          'planemodel': '直升机',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '国家海洋局东海分局',
          'regmoney': '0'
        },
        {
          'id': '国家海洋局东海分局',
          'name': 'B-70HG',
          'planemodel': '直升机',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '国家海洋局东海分局',
          'regmoney': '0'
        },
        {
          'id': '国家海洋局东海分局',
          'name': 'B-70HF',
          'planemodel': '直升机',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '国家海洋局东海分局',
          'regmoney': '0'
        },
        {
          'id': '国家海洋局南海分局',
          'name': '中国海监B-70LQ',
          'planemodel': '固定翼',
          'propertyunit': '中国海监总队',
          'useunit': '国家海洋局南海分局',
          'regmoney': '0'
        },
        {
          'id': '国家海洋局南海分局',
          'name': '中国海监B-3845',
          'planemodel': '固定翼',
          'propertyunit': '中国海监总队',
          'useunit': '国家海洋局南海分局',
          'regmoney': '2189万元'
        },
        {
          'id': '国家海洋局南海分局',
          'name': '中国海监B-7072',
          'planemodel': '直升机',
          'propertyunit': '中国海监总队',
          'useunit': '国家海洋局南海分局',
          'regmoney': '1199.9万元'
        },
        {
          'id': '国家海洋局南海分局',
          'name': '中国海监B-7112',
          'planemodel': '直升机',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '国家海洋局南海分局',
          'regmoney': '4465.15万元'
        },
        {
          'id': '国家海洋局南海分局',
          'name': '中国海监B-5002',
          'planemodel': '固定翼',
          'propertyunit': '中国海监总队',
          'useunit': '国家海洋局南海分局',
          'regmoney': '0'
        },
        {
          'id': '国家海洋局南海分局',
          'name': '中国海监B-70HH',
          'planemodel': '直升机',
          'propertyunit': '中国海监总队',
          'useunit': '国家海洋局南海分局',
          'regmoney': '0'
        },
        {
          'id': '国家海洋局南海分局',
          'name': '中国海监B-70HV',
          'planemodel': '直升机',
          'propertyunit': '中国海监总队',
          'useunit': '国家海洋局南海分局',
          'regmoney': '0'
        },
        {
          'id': '国家海洋局南海分局',
          'name': '中国海监B-70HS',
          'planemodel': '直升机',
          'propertyunit': '中国海监总队',
          'useunit': '国家海洋局南海分局',
          'regmoney': '0'
        },
        {
          'id': '国家海洋局南海分局',
          'name': '中国海监B-70HJ',
          'planemodel': '直升机',
          'propertyunit': '中国海监总队',
          'useunit': '国家海洋局南海分局',
          'regmoney': '0'
        }
      ]
      //大型装备GIS点击 船舶 提示弹出信息：舷号(hullnumber)、产权单位(propertyunit)、使用单位(useunit)、资产登记价值(regmoney)、船籍港(shipport)
      var arr_ship = [
        {
          'id': '中国海监第一支队',
          'hullnumber': '向阳红09',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第一支队',
          'regmoney': '1651',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1305',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第一支队',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1306',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第一支队',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1307',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第一支队',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1401',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第一支队',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1501',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第一支队',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1122',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第一支队',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1111',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第一支队',
          'regmoney': '260',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1117',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第一支队',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1118',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第一支队',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1127',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第一支队',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1021',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第一支队',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1016',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第一支队',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1031',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第一支队',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1037',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第一支队',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1038',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第一支队',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1010 ',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第一支队',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '国家海洋局北海分局',
          'hullnumber': '向阳红06',
          'propertyunit': '青岛环海海洋工程勘察研究院',
          'useunit': '国家海洋局北海分局',
          'regmoney': '560',
          'shipport': '青岛'
        },
        {
          'id': '国家海洋局北海海洋工程勘察研究院',
          'hullnumber': '向阳红07',
          'propertyunit': '青岛环海海洋工程勘察研究院',
          'useunit': '国家海洋局北海海洋工程勘察研究院',
          'regmoney': '455.769684',
          'shipport': '青岛'
        },
        {
          'id': '国家海洋局北海海洋工程勘察研究院',
          'hullnumber': '向阳红08',
          'propertyunit': '青岛环海海洋工程勘察研究院',
          'useunit': '国家海洋局北海海洋工程勘察研究院',
          'regmoney': '1344',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第二支队',
          'hullnumber': '中国海警1029',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第二支队',
          'regmoney': '80',
          'shipport': '天津'
        },
        {
          'id': '中国海监第二支队',
          'hullnumber': '中国海警1024',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第二支队',
          'regmoney': '800',
          'shipport': '天津'
        },
        {
          'id': '中国海监第二支队',
          'hullnumber': '中国海警1025',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第二支队',
          'regmoney': '800',
          'shipport': '天津'
        },
        {
          'id': '中国海监第二支队',
          'hullnumber': '中国海警1039',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第二支队',
          'regmoney': '800',
          'shipport': '天津'
        },
        {
          'id': '国家海洋局北海环境监测中心',
          'hullnumber': '中国海监106',
          'propertyunit': '国家海洋局北海环境监测中心',
          'useunit': '国家海洋局北海环境监测中心',
          'regmoney': '941',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第三支队',
          'hullnumber': '中国海警1030',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第三支队',
          'regmoney': '',
          'shipport': '大连'
        },
        {
          'id': '中国海监第三支队',
          'hullnumber': '中国海警1033',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第三支队',
          'regmoney': '',
          'shipport': '大连'
        },
        {
          'id': '中国海监第三支队',
          'hullnumber': '中国海警1034',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第三支队',
          'regmoney': '',
          'shipport': '大连'
        },
        {
          'id': '中国海监第三支队',
          'hullnumber': '中国海警1035',
          'propertyunit': '国家海洋局北海分局',
          'useunit': '中国海监第三支队',
          'regmoney': '',
          'shipport': '大连'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1115',
          'propertyunit': '中国海监第一支队',
          'useunit': '中国海监第一支队',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1123',
          'propertyunit': '中国海监第一支队',
          'useunit': '中国海监第一支队',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1126',
          'propertyunit': '中国海监第一支队',
          'useunit': '中国海监第一支队',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1212',
          'propertyunit': '中国海监第一支队',
          'useunit': '中国海监第一支队',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1310',
          'propertyunit': '中国海监第一支队',
          'useunit': '中国海监第一支队',
          'regmoney': '1075',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第一支队',
          'hullnumber': '中国海警1411',
          'propertyunit': '中国海监第一支队',
          'useunit': '中国海监第一支队',
          'regmoney': '1465',
          'shipport': '青岛'
        },
        {
          'id': '中国海监第八支队',
          'hullnumber': '162舰',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第八支队',
          'regmoney': '',
          'shipport': ''
        },
        {
          'id': '中国海监第八支队',
          'hullnumber': '海测3301',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第八支队',
          'regmoney': '16046.620753',
          'shipport': '广州'
        },
        {
          'id': '中国海监第八支队',
          'hullnumber': '向阳红5号',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第八支队',
          'regmoney': '726.4525',
          'shipport': '广州'
        },
        {
          'id': '中国海监第八支队',
          'hullnumber': '向阳红14',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第八支队',
          'regmoney': '1463.0916',
          'shipport': '广州'
        },
        {
          'id': '中国海监第十支队',
          'hullnumber': '中国海警3001',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第十支队',
          'regmoney': '798.6',
          'shipport': '深圳'
        },
        {
          'id': '中国海监第十支队',
          'hullnumber': '中国海警3002',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第十支队',
          'regmoney': '798.6',
          'shipport': '深圳'
        },
        {
          'id': '中国海监第十支队',
          'hullnumber': '中国海警3003',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第十支队',
          'regmoney': '798.6',
          'shipport': '深圳'
        },
        {
          'id': '中国海监第十支队',
          'hullnumber': '中国海警3004',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第十支队',
          'regmoney': '798.6',
          'shipport': '深圳'
        },
        {
          'id': '中国海监第七支队',
          'hullnumber': '中国海警3076',
          'propertyunit': '中国海监第七支队',
          'useunit': '中国海监第七支队',
          'regmoney': '798.6',
          'shipport': '广州'
        },
        {
          'id': '中国海监第七支队',
          'hullnumber': '中国海警3077',
          'propertyunit': '中国海监第七支队',
          'useunit': '中国海监第七支队',
          'regmoney': '798.6',
          'shipport': '广州'
        },
        {
          'id': '中国海监第七支队',
          'hullnumber': '中国海警3078',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第七支队',
          'regmoney': '798.686',
          'shipport': '广州'
        },
        {
          'id': '中国海监第七支队',
          'hullnumber': '中国海警3079',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第七支队',
          'regmoney': '87.8',
          'shipport': '广州'
        },
        {
          'id': '中国海监第八支队',
          'hullnumber': '中国海警3080',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第八支队',
          'regmoney': '726.4525',
          'shipport': '广州'
        },
        {
          'id': '中国海监第八支队',
          'hullnumber': '中国海警3082',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第八支队',
          'regmoney': '118.8259',
          'shipport': '广州'
        },
        {
          'id': '中国海监第八支队',
          'hullnumber': '中国海警3086',
          'propertyunit': '中国海监第八支队',
          'useunit': '中国海监第八支队',
          'regmoney': '798.6',
          'shipport': '广州'
        },
        {
          'id': '中国海监第八支队',
          'hullnumber': '中国海警3087',
          'propertyunit': '中国海监第八支队',
          'useunit': '中国海监第八支队',
          'regmoney': '798.6',
          'shipport': '广州'
        },
        {
          'id': '中国海监第八支队',
          'hullnumber': '中国海警3088',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第八支队',
          'regmoney': '798.6',
          'shipport': '广州'
        },
        {
          'id': '中国海监第八支队',
          'hullnumber': '中国海警3089',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第八支队',
          'regmoney': '87.8',
          'shipport': '广州'
        },
        {
          'id': '中国海监第九支队',
          'hullnumber': '中国海警3091',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第九支队',
          'regmoney': '796.686',
          'shipport': '广州'
        },
        {
          'id': '中国海监第九支队',
          'hullnumber': '中国海警3092',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第九支队',
          'regmoney': '76.8',
          'shipport': '北海'
        },
        {
          'id': '中国海监第九支队',
          'hullnumber': '中国海警3093',
          'propertyunit': '中国海监第九支队',
          'useunit': '中国海监第九支队',
          'regmoney': '798.6',
          'shipport': '北海'
        },
        {
          'id': '中国海监第九支队',
          'hullnumber': '中国海警3094',
          'propertyunit': '中国海监第九支队',
          'useunit': '中国海监第九支队',
          'regmoney': '798.6',
          'shipport': '北海'
        },
        {
          'id': '中国海监第七支队',
          'hullnumber': '中国海警3171',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第七支队',
          'regmoney': '4488.685324',
          'shipport': '广州'
        },
        {
          'id': '中国海监第七支队',
          'hullnumber': '中国海警3172',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第七支队',
          'regmoney': '800.3',
          'shipport': '广州'
        },
        {
          'id': '中国海监第七支队',
          'hullnumber': '中国海警3173',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第七支队',
          'regmoney': '571.8595',
          'shipport': '广州'
        },
        {
          'id': '中国海监第七支队',
          'hullnumber': '中国海警3174',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第七支队',
          'regmoney': '1850',
          'shipport': '广州'
        },
        {
          'id': '中国海监第七支队',
          'hullnumber': '中国海警3175',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第七支队',
          'regmoney': '11115.88',
          'shipport': '广州'
        },
        {
          'id': '中国海监第八支队',
          'hullnumber': '中国海警3184',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第八支队',
          'regmoney': '13086.19',
          'shipport': '广州'
        },
        {
          'id': '中国海监第七支队',
          'hullnumber': '中国海警3306',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第七支队',
          'regmoney': '27517.15',
          'shipport': '广州'
        },
        {
          'id': '中国海监第七支队',
          'hullnumber': '中国海警3307',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第七支队',
          'regmoney': '27430.15',
          'shipport': '广州'
        },
        {
          'id': '中国海监第八支队',
          'hullnumber': '中国海警3308',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第八支队',
          'regmoney': '27554.15',
          'shipport': '广州'
        },
        {
          'id': '中国海监第八支队',
          'hullnumber': '中国海警3367',
          'propertyunit': '中国海监第八支队',
          'useunit': '中国海监第八支队',
          'regmoney': '1075',
          'shipport': '广州'
        },
        {
          'id': '中国海监第八支队',
          'hullnumber': '中国海警3368',
          'propertyunit': '中国海监第八支队',
          'useunit': '中国海监第八支队',
          'regmoney': '1150',
          'shipport': '广州'
        },
        {
          'id': '中国海监第八支队',
          'hullnumber': '中国海警3401',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第八支队',
          'regmoney': '24436.99',
          'shipport': '广州'
        },
        {
          'id': '中国海监第八支队',
          'hullnumber': '中国海警3402',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第八支队',
          'regmoney': '24073.49',
          'shipport': '广州'
        },
        {
          'id': '中国海监第八支队',
          'hullnumber': '中国海警3469',
          'propertyunit': '中国海监第八支队',
          'useunit': '中国海监第八支队',
          'regmoney': '2150',
          'shipport': '广州'
        },
        {
          'id': '中国海监第七支队',
          'hullnumber': '中国海警3501',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第七支队',
          'regmoney': '29569.17',
          'shipport': '广州'
        },
        {
          'id': '中国海监第八支队',
          'hullnumber': '中国海警3901',
          'propertyunit': '国家海洋局南海分局',
          'useunit': '中国海监第八支队',
          'regmoney': '59000',
          'shipport': '广州'
        },
        {
          'id': '国家海洋局第三海洋研究所',
          'hullnumber': '向阳红03',
          'propertyunit': '国家海洋局第三海洋研究所',
          'useunit': '国家海洋局第三海洋研究所',
          'regmoney': '56916',
          'shipport': '厦门港'
        },
        {
          'id': '中国大洋矿产资源研究开发协会办公室',
          'hullnumber': '大洋一号',
          'propertyunit': '中国大洋矿产资源研究开发协会办公室',
          'useunit': '中国大洋矿产资源研究开发协会办公室',
          'regmoney': '6814',
          'shipport': '青岛'
        },
        {
          'id': '中国大洋矿产资源研究开发协会办公室',
          'hullnumber': '载人潜水器支持母船',
          'propertyunit': '中国大洋矿产资源研究开发协会办公室',
          'useunit': '中国大洋矿产资源研究开发协会办公室',
          'regmoney': '',
          'shipport': ''
        },
        {
          'id': '中国大洋矿产资源研究开发协会办公室',
          'hullnumber': '大洋综合资源调查船',
          'propertyunit': '中国大洋矿产资源研究开发协会办公室',
          'useunit': '中国大洋矿产资源研究开发协会办公室',
          'regmoney': '',
          'shipport': ''
        },
        {
          'id': '国家海洋局第一海洋研究所',
          'hullnumber': '向阳红01',
          'propertyunit': '国家海洋局第一海洋研究所',
          'useunit': '国家海洋局第一海洋研究所',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '国家海洋局第一海洋研究所',
          'hullnumber': '向阳红18',
          'propertyunit': '青岛市海洋与渔业局及国家海洋局第一海洋研究所',
          'useunit': '国家海洋局第一海洋研究所',
          'regmoney': '',
          'shipport': '青岛'
        },
        {
          'id': '国家海洋局第一海洋研究所',
          'hullnumber': '近海科考01',
          'propertyunit': '国家海洋局第一海洋研究所',
          'useunit': '国家海洋局第一海洋研究所',
          'regmoney': '183.3',
          'shipport': '青岛'
        },
        {
          'id': '国家海洋局第一海洋研究所',
          'hullnumber': '无',
          'propertyunit': '国家海洋局第一海洋研究所',
          'useunit': '国家海洋局第一海洋研究所',
          'regmoney': '59.21',
          'shipport': '青山湾训练基地'
        },
        {
          'id': '国家海洋环境监测中心',
          'hullnumber': '中国海监108',
          'propertyunit': '国家海洋环境监测中心',
          'useunit': '国家海洋环境监测中心',
          'regmoney': '3250',
          'shipport': '大连'
        },
        {
          'id': '中国极地研究中心',
          'hullnumber': '雪龙',
          'propertyunit': '中国极地研究中心',
          'useunit': '中国极地研究中心',
          'regmoney': '4847.14',
          'shipport': '上海'
        },
        {
          'id': '中国极地研究中心',
          'hullnumber': '新建极地科学考察破冰船',
          'propertyunit': '中国极地研究中心（国家发展改革委于2015年批复极地科学考察破冰船项目初步设计方案和投资概算）',
          'useunit': '中国极地研究中心',
          'regmoney': '',
          'shipport': '上海'
        },
        {
          'id': '中国极地研究中心',
          'hullnumber': '雪燕01',
          'propertyunit': '中国极地研究中心',
          'useunit': '中国极地研究中心',
          'regmoney': '978.71',
          'shipport': '上海'
        },
        {
          'id': '中国极地研究中心',
          'hullnumber': '雪燕02',
          'propertyunit': '中国极地研究中心',
          'useunit': '中国极地研究中心',
          'regmoney': '384.73',
          'shipport': '无'
        },
        {
          'id': '中国极地研究中心',
          'hullnumber': '黄河',
          'propertyunit': '中国极地研究中心',
          'useunit': '中国极地研究中心',
          'regmoney': '248.63',
          'shipport': '无'
        },
        {
          'id': '中国极地研究中心',
          'hullnumber': '中山',
          'propertyunit': '中国极地研究中心',
          'useunit': '中国极地研究中心',
          'regmoney': '320.51',
          'shipport': '上海'
        },
        {
          'id': '中国海监第四支队',
          'hullnumber': '中国海警2901',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第四支队',
          'regmoney': '54911',
          'shipport': '宁波'
        },
        {
          'id': '中国海监第四支队',
          'hullnumber': '中国海警2501',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第四支队',
          'regmoney': '28071',
          'shipport': '宁波'
        },
        {
          'id': '中国海监第四支队',
          'hullnumber': '中国海警2305',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第四支队',
          'regmoney': '26436.8',
          'shipport': '宁波'
        },
        {
          'id': '中国海监第四支队',
          'hullnumber': '中国海警2337',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第四支队',
          'regmoney': '',
          'shipport': '宁波'
        },
        {
          'id': '中国海监第六支队',
          'hullnumber': '中国海警2306',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第六支队',
          'regmoney': '26436.8',
          'shipport': '厦门'
        },
        {
          'id': '中国海监第五支队',
          'hullnumber': '中国海警2307',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第五支队',
          'regmoney': '26436.8',
          'shipport': '上海'
        },
        {
          'id': '中国海监第五支队',
          'hullnumber': '中国海警2308',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第五支队',
          'regmoney': '26436.8',
          'shipport': '上海'
        },
        {
          'id': '中国海监第五支队',
          'hullnumber': '中国海警2401',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第五支队',
          'regmoney': '23374',
          'shipport': '上海'
        },
        {
          'id': '中国海监第四支队',
          'hullnumber': '中国海监41',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第四支队',
          'regmoney': '97.02',
          'shipport': '宁波'
        },
        {
          'id': '中国海监第四支队',
          'hullnumber': '中国海警2146',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第四支队',
          'regmoney': '4488.685324',
          'shipport': '宁波'
        },
        {
          'id': '中国海监第四支队',
          'hullnumber': '中国海警2147',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第四支队',
          'regmoney': '282.95',
          'shipport': '宁波'
        },
        {
          'id': '中国海监第四支队',
          'hullnumber': '中国海警2149',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第四支队',
          'regmoney': '1898',
          'shipport': '宁波'
        },
        {
          'id': '中国海监第五支队',
          'hullnumber': '向阳红19',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第五支队',
          'regmoney': '',
          'shipport': '上海'
        },
        {
          'id': '中国海监第五支队',
          'hullnumber': '向阳红20',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第五支队',
          'regmoney': '1176.43',
          'shipport': '上海'
        },
        {
          'id': '中国海监第五支队',
          'hullnumber': '向阳红28',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第五支队',
          'regmoney': '2893.9072',
          'shipport': '上海'
        },
        {
          'id': '中国海监第五支队',
          'hullnumber': '中国海警2151',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第五支队',
          'regmoney': '6692.5795',
          'shipport': '上海'
        },
        {
          'id': '中国海监第五支队',
          'hullnumber': '中国海警2153',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第五支队',
          'regmoney': '6692.5795',
          'shipport': '上海'
        },
        {
          'id': '中国海监第六支队',
          'hullnumber': '中国海警2166',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第六支队',
          'regmoney': '',
          'shipport': '厦门'
        },
        {
          'id': '中国海监第四支队',
          'hullnumber': '中国海警2042',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第四支队',
          'regmoney': '',
          'shipport': '宁波'
        },
        {
          'id': '中国海监第四支队',
          'hullnumber': '中国海监43',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第四支队',
          'regmoney': '',
          'shipport': '宁波'
        },
        {
          'id': '中国海监第四支队',
          'hullnumber': '中国海监45',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第四支队',
          'regmoney': '',
          'shipport': '宁波'
        },
        {
          'id': '中国海监第四支队',
          'hullnumber': '中国海监48',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第四支队',
          'regmoney': '87.8',
          'shipport': '宁波'
        },
        {
          'id': '中国海监第五支队',
          'hullnumber': '中国海警2054',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第五支队',
          'regmoney': '',
          'shipport': '上海'
        },
        {
          'id': '中国海监第五支队',
          'hullnumber': '中国海监55',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第五支队',
          'regmoney': '757.3',
          'shipport': '上海'
        },
        {
          'id': '中国海监第五支队',
          'hullnumber': '中国海警2056',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第五支队',
          'regmoney': '',
          'shipport': '上海'
        },
        {
          'id': '中国海监第五支队',
          'hullnumber': '中国海警2057',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第五支队',
          'regmoney': '',
          'shipport': '上海'
        },
        {
          'id': '中国海监第六支队',
          'hullnumber': '中国海警2064',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第六支队',
          'regmoney': '',
          'shipport': '厦门'
        },
        {
          'id': '中国海监第六支队',
          'hullnumber': '中国海警2065',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第六支队',
          'regmoney': '',
          'shipport': '厦门'
        },
        {
          'id': '中国海监第五支队',
          'hullnumber': '中国海警2067',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第五支队',
          'regmoney': '',
          'shipport': '厦门'
        },
        {
          'id': '中国海监第六支队',
          'hullnumber': '中国海警2068',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第六支队',
          'regmoney': '10',
          'shipport': '厦门'
        },
        {
          'id': '中国海监第六支队',
          'hullnumber': '中国海警2061',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第六支队',
          'regmoney': '',
          'shipport': '厦门'
        },
        {
          'id': '中国海监第六支队',
          'hullnumber': '中国海警2063',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第六支队',
          'regmoney': '87.8',
          'shipport': '厦门'
        },
        {
          'id': '中国海监第六支队',
          'hullnumber': '中国海警2069',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第六支队',
          'regmoney': '10',
          'shipport': '厦门'
        },
        {
          'id': '中国海监第五支队',
          'hullnumber': '中国海监58',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第五支队',
          'regmoney': '87.8',
          'shipport': '上海'
        },
        {
          'id': '中国海监第六支队',
          'hullnumber': '中国海监62',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第六支队',
          'regmoney': '286.21',
          'shipport': '厦门'
        },
        {
          'id': '中国海监第四支队',
          'hullnumber': '中国海监44',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第四支队',
          'regmoney': '100',
          'shipport': '宁波'
        },
        {
          'id': '',
          'hullnumber': '中国海监59',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '',
          'regmoney': '90',
          'shipport': ''
        },
        {
          'id': '中国海监大连市支队',
          'hullnumber': '中国海监1012',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监大连市支队',
          'regmoney': '87.8',
          'shipport': ''
        },
        {
          'id': '中国海监东营市河口区大队',
          'hullnumber': '中国海监4023',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监东营市河口区大队',
          'regmoney': '35.25',
          'shipport': ''
        },
        {
          'id': '中国海监潍坊市寒亭区大队',
          'hullnumber': '中国海监4039',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监潍坊市寒亭区大队',
          'regmoney': '35.25',
          'shipport': ''
        },
        {
          'id': '中国海监莱州市大队',
          'hullnumber': '中国海监4053',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监莱州市大队',
          'regmoney': '35.25',
          'shipport': ''
        },
        {
          'id': '中国海监长岛县大队',
          'hullnumber': '中国海监4055',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监长岛县大队',
          'regmoney': '35.25',
          'shipport': ''
        },
        {
          'id': '江苏连云港',
          'hullnumber': '中国海监5006',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '江苏连云港',
          'regmoney': '76.8',
          'shipport': ''
        },
        {
          'id': '江苏南通支队',
          'hullnumber': '中国海监5005',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '江苏南通支队',
          'regmoney': '76.8',
          'shipport': ''
        },
        {
          'id': '中国海监盐城市支队',
          'hullnumber': '中国海监5007',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监盐城市支队',
          'regmoney': '76.8',
          'shipport': ''
        },
        {
          'id': '江苏赣榆县大队',
          'hullnumber': '中国海监5011',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '江苏赣榆县大队',
          'regmoney': '38.6',
          'shipport': ''
        },
        {
          'id': '江苏滨海县大队',
          'hullnumber': '中国海监5021',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '江苏滨海县大队',
          'regmoney': '38.6',
          'shipport': ''
        },
        {
          'id': '江苏响水县大队',
          'hullnumber': '中国海监5022',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '江苏响水县大队',
          'regmoney': '38.6',
          'shipport': ''
        },
        {
          'id': '江苏如东县大队',
          'hullnumber': '中国海监5031',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '江苏如东县大队',
          'regmoney': '38.6',
          'shipport': ''
        },
        {
          'id': '浙江舟山支队',
          'hullnumber': '中国海监7011',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '浙江舟山支队',
          'regmoney': '76.8',
          'shipport': ''
        },
        {
          'id': '浙江温州支队',
          'hullnumber': '中国海监7051',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '浙江温州支队',
          'regmoney': '76.8',
          'shipport': ''
        },
        {
          'id': '中国海监台州市支队',
          'hullnumber': '中国海监7031',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监台州市支队',
          'regmoney': '87.8',
          'shipport': ''
        },
        {
          'id': '中国海监南麂列岛支队',
          'hullnumber': '中国海监7071',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监南麂列岛支队',
          'regmoney': '87.8',
          'shipport': ''
        },
        {
          'id': '中国海监玉环县大队',
          'hullnumber': '中国海监7035',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监玉环县大队',
          'regmoney': '99.8',
          'shipport': ''
        },
        {
          'id': '中国海监三门县大队',
          'hullnumber': '中国海监7036',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监三门县大队',
          'regmoney': '99.8',
          'shipport': ''
        },
        {
          'id': '中国海监龙湾区大队',
          'hullnumber': '中国海监7052',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监龙湾区大队',
          'regmoney': '99.8',
          'shipport': ''
        },
        {
          'id': '中国海监平阳县大队',
          'hullnumber': '中国海监7053',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监平阳县大队',
          'regmoney': '99.8',
          'shipport': ''
        },
        {
          'id': '中国海监苍南县大队',
          'hullnumber': '中国海监7055',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监苍南县大队',
          'regmoney': '99.8',
          'shipport': ''
        },
        {
          'id': '上海市总队直属执法队',
          'hullnumber': '中国海监6001',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '上海市总队直属执法队',
          'regmoney': '38.6',
          'shipport': ''
        },
        {
          'id': '福建厦门支队',
          'hullnumber': '中国海监8023',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '福建厦门支队',
          'regmoney': '76.8',
          'shipport': ''
        },
        {
          'id': '福建泉州支队',
          'hullnumber': '中国海监8051',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '福建泉州支队',
          'regmoney': '76.8',
          'shipport': ''
        },
        {
          'id': '福建漳州支队',
          'hullnumber': '中国海监8061',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '福建漳州支队',
          'regmoney': '76.8',
          'shipport': ''
        },
        {
          'id': '中国海监福州市支队',
          'hullnumber': '中国海监8010',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监福州市支队',
          'regmoney': '87.8',
          'shipport': ''
        },
        {
          'id': '中国海监莆田市支队',
          'hullnumber': '中国海监8049',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监莆田市支队',
          'regmoney': '87.8',
          'shipport': ''
        },
        {
          'id': '福建宁德市支队',
          'hullnumber': '中国海监8001',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '福建宁德市支队',
          'regmoney': '38.6',
          'shipport': ''
        },
        {
          'id': '福建同安区大队',
          'hullnumber': '中国海监8028',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '福建同安区大队',
          'regmoney': '38.6',
          'shipport': ''
        },
        {
          'id': '福建莆田市支队',
          'hullnumber': '中国海监8042',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '福建莆田市支队',
          'regmoney': '38.6',
          'shipport': ''
        },
        {
          'id': '福建丰泽区大队',
          'hullnumber': '中国海监8055',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '福建丰泽区大队',
          'regmoney': '38.6',
          'shipport': ''
        },
        {
          'id': '福建南安市大队',
          'hullnumber': '中国海监8058',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '福建南安市大队',
          'regmoney': '38.6',
          'shipport': ''
        },
        {
          'id': '福建深沪湾海底古森林遗址保护区大队',
          'hullnumber': '中国海监8059',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '福建深沪湾海底古森林遗址保护区大队',
          'regmoney': '38.6',
          'shipport': ''
        },
        {
          'id': '中国海监南海总队',
          'hullnumber': '中国海监92',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监南海总队',
          'regmoney': '76.8',
          'shipport': ''
        },
        {
          'id': '中国海监第七支队',
          'hullnumber': '中国海监79',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第七支队',
          'regmoney': '87.8',
          'shipport': ''
        },
        {
          'id': '中国海监第八支队',
          'hullnumber': '中国海监89',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第八支队',
          'regmoney': '87.8',
          'shipport': ''
        },
        {
          'id': '广东汕头支队',
          'hullnumber': '中国海监9032',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '广东汕头支队',
          'regmoney': '38.6',
          'shipport': ''
        },
        {
          'id': '广东惠东大队',
          'hullnumber': '中国海监9053',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '广东惠东大队',
          'regmoney': '38.6',
          'shipport': ''
        },
        {
          'id': '广东台山大队',
          'hullnumber': '中国海监9063',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '广东台山大队',
          'regmoney': '38.6',
          'shipport': ''
        },
        {
          'id': '广东阳江支队',
          'hullnumber': '中国海监9071',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '广东阳江支队',
          'regmoney': '38.6',
          'shipport': ''
        },
        {
          'id': '国家深海基地管理中心',
          'hullnumber': '“向阳红81”船',
          'propertyunit': '国家深海基地管理中心',
          'useunit': '国家深海基地管理中心',
          'regmoney': '1643',
          'shipport': '青岛'
        },
        {
          'id': '',
          'hullnumber': '向阳红10号',
          'propertyunit': '浙江太和航运有限公司',
          'useunit': '',
          'regmoney': '27000',
          'shipport': '温州'
        },
        {
          'id': '中国海监第四支队',
          'hullnumber': '中国海警2502',
          'propertyunit': '国家海洋局东海分局',
          'useunit': '中国海监第四支队',
          'regmoney': '28071',
          'shipport': '宁波'
        }


      ]
      //大型装备GIS点击 卫星 提示弹出信息：名称(name)、规格型号(specificationmodel)、产权单位(propertyunit)、使用单位(useunit)、设计寿命(designlife)
      var arr_weixin = [
        {
          'id': '国家卫星海洋应用中心',
          'name': '海洋一号A',
          'specificationmodel': 'HY-1A',
          'propertyunit': '卫星中心',
          'useunit': '卫星中心',
          'designlife': '2'
        },
        {
          'id': '国家卫星海洋应用中心',
          'name': '海洋一号B',
          'specificationmodel': 'HY-1B',
          'propertyunit': '卫星中心',
          'useunit': '卫星中心',
          'designlife': '3'
        },
        {
          'id': '国家卫星海洋应用中心',
          'name': '海洋二号',
          'specificationmodel': 'HY-2',
          'propertyunit': '卫星中心',
          'useunit': '卫星中心',
          'designlife': '3'
        }
      ]
      var arr_qianqi = []

      //点击图标
      function popupinfo(type, id, ev) {
        console.log(id)
        // stopevt();
        $('.pointMessage').empty()
        var obj;
        //飞机
        if (type == 'planesituation') {
          var _url = configip + '/static/img/ocea_03.png'
          obj = '<i class="el-icon-close" style="position: absolute;right: 5px;top:3px;cursor: pointer;"></i><p style="background:#0088fe;line-height: 25px;font-size: 15px;padding-left: 5px;vertical-align: middle; "><img width="20px" style="padding-right: 5px;" src=' + _url + '>' + id + '</p><div style="padding: 5px;"><ul class="appendPlan"></ul></div>'
          $(obj).appendTo(".pointMessage")
          arr_plane.forEach(function (item, index) {
            if (item.id == id) {
              var _li = '<li><p style="color:#0088fe"><strong>名称：</strong>：<span>' + item.name + '</span></p> <p>机型：<span>' + item.planemodel + '</span></p> <p>产权单位：<span>' + item.propertyunit + '</span> </p> <p>使用单位：<span>' + item.useunit + '</span></p> <p> 资产登记价值：<span>' + item.regmoney + '</span></p> </li>'
              $(_li).appendTo($(".appendPlan"))
            }
          })
        }
        //船舶
        if (type == 'shipsituation') {
          var _url = configip + '/static/img/ocea_06.png'
          obj = '<i class="el-icon-close" style="position: absolute;right: 5px;top:3px;cursor: pointer;"></i><p style="background:#0088fe;line-height: 25px;font-size: 15px;padding-left: 5px;vertical-align: middle; "><img width="20px" style="padding-right: 5px;" src=' + _url + '>' + id + '</p><div style="padding: 5px;"><ul class="appendUl"></ul></div>'
          $(obj).appendTo(".pointMessage")
          arr_ship.forEach(function (item, index) {
            if (item.id == id) {
              var _li = '<li><p style="color:#0088fe"><strong>船号：</strong> <span>' + item.hullnumber + '</span></p> <p>产权单位：<span>' + item.propertyunit + '</span></p> <p>使用单位：<span>' + item.useunit + '</span> </p> <p>资产登记价值：<span>' + item.regmoney + '</span></p> <p> 船籍港：<span>' + item.shipport + '</span></p> </li>'
              $(_li).appendTo($(".appendUl"))
            }
          })
        }
        //卫星
        if (type == 'atellite') {
          var _url = configip + '/static/img/weixing.png'
          obj = '<i class="el-icon-close" style="position: absolute;right: 5px;top:3px;cursor: pointer;"></i><p style="background:#0088fe;line-height: 25px;font-size: 15px;padding-left: 5px;vertical-align: middle; "><img width="20px" style="padding-right: 5px;" src=' + _url + '>' + id + '</p><div style="padding: 5px;"><ul class="appendWeixin"></ul></div>'
          $(obj).appendTo(".pointMessage")
          arr_weixin.forEach(function (item, index) {
            if (item.id == id) {
              var _li = '<li><p style="color:#0088fe"><strong>名称：</strong> <span>' + item.name + '</span></p> <p>规格型号：<span>' + item.specificationmodel + '</span></p> <p>产权单位：<span>' + item.propertyunit + '</span> </p> <p>使用单位：<span>' + item.useunit + '</span></p> <p> 设计寿命：<span>' + item.designlife + '</span></p> </li>'
              $(_li).appendTo($(".appendWeixin"))
            }
          })
        }
        //潜器
        if (type == 'submersible') {
          var _url = configip + '/static/img/qianqi.png'
          obj = '<i class="el-icon-close" style="position: absolute;right: 5px;top:3px;cursor: pointer;"></i><p style="background:#0088fe;line-height: 25px;font-size: 15px;padding-left: 5px;vertical-align: middle; "><img width="20px" style="padding-right: 5px;" src=' + _url + '>' + id + '</p><div style="padding: 5px;"><ul class="appendQianqi"></ul></div>'
          $(obj).appendTo(".pointMessage")
          if (arr_qianqi.length <= 0) {
            var _li = '<li><p style="color:#fff;text-align: center;">占无数据！</p></li>'
            $(_li).appendTo($(".appendQianqi"))
          } else {
            arr_qianqi.forEach(function (item, index) {
              if (item.id == id) {
                var _li = '<li><p style="color:#0088fe"><strong>名称：</strong> <span>' + item.name + '</span></p> <p>规格型号：<span>' + item.specificationmodel + '</span></p> <p>产权单位：<span>' + item.propertyunit + '</span> </p> <p>使用单位：<span>' + item.useunit + '</span></p> <p> 设计寿命：<span>' + item.designlife + '</span></p> </li>'
                $(_li).appendTo($(".appendQianqi"))
              }
            })
          }

        }
        var _a = getMousePos(ev)
        //弹出样式
        var _message = $('.pointMessage')
        _message.css({
          "left": _a.x + 5 + 'px',
          "top": _a.y + 'px',
          "max-width": "492px",
          "min-width": "240px",
          "max-height": "60%",
          "overflow-y": "auto",
          "padding-bottom": "15px",
          "cursor": "move"
        })
        _message.show(300)
        $('.pointMessage .appendUl').css({"display": "flex", "flex-wrap": "wrap", "justify-content": "flex-start"})
        $('.pointMessage >i').css({
          "position": "absolute",
          "right": "5px",
          "top": "5px",
          "font-size": "16px",
          "color": "white",
          "transition": "all .5s"
        })
        $('.pointMessage >i').on("mouseenter", function () {
          $(this).css({"transform": "rotateY(180deg)", "color": "red"})
        }).on("mouseleave", function () {
          $(this).css({"transform": "", "color": "white"})
        })
        $('.pointMessage >p').css({
          "background": "#0088fe",
          "line-height": "27px",
          "font-size": "15px",
          "color": "#fff"
        })
        $('.pointMessage ul li').css({
          "float": "left",
          "margin-left": "10px",
          "padding": "10px",
          "width": "200px",
          "border-bottom": "1px solid #ccc"
        })
        var li_leng = $('.pointMessage ul li').length
        if (li_leng <= 2) {
          $('.pointMessage ul li').css({"border-bottom": "none"})
        }
        if (li_leng > 2 && li_leng % 2 == 0) {
          $('.pointMessage ul li:last-child,.pointMessage ul li:eq(-2)').css({"border-bottom": "none"})
        }
        if (li_leng > 2 && li_leng % 2 != 0) {
          $('.pointMessage ul li:last-child').css({"border-bottom": "none"})
        }
        $('.pointMessage ul li:first-child').css({"margin-left": "0px"})
        $('.pointMessage ul li p').css({"padding-top": "10px"})
        $('.pointMessage ul li p:first-child').css({"color": "#0088fe"})
        $('.pointMessage .el-icon-close').click(function () {
          _message.hide(300)
        })

        //拖拽
        var draggable = function (modal, handle) {
          var isDragging = false;
          var startX = 0,
            startY = 0,
            left = 0,
            top = 0;
          var dragStart = function (e) {
            var e = e || window.event;
            e.preventDefault();
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            left = $(modal).offset().left;
            top = $(modal).offset().top;
          }
          var dragMove = function (e) {
            var e = e || window.event;
            e.preventDefault();
            if (isDragging) {
              var endX = e.clientX,
                endY = e.clientY,
                relativeX = endX - startX,
                relativeY = endY - startY;
              $(modal).css({
                left: relativeX + left + 'px',
                top: relativeY + top + 'px'
              });
            }
            return false;
          }
          var dragEnd = function (e) {
            isDragging = false;
          }
          $(handle).on('mousedown', dragStart);
          $(document).on('mousemove', dragMove);
          $(document).on('mouseup', dragEnd);
        }
        draggable('.pointMessage', '.pointMessage');

        function getMousePos(event) {
          var e = event || window.event;
          return {'x': e.clientX, 'y': e.clientY}
        }

      }


      var colors = ['#393939', '#f5b031', '#fad797', '#59ccf7', '#c3b4df'];
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color: ['#ffac1e', '#77a0f0', '#1497ab'],
        series: [
          {
            name: '投入总值',
            type: 'pie',
            radius: ['30%', '60%'],
            data: [
              // {value: 19.6956550168, name: '飞机（102项）'},
              // {value: 98.7372307502, name: '船舶（293项）'},
              // {value: 3.07969800, name: '潜器（2项）'}
              {value: 19.6956, name: '飞机（102项）'},
              {value: 98.7372, name: '船舶（293项）'},
              {value: 3.0796, name: '潜器（2项）'}
            ],
            label: {
              normal: {
                formatter: '{b} {c}千万',
                rich: {
                  c: {
                    itemStyle: {
                      fontSize: 35,
                    }
                  }
                },
              }
            }
          }
        ]
      }
      let myChart = echarts.init(document.getElementById("myChart"));
      myChart.setOption(option)


    },
    created() {

    },
    components: {
      // "v-normal": normal
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
          overflow hidden
          position relative
          .pointMessage
            position fixed
            display none
            top 50px
            left 50px
            /*height 200px*/
            background #fff
            opacity .9
            z-index 999
            i
              position absolute
              right 5px
              top 3px
            div
              padding 5px
            ul
              li
                float left
            & > p
              line-height 20px
              font-size 15px
              background #0088fe
              text-align left
              color #fff
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
            z-index 999
            text-align center
          .overNormal
            position absolute
            right 20px
            top 10px
          .info_l_list
            position relative
            ul
              position absolute
              right 20px
              top 260px
              z-index 999
              & > li
                width 68px
                height 65px
                margin-top 4px
                border-radius 5px
                text-align center
                cursor pointer
                box-shadow 0 0 20px 0 rgba(0, 0, 0, 0.18)
                &:nth-child(1)
                  background-color #ffad1e
                &:nth-child(2)
                  background-color #79a0ef
                &:nth-child(3)
                  background-color #008b99
                &:nth-child(4)
                  background-color #a360fe
                  position relative
                  .info_hidde
                    position absolute
                    top -73px
                    right 74px
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
                  width 30px
                  padding-top 6px
                p
                  font-size 16px
                  color #fff
                  text-align center
                  padding-top 2px
                &:hover
                  background-color #0000ff
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
        .info_r
          width 39%
          height 100%
          margin-left 1%
          box-sizing border-box
          position relative
          .info_r_top
            height 49%
            padding 5px
            box-sizing border-box
            overflow hidden
            background-color #fff
            border-radius 4px
            .info_r_mid_info
              width 350px
              line-height 18px
              margin-left 10px
              margin-top 5px
              border-left 3px solid #0babfe
              p
                color #000
                font-weight 700
                font-family '微软雅黑'
                font-size 14px
                padding-left 10px
                span
                  font-size 12px
                  font-family '微软雅黑'
                  font-weight 400
                  color #c0c4cc
            .info_r_mid_tab
              text-align center
              padding-top 5px
              padding-bottom 5px
              box-sizing border-box
              overflow hidden
              #myChart
                width 100%
                height 100%
          .info_r_bot
            height 49%
            padding 5px
            box-sizing border-box
            overflow hidden
            background-color #fff
            position relative
            border-radius 4px
            .info_r_mid_info
              width 230px
              line-height 18px
              margin-left 10px
              margin-top 5px
              border-left 3px solid #0babfe
              p
                color #000
                font-weight 700
                font-family '微软雅黑'
                font-size 14px
                padding-left 10px
            .info_r_mid_tab
              text-align center
              height 100%
              padding-top 10px
              overflow hidden
              table
                width 100%
                border-collapse collapse
                .thead
                  width 100%
                  background-color #203aa9
                  color #fff
                  th
                    text-align center
                    width 11%
                    line-height 25px
                    &:nth-child(4)
                      width 17%
                    &:nth-child(5)
                      width 17%
                    &:nth-child(6)
                      width 17%
                    &:nth-child(7)
                      width 16%

  /*.tbody*/
  /*td*/
  /*line-height 27px*/
  /*border-bottom 1px solid #f7f7f7*/
  /*a*/
  /*color #203aa9*/


</style>
