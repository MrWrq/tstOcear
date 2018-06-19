<template>
  <div class="baseInstMainInfo">
    <div class="w">
      <div class="ocea_info">
        <div class="l info_l">
          <div class="ocea_info_name">
            <p>年度巡检实时统计地图<i class="el-icon-caret-right"></i></p>
          </div>
          <div class="info_l_list">
            <ul>
              <li><img src="./fangwu.png" alt="">
                <p>海洋站</p></li>
              <li><img src="./ocea_02.png" alt="">
                <p>浮标</p></li>
              <li><img src="./haichuangji.png" alt="">
                <p>海床基</p></li>
              <li><img src="./haixiaofubiao.png" alt="">
                <p>海啸浮标</p></li>
              <li><img src="./ocea_04.png" alt="">
                <p>雷达</p></li>
              <!--<li></li>-->
            </ul>
          </div>
          <div class="pointMessage"></div>
          <div id="map" style="width: 100%;height: 100%;z-index:1;"></div>

        </div>
        <div class="l info_r clearfix">
          <div class="info_r_top">
            <div class="info_r_top_info">
              <p>海域选择<i class="el-icon-caret-right"></i></p>
            </div>
            <div class="info_r_top_tab">
              <div id="info_r_top_chart"></div>
            </div>
          </div>
          <div class="info_r_mid">
            <div class="info_r_mid_info">
              <p>设备异常清单 <i class="el-icon-caret-right"></i></p>
            </div>
            <div class="info_r_mid_tab">
              <el-table
                :data="tableData2"
                style="width: 100%"
                fixed
                stripe
                border
                size="small"
                header-align="center"
                :row-class-name="tableRowClassName">
                <el-table-column
                  prop="num"
                  align="center"
                  sortable
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="type"
                  align="center"
                  label="类型">
                  <template slot-scope="scope">
                    <el-tag size="medium" style="width: 100%;background-color: #2A3CBA;color: #ffffff;">{{
                      scope.row.type }}
                    </el-tag>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  sortable
                  label="异常数量">

                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="info_r_bot">
            <div class="title_text">
              大型装备巡检状态
              <i class="el-icon-caret-right"/>
            </div>
            <div class="bot_chart">
              <div class="bot_chart_l">
                <ul>
                  <li v-for="item in iconsChart">{{item.name}}</li>
                </ul>
              </div>
              <div class="bot_chart_r">
                <div class="title_all_bottom_line" align="left" style="width: 0px">

                </div>
                <div id="chartPolling"></div>
                <div class="chartTitle clearfix">
                  <ul>
                    <li class="clearfix"><i></i><span>正常</span></li>
                    <li><i></i><span>异常</span></li>
                    <li><i></i><span>待巡检</span></li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import echarts from 'echarts'
  import ol from '../../../../static/js/globalviewer'

  export default {
    data() {
      return {
        checkboxGroup: [],
        tableData2: [{
          num: '1',
          type: '海床基观测系统',
          num: '5'
        }, {
          num: '2',
          type: '海啸浮标',
          num: '3'
        }, {
          num: '3',
          type: '浮标',
          num: '0'
        }, {
          num: '4',
          type: '雷达站',
          num: '0'
        }, {
          num: '5',
          type: '海洋站',
          num: '4'
        }],
        iconsChart: [
          {name: '海床基观测系统'},
          {name: '海啸浮标'},
          {name: '浮标'},
          {name: '雷达站'},
          {name: '海洋站'}
        ]
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
    mounted() {
      let screeH = document.documentElement.clientHeight >= 800 ? document.documentElement.clientHeight : 800
      let oceanHeight = screeH * .8;
      $('.info_r_mid').css('margin-top', oceanHeight * .02)
      $('.info_r_bot').css('margin-top', oceanHeight * .02)
      let info_r_botW = $('.info_r_bot_bot').width()
      let info_r_botH = $('.info_r_bot_bot').height()
      $('.info_r_top_tab').height(oceanHeight * .32 - 35)

      $(".bot_r").width(info_r_botW - 240 - 5 - 15 - 5)
      $(".bot_r").height(info_r_botH)

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
        var p = {};
        p["国防交通机构"] = "HQ_JJ_JZ_J_JG_JGQK";
        p["国防交通专业保障队伍"] = "HQ_JJ_JZ_J_DW_DWQK";
        p["公路重点桥梁"] = "HQ_JJ_JZ_J_GL_QLQK";
        p["公路重点隧道"] = "HQ_JJ_JZ_J_GL_SDQK";
        p["国防交通物资储备仓库"] = "HQ_JJ_JZ_J_WZ_CKQK";
        p["公路收费站情况"] = "HQ_JJ_JZ_J_GL_GSSF";
        p["交通重点目标"] = "HQ_JJ_JZ_J_ZD_BZMB";
        p["公路加油站情况"] = "HQ_JJ_JZ_J_GL_JYQK";
        p["高速公路服务区"] = "HQ_JJ_JZ_J_GL_GSFW";
        var y = {};

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
        var M = ol.extent.getWidth(J) / 256;
        var T = new Array(18);
        var Z = new Array(18);
        for (var C = 1; C <= 18; ++C) {
          T[C] = M / Math.pow(2, C);
          Z[C] = C
        }
        var F = new ol.layer.Tile({
          name: "offlinetiandituivector",
          type: "base",
          source: new ol.source.WMTS({
            url: tiandituserverip + "/vec_c/wmts",
            layer: "vec",
            matrixSet: "c",
            format: "tiles",
            projection: L,
            tileGrid: new ol.tilegrid.WMTS({origin: ol.extent.getTopLeft(J), resolutions: T, matrixIds: Z}),
            style: "default"
          })
        });
        var k = new ol.layer.Tile({
          name: "offlinetianditutext",
          type: "base",
          source: new ol.source.WMTS({
            url: tiandituserverip + "/cva_c/wmts",
            layer: "cva",
            matrixSet: "c",
            format: "tiles",
            projection: L,
            tileGrid: new ol.tilegrid.WMTS({origin: ol.extent.getTopLeft(J), resolutions: T, matrixIds: Z}),
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
            tileGrid: new ol.tilegrid.WMTS({origin: ol.extent.getTopLeft(J), resolutions: T, matrixIds: Z}),
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
            tileGrid: new ol.tilegrid.WMTS({origin: ol.extent.getTopLeft(J), resolutions: T, matrixIds: Z}),
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
        var A = new ol.layer.Vector({source: Q, style: W});
        var Y = false;
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
          Y = true
        }

        function q(e) {
          Y = false
        }

        function B(e) {
        }

        function R(e) {
          if (Y == false) {
            H = new WebSocket("ws://localhost:20186");
            H.onopen = function (e) {
              K(e)
            };
            H.onclose = function (e) {
              q(e)
            }
          }
          if (Y == true) {
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
          if (ye) {
            ye.parentNode.removeChild(ye)
          }
          ye = document.createElement("div");
          ye.className = "tooltip hidden";
          we = new ol.Overlay({element: ye, offset: [15, 0], positioning: "center-left"});
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
            c.removeLayer(A)
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
          c.removeLayer(A);
          c.addLayer(A);
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
            pe = e.feature;
            var r = e.coordinate;
            t = pe.getGeometry().on("change", function (e) {
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
            pe = null;
            he = null;
            ae();
            ol.Observable.unByKey(t);
            c.removeEventListener("singleclick")
          }, this)
        }

        var de = true;
        var me = new ol.Sphere(6378137);
        var pe = new ol.Feature;
        var ye;
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
          if (pe) {
            var t = pe.getGeometry();
            if (t instanceof ol.geom.Polygon) {
              o = Se
            } else if (t instanceof ol.geom.LineString) {
              o = Pe
            }
          }
          ye.innerHTML = o;
          we.setPosition(e.coordinate);
          $(ye).removeClass("hidden")
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
          var o = p[e];
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

        function Me(e) {
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
        var Te = function (e) {
          var o = e.get("name");
          var t = e.get("imgUrl");
          var r = e.get("id");
          y[r] = e;
          if (!o) o = "https://openlayers.org/en/v4.0.1/examples/data/icon.png";
          var n = 50;
          scale = n / 10;
          var a = null;
          if (!a) {
            a = new ol.style.Style({image: new ol.style.Icon({src: t})})
          }
          return a
        };
        this.removepoints = function (e, o) {
          var t = o.split(",");
          if (Ee[e] != null) {
            for (i = 0; i != t.length; ++i) {
              var r = t[i];
              Ee[e].getSource().removeFeature(y[r]);
              y[r] = null
            }
          }
        };

        function Ze(e) {
          var o = new ol.proj.Projection({code: "EPSG:4326"});
          var t = new ol.proj.Projection({code: "EPSG:3857"});
          e.getGeometry().transform(o, t)
        }

        function Ce(e, o) {
          var t = (new ol.format.GeoJSON).readFeatures(o, {featureProjection: "EPSG:4326"});
          t.forEach(Ze);
          var r = new ol.source.Vector({features: t});
          var n = new ol.layer.Vector({source: r, style: Te});
          Ee[e] = n;
          c.addLayer(n);
          n.setZIndex(98);
          Le[e] = 1
        }

        this.addrawjsonpoints = function (e, o) {
          Ce(e, o)
        };
        this.addpoints = function (e, o) {
          var t = new ol.layer.Vector({
            source: new ol.source.Vector({
              url: o,
              format: new ol.format.GeoJSON,
              dataProjection: "EPSG:4326",
              featureProjection: "EPSG:3857"
            }), style: Te
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
        var Fe = {LAYERS: "navigate:navigate", FORMAT: "image/png"};
        var ke = new ol.Feature;
        var Ve = new ol.Feature;
        var Ie = new ol.layer.Vector({source: new ol.source.Vector({features: [ke, Ve]})});
        var Oe = new ol.layer.Vector({source: new ol.source.Vector({features: [ke, Ve]})});

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
            c.addLayer(F);
            c.addLayer(k)
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
        {
          'name': '石砰海洋测点',
          'id': '045262f5d2f647c68b5ff282835cc54b',
          'lat': '120°38\′43.4″',
          'lng': '27°24\′29.2″',
          'type': 'marinestationinfo'
        },
        {
          'name': '大戢山海洋站',
          'id': '2475880ecef04ee08d94372c9571f602',
          'lat': '121°37\′12.0″',
          'lng': '30°36\′30.0″',
          'type': 'marinestationinfo'
        },
        {
          'name': '芦潮港海洋环境监测站',
          'id': '304dd4e55ad94665adb568e041056da8',
          'lat': '121°50\′25.1″',
          'lng': '30°51\′29.0″',
          'type': 'marinestationinfo'
        },
        {
          'name': '沙港头测点',
          'id': '7c494abda5574e26bd965a94439cc5e4',
          'lat': '121°06\′09.7″',
          'lng': '28°10\′30.0″',
          'type': 'marinestationinfo'
        },
        {
          'name': '小衢山测点',
          'id': '8800507122834f02a29284690abab7e2',
          'lat': '122°16\′19.0″',
          'lng': '30°31\′33.7″',
          'type': 'marinestationinfo'
        },
        {
          'name': '坎门海洋环境监测站',
          'id': '8a16e3336625485bbe14a71e5f61550d',
          'lat': '121°17\′04.6″',
          'lng': '28°05\′23.8″',
          'type': 'marinestationinfo'
        },
        {
          'name': '大陈海洋环境监测站',
          'id': '9e0fd42e4fdd4c728a82f6d5249095d1',
          'lat': '121°54\′03.2″',
          'lng': '28°27\′10.2″',
          'type': 'marinestationinfo'
        },
        {
          'name': '南麂海洋环境监测站',
          'id': 'a20683fb1ec64be1a65c1ffb0c862583',
          'lat': '121°03\′58.0″',
          'lng': '27°28\′1.2″',
          'type': 'marinestationinfo'
        },
        {
          'name': '大门岛海洋测点',
          'id': 'ab14dabae21e485fbc1c7fe15f3670fa',
          'lat': '121°02\′17.7″',
          'lng': '27°57\′01.4″',
          'type': 'marinestationinfo'
        },
        {
          'name': '温州海洋环境监测站',
          'id': 'b5dba665892f4725bd84b5033f64db28',
          'lat': '121°08\′50.9″',
          'lng': '27°51\′44.6″',
          'type': 'marinestationinfo'
        },
        {
          'name': '东海大桥B平台',
          'id': 'c415830c3e9d488fa82b196026620a14',
          'lat': '121°58\′36.0″',
          'lng': '30°44\′17.8″',
          'type': 'marinestationinfo'
        },
        {
          'name': '瓯江口海洋测点',
          'id': 'd549f053ff4a4005ad2b4ca81157adf9',
          'lat': '120°49\′51.0″',
          'lng': '27°59\′21.3″',
          'type': 'marinestationinfo'
        },
        {
          'name': '南澳海洋环境监测站云澳测站',
          'id': '1ad3acf422374d0984d24ed2c409c80c',
          'lat': '117°6\′',
          'lng': '23°24\′',
          'type': 'marinestationinfo'
        },
        {
          'name': '深圳站赤湾测点',
          'id': '21a2bed201564f7abccd1ce1858c568a',
          'lat': '113°52.9\′',
          'lng': '22°27.5\′',
          'type': 'marinestationinfo'
        },
        {
          'name': '崇明海洋环境监测站',
          'id': '370643cf835a47589b0f58b01efeb9ff',
          'lat': '121°36.0\′',
          'lng': '31°31.5\′',
          'type': 'marinestationinfo'
        },
        {
          'name': '饶平海洋环境监测站',
          'id': '3f7e2feb9b074639803dfec52eea5fcd',
          'lat': '117°6.08\′',
          'lng': '23°33.24\′',
          'type': 'marinestationinfo'
        },
        {
          'name': '汕头海洋环境监测站',
          'id': '46d0e0265676421582c6de4a901c4a79',
          'lat': '116°46.5\′',
          'lng': '23°13.2\′',
          'type': 'marinestationinfo'
        },
        {
          'name': '惠来海洋环境监测站',
          'id': '588ce61ce8e64802a2108c663b950570',
          'lat': '116°32.50\′',
          'lng': '23°0.39\′',
          'type': 'marinestationinfo'
        },
        {
          'name': '惠州海洋环境监测站',
          'id': '90e73905da174fba8d12edc5abc27a80',
          'lat': '114°33.876\′',
          'lng': '22°41.668\′',
          'type': 'marinestationinfo'
        },
        {
          'name': '深圳站盐田测点',
          'id': '93209f9064304f368a79a1cca0c21511',
          'lat': '114°16.7\′',
          'lng': '22°35.3\′',
          'type': 'marinestationinfo'
        },
        {
          'name': '大戢山海洋站',
          'id': '9aef712db6d3410589391b1bd2fe1421',
          'lat': '122°10\′',
          'lng': '30°49\′',
          'type': 'marinestationinfo'
        },
        {
          'name': '佘山海洋环境监测站',
          'id': 'a1183b04abe8409f88763be622508fde',
          'lat': '122°14\′',
          'lng': '31°25\′',
          'type': 'marinestationinfo'
        },
        {
          'name': '遮浪海洋环境监测站',
          'id': 'abd43020eb1d4856a5adc78012e4b342',
          'lat': '115°34.0100\′',
          'lng': '22°39.0008′\′',
          'type': 'marinestationinfo'
        },
        {
          'name': '陆丰海洋环境监测站',
          'id': 'bdb121d71bf34bdc9ff7d565b56f6663',
          'lat': '116°4.712\′',
          'lng': '22°50.84′\′',
          'type': 'marinestationinfo'
        },
        {
          'name': '汕尾海洋环境监测站',
          'id': 'c55ddf811d434ea4a1d8443c4d95db5a',
          'lat': '115°22.0\′',
          'lng': '22°46.0′\′',
          'type': 'marinestationinfo'
        },
        {
          'name': '南澳海洋环境监测站南澳岛测站',
          'id': 'c590743ee2614e17aafe6f46a5945bda',
          'lat': '116°59.7\′',
          'lng': '23°25.2′\′',
          'type': 'marinestationinfo'
        },
        {
          'name': '广州海洋站',
          'id': 'e9285b8991004f46a29b475d372f2550',
          'lat': '113°41\′',
          'lng': '22°40′\′',
          'type': 'marinestationinfo'
        },
        {
          'name': '椒江海洋测点',
          'id': 'ec54e04e3ad045ecadd58ca0a18aeac6',
          'lat': '121°26\′20.2″',
          'lng': '28°42\′08.6″',
          'type': 'marinestationinfo'
        },
        {
          'name': '北麂海洋测点',
          'id': 'ec2897c6832b435ba4ad4fe88a3e39b6',
          'lat': '121°11\′24.5″',
          'lng': '27°37\′9.1″',
          'type': 'marinestationinfo'
        },
        {
          'name': 'QF106',
          'id': '09b94d76571a4f2a808c154cf7ddba33',
          'lat': '123°20.31\′E',
          'lng': '38°54.93\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF111',
          'id': '15c757e1c9c44838b3e5df11eeb318a7',
          'lat': '120°44.65\′E',
          'lng': '35°14.60\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF107',
          'id': '1da23de74fa54ca9bd5b3aa83d2f1ec3',
          'lat': '123°29.98\′E',
          'lng': '37°59.70\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF103',
          'id': '247038e1345e47e5a97f4d5ab8ae3f01',
          'lat': '121°22.95\′E',
          'lng': '36°11.99\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF303',
          'id': '26a46f684c8e4fd29789740c689c3e98',
          'lat': '115°35.53\′E',
          'lng': '22°16.55\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF307',
          'id': '27eb607dced346a58deab01f15cd2795',
          'lat': '117°6.02\′E',
          'lng': '22°51.98\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'SF301',
          'id': '2a645d31f590458d998e692c349a597c',
          'lat': '115°27.85\′E',
          'lng': '19°51.63\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF101',
          'id': '400e41701cc1448d9f311d2f1bb903f0',
          'lat': '120°26.82\′E',
          'lng': '36°03.04\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF108',
          'id': '4287f5695e2c49e98abec88868f6c980',
          'lat': '122°00.67\′E',
          'lng': '35°15.30\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF109',
          'id': '45bdc3bfc67a44868321db21e7644c20',
          'lat': '120°04.43\′E',
          'lng': '39°01.32\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF105',
          'id': '54a2016d4de34e0d9cdbbf54f0f97a58',
          'lat': '120°36.07\′E',
          'lng': '39°29.84\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF113',
          'id': '5a6e760cd3044c1fbb071281a390506c',
          'lat': '121°09.06\′E',
          'lng': '38°33.03\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF306',
          'id': '5c2d092cd6834e6f9586e9c60aa19862',
          'lat': '112°38.01\′E',
          'lng': '21°6.97\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF114',
          'id': '5cd9465a965946e78ceec9b1f5e7b478',
          'lat': '121°03.38\′E',
          'lng': '38°09.31\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'HX3',
          'id': '6034726efe4e4a038a51f818d6ea28e0',
          'lat': '116.0°E',
          'lng': '18.5°N',
          'type': 'buoyinfo'
        },
        {
          'name': 'SF303',
          'id': '652f576e661c4071982a143dd7887355',
          'lat': '112°41.90\′E',
          'lng': '9°24.83\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF110',
          'id': '67945d94105e42a1930671d9be351c25',
          'lat': '123°29.21\′E',
          'lng': '35°14.50\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF305',
          'id': '7b69a10a6ebf4e2288913ab98731df18',
          'lat': '113°59.94\′E',
          'lng': '21°30.04\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'SF306',
          'id': '7dbc958ee1c64709b7c16fa9e882bfed',
          'lat': '111°20.34\′E',
          'lng': '17°56.55\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF160',
          'id': '7fd8322fc35b4ff5941289d347b5c440',
          'lat': '119°27.50\′E',
          'lng': '35°04.00\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF161',
          'id': '88ca0c464aa94fc3b2a0600e1b5549e3',
          'lat': '119°38.30\′E',
          'lng': '35°22.70\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF304',
          'id': '92326e639aee4e639918b0e8af4fd59e',
          'lat': '108°29.98\′E',
          'lng': '19°59.95\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF104',
          'id': '93159332eef14845bee540d69b319142',
          'lat': '119°51.07\′E',
          'lng': '38°02.09\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF112',
          'id': 'b8acad8b84104da3a0c3c074211ee344',
          'lat': '123°29.76\′E',
          'lng': '36°51.28\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'SF305',
          'id': 'd7f3209678814d0caf4814d8f3b5fbcf',
          'lat': '113°45.06\′E',
          'lng': '17°29.74\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'QF159',
          'id': 'dbb4fee6870f425cb0aeafee9c97281b',
          'lat': '121°36.51\′E',
          'lng': '36°41.31\′N',
          'type': 'buoyinfo'
        },
        {
          'name': 'SF302',
          'id': 'f79d0234cd9f4f329e7f14f91893ef90',
          'lat': '111°21.47\′E',
          'lng': '17°57.15\′N',
          'type': 'buoyinfo'
        },
        {
          'name': '大戢山',
          'id': '0b6915949b8d44ab99bf845e8f9a6281',
          'lat': '122°10\′26.89″',
          'lng': '30°48\′38.59″',
          'type': 'xbandradarinfo'
        },
        {
          'name': '小衢山',
          'id': '8662b449d3aa4db7a827f8a906e030b3',
          'lat': '122°15\′55.06″',
          'lng': '30°31\′40.99″',
          'type': 'xbandradarinfo'
        },
      ]

      var yichang = ["HX2", "HX6", "HX4", "HX3", "SF306", "SF305", "SF303", "QF102", "QF305", "QF306"] //坏标
      function sendJson(arr) {
        var iconType = {}
        iconType.type = "FeatureCollection";
        iconType.features = [];
        arr.forEach(function (item, index) {
          //海洋站
          if (item.type == "marinestationinfo") {
            item.imgUrlPath = configip + '/static/showIcon/fangwu.png'
          }
          //浮标
          if (item.type == "buoyinfo") {
            if (yichang.indexOf(item.name) != -1) { //存在
              item.imgUrlPath = configip + '/static/showIcon/13.png'
            } else {
              item.imgUrlPath = configip + '/static/showIcon/year3.png'
            }

          }
          // //潜标
          // if(item.type=="subsurfacebuoyinfo") {
          //   item.imgUrlPath = configip+'/static/img/reg_06.png'
          // }
          //雷达
          if (item.type == "xbandradarinfo") {
            item.imgUrlPath = configip + '/static/showIcon/year6.png'
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
              "name": ' ',
              "imgUrl": item.imgUrlPath,
              "id": item.id,
              "type": item.type,
            }
          })
        })
        return iconType
      }

      var arr_marinestationinfo = [], arr_buoyinfo = [], arr_subsurfacebuoyinfo = [], arr_xbandradarinfo = [];
      arr.forEach(function (item, index) {
        if (item.type == 'marinestationinfo') { //海洋站
          arr_marinestationinfo.push(item)
        }
        if (item.type == 'buoyinfo') { //浮标
          arr_buoyinfo.push(item)
        }
        if (item.type == 'subsurfacebuoyinfo') { //潜标
          arr_subsurfacebuoyinfo.push(item)
        }
        if (item.type == 'xbandradarinfo') { //雷达
          arr_xbandradarinfo.push(item)
        }
      })
      g_core.addrawjsonpoints('gro_marinestationinfo', sendJson(arr_marinestationinfo));//海洋站
      g_core.addrawjsonpoints('gro_buoyinfo', sendJson(arr_buoyinfo));//浮标
      g_core.addrawjsonpoints('gro_subsurfacebuoyinfo', sendJson(arr_subsurfacebuoyinfo));//潜标
      g_core.addrawjsonpoints('gro_xbandradarinfo', sendJson(arr_xbandradarinfo));//雷达

      var a = true;
      var b = true;
      var c = true;
      var d = true;
      var e = true;
      var f = true;
      var bgc = '#5A5A5A'
      //点击显示与隐藏
      $('.info_l_list>ul>li').on('click', function () {
        $('.pointMessage').hide(200)

        if ($(this).text() == "海洋站") {
          if (a) {
            g_core.removelayer('gro_marinestationinfo');
            a = false;
            $(this).css('background', bgc)
          } else {
            g_core.addrawjsonpoints('gro_marinestationinfo', sendJson(arr_marinestationinfo));//海洋站
            a = true;
            $(this).css('background', '')
          }
        }
        if ($(this).text() == "浮标") {
          if (b) {
            g_core.removelayer('gro_buoyinfo');
            b = false;
            $(this).css('background', bgc)
          } else {
            g_core.addrawjsonpoints('gro_buoyinfo', sendJson(arr_buoyinfo));//浮标
            b = true;
            $(this).css('background', '')
          }
        }
        if ($(this).text() == "潜标") {
          if (c) {
            g_core.removelayer('gro_subsurfacebuoyinfo');
            c = false;
            $(this).css('background', bgc)
          } else {
            g_core.addrawjsonpoints('gro_subsurfacebuoyinfo', sendJson(arr_subsurfacebuoyinfo));//潜标
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
        if ($(this).text() == "海床基") {
          if (e) {
            e = false;
            $(this).css('background', bgc)
          } else {
            e = true;
            $(this).css('background', '')
          }
        }
        if ($(this).text() == "海啸浮标") {
          if (f) {
            f = false;
            $(this).css('background', bgc)
          } else {
            f = true;
            $(this).css('background', '')
          }
        }

      })

      //观测预报  海洋站
      var arr_mar = [
        {
          'id': '045262f5d2f647c68b5ff282835cc54b',
          'name': '石砰海洋测点',
          'state': '在用',
          'centralstation': '国家海洋局温州海洋环境监测中心站',
          'stationcode': '3353',
          'observationelements': ''
        },
        {
          'id': '1ad3acf422374d0984d24ed2c409c80c',
          'name': '南澳海洋环境监测站云澳测站',
          'state': '在用',
          'centralstation': '国家海洋局东海预报中心',
          'stationcode': '4404',
          'observationelements': ''
        },
        {
          'id': '21a2bed201564f7abccd1ce1858c568a',
          'name': '深圳站赤湾测点',
          'state': '在用',
          'centralstation': '国家海洋局深圳海洋管理处',
          'stationcode': '4434',
          'observationelements': ''
        },
        {
          'id': '2475880ecef04ee08d94372c9571f602',
          'name': '大戢山海洋站',
          'state': '在用',
          'centralstation': '国家海洋局东海预报中心',
          'stationcode': '3305',
          'observationelements': ''
        },
        {
          'id': '304dd4e55ad94665adb568e041056da8',
          'name': '芦潮港海洋环境监测站',
          'state': '在用',
          'centralstation': '国家海洋局东海预报中心',
          'stationcode': '3111',
          'observationelements': ''
        },
        {
          'id': '370643cf835a47589b0f58b01efeb9ff',
          'name': '崇明海洋环境监测站',
          'state': '在用',
          'centralstation': '国家海洋局东海预报中心',
          'stationcode': '3103',
          'observationelements': ''
        },
        {
          'id': '3f7e2feb9b074639803dfec52eea5fcd',
          'name': '饶平海洋环境监测站',
          'state': '在用',
          'centralstation': '国家海洋局汕尾海洋环境监测中心站',
          'stationcode': '4480',
          'observationelements': ''
        },
        {
          'id': '46d0e0265676421582c6de4a901c4a79',
          'name': '汕头海洋环境监测站',
          'state': '在用',
          'centralstation': '国家海洋局汕尾海洋环境监测中心站',
          'stationcode': '4477',
          'observationelements': ''
        },
        {
          'id': '588ce61ce8e64802a2108c663b950570',
          'name': '惠来海洋环境监测站',
          'state': '在用',
          'centralstation': '国家海洋局汕尾海洋环境监测中心站',
          'stationcode': '4483',
          'observationelements': ''
        },
        {
          'id': '7c494abda5574e26bd965a94439cc5e4',
          'name': '沙港头测点',
          'state': '在用',
          'centralstation': '国家海洋局温州海洋环境监测中心站',
          'stationcode': '3345',
          'observationelements': ''
        },
        {
          'id': '8800507122834f02a29284690abab7e2',
          'name': '小衢山测点',
          'state': '在用',
          'centralstation': '国家海洋局东海预报中心',
          'stationcode': '3354',
          'observationelements': ''
        },
        {
          'id': '8a16e3336625485bbe14a71e5f61550d',
          'name': '坎门海洋环境监测站',
          'state': '在用',
          'centralstation': '国家海洋局温州海洋环境监测中心站',
          'stationcode': '3334',
          'observationelements': ''
        },
        {
          'id': '90e73905da174fba8d12edc5abc27a80',
          'name': '惠州海洋环境监测站',
          'state': '在用',
          'centralstation': '国家海洋局深圳海洋管理处',
          'stationcode': '4474',
          'observationelements': ''
        },
        {
          'id': '93209f9064304f368a79a1cca0c21511',
          'name': '深圳站盐田测点',
          'state': '在用',
          'centralstation': '国家海洋局深圳海洋管理处',
          'stationcode': '4475',
          'observationelements': ''
        },
        {
          'id': '9aef712db6d3410589391b1bd2fe1421',
          'name': '大戢山海洋站',
          'state': '在用',
          'centralstation': '国家海洋局东海分局',
          'stationcode': '3302',
          'observationelements': ''
        },
        {
          'id': '9e0fd42e4fdd4c728a82f6d5249095d1',
          'name': '大陈海洋环境监测站',
          'state': '在用',
          'centralstation': '国家海洋局温州海洋环境监测中心站',
          'stationcode': '3330',
          'observationelements': ''
        },
        {
          'id': 'a1183b04abe8409f88763be622508fde',
          'name': '佘山海洋环境监测站',
          'state': '在用',
          'centralstation': '国家海洋局东海预报中心',
          'stationcode': '3104',
          'observationelements': ''
        },
        {
          'id': 'a20683fb1ec64be1a65c1ffb0c862583',
          'name': '南麂海洋环境监测站',
          'state': '在用',
          'centralstation': '国家海洋局温州海洋环境监测中心站',
          'stationcode': '3342',
          'observationelements': ''
        },
        {
          'id': 'ab14dabae21e485fbc1c7fe15f3670fa',
          'name': '大门岛海洋测点',
          'state': '在用',
          'centralstation': '国家海洋局温州海洋环境监测中心站',
          'stationcode': '3352',
          'observationelements': ''
        },
        {
          'id': 'abd43020eb1d4856a5adc78012e4b342',
          'name': '遮浪海洋环境监测站',
          'state': '在用',
          'centralstation': '国家海洋局汕尾海洋环境监测中心站',
          'stationcode': '4427',
          'observationelements': ''
        },
        {
          'id': 'b5dba665892f4725bd84b5033f64db28',
          'name': '温州海洋环境监测站',
          'state': '在用',
          'centralstation': '国家海洋局温州海洋环境监测中心站',
          'stationcode': '3335',
          'observationelements': ''
        },
        {
          'id': 'bdb121d71bf34bdc9ff7d565b56f6663',
          'name': '陆丰海洋环境监测站',
          'state': '在用',
          'centralstation': '国家海洋局汕尾海洋环境监测中心站',
          'stationcode': '4483',
          'observationelements': ''
        },
        {
          'id': 'c415830c3e9d488fa82b196026620a14',
          'name': '东海大桥B平台',
          'state': '在用',
          'centralstation': '国家海洋局东海预报中心',
          'stationcode': '3114',
          'observationelements': ''
        },
        {
          'id': 'c55ddf811d434ea4a1d8443c4d95db5a',
          'name': '汕尾海洋环境监测站',
          'state': '在用',
          'centralstation': '国家海洋局汕尾海洋环境监测中心站',
          'stationcode': '4423',
          'observationelements': ''
        },
        {
          'id': 'c590743ee2614e17aafe6f46a5945bda',
          'name': '南澳海洋环境监测站南澳岛测站',
          'state': '在用',
          'centralstation': '国家海洋局汕尾海洋环境监测中心站',
          'stationcode': '4403',
          'observationelements': ''
        },
        {
          'id': 'd549f053ff4a4005ad2b4ca81157adf9',
          'name': '瓯江口海洋测点',
          'state': '在用',
          'centralstation': '国家海洋局温州海洋环境监测中心站',
          'stationcode': '3351',
          'observationelements': ''
        },
        {
          'id': 'e9285b8991004f46a29b475d372f2550',
          'name': '广州海洋站',
          'state': '在用',
          'centralstation': '国家海洋局南海预报中心',
          'stationcode': '4408',
          'observationelements': ''
        },
        {
          'id': 'ec2897c6832b435ba4ad4fe88a3e39b6',
          'name': '北麂海洋测点',
          'state': '在用',
          'centralstation': '国家海洋局温州海洋环境监测中心站',
          'stationcode': '3340',
          'observationelements': ''
        },
        {
          'id': 'ec54e04e3ad045ecadd58ca0a18aeac6',
          'name': '椒江海洋测点',
          'state': '在用',
          'centralstation': '国家海洋局温州海洋环境监测中心站',
          'stationcode': '3346',
          'observationelements': ''
        }
      ]
      //观测预报装备GIS点击浮标显示弹出信息 : 名称 (name)、站位号(stationcode)、当前状态(state)、管理单位（centralstation）、观测要素 (observationelements)
      var arr_buo = [
        {
          'id': '09674f87ce45405c9920f0c7e5881bbe',
          'name': 'HX4',
          'stationcode': 'HX4',
          'state': '在库',
          'centralstation': '国家海洋局南海调查技术中心',
          'observationelements': ''
        },
        {
          'id': '09b94d76571a4f2a808c154cf7ddba33',
          'name': 'QF106',
          'stationcode': 'QF106',
          'state': '在用',
          'centralstation': '国家海洋局青岛海洋预报台(国家海洋局北海预报中心)',
          'observationelements': ''
        },
        {
          'id': '15c757e1c9c44838b3e5df11eeb318a7',
          'name': 'QF111',
          'stationcode': 'QF111',
          'state': '在用',
          'centralstation': '国家海洋局青岛海洋预报台(国家海洋局北海预报中心)',
          'observationelements': ''
        },
        {
          'id': '187846d1c4af40ba8dbb17514052fad6',
          'name': 'QF164',
          'stationcode': 'QF164',
          'state': '在库',
          'centralstation': '国家海洋局青岛海洋预报台(国家海洋局北海预报中心)',
          'observationelements': ''
        },
        {
          'id': '1da23de74fa54ca9bd5b3aa83d2f1ec3',
          'name': 'QF107',
          'stationcode': 'QF107',
          'state': '在用',
          'centralstation': '国家海洋局青岛海洋预报台(国家海洋局北海预报中心)',
          'observationelements': ''
        },
        {
          'id': '247038e1345e47e5a97f4d5ab8ae3f01',
          'name': 'QF103',
          'stationcode': 'QF103',
          'state': '在用',
          'centralstation': '国家海洋局南海规划与环境研究院',
          'observationelements': ''
        },
        {
          'id': '26a46f684c8e4fd29789740c689c3e98',
          'name': 'QF303',
          'stationcode': '',
          'state': '在用',
          'centralstation': '国家海洋局南海调查技术中心',
          'observationelements': ''
        },
        {
          'id': '27eb607dced346a58deab01f15cd2795',
          'name': 'QF307',
          'stationcode': '',
          'state': '在用',
          'centralstation': '国家海洋局南海调查技术中心',
          'observationelements': ''
        },
        {
          'id': '2a645d31f590458d998e692c349a597c',
          'name': 'SF301',
          'stationcode': '',
          'state': '在用',
          'centralstation': '国家海洋局南海调查技术中心',
          'observationelements': ''
        },
        {
          'id': '400e41701cc1448d9f311d2f1bb903f0',
          'name': 'QF101',
          'stationcode': 'QF101',
          'state': '在用',
          'centralstation': '国家海洋局南海规划与环境研究院',
          'observationelements': ''
        },
        {
          'id': '4287f5695e2c49e98abec88868f6c980',
          'name': 'QF108',
          'stationcode': 'QF108',
          'state': '在用',
          'centralstation': '国家海洋局青岛海洋预报台(国家海洋局北海预报中心)',
          'observationelements': ''
        },
        {
          'id': '45bdc3bfc67a44868321db21e7644c20',
          'name': 'QF109',
          'stationcode': 'QF109',
          'state': '在用',
          'centralstation': '国家海洋局青岛海洋预报台(国家海洋局北海预报中心)',
          'observationelements': ''
        },
        {
          'id': '545aec2e9ccd47148bc5ef3ebf279196',
          'name': 'QF163',
          'stationcode': 'QF163',
          'state': '在库',
          'centralstation': '国家海洋局青岛海洋预报台(国家海洋局北海预报中心)',
          'observationelements': ''
        },
        {
          'id': '54a2016d4de34e0d9cdbbf54f0f97a58',
          'name': 'QF105',
          'stationcode': 'QF105',
          'state': '在用',
          'centralstation': '国家海洋局青岛海洋预报台(国家海洋局北海预报中心)',
          'observationelements': ''
        },
        {
          'id': '5a6e760cd3044c1fbb071281a390506c',
          'name': 'QF113',
          'stationcode': 'QF113',
          'state': '在用',
          'centralstation': '国家海洋局青岛海洋预报台(国家海洋局北海预报中心)',
          'observationelements': ''
        },
        {
          'id': '5c2d092cd6834e6f9586e9c60aa19862',
          'name': 'QF306',
          'stationcode': 'QF306',
          'state': '在用',
          'centralstation': '国家海洋局南海调查技术中心',
          'observationelements': ''
        },
        {
          'id': '5cd9465a965946e78ceec9b1f5e7b478',
          'name': 'QF114',
          'stationcode': 'QF114',
          'state': '在用',
          'centralstation': '国家海洋局青岛海洋预报台(国家海洋局北海预报中心)',
          'observationelements': ''
        },
        {
          'id': '6034726efe4e4a038a51f818d6ea28e0',
          'name': 'HX3',
          'stationcode': 'HX3',
          'state': '在用',
          'centralstation': '国家海洋局南海调查技术中心',
          'observationelements': ''
        },
        {
          'id': '652f576e661c4071982a143dd7887355',
          'name': 'SF303',
          'stationcode': 'SF303',
          'state': '在用',
          'centralstation': '国家海洋局南海调查技术中心',
          'observationelements': ''
        },
        {
          'id': '67945d94105e42a1930671d9be351c25',
          'name': 'QF110',
          'stationcode': 'QF110',
          'state': '在用',
          'centralstation': '国家海洋局青岛海洋预报台(国家海洋局北海预报中心)',
          'observationelements': ''
        },
        {
          'id': '68758ed36d3c465787e28f32b191605a',
          'name': 'HX2',
          'stationcode': 'HX2',
          'state': '在库',
          'centralstation': '国家海洋局南海调查技术中心',
          'observationelements': ''
        },
        {
          'id': '7b69a10a6ebf4e2288913ab98731df18',
          'name': 'QF305',
          'stationcode': 'QF305',
          'state': '在用',
          'centralstation': '国家海洋局南海调查技术中心',
          'observationelements': ''
        },
        {
          'id': '7dbc958ee1c64709b7c16fa9e882bfed',
          'name': 'SF306',
          'stationcode': 'SF306',
          'state': '在用',
          'centralstation': '国家海洋局南海调查技术中心',
          'observationelements': ''
        },
        {
          'id': '7fd8322fc35b4ff5941289d347b5c440',
          'name': 'QF160',
          'stationcode': 'QF160',
          'state': '在用',
          'centralstation': '国家海洋局青岛海洋预报台(国家海洋局北海预报中心)',
          'observationelements': ''
        },
        {
          'id': '88ca0c464aa94fc3b2a0600e1b5549e3',
          'name': 'QF161',
          'stationcode': 'QF161',
          'state': '在用',
          'centralstation': '国家海洋局青岛海洋预报台(国家海洋局北海预报中心)',
          'observationelements': ''
        },
        {
          'id': '92326e639aee4e639918b0e8af4fd59e',
          'name': 'QF304',
          'stationcode': 'QF304',
          'state': '在用',
          'centralstation': '国家海洋局南海调查技术中心',
          'observationelements': ''
        },
        {
          'id': '93159332eef14845bee540d69b319142',
          'name': 'QF104',
          'stationcode': 'QF104',
          'state': '在用',
          'centralstation': '国家海洋局青岛海洋预报台(国家海洋局北海预报中心)',
          'observationelements': ''
        },
        {
          'id': 'aa39b4d970594bc594635019002d414c',
          'name': 'QF162',
          'stationcode': 'QF162',
          'state': '在库',
          'centralstation': '国家海洋局青岛海洋预报台(国家海洋局北海预报中心)',
          'observationelements': ''
        },
        {
          'id': 'b8acad8b84104da3a0c3c074211ee344',
          'name': 'QF112',
          'stationcode': 'QF112',
          'state': '在用',
          'centralstation': '国家海洋局青岛海洋预报台(国家海洋局北海预报中心)',
          'observationelements': ''
        },
        {
          'id': 'cad0b552d6914b2e9adab0bd992d70bb',
          'name': 'QF102',
          'stationcode': 'QF102',
          'state': '在库',
          'centralstation': '国家海洋局青岛海洋预报台(国家海洋局北海预报中心)',
          'observationelements': ''
        },
        {
          'id': 'd7f3209678814d0caf4814d8f3b5fbcf',
          'name': 'SF305',
          'stationcode': 'SF305',
          'state': '在用',
          'centralstation': '国家海洋局南海调查技术中心',
          'observationelements': ''
        },
        {
          'id': 'd8738195448d4065ae7ee843e96eb1f2',
          'name': 'HX6',
          'stationcode': 'HX6',
          'state': '在库',
          'centralstation': '国家海洋局南海调查技术中心',
          'observationelements': ''
        },
        {
          'id': 'dbb4fee6870f425cb0aeafee9c97281b',
          'name': 'QF159',
          'stationcode': 'QF159',
          'state': '在用',
          'centralstation': '国家海洋局青岛海洋预报台(国家海洋局北海预报中心)',
          'observationelements': ''
        },
        {
          'id': 'df73169fd7e5479d9ac09586f480183b',
          'name': 'asdasd',
          'stationcode': 'asd',
          'state': '在用',
          'centralstation': '国家海洋局南海规划与环境研究院',
          'observationelements': ''
        },
        {
          'id': 'f79d0234cd9f4f329e7f14f91893ef90',
          'name': 'SF302',
          'stationcode': 'SF302',
          'state': '在用',
          'centralstation': '国家海洋局南海调查技术中心',
          'observationelements': ''
        }
      ]
      //观测预报 X波段雷达 点击显示弹出信息 : 名称(name)、规格型号(specification)、管理单位(ownerunit)、使用单位(useunit)、状态(state)、 主要通讯方式(communication)
      var arr_xban = [
        {
          'id': '0b6915949b8d44ab99bf845e8f9a6281',
          'name': '大戢山',
          'specification': 'WAMOSII',
          'ownerunit': '国家海洋局东海预报中心',
          'useunit': '国家海洋局东海预报中心',
          'state': '在用',
          'communication': 'CDMA'
        },
        {
          'id': '8662b449d3aa4db7a827f8a906e030b3',
          'name': '小衢山',
          'specification': 'EM-129',
          'ownerunit': '',
          'useunit': '',
          'state': '在用',
          'communication': 'CDMA'
        },
      ]

      //点击图标
      function popupinfo(type, id, ev) {
        // stopevt();
        $('.pointMessage').empty()
        var obj;
        if (type == 'marinestationinfo') {
          var _url = configip + '/static/img/fangwuTubiao.png'
          arr_mar.forEach(function (item, index) {
            if (item.id == id) {
              obj = '<i class="el-icon-close" style="position: absolute;right: 5px;top:3px;cursor: pointer;"></i><p style="background:#0088fe;line-height: 25px;font-size: 15px;padding-left: 5px;vertical-align: middle; "><img width="20px" style="padding-right: 5px;" src=' + _url + '>' + item.name + '</p><div style="padding: 5px;"><ul><li><p>名称：<span>' + item.name + '</span></p> <p>站代码：<span>' + item.stationcode + '</span></p><p>巡检状态：<span>' + item.state + '</span></p> <p>所属单位：<span>' + item.centralstation + '</span> </p> <p>观测要素：<span>' + item.observationelements + '</span></p></li></ul></div>'
            }
          })

        }
        if (type == 'buoyinfo') {
          var _url = configip + '/static/img/5.png'
          arr_buo.forEach(function (item, index) {
            //stationcode
            if (item.id == id) {
              obj = '<i class="el-icon-close" style="position: absolute;right: 5px;top:3px;cursor: pointer;"></i><p style="background:#0088fe;line-height: 25px;font-size: 15px;padding-left: 5px;vertical-align: middle; "><img width="20px" style="padding-right: 5px;" src=' + _url + '>' + item.stationcode + '</p><div style="padding: 5px;"><ul><li><p>名称：<span>' + item.stationcode + '</span></p> <p>巡检状态：<span>' + item.state + '</span></p> <p>所属单位：<span>' + item.centralstation + '</span> </p> <p>观测要素：<span>' + item.observationelements + '</span></p></li></ul></div>'
            }
          })

        }
        if (type == 'xbandradarinfo') {
          var _url = configip + '/static/img/4.png'
          arr_xban.forEach(function (item, index) {
            if (item.id == id) {
              obj = '<i class="el-icon-close" style="position: absolute;right: 5px;top:3px;cursor: pointer;"></i><p style="background:#0088fe;line-height: 25px;font-size: 15px;padding-left: 5px;vertical-align: middle; "><img width="20px" style="padding-right: 5px;" src=' + _url + '>' + item.name + '</p><div style="padding: 5px;"><ul><li><p>名称：<span>' + item.name + '</span></p> <p>规格型号：<span>' + item.specification + '</span></p> <p>管理单位：<span>' + item.ownerunit + '</span> </p> <p>使用单位：<span>' + item.useunit + '</span></p><p>状态：<span>' + item.state + '</span></p><p>主要通讯方式：<span>' + item.communication + '</span></p></li></ul></div>'
            }
          })
        }

        var _a = getMousePos(ev)
        $('.pointMessage').append(obj)
        $('.pointMessage').css({
          "left": _a.x + 5 + 'px',
          "top": _a.y + 'px',
          "max-width": "530px",
          "min-width": "240px",
          "max-height": "60%",
          "min-height": "210px",
          "overflow-y": "auto",
          "padding-bottom": "15px",
          "cursor": "move"
        })
        $('.pointMessage').show(300)
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
        $('.pointMessage ul li p').css({"padding-top": "10px"})
        $('.pointMessage ul li p:first-child').css({"color": "#0088fe"})

        $('.pointMessage .el-icon-close').click(function () {
          $('.pointMessage').hide(300)
        })

      }

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
      // if(show) {
      //   $(document).bind('click',function (ev) {
      //     $('.pointMessage').hide(300)
      //     show =true;
      //   })
      // }

      //阻止冒泡
      function getMousePos(event) {
        var e = event || window.event;
        return {'x': e.clientX, 'y': e.clientY}
      }


      let option1 = {
        tooltip: {
          formatter: "{a} {c} {b} %"
        },
        title: [
          {
            text: '北海',
            left: '14%',
            top: '72%',
            textAlign: 'center',
            textStyle: {
              color: '#45C6D4',
              fontWeight: '700',
              fontSize: '18',
              textAlign: 'center',
            },
          },
          {
            text: '东海',
            left: '48%',
            top: '72%',
            textAlign: 'center',
            textStyle: {
              color: '#4897f6',
              fontWeight: '700',
              fontSize: '18',
              textAlign: 'center',
            },
          },
          {
            text: '南海',
            left: '80%',
            top: '72%',
            textAlign: 'center',
            textStyle: {
              color: '#3EC6A1',
              fontWeight: '700',
              fontSize: '18',
              textAlign: 'center',
            },
          }
        ],
        toolbox: {
          show: false,
          feature: {
            mark: {show: true},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        series: [
          {
            name: '北海',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 100,
            center: ['15%', '55%'],
            radius: '55%',
            splitNumber: 5,
            startAngle: 180,
            endAngle: 0,
            pointer: {
              width: 4,
              color: 'auto'
            },
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                width: 2,
                color: [[0.2, '#45C6D4'], [0.8, '#45C6D4'], [1, '#45C6D4']],
              }
            },
            axisTick: {            // 坐标轴小标记
              length: 5,        // 属性length控制线长
              lineStyle: {       // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            splitLine: {           // 分隔线
              length: 10,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            detail: {
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 18
              },
              formatter: function (val) {
                return val + "%"
              }
            },
            data: [{value: 24}]
          }, {
            name: '东海',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 100,
            center: ['48%', '55%'],
            radius: '55%',
            splitNumber: 5,
            startAngle: 180,
            endAngle: 0,
            pointer: {
              width: 4,
              color: 'auto'
            },
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                width: 5,
                color: [[0.2, '#2A7ED0'], [0.8, '#2A7ED0'], [1, '#2A7ED0']],
              },

            },
            // axisTick: {            // 坐标轴小标记
            //   length :10,        // 属性length控制线长
            //   lineStyle: {       // 属性lineStyle控制线条样式
            //     color: 'auto'
            //   }
            // },
            splitLine: {           // 分隔线
              length: 15,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            title: {
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontStyle: 'italic',
                fontSize: 20
              }
            },
            detail: {
              show: true,
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 18
              },
              // backgroundColor:'#95E0E5',
              // borderColor:'#95E0E5',
              formatter: function (val) {
                return val + "%"
              }
            },
            data: [{value: 0}]
          }, {
            name: '南海',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 100,
            center: ['80%', '55%'],
            radius: '55%',
            splitNumber: 5,
            startAngle: 180,
            endAngle: 0,
            pointer: {
              width: 4,
              color: 'auto'
            },
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                width: 3,
                color: [[0.2, '#3EC6A1'], [0.8, '#3EC6A1'], [1, '#3EC6A1']],
              }
            },
            axisTick: {            // 坐标轴小标记
              length: 5,        // 属性length控制线长
              lineStyle: {       // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            splitLine: {           // 分隔线
              length: 10,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            title: {
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 18,
                fontStyle: 'italic'
              }
            },
            detail: {
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 18
              },

              formatter: function (val) {
                return val + "%"
              }
            },
            data: [{value: 22}]
          },
        ]
      };

      let myChart2 = echarts.init(document.getElementById('info_r_top_chart'));
      myChart2.setOption(option1);


      var data = [53, 85, 60, 45, 53];
      var xMax = 100;
      let bottom_chart_option = {
        tooltip: {
          show: true,
          formatter: "{b}"
        },
        grid: {
          x: -40,
          y: 13,
          x2: 20,
          y2: 10,
          borderWidth: 1,
          containLabel: true
        },

        xAxis: [{
          type: 'value',
          axisLine: {
            show: true,
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#000',
              fontSize: '14'
            },
            formatter: function (val) {
              return val + "%"
            }
          },
          splitLine: {
            show: true,
            // color:'#fff',
          }
        }],
        yAxis: [{
          type: 'category',
          data: ['海洋站', '雷达站', '浮标', '海啸浮标', '海床基观测系统',],
          axisTick: {
            // color:'#fff',
            show: false,
          },
          axisLine: {
            //  color:'#fff',
            show: true,
          },
          splitLine: {
            show: true,
            // color:'#fff',
          },
          axisLabel: {
            show: false,
          }
        }],
        series: [{
          name: '',
          type: 'bar',
          barWidth: 10,
          silent: true,
          itemStyle: {
            normal: {
              color: '#4d4d4d',
              barBorderRadius: [0, 0, 0, 0],
            }
          },
          barGap: '-100%',
          barCategoryGap: '50%',
          data: data.map(function (d) {
            return xMax
          }),
        },
          {
            name: ' ',
            type: 'bar',
            barWidth: 10,
            label: {
              normal: {
                show: true,
                position: 'top',
                formatter: '',
              }
            },
            data: [{
              value: 73,
              itemStyle: {
                normal: {color: '#fe0200'}
              }
            }, {
              value: 65,
              itemStyle: {
                normal: {color: '#fe0200'}

              }
            }, {
              value: 73,
              itemStyle: {
                normal: {color: '#fe0200'}

              }
            }, {
              value: 82,
              itemStyle: {
                normal: {color: '#fe0200'},
              }
            }, {

              value: 92,
              itemStyle: {
                normal: {color: '#fe0200'}
              }
            },],
          },
          {
            name: ' ',
            type: 'bar',
            barWidth: 10,
            label: {
              normal: {
                show: true,
                position: 'top',
                formatter: '',
              }
            },
            data: [{
              value: 53,
              itemStyle: {
                normal: {color: '#6ab91f'}
              }
            }, {
              value: 45,
              itemStyle: {
                normal: {color: '#6ab91f'}

              }
            }, {
              value: 53,
              itemStyle: {
                normal: {color: '#6ab91f',}

              }
            }, {
              value: 32,
              itemStyle: {
                normal: {color: '#6ab91f'},
              }
            }, {

              value: 12,
              itemStyle: {
                normal: {color: '#6ab91f'}
              }
            },],
          }
        ]
      };
      let bottom_chart = echarts.init(document.getElementById('chartPolling'));
      bottom_chart.setOption(bottom_chart_option);


    },
    created() {
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
            width 250px
            height 200px
            border-radius 4px
            background #fff
            opacity .9
            z-index 999
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
                left 450px
                top 400px
              &:nth-child(7)
                left 210px
                top 300px
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
          #map
            width 100%
            height 100%
          .info_l_list
            position relative
            ul
              position absolute
              right 20px
              top 160px
              z-index 999
              & > li
                width 68px
                height 64px
                /*line-height 74px*/
                margin-top 4px
                border-radius 5px
                text-align center
                cursor pointer
                background #666666
                &:nth-child(1)
                  background-color #0babfe
                &:nth-child(2)
                  background-color #4884aa
                &:nth-child(3)
                  background-color #6db821
                &:nth-child(4)
                  background-color #ffad1e
                &:nth-child(5)
                  background-color #4bceaf
                img
                  width 34px
                padding-top 8px
                p
                  font-size 14px
                  color #fff
                  text-align center
                  padding-top 2px
                &:hover
                  cursor pointer
                  background-color #868686
        .info_r
          width 39%
          height 100%
          margin-left 1%
          .info_r_top
            height 32%
            padding 5px
            box-sizing border-box
            overflow hidden
            background-color #fff
            border-radius 4px
            position relative
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
              position absolute
              top 25px
              left 0
              text-align center
              width 100%
              height 100%
              padding-top 10px
              overflow hidden
              #info_r_top_chart
                width 100%
                height 100%
          .info_r_mid
            height 32%
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
              width 96%
              margin-left 2%
              text-align center
              height 100%
              padding-top 10px
              overflow hidden
          .info_r_bot
            width 100%
            height 32%
            overflow hidden
            padding 10px
            box-sizing border-box
            border-radius 4px
            background-color #fff
            position relative
            .title_text
              position absolute
              width: 150px;
              height: 27px;
              margin-left: 10px;
              background-color: #2a3cba;
              color: #fff;
              font-size: 14px;
              font-weight: 700;
              line-height: 27px;
              text-align: center;
              left 10px
              top 5px
            .bot_chart
              width 100%
              height 100%
              position absolute
              left 0
              top 0
              padding-top 10px
              .bot_chart_l
                width 30%
                margin-top 50px
                margin-left 10px
                float left
                ul
                  li
                    height 28px
                    line-height 28px
                    color #fff
                    border-radius 5px
                    text-align center
                    margin-top 5px
                    background-color #2a3cba
                    transition all .5s
                    &:first-child
                      margin-top 0px
                    &:hover
                      background-color #0babfe
                      cursor pointer
                      font-size 15px
              .bot_chart_r
                width 66%
                height 100%
                margin-top -10px
                float left
                margin-left 3px
                #chartPolling
                  width 100%
                  height 80%
                  padding-top 30px
                  div
                    height 100%
                .chartTitle
                  position absolute
                  right 30px
                  top 10px
                  ul
                    li
                      margin-left 5px
                      float left
                      box-sizing border-box
                      position relative
                      margin-left 9px
                      &:first-child
                        margin-left 0px
                      i
                        display inline-block
                        position absolute
                        top 3px
                        background-color #6ab91f
                        width 14px
                        height 14px
                      span
                        padding-left 17px
                      &:nth-child(2)
                        i
                          background-color #fe0200
                      &:nth-child(3)
                        i
                          background-color #4d4d4d
</style>
