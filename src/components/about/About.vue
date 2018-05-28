<template>
  <div class="oceaLarge">
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
            <div class="chart_name">
              <div>
                <div class="l">
                  <p>统计图表</p>
                </div>
                <div class="char_r r">
                  <el-checkbox-group v-model="checkboxGroup" size="mini">
                    <el-checkbox label="站台" border style="background-color: #0babfe; color: #fff;margin-left: 0px;"></el-checkbox>
                    <el-checkbox label="雷达" border style="background-color: #4bceaf; color: #fff;margin-left: 0px;"></el-checkbox>
                    <el-checkbox label="浮标" border style="background-color: #5c6275; color: #fff;margin-left: 0px;"></el-checkbox>
                    <el-checkbox label="潜标" border style="background-color: #6db821; color: #fff;margin-left: 0px;"></el-checkbox>
                    <el-checkbox label="船舶" border style="background-color: #79a0ef; color: #fff;margin-left: 0px;"></el-checkbox>

                  </el-checkbox-group>
                </div>
              </div>

            </div>
            <div>
              <div id="chart_1"></div>
              <div id="chart_2"></div>
              <div id="chart_3"></div>
            </div>

          </div>
          <div class="info_r_mid">
            <div class="info_r_mid_info">
              <p>大型装备状态统计<i class="el-icon-caret-right"></i></p>

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
                  prop="date"
                  align="center"
                  label="名称">
                </el-table-column>
                <el-table-column
                  prop="all"
                  align="center"
                  sortable
                  label="全部数量">
                </el-table-column>
                <el-table-column
                  prop="name"
                  align="center"
                  label="正常">
                </el-table-column>
                <el-table-column
                  prop="address"
                  align="center"
                  sortable
                  label="已巡检">
                </el-table-column>
                <el-table-column
                  prop="num"
                  align="center"
                  label="损坏">
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="info_r_bot">
            <div class="info_r_bot_top clearfix">
              <div class="info_r_bot_info l">
                <p>大型装备状态统计<i class="el-icon-caret-right"></i></p>
              </div>
              <div class="info_r_bot_r r">
                <span class="">站台</span>
              </div>
            </div>
            <div class="info_r_bot_bot">
              <div class="bot_l">
                <ul class="info_r_bot_icon l">
                  <li><img src="./ocea_01.png" alt=""><p>站台</p></li>
                  <li><img src="./ocea_02.png" alt=""><p>浮标</p></li>
                  <li><img src="./ocea_03.png" alt=""><p>飞机</p></li>
                  <li><img src="./ocea_04.png" alt=""><p>雷达</p></li>
                </ul>
                <ul class="info_r_bot_icon l">
                  <li><img src="./ocea_01.png" alt=""><p>站台</p></li>
                  <li><img src="./ocea_02.png" alt=""><p>浮标</p></li>
                  <li><img src="./ocea_03.png" alt=""><p>飞机</p></li>
                  <li><img src="./more.png" alt=""><p>更多</p></li>
                </ul>
              </div>
              <div class="bot_r">
                <div id="chart2"></div>
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
  import $ from 'jquery'
  import ol from '../../../static/js/globalviewer'
  // import Map from 'ol/map';
  // import View from 'ol/view';
  // import TileLayer from 'ol/layer/tile';
  // import XYZ from 'ol/source/xyz';
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
      var serverip = 'http://localhost';
      var tiandituserverip = "http://10.0.4.72:81";
      var c;
      var n;
      var r;
      var a = 0;
      var l = 0;
      var e = "";
      var o = "";
      var t = "";
      var s = "";
      var u = "";
      var g = 1;
      var f = "";
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

      function w(e, o, t) {
        var r = e.toString(t || 10);
        while (r.length < o) {
          r = "0" + r
        }
        return r
      }

      var h = new ol.layer.Tile({source: new ol.source.XYZ({url: serverip + ":8080/static/tiles/shandongxin/{z}/{x}/{y}.png"})});
      var x = new ol.layer.Tile({source: new ol.source.XYZ({url: serverip + ":8080/static/tiles/indonesia/{z}/{x}/{y}.png"})});
      var S = new ol.layer.Tile({
        source: new ol.source.XYZ({url: tiandituserverip + "/DataServer?T=vec_c&x={x}&y={y}&l={z}"}),
        projection: "EPSG:4326"
      });
      var P = new ol.layer.Tile({
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
      var G = new ol.layer.Tile({
        source: new ol.source.XYZ({url: tiandituserverip + "/DataServer?T=vec_w&x={x}&y={y}&l={z}"}),
        projection: "EPSG:3857"
      });
      var _ = new ol.layer.Tile({
        source: new ol.source.XYZ({url: tiandituserverip + "/DataServer?T=cva_c&x={x}&y={y}&l={z}"}),
        projection: "EPSG:3857"
      });
      var b = ol.proj.get("EPSG:4326");
      var E = b.getExtent();
      var L = ol.extent.getWidth(E) / 256;
      var J = new Array(18);
      var M = new Array(18);
      for (var T = 1; T <= 18; ++T) {
        J[T] = L / Math.pow(2, T);
        M[T] = T
      }
      var k = new ol.layer.Tile({
        name: "offlinetiandituivector",
        type: "base",
        source: new ol.source.WMTS({
          url: tiandituserverip + "/vec_c/wmts",
          layer: "vec",
          matrixSet: "c",
          format: "tiles",
          projection: b,
          tileGrid: new ol.tilegrid.WMTS({origin: ol.extent.getTopLeft(E), resolutions: J, matrixIds: M}),
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
          projection: b,
          tileGrid: new ol.tilegrid.WMTS({origin: ol.extent.getTopLeft(E), resolutions: J, matrixIds: M}),
          style: "default"
        })
      });
      var F = new ol.layer.Tile({
        name: "offlinetiandituimage",
        type: "base",
        source: new ol.source.WMTS({
          url: tiandituserverip + "/img_c/wmts",
          layer: "img",
          matrixSet: "c",
          format: "tiles",
          projection: b,
          tileGrid: new ol.tilegrid.WMTS({origin: ol.extent.getTopLeft(E), resolutions: J, matrixIds: M}),
          name: "offlinetiandituimage",
          style: "default"
        })
      });
      var Z = new ol.layer.Tile({
        name: "offlinetianditutext",
        type: "base",
        source: new ol.source.WMTS({
          url: tiandituserverip + "/cia_c/wmts",
          layer: "cia",
          matrixSet: "c",
          format: "tiles",
          projection: b,
          tileGrid: new ol.tilegrid.WMTS({origin: ol.extent.getTopLeft(E), resolutions: J, matrixIds: M}),
          style: "default"
        })
      });
      var V = new ol.layer.Tile({
        type: "base", source: new ol.source.XYZ({
          tileUrlFunction: function (e) {
            var o = "C" + w(e[1], 8, 16);
            var t = "R" + w(-e[2] - 1, 8, 16);
            var r = "L" + w(e[0], 2, 10);
            return serverip + ":8080/static/tiles/world" + "/" + r + "/" + t + "/" + o + ".png"
          }, projection: "EPSG:3857"
        })
      });
      var I = new ol.source.Vector;
      var O = new ol.layer.Vector({
        source: I,
        style: new ol.style.Style({
          fill: new ol.style.Fill({color: "rgba(255,255,255,0.2)"}),
          stroke: new ol.style.Stroke({color: "#e21e0a", width: 2}),
          image: new ol.style.Circle({radius: 5, fill: new ol.style.Fill({color: "#ffcc33"})})
        })
      });
      var D = function (e) {
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
      var N = new ol.source.Vector;
      var Q = new ol.layer.Vector({source: N, style: D});

      function initmap() {
        n = new ol.View({
          center: ol.proj.transform([121.6, 38.8], "EPSG:4326", "EPSG:3857"),
          minZoom: 5,
          maxZoom: 19,
          zoom: 6
        });
        var e = new ol.layer.Tile({
          source: new ol.source.XYZ({url: "http://mt2.google.cn/vt/lyrs=y&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=G"}),
          projection: "EPSG:3857"
        });
        c = new ol.Map({
          target: "map",
          layers: [V],
          view: n,
          logo: false,
          controls: ol.control.defaults({attributionOptions: {collapsible: false}})
        });
        var o = new ol.control.ScaleLine({units: "metric", target: "scalebar", className: "ol-scale-line"});
        c.addControl(o);
        c.addLayer(O);
        $(c.getViewport()).on("contextmenu", function (e) {
          e.preventDefault();
          B();
          m = d["noopeartion"]
        });
        c.on("click", function (e) {
          if (m == d["singletargetselection"]) {
            A(e.pixel)
          } else if (m == d["regionselection"]) {
            console.log("i am in region selection!");
            console.log(s);
            z(e.pixel);
            console.log(s);
            if (s != "") {
              f = "&qhdm=" + s;
              console.log(f);
              v = serverip + ":3500/gettabledatas?tablename=";
              var o = u;
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
            a = t[0];
            l = t[1];
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
      }

      var z = function (e) {
        var t = [];
        c.forEachFeatureAtPixel(e, function (e, o) {
          t.push(e)
        });
        if (t.length > 0) {
          for (j = 0; j != t.length; ++j) {
            var o = t[j].getGeometry();
            if (o instanceof ol.geom.MultiPolygon) {
              s = t[j].get("CNTY_CODE");
              u = t[j].get("NAME")
            }
          }
        }
      };
      var A = function (e) {
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
            f = "&uid=" + r;
            v = serverip + ":3500/getdetialdatas?tablename=" + o;
            console.log("last point is");
            console.log(r);
            layer.open({
              type: 2,
              area: ["600px", "800px"],
              title: "属性信息",
              shadeClose: true,
              content: "./popup/property.html"
            })
          }
        }
      };
      var W = function (e) {
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

      function Y() {
        var e = new ol.source.Vector({
          format: new ol.format.GeoJSON,
          projection: "EPSG:3857",
          url: "shan_dong_geo.json"
        });
        vectorLayerxingzhengquhua = new ol.layer.Vector({source: e});
        c.addLayer(vectorLayerxingzhengquhua)
      }

      function H(e, o) {
        var t = [parseFloat(e), parseFloat(o)];
        var r = ol.proj.transform(t, "EPSG:4326", "EPSG:3857");
        n.animate({center: r, duration: 2e3})
      }

      var K = new Array;

      function X() {
        if (se) {
          se.parentNode.removeChild(se)
        }
        se = document.createElement("div");
        se.className = "tooltip hidden";
        ce = new ol.Overlay({element: se, offset: [15, 0], positioning: "center-left"});
        c.addOverlay(ce)
      }

      function q() {
        ue = document.createElement("div");
        ue.setAttribute("id", "lengthLabel");
        ue.className = "tooltip tooltip-measure";
        ge = new ol.Overlay({element: ue, offset: [0, -15], positioning: "bottom-center"});
        c.addOverlay(ge);
        K.push(ge)
      }

      function B() {
        if (te) {
          c.removeInteraction(te);
          c.removeLayer(Q)
        }
        for (var e in K) {
          c.removeOverlay(K[e]);
          K[e] = null
        }
        K = new Array;
        if (ee) c.removeInteraction(ee);
        if (R) c.removeInteraction(R);
        if (r) {
          console.log("begin remove action");
          c.removeInteraction(r);
          c.removeOverlay(ge);
          c.removeOverlay(ce)
        }
        I.clear()
      }

      var R = null;

      function U() {
        B();
        if (R) c.removeInteraction(R);
        R = new ol.interaction.DragBox({condition: ol.events.condition.platformModiferKeyOnly});
        c.addInteraction(R);
        R.on("boxend", function () {
          var e = R.getGeometry().getExtent();
          var o = ol.proj.transform([e[0], e[1]], "EPSG:3857", "EPSG:4326");
          var t = ol.proj.transform([e[2], e[3]], "EPSG:3857", "EPSG:4326");
          console.log(o);
          console.log(t);
          f = "&minx=" + o[0] + "&maxx=" + t[0] + "&miny=" + o[1] + "&maxy=" + t[1];
          console.log(f);
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
        R.on("boxstart", function () {
          I.clear();
          f = "";
          v = ""
        })
      }

      var ee = null;

      function oe() {
        B();
        if (ee) c.removeInteraction(ee);
        console.log("begin circle selection!");
        ee = new ol.interaction.Draw({
          source: I,
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
        c.addInteraction(ee);
        ee.on("drawend", function (e) {
          var o = e.feature.getGeometry();
          var t = o.getCenter();
          var r = ol.proj.transform(t, "EPSG:3857", "EPSG:4326");
          var n = o.getRadius();
          v = serverip + ":3500/gettabledataswithcircle?tablename=";
          f = "&centerx=" + r[0] + "&centery=" + r[1] + "&radius=" + n;
          console.log(f);
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
        ee.on("drawstart", function (e) {
          I.clear();
          f = "";
          v = ""
        })
      }

      var te = null;

      function re() {
        B();
        if (te) c.removeInteraction(te);
        console.log("begin draw path!");
        c.removeLayer(Q);
        c.addLayer(Q);
        te = new ol.interaction.Draw({source: N, type: "LineString", freehand: true});
        c.addInteraction(te);
        te.on("drawend", function (e) {
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
          console.log(a);
          console.log(i);
          querycoordinateconditions = "&minx=" + a[0] + "&maxx=" + i[0] + "&miny=" + a[1] + "&maxy=" + i[1];
          f = "&roadids=" + t + querycoordinateconditions;
          console.log(f);
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
            f += "&needdetail=0";
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
        te.on("drawstart", function (e) {
          console.log("begin draw path :)");
          N.clear();
          f = "";
          v = ""
        })
      }

      function ne(e) {
        var o;
        if (e != "LineString" && e != "Polygon") return;
        o = e;
        console.log(o);
        if (r) c.removeInteraction(r);
        r = new ol.interaction.Draw({
          source: I,
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
        q();
        X();
        var t;
        var n = 0;
        r.on("drawstart", function (e) {
          ie = e.feature;
          var r = e.coordinate;
          t = ie.getGeometry().on("change", function (e) {
            var o = e.target;
            var t;
            if (o instanceof ol.geom.Polygon) {
              c.removeEventListener("singleclick");
              c.removeEventListener("dblclick");
              t = me(o);
              r = o.getInteriorPoint().getCoordinates()
            } else if (o instanceof ol.geom.LineString) {
              t = de(o);
              r = o.getLastCoordinate()
            }
            ue.innerHTML = t;
            ge.setPosition(r)
          });
          c.on("singleclick", function (e) {
            if (m == d["measuredistance"] || m == d["measurearea"]) {
              console.log("i am in draws single click");
              ge.setPosition(e.coordinate);
              if (n == 0) {
                ue.innerHTML = "起点"
              }
              var o = new ol.geom.Point(e.coordinate);
              I.addFeature(new ol.Feature(o));
              ue.className = "tooltip tooltip-static";
              q();
              n++
            }
          });
          c.on("dblclick", function (e) {
            if (m == d["measuredistance"] || m == d["measurearea"]) {
              var o = new ol.geom.Point(e.coordinate);
              I.addFeature(new ol.Feature(o))
            }
          })
        }, this);
        r.on("drawend", function (e) {
          n = 0;
          ue.className = "tooltip tooltip-static";
          ge.setOffset([0, -7]);
          ie = null;
          ue = null;
          q();
          ol.Observable.unByKey(t);
          c.removeEventListener("singleclick")
        }, this)
      }

      var ae = true;
      var le = new ol.Sphere(6378137);
      var ie = new ol.Feature;
      var se;
      var ce;
      var ue;
      var ge;
      var fe = "请单击完待量测区域绘制";
      var ve = "请单击完成线段绘制";
      var de = function (e) {
        var o;
        if (ae) {
          var t = e.getCoordinates();
          o = 0;
          var r = c.getView().getProjection();
          for (var n = 0; n < t.length - 1; n++) {
            var a = ol.proj.transform(t[n], r, "EPSG:4326");
            var l = ol.proj.transform(t[n + 1], r, "EPSG:4326");
            o += le.haversineDistance(a, l)
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
      var me = function (e) {
        var o;
        if (ae) {
          var t = c.getView().getProjection();
          var r = e.clone().transform(t, "EPSG:4326");
          var n = r.getLinearRing(0).getCoordinates();
          o = Math.abs(le.geodesicArea(n))
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
      var ye = function (e) {
        if (e.dragging) {
          return
        }
        var o = "Click to start drawing";
        if (ie) {
          var t = ie.getGeometry();
          if (t instanceof ol.geom.Polygon) {
            o = fe
          } else if (t instanceof ol.geom.LineString) {
            o = ve
          }
        }
        se.innerHTML = o;
        ce.setPosition(e.coordinate);
        $(se).removeClass("hidden")
      };

      function pe(e, o) {
        var t = o[0], r = o[1];
        var n = false;
        for (var a = 0, l = e.length - 1; a < e.length; l = a++) {
          var i = e[a][0], s = e[a][1];
          var c = e[l][0], u = e[l][1];
          var g = s > r != u > r && t < (c - i) * (r - s) / (u - s) + i;
          if (g) n = !n
        }
        return n
      }

      function we(e, o, t) {
        if (t === 0) return false;
        var r = o[0] - e[0];
        var n = o[1] - e[1];
        return r * r + n * n <= t * t
      }

      var he = {};

      function xe(e) {
        if (he[e] != null) return;
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
        he[e] = t;
        c.addLayer(t)
      }

      var Se = {};
      Se["山东省县界"] = "shandong_xianjie.geojson";
      Se["山东省境内高速"] = "shandong_highway.geojson";
      Se["山东省境内国道"] = "shandong_guodao.geojson";
      Se["山东省省道"] = "shandong_shengdao.geojson";
      var Pe = {};
      Pe["山东省县界"] = 0;
      Pe["山东省境内高速"] = 0;
      Pe["山东省境内国道"] = 0;
      Pe["山东省省道"] = 0;

      function je(e) {
        return Pe[e]
      }

      function Ge(e) {
        if (he[e] != null) return;
        console.log(e);
        var o = "./geojson/" + Se[e];
        console.log(o);
        var t = new ol.layer.Vector({
          source: new ol.source.Vector({
            url: o,
            format: new ol.format.GeoJSON,
            dataProjection: "EPSG:4326",
            featureProjection: "EPSG:3857"
          })
        });
        he[e] = t;
        c.addLayer(t);
        Pe[e] = 1
      }

      function _e(e) {
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
        he[e] = o;
        c.addLayer(o);
        Pe[e] = 1
      }

      var be = function (e) {
        var o = e.get("name");
        var t = e.get("imgUrl");
        var r = e.get("id");
        p[r] = e;
        if (!o) o = "https://openlayers.org/en/v4.0.1/examples/data/icon.png";
        var n = 50;
        scale = n / 10;
        var a = null;
        if (!a) {
          a = new ol.style.Style({
            image: new ol.style.Icon({src: t}),
            text: new ol.style.Text({
              text: o,
              textBaseline: "middle",
              stroke: new ol.style.Stroke({color: "#fff", width: 2.5}),
              fill: new ol.style.Fill({color: "#333"})
            })
          })
        }
        return a
      };

      function removepoints(e, o) {
        var t = o.split(",");
        if (he[e] != null) {
          for (i = 0; i != t.length; ++i) {
            var r = t[i];
            he[e].getSource().removeFeature(p[r]);
            p[r] = null
          }
        }
      }

      function addpoints(e, o) {
        var t = new ol.layer.Vector({
          source: new ol.source.Vector({
            url: o,
            format: new ol.format.GeoJSON,
            dataProjection: "EPSG:4326",
            featureProjection: "EPSG:3857"
          }), style: be
        });
        he[e] = t;
        c.addLayer(t);
        t.setZIndex(98);
        Pe[e] = 1
      }

      function removelayer(e) {
        if (he[e]) {
          c.removeLayer(he[e]);
          he[e] = null;
          Pe[e] = 0
        }
      }

      function Ee() {
        var f = {};

        function o(e, o) {
          var t = $("#graph").val() + "-" + $("#color").val() + "-" + (o ? "1-" : "") + e.get("data");
          var r = f[t];
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
                var g = Math.round(c / l * 1e3);
                if (g > 0) {
                  r.push(new ol.style.Style({
                    text: new ol.style.Text({
                      text: g / 10 + "%",
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
          f[t] = r;
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
      }

      var Le = {LAYERS: "navigate:navigate", FORMAT: "image/png"};
      var Je = new ol.Feature;
      var Me = new ol.Feature;
      var Te = new ol.layer.Vector({source: new ol.source.Vector({features: [Je, Me]})});
      var ke = new ol.layer.Vector({source: new ol.source.Vector({features: [Je, Me]})});

      function Ce() {
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

      function switchlayer(e) {
        if (e == "local") {
          Ce();
          c.addLayer(V);
          V.setZIndex(0)
        } else if (e == "lantiandituvector") {
          Ce();
          c.addLayer(k);
          c.addLayer(C)
        } else if (e == "lantiandituraster") {
          Ce();
          c.addLayer(F);
          c.addLayer(Z)
        }
      }

      function switchoperation(e) {
        if (e == "measurearea") {
          B();
          c.on("pointermove", ye);
          ne("Polygon");
          m = d["measurearea"]
        } else if (e == "measuredistance") {
          B();
          c.on("pointermove", ye);
          ne("LineString");
          m = d["measuredistance"]
        } else if (e == "singletargetselection") {
          B();
          m = d["singletargetselection"]
        } else if (e == "boxselection") {
          B();
          m = d["boxselection"];
          U()
        } else if (e == "circleselection") {
          B();
          m = d["circleselection"];
          oe()
        } else if (e == "regionselection") {
          m = d["regionselection"];
          s = "";
          u = ""
        } else if (e == "drawpath") {
          if (m != d["drawpath"]) {
            m = d["drawpath"];
            B();
            re()
          }
        } else if (e == "drawpathminmax") {
          if (m != d["drawpathminmax"]) {
            m = d["drawpathminmax"];
            B();
            re()
          }
        } else if (e == "noopeartion") {
          m = d["noopeartion"];
          B()
        } else if (e == "zoomin") {
          n.setZoom(n.getZoom() - 1)
        } else if (e == "zoomout") {
          n.setZoom(n.getZoom() + 1)
        } else if (e == "modifycoordinate") {
          m = d["modifycoordinate"]
        }
      }

      initmap();
      // let oceanHeight = $(".oceans").height() * .8;
      let oceanHeight = document.documentElement.clientHeight
      oceanHeight = oceanHeight < 780 ? 780 * .8 : oceanHeight * .8
      $('.info_r_mid').css('margin-top', oceanHeight * .02)
      $('.info_r_bot').css('margin-top', oceanHeight * .02)
      $('.info_r_bot_bot').height(oceanHeight * .32 - 37 - 8)
      let info_r_botW = $('.info_r_bot_bot').width()
      let info_r_botH = $('.info_r_bot_bot').height()

      $(".bot_r").width(info_r_botW - 82 - 5 - 10 - 5)
      $(".bot_r").height(info_r_botH)

      let option = {
        color: ['#3398DB'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        // legend: {
        //   data:['台站','雷达','浮标','潜标','船舶']
        // },
        grid: {
          left: '3%',
          right: '1%',
          bottom: '1%',
          top: '4%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            data : ['在建', '在库', '在用', '待检', '送检', '待报废'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'雷达',
            type:'bar',
            barWidth: '30%',
            data:[3, 5, 2, 1, 6, 8],
            itemStyle: {
              //通常情况下：
              normal:{
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params){
                  var colorList = ['#5c6275','#4bceaf','#ffad1e','#79a0ef','#5c6275','#4bceaf'];
                  return colorList[params.dataIndex];
                }
              },
              //鼠标悬停时：
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
          }
        ]
      };
      let myChart_1 = echarts.init(document.getElementById("chart_1"));
      let myChart_2 = echarts.init(document.getElementById("chart_2"));
      let myChart_3 = echarts.init(document.getElementById("chart_3"));
      myChart_1.setOption(option)
      myChart_2.setOption(option)
      myChart_3.setOption(option)

      let option2 = {
        color: ['#3398DB'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '1%',
          bottom: '2%',
          top: '2%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            data : ['在建', '在库', '在用', '待检', '送检', '待报废'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'雷达',
            type:'bar',
            barWidth: '30%',
            data:[3, 5, 2, 1, 6, 8],
            itemStyle: {
              //通常情况下：
              normal:{
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params){
                  var colorList = ['#5c6275','#4bceaf','#ffad1e','#79a0ef','#5c6275','#4bceaf'];
                  return colorList[params.dataIndex];
                }
              },
              //鼠标悬停时：
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
          }
        ]
      };

      let myChart2 = echarts.init(document.getElementById('chart2'));

      myChart2.setOption(option2)

    },
    created(){

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .oceaLarge
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
                width 35px
                padding-top 6px
              p
                font-size 16px
                color #fff
                text-align center
                padding-top 2px
              &:hover
                background-color red

      .info_r
        width 39%
        height 100%
        margin-left 1%
        .info_r_top
          padding-top 5px
          box-sizing border-box
          height 32%
          background-color #fff
          border-radius 4px
          overflow hidden
          .chart_name
            height 26px
            margin-left 10px
            padding-bottom 12px
            text-align center
            .l
              width 95px
              height 26px
              background-color #2a3cba
              p
                font-size 14px
                line-height 26px
                color #fff
                font-weight 700
            .char_r
              width 80%
              .el-checkbox__input.is-checked+.el-checkbox__label
                color #fff
              .el-checkbox.is-bordered.el-checkbox--mini
                padding 3px 5px 0px 5px
          &>div
            width 100%
            height 80%
            #chart_1
              height 100%
              float left
              width 33%
            #chart_2
              height 100%
              float left
              width 33%
            #chart_3
              height 100%
              float left
              width 33%
        .info_r_mid
          height 32%
          padding 5px
          box-sizing border-box
          overflow hidden
          background-color #fff
          border-radius 4px
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
            text-align center
            height 100%
            padding-top 10px
            overflow hidden
        .info_r_bot
          height 32%
          padding 5px
          box-sizing border-box
          background-color #fff
          border-radius 4px
          overflow hidden
          .info_r_bot_top
            .info_r_bot_info
              width 150px
              height 27px
              margin-left 10px
              background-color #2a3cba
              color #fff
              font-size 14px
              font-weight 700
              line-height 27px
              text-align center
            .info_r_bot_r
              display inline-block
              width 65px
              height 27px
              margin-right 10px
              background #4bceaf
              color #fff
              font-size 14px
              line-height 27px
              text-align center
          .info_r_bot_bot
            margin-top 8px
            margin-left 10px
            position relative
            .bot_l
              position absolute
              top 50%
              margin-top -77px
              .info_r_bot_icon
                margin-right 2px
                li
                  width 39px
                  height 37px
                  background #ccc
                  text-align center
                  border-radius 5px
                  vertical-align middle
                  margin-top 2px
                  &:first-child
                    margin-top 0px
                  &:nth-child(1)
                    background-color #0babfe
                  &:nth-child(2)
                    background-color #79a0ef
                  &:nth-child(3)
                    background-color #6db821
                  &:nth-child(4)
                    background-color #5c6275
                  img
                    width 20px
                  p
                    color #fff
                    font-size 12px
                  &:hover
                    cursor pointer
                    background-color green
            .bot_r
              height 100%
              position absolute
              margin-left 86px
              #chart2
                width 100%
                height 100%
                background-color #ccc


</style>
