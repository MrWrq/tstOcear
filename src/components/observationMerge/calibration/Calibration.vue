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

            <!--<div class="icon_list">-->
              <!--<img src="./9.png" alt="">-->
              <!--<img src="./10.png" alt="">-->
              <!--<img src="./3.png" alt="">-->
              <!--<img src="./4.png" alt="">-->
              <!--<img src="./6.png" alt="">-->
              <!--<img src="./7.png" alt="">-->
              <!--<img src="./8.png" alt="">-->
            <!--</div>-->
            <div id="map" style="width: 100%;height: 100%;z-index:1;"></div>

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



            <!--<div class="icon_list">-->
              <!--<img src="./9.png" alt="">-->
              <!--<img src="./10.png" alt="">-->
              <!--<img src="./3.png" alt="">-->
              <!--<img src="./4.png" alt="">-->
              <!--<img src="./6.png" alt="">-->
              <!--<img src="./7.png" alt="">-->
              <!--<img src="./8.png" alt="">-->
            <!--</div>-->
            <div id="map1" style="width: 100%;height: 100%;z-index:1;"></div>
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
  import ol from '../../../../static/js/globalviewer'
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
      var layer = this.$layer;
      var serverip ='http://127.0.0.1';
      // var tiandituserverip="http://t0.tianditu.com";
      var tiandituserverip="http://10.0.4.72:81";
      var localmapip = "http://127.0.0.1:3000/tiles/mongo"
      // layer.open({type:2,area:[e,o],title:t,shadeClose:true,content:r})
      function globalviewercore(){var scale;var j;var c;var a;var r;var l=0;var s=0;var e="";var o="";var t="";var u="";var g="";var n=1;var f="";var v="";var d={};d["noopeartion"]=0;d["singletargetselection"]=1;d["modifycoordinate"]=2;d["boxselection"]=3;d["circleselection"]=4;d["regionselection"]=5;d["measuredistance"]=6;d["measurearea"]=6;d["drawpath"]=7;d["drawpathminmax"]=8;var m=d["noopeartion"];var y={};y["国防交通机构"]="HQ_JJ_JZ_J_JG_JGQK";y["国防交通专业保障队伍"]="HQ_JJ_JZ_J_DW_DWQK";y["公路重点桥梁"]="HQ_JJ_JZ_J_GL_QLQK";y["公路重点隧道"]="HQ_JJ_JZ_J_GL_SDQK";y["国防交通物资储备仓库"]="HQ_JJ_JZ_J_WZ_CKQK";y["公路收费站情况"]="HQ_JJ_JZ_J_GL_GSSF";y["交通重点目标"]="HQ_JJ_JZ_J_ZD_BZMB";y["公路加油站情况"]="HQ_JJ_JZ_J_GL_JYQK";y["高速公路服务区"]="HQ_JJ_JZ_J_GL_GSFW";var p={};function w(e,o,t,r){layer.open({type:0,area:[e,o],title:t,shadeClose:true,content:r})}function h(e,o,t){var r=e.toString(t||10);while(r.length<o){r="0"+r}return r}var x=new ol.layer.Tile({source:new ol.source.XYZ({url:serverip+":3000/Tiles/shandongxin/{z}/{x}/{y}.png"})});var S=new ol.layer.Tile({source:new ol.source.XYZ({url:serverip+":3000/Tiles/indonesia/{z}/{x}/{y}.png"})});var P=new ol.layer.Tile({source:new ol.source.XYZ({url:localmapip+"/{z}/{x}/{y}.png"})});var G=new ol.layer.Tile({source:new ol.source.XYZ({url:tiandituserverip+"/DataServer?T=vec_c&x={x}&y={y}&l={z}"}),projection:"EPSG:4326"});var b=new ol.layer.Tile({source:new ol.source.XYZ({tileUrlFunction:function(e){var o=e[0];var t=e[1];var r=-e[2]-1;console.log(t);console.log(r);console.log(o);return tiandituserverip+"/DataServer?T=vec_c&x={x}&y={y}&l={z}"}}),projection:"EPSG:3857"});var _=new ol.layer.Tile({source:new ol.source.XYZ({url:tiandituserverip+"/DataServer?T=vec_w&x={x}&y={y}&l={z}"}),projection:"EPSG:3857"});var E=new ol.layer.Tile({source:new ol.source.XYZ({url:tiandituserverip+"/DataServer?T=cva_c&x={x}&y={y}&l={z}"}),projection:"EPSG:3857"});var L=ol.proj.get("EPSG:4326");var J=L.getExtent();var M=ol.extent.getWidth(J)/256;var T=new Array(18);var k=new Array(18);for(var C=1;C<=18;++C){T[C]=M/Math.pow(2,C);k[C]=C}var F=new ol.layer.Tile({name:"offlinetiandituivector",type:"base",source:new ol.source.WMTS({url:tiandituserverip+"/vec_c/wmts",layer:"vec",matrixSet:"c",format:"tiles",projection:L,tileGrid:new ol.tilegrid.WMTS({origin:ol.extent.getTopLeft(J),resolutions:T,matrixIds:k}),style:"default"})});var Z=new ol.layer.Tile({name:"offlinetianditutext",type:"base",source:new ol.source.WMTS({url:tiandituserverip+"/cva_c/wmts",layer:"cva",matrixSet:"c",format:"tiles",projection:L,tileGrid:new ol.tilegrid.WMTS({origin:ol.extent.getTopLeft(J),resolutions:T,matrixIds:k}),style:"default"})});var V=new ol.layer.Tile({name:"offlinetiandituimage",type:"base",source:new ol.source.WMTS({url:tiandituserverip+"/img_c/wmts",layer:"img",matrixSet:"c",format:"tiles",projection:L,tileGrid:new ol.tilegrid.WMTS({origin:ol.extent.getTopLeft(J),resolutions:T,matrixIds:k}),name:"offlinetiandituimage",style:"default"})});var I=new ol.layer.Tile({name:"offlinetianditutext",type:"base",source:new ol.source.WMTS({url:tiandituserverip+"/cia_c/wmts",layer:"cia",matrixSet:"c",format:"tiles",projection:L,tileGrid:new ol.tilegrid.WMTS({origin:ol.extent.getTopLeft(J),resolutions:T,matrixIds:k}),style:"default"})});var O=new ol.layer.Tile({type:"base",source:new ol.source.XYZ({tileUrlFunction:function(e){var o="C"+h(e[1],8,16);var t="R"+h(-e[2]-1,8,16);var r="L"+h(e[0],2,10);return serverip+":3000/Tiles/world"+"/"+r+"/"+t+"/"+o+".png"},projection:"EPSG:3857"})});var D=new ol.source.Vector;var z=new ol.layer.Vector({source:D,style:new ol.style.Style({fill:new ol.style.Fill({color:"rgba(255,255,255,0.2)"}),stroke:new ol.style.Stroke({color:"#e21e0a",width:2}),image:new ol.style.Circle({radius:5,fill:new ol.style.Fill({color:"#ffcc33"})})})});var W=function(e){var o=e.getGeometry();var a=[new ol.style.Style({stroke:new ol.style.Stroke({color:"#ffcc33",width:2})})];o.forEachSegment(function(e,o){var t=o[0]-e[0];var r=o[1]-e[1];var n=Math.atan2(r,t);a.push(new ol.style.Style({geometry:new ol.geom.Point(o),image:new ol.style.Icon({src:"./resources/png/arrow.png",anchor:[.75,.5],rotateWithView:true,rotation:-n})}))});return a};var N=new ol.source.Vector;var Q=new ol.layer.Vector({source:N,style:W});var A=false;var Y=new WebSocket("ws://localhost:20186");Y.onerror=function(e){q(e)};Y.onopen=function(e){X(e)};Y.onclose=function(e){K(e)};Y.onmessage=function(e){H(e)};function H(e){}function X(e){A=true}function K(e){A=false}function q(e){}function B(e){if(A==false){Y=new WebSocket("ws://localhost:20186");Y.onopen=function(e){X(e)};Y.onclose=function(e){K(e)}}if(A==true){Y.send(e)}}this.initmap=function(e,o,t){a=new ol.View({center:ol.proj.transform([parseFloat(e),parseFloat(o)],"EPSG:4326","EPSG:3857"),minZoom:5,maxZoom:19,zoom:8});var r=new ol.layer.Tile({source:new ol.source.XYZ({url:"http://mt2.google.cn/vt/lyrs=y&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=G"}),projection:"EPSG:3857"});c=new ol.Map({target:t,layers:[O],view:a,logo:false,controls:ol.control.defaults({attributionOptions:{collapsible:false}})});var n=new ol.control.ScaleLine({units:"metric",target:"scalebar",className:"ol-scale-line"});c.addControl(n);c.addLayer(z);$(c.getViewport()).on("contextmenu",function(e){e.preventDefault();ae();m=d["noopeartion"]});c.on("moveend",function(e){var o=c.getView();var t=o.getZoom();var r=o.getCenter();var n=o.calculateExtent(c.getSize());if(n.length>3){var a=ol.proj.transform([n[0],n[1]],"EPSG:3857","EPSG:4326");var l=ol.proj.transform([n[2],n[3]],"EPSG:3857","EPSG:4326");console.log(a);console.log(l);var i="2dextent,"+a[0].toString()+","+a[1].toString()+","+l[0].toString()+","+l[1].toString();B(i)}});c.on("click",function(e){if(m==d["singletargetselection"]){U(e.pixel)}else if(m==d["regionselection"]){console.log("i am in region selection!");console.log(u);R(e.pixel);console.log(u);if(u!=""){f="&qhdm="+u;console.log(f);v=serverip+":3500/gettabledatas?tablename=";var o=g;o=o+"xxxx资源情况一览";layer.open({type:2,area:["1024px","600px"],title:o,shadeClose:true,content:"./popup/indextableboxselection.html"})}}else if(m==d["modifycoordinate"]){var t=ol.proj.transform(e.coordinate,"EPSG:3857","EPSG:4326");console.log(t);console.log(t[0]);console.log(t[1]);l=t[0];s=t[1];layer.open({type:2,area:["600px","300px"],title:"请确认您修改的坐标",shadeClose:true,content:"./popup/modifycoordinate.html"});m=d["noopeartion"]}})};var R=function(e){var t=[];c.forEachFeatureAtPixel(e,function(e,o){t.push(e)});if(t.length>0){for(j=0;j!=t.length;++j){var o=t[j].getGeometry();if(o instanceof ol.geom.MultiPolygon){u=t[j].get("CNTY_CODE");g=t[j].get("NAME")}}}};var U=function(e){var t=[];c.forEachFeatureAtPixel(e,function(e,o){t.push(e)});if(t.length>0){var o="";var r="";var n="";for(j=0;j!=t.length;++j){var a=t[j].getGeometry();if(a instanceof ol.geom.Point){o=t[j].get("tablename");r=t[j].get("id");n=t[j].get("type");console.log(r);console.log(n)}}if(o!=""&&r!=""){f="&uid="+r;v=serverip+":3500/getdetialdatas?tablename="+o;console.log("last point is");console.log(r);w("100px","100px","abcdefg","http://www.baidu.com")}}};var ee=function(e){var t=[];c.forEachFeatureAtPixel(e,function(e,o){t.push(e)});if(t.length>0){console.log(t.length);for(j=0;j!=t.length;++j){var o=t[j].getGeometry();if(o instanceof ol.geom.Point){}else if(o instanceof ol.geom.MultiPolygon){console.log("polygon!");console.log(t[j].get("CNTY_CODE"))}else if(o instanceof ol.geom.LineString){console.log("line!")}else if(o instanceof ol.geom.MultiLineString){console.log("line!");console.log(t[j].get("编号"))}}}};function oe(){var e=new ol.source.Vector({format:new ol.format.GeoJSON,projection:"EPSG:3857",url:"shan_dong_geo.json"});vectorLayerxingzhengquhua=new ol.layer.Vector({source:e});c.addLayer(vectorLayerxingzhengquhua)}this.jumptolocation=function(e,o){var t=[parseFloat(e),parseFloat(o)];var r=ol.proj.transform(t,"EPSG:4326","EPSG:3857");a.animate({center:r,duration:2e3})};var te=new Array;function re(){if(ye){ye.parentNode.removeChild(ye)}ye=document.createElement("div");ye.className="tooltip hidden";pe=new ol.Overlay({element:ye,offset:[15,0],positioning:"center-left"});c.addOverlay(pe)}function ne(){we=document.createElement("div");we.setAttribute("id","lengthLabel");we.className="tooltip tooltip-measure";he=new ol.Overlay({element:we,offset:[0,-15],positioning:"bottom-center"});c.addOverlay(he);te.push(he)}function ae(){if(ue){c.removeInteraction(ue);c.removeLayer(Q)}for(var e in te){c.removeOverlay(te[e]);te[e]=null}te=new Array;if(se)c.removeInteraction(se);if(le)c.removeInteraction(le);if(r){console.log("begin remove action");c.removeInteraction(r);c.removeOverlay(he);c.removeOverlay(pe)}D.clear()}var le=null;function ie(){ae();if(le)c.removeInteraction(le);le=new ol.interaction.DragBox({condition:ol.events.condition.platformModiferKeyOnly});c.addInteraction(le);le.on("boxend",function(){var e=le.getGeometry().getExtent();var o=ol.proj.transform([e[0],e[1]],"EPSG:3857","EPSG:4326");var t=ol.proj.transform([e[2],e[3]],"EPSG:3857","EPSG:4326");console.log(o);console.log(t);f="&minx="+o[0]+"&maxx="+t[0]+"&miny="+o[1]+"&maxy="+t[1];console.log(f);v=serverip+":3500/gettabledataswithregion?tablename=";var r="框选范围内";r=r+"xxxx资源情况一览";layer.open({type:2,area:["1024px","600px"],title:r,shadeClose:true,content:"./popup/indextableboxselection.html"})});le.on("boxstart",function(){D.clear();f="";v=""})}var se=null;function ce(){ae();if(se)c.removeInteraction(se);console.log("begin circle selection!");se=new ol.interaction.Draw({source:D,type:"Circle",freehand:true,style:new ol.style.Style({fill:new ol.style.Fill({color:"rgba(255,255,255,0.2)"}),stroke:new ol.style.Stroke({color:"rgba(0,0,0,0.5)",lineDash:[10,10],width:2}),image:new ol.style.Circle({radius:5,stroke:new ol.style.Stroke({color:"rgba(0,0,0,0.7)"}),fill:new ol.style.Fill({color:"rgba(255,255,255,0.2)"})})})});c.addInteraction(se);se.on("drawend",function(e){var o=e.feature.getGeometry();var t=o.getCenter();var r=ol.proj.transform(t,"EPSG:3857","EPSG:4326");var n=o.getRadius();v=serverip+":3500/gettabledataswithcircle?tablename=";f="&centerx="+r[0]+"&centery="+r[1]+"&radius="+n;console.log(f);var a="圈选范围内";a=a+"xxxx资源情况一览";layer.open({type:2,area:["1024px","600px"],title:a,shadeClose:true,content:"./popup/indextableboxselection.html"})});se.on("drawstart",function(e){D.clear();f="";v=""})}var ue=null;function ge(){ae();if(ue)c.removeInteraction(ue);console.log("begin draw path!");c.removeLayer(Q);c.addLayer(Q);ue=new ol.interaction.Draw({source:N,type:"LineString",freehand:true});c.addInteraction(ue);ue.on("drawend",function(e){var l=new Map;var o=e.feature.getGeometry();o.forEachSegment(function(e,o){var t=c.getPixelFromCoordinate(o);var r=[];c.forEachFeatureAtPixel(t,function(e,o){r.push(e)});if(r.length>0){for(j=0;j!=r.length;++j){var n="";var a=r[j].getGeometry();if(a instanceof ol.geom.LineString){n=r[j].get("编号")}else if(a instanceof ol.geom.MultiLineString){n=r[j].get("编号")}if(n!=null&&n!=""){l[n]=n}}}});console.log("begin output");var t="";for(var r in l){if(r.length>8)r=r.substr(0,r.length-6);r+="%";t+=",";t+=r}t=t.substr(1,t.length-1);console.log("end output");var n=o.getExtent();var a=ol.proj.transform([n[0],n[1]],"EPSG:3857","EPSG:4326");var i=ol.proj.transform([n[2],n[3]],"EPSG:3857","EPSG:4326");console.log(a);console.log(i);querycoordinateconditions="&minx="+a[0]+"&maxx="+i[0]+"&miny="+a[1]+"&maxy="+i[1];f="&roadids="+t+querycoordinateconditions;console.log(f);if(m==d["drawpath"]){v=serverip+":3500/gettabledataswithroadnos?tablename=";var s="路径";s=s+"周边保障资源情况一览";layer.open({type:2,area:["1024px","600px"],title:s,shadeClose:true,content:"./popup/indextablesupport.html"})}else if(m==d["drawpathminmax"]){v=serverip+":3500/getbridgedataswithregion?tablename=";f+="&needdetail=0";var s="路径";s=s+"通过能力分析";layer.open({type:2,area:["600px","500px"],title:s,shadeClose:true,content:"./popup/propertymin_max2.html"})}});ue.on("drawstart",function(e){console.log("begin draw path :)");N.clear();f="";v=""})}function fe(e){var o;if(e!="LineString"&&e!="Polygon")return;o=e;console.log(o);if(r)c.removeInteraction(r);r=new ol.interaction.Draw({source:D,type:o,style:new ol.style.Style({fill:new ol.style.Fill({color:"rgba(255,255,255,0.2)"}),stroke:new ol.style.Stroke({color:"rgba(0,0,0,0.5)",lineDash:[10,10],width:2}),image:new ol.style.Circle({radius:5,stroke:new ol.style.Stroke({color:"rgba(0,0,0,0.7)"}),fill:new ol.style.Fill({color:"rgba(255,255,255,0.2)"})})})});c.addInteraction(r);ne();re();var t;var n=0;r.on("drawstart",function(e){me=e.feature;var r=e.coordinate;t=me.getGeometry().on("change",function(e){var o=e.target;var t;if(o instanceof ol.geom.Polygon){c.removeEventListener("singleclick");c.removeEventListener("dblclick");t=je(o);r=o.getInteriorPoint().getCoordinates()}else if(o instanceof ol.geom.LineString){t=Pe(o);r=o.getLastCoordinate()}we.innerHTML=t;he.setPosition(r)});c.on("singleclick",function(e){if(m==d["measuredistance"]||m==d["measurearea"]){console.log("i am in draws single click");he.setPosition(e.coordinate);if(n==0){we.innerHTML="起点"}var o=new ol.geom.Point(e.coordinate);D.addFeature(new ol.Feature(o));we.className="tooltip tooltip-static";ne();n++}});c.on("dblclick",function(e){if(m==d["measuredistance"]||m==d["measurearea"]){var o=new ol.geom.Point(e.coordinate);D.addFeature(new ol.Feature(o))}})},this);r.on("drawend",function(e){n=0;we.className="tooltip tooltip-static";he.setOffset([0,-7]);me=null;we=null;ne();ol.Observable.unByKey(t);c.removeEventListener("singleclick")},this)}var ve=true;var de=new ol.Sphere(6378137);var me=new ol.Feature;var ye;var pe;var we;var he;var xe="请单击完待量测区域绘制";var Se="请单击完成线段绘制";var Pe=function(e){var o;if(ve){var t=e.getCoordinates();o=0;var r=c.getView().getProjection();for(var n=0;n<t.length-1;n++){var a=ol.proj.transform(t[n],r,"EPSG:4326");var l=ol.proj.transform(t[n+1],r,"EPSG:4326");o+=de.haversineDistance(a,l)}}else{o=Math.round(e.getLength()*100)/100}var i;if(o>1e3){i=Math.round(o/1e3*100)/100+" "+"km"}else{i=Math.round(o*100)/100+" "+"m"}return i};var je=function(e){var o;if(ve){var t=c.getView().getProjection();var r=e.clone().transform(t,"EPSG:4326");var n=r.getLinearRing(0).getCoordinates();o=Math.abs(de.geodesicArea(n))}else{o=e.getArea()}var a;if(o>1e4){a=Math.round(o/1e6*100)/100+" "+"km<sup>2</sup>"}else{a=Math.round(o*100)/100+" "+"m<sup>2</sup>"}return a};var Ge=function(e){if(e.dragging){return}var o="Click to start drawing";if(me){var t=me.getGeometry();if(t instanceof ol.geom.Polygon){o=xe}else if(t instanceof ol.geom.LineString){o=Se}}ye.innerHTML=o;pe.setPosition(e.coordinate);$(ye).removeClass("hidden")};this.insidePolygon=function(e,o){var t=o[0],r=o[1];var n=false;for(var a=0,l=e.length-1;a<e.length;l=a++){var i=e[a][0],s=e[a][1];var c=e[l][0],u=e[l][1];var g=s>r!=u>r&&t<(c-i)*(r-s)/(u-s)+i;if(g)n=!n}return n};this.pointInsideCircle=function(e,o,t){if(t===0)return false;var r=o[0]-e[0];var n=o[1]-e[1];return r*r+n*n<=t*t};var be={};this.addresourcelayer=function(e){if(be[e]!=null)return;var o=y[e];console.log(e);console.log(o);var t=new ol.layer.Vector({source:new ol.source.Vector({url:serverip+":3500/gettargets?tablename="+o,format:new ol.format.GeoJSON,dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"})});be[e]=t;c.addLayer(t)};var _e={};_e["山东省县界"]="shandong_xianjie.geojson";_e["山东省境内高速"]="shandong_highway.geojson";_e["山东省境内国道"]="shandong_guodao.geojson";_e["山东省省道"]="shandong_shengdao.geojson";var Ee={};Ee["山东省县界"]=0;Ee["山东省境内高速"]=0;Ee["山东省境内国道"]=0;Ee["山东省省道"]=0;function Le(e){return Ee[e]}function Je(e){if(be[e]!=null)return;console.log(e);var o="./geojson/"+_e[e];console.log(o);var t=new ol.layer.Vector({source:new ol.source.Vector({url:o,format:new ol.format.GeoJSON,dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"})});be[e]=t;c.addLayer(t);Ee[e]=1}this.addbaselayerexx=function(e){var o=new ol.layer.Vector({source:new ol.source.Vector({url:"http://127.0.0.1:3600/getfakegeojson",format:new ol.format.GeoJSON,dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"}),style:new ol.style.Style({fill:new ol.style.Fill({color:"rgba(255,255,255,0.2)"}),stroke:new ol.style.Stroke({color:"rgba(255,0,0,0.8)",width:2}),image:new ol.style.Circle({radius:5,fill:new ol.style.Fill({color:"rgba(255,0,0,0.8)"})})})});be[e]=o;c.addLayer(o);Ee[e]=1};var Me=function(e){var o=e.get("name");var t=e.get("imgUrl");var r=e.get("id");p[r]=e;if(!o)o="https://openlayers.org/en/v4.0.1/examples/data/icon.png";var n=50;scale=n/10;var a=null;if(!a){a=new ol.style.Style({image:new ol.style.Icon({src:t}),text:new ol.style.Text({text:o,textBaseline:"middle",stroke:new ol.style.Stroke({color:"#fff",width:2.5}),fill:new ol.style.Fill({color:"#333"})})})}return a};this.removepoints=function(e,o){var t=o.split(",");if(be[e]!=null){for(i=0;i!=t.length;++i){var r=t[i];be[e].getSource().removeFeature(p[r]);p[r]=null}}};this.addpoints=function(e,o){var t=new ol.layer.Vector({source:new ol.source.Vector({url:o,format:new ol.format.GeoJSON,dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"}),style:Me});be[e]=t;c.addLayer(t);t.setZIndex(98);Ee[e]=1};this.removelayer=function(e){if(be[e]){c.removeLayer(be[e]);be[e]=null;Ee[e]=0}};this.addpieview=function(){var f={};function o(e,o){var t=$("#graph").val()+"-"+$("#color").val()+"-"+(o?"1-":"")+e.get("data");var r=f[t];if(!r){var n=15;n=8*Math.sqrt(e.get("sum")/Math.PI);var a=e.get("data");n*=o?1.2:1;r=[new ol.style.Style({image:new ol.style.Chart({type:"pie",radius:n,data:a,rotateWithView:true,stroke:new ol.style.Stroke({color:"#fff",width:2})})})];if(o){var l=e.get("sum");var i=0;for(var s=0;s<a.length;s++){var c=a[s];var u=(2*i+c)/l*Math.PI-Math.PI/2;var g=Math.round(c/l*1e3);if(g>0){r.push(new ol.style.Style({text:new ol.style.Text({text:g/10+"%",offsetX:Math.cos(u)*(n+3),offsetY:Math.sin(u)*(n+3),textAlign:u<Math.PI/2?"left":"right",textBaseline:"middle",stroke:new ol.style.Stroke({color:"#fff",width:2.5}),fill:new ol.style.Fill({color:"#333"})})}))}i+=c}}}f[t]=r;return r}var e=c.getView().calculateExtent(c.getSize());var t=[];for(var r=0;r<30;++r){var n,a=0,l=[];for(var i=0;i<4;i++){n=Math.round(8*Math.random());l.push(n);a+=n}t[r]=new ol.Feature({geometry:new ol.geom.Point([e[0]+(e[2]-e[0])*Math.random(),e[1]+(e[3]-e[1])*Math.random()]),data:l,sum:a})}var s=new ol.layer.Vector({name:"Vecteur",source:new ol.source.Vector({features:t}),renderOrder:ol.ordering.yOrdering(),style:function(e){return o(e)}});c.addLayer(s);s.setZIndex(99)};var Te={LAYERS:"navigate:navigate",FORMAT:"image/png"};var ke=new ol.Feature;var Ce=new ol.Feature;var Fe=new ol.layer.Vector({source:new ol.source.Vector({features:[ke,Ce]})});var Ze=new ol.layer.Vector({source:new ol.source.Vector({features:[ke,Ce]})});function Ve(){var o=[];c.getLayers().forEach(function(e){if(e.get("type")=="base"){o.push(e)}});for(var e=0;e<o.length;e++){c.removeLayer(o[e])}o.splice(0,o.length)}this.switchlayer=function(e){if(e=="local"){Ve();c.addLayer(O);O.setZIndex(0)}else if(e=="lantiandituvector"){Ve();c.addLayer(F);c.addLayer(Z)}else if(e=="lantiandituraster"){Ve();c.addLayer(V);c.addLayer(I)}};this.switchoperation=function(e){if(e=="measurearea"){ae();c.on("pointermove",Ge);fe("Polygon");m=d["measurearea"]}else if(e=="measuredistance"){ae();c.on("pointermove",Ge);fe("LineString");m=d["measuredistance"]}else if(e=="singletargetselection"){ae();m=d["singletargetselection"]}else if(e=="boxselection"){ae();m=d["boxselection"];ie()}else if(e=="circleselection"){ae();m=d["circleselection"];ce()}else if(e=="regionselection"){m=d["regionselection"];u="";g=""}else if(e=="drawpath"){if(m!=d["drawpath"]){m=d["drawpath"];ae();ge()}}else if(e=="drawpathminmax"){if(m!=d["drawpathminmax"]){m=d["drawpathminmax"];ae();ge()}}else if(e=="noopeartion"){m=d["noopeartion"];ae()}else if(e=="zoomin"){a.setZoom(a.getZoom()-1)}else if(e=="zoomout"){a.setZoom(a.getZoom()+1)}else if(e=="modifycoordinate"){m=d["modifycoordinate"]}}}

      var g_core = new globalviewercore();
      g_core.initmap(31.46357,42.4885,'map');
      g_core.addpoints('groupa','http://localhost:3000/point.txt');
      // g_core.removepoints('groupa','abcdefg-0123450');
      g_core.switchlayer('lantiandituraster')
      g_core.switchoperation('singletargetselection');

      var g_core1 = new globalviewercore();
      g_core1.initmap(31.46357,40.4885,'map1');
      g_core1.addpoints('groupa','http://localhost:3000/point.txt');
      // g_core1.switchlayer('lantiandituraster')
      g_core1.switchoperation('singletargetselection');







      //删除点 (点组名称,uid)
      // function removedefinepoint()
      // {
      //   var tmpuid='abcdefg-0123450,abcdefg-0123451,abcdefg-0123452';
      //   g_core.removepoints('groupa',tmpuid);
      // }
      //
      // //切换坐标 参数：经度、纬度
      // function beginjump()
      // {
      //   g_core.jumptolocation(112,41);
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
