<template>
  <div class="baseInstMainInfo">
    <div class="w">
      <div class="ocea_info">
        <div class="l info_l">
          <div class="ocea_info_name">
            <p>观测装备检定校准统计地图<i class="el-icon-caret-right"></i></p>
          </div>
          <div class="info_l_list">
            <ul>
              <li><img src="./fangwu.png" alt="">
                <p>海洋站</p></li>
              <li><img src="./ocea_02.png" alt="">
                <p>浮标</p></li>
              <li><img src="./ocea_04.png" alt="">
                <p>雷达</p></li>
              <li><img src="./18.png" alt="">
                <p>潜标</p></li>
              <!--<li><img src="./ocea_06.png" alt=""><p>志愿船</p></li>-->
              <!--<li></li>-->
            </ul>
          </div>
          <div class="pointMessage"></div>
          <div id="map" class="map"></div>
        </div>
        <div class="l info_r clearfix">
          <div class="info_r_top">
            <div class="info_r_top_info">
              <p>多维度选择区<i class="el-icon-caret-right"></i></p>
            </div>
            <div class="line"></div>

            <div class="info_r_top_tab">
              <!--<div class="tob_radio_1">-->
              <!--<label class="radio_1 tit">设备类型</label>-->
              <!--<input type="radio" name="type" value="marinestationinfo" id="1">-->
              <!--<label class="radio_1" for="1">海洋站</label>-->
              <!--<input type="radio" name="type" value="buoyinfo" id="2">-->
              <!--<label class="radio_1" for="2">浮标</label>-->
              <!--<input type="radio" name="type" value="xbandradarinfo" id="3">-->
              <!--<label class="radio_1" for="3">雷达</label>-->
              <!--<input type="radio" name="type" value="volunteership" id="4">-->
              <!--<label class="radio_1" for="4">志愿船</label>-->

              <!--</div>-->
              <div class="tob_radio_2">
                <label class="radio_1 tit">观测要素</label>
                <input type="radio" name="view" value="1" id="5">
                <label class="radio_1" for="5">水文</label>
                <input type="radio" name="view" value="2" id="6">
                <label class="radio_1" for="6">气象</label>
                <input type="radio" name="view" value="3" id="7">
                <label class="radio_1" for="7">化学</label>
                <input type="radio" name="view" value="4" id="8">
                <label class="radio_1" for="8">其他</label>
              </div>
              <div class="tob_radio_3">
                <label class="radio_1 tit">海域</label>
                <input type="radio" name="sea" value="北海" id="9">
                <label class="radio_1" for="9">北海</label>
                <input type="radio" name="sea" value="东海" id="10">
                <label class="radio_1" for="10">东海</label>
                <input type="radio" name="sea" value="南海" id="11">
                <label class="radio_1" for="11">南海</label>

              </div>
              <div class="tob_radio_4">
                <label class="radio_1 tit">管理状态</label>
                <input type="radio" name="state" value="1" id="12">
                <label class="radio_1" for="12">检定校准</label>
                <input type="radio" name="state" value="2" id="13">
                <label class="radio_1" for="13">维护保养</label>
                <input type="radio" name="state" value="3" id="14">
                <label class="radio_1" for="14">报废处置</label>
                <input type="radio" name="state" value="4" id="15">
                <label class="radio_1" for="15">设备巡检</label>
              </div>
              <div class="tob_radio_detail">
                <ul>
                  <li><img src="./fang2.png" alt=""><span>海洋站</span><i>6</i></li>
                  <li><img src="./fang3.png" alt=""><span>雷达</span><i>6</i></li>
                  <li><img src="./fang4.png" alt=""><span>浮标</span><i>6</i></li>
                  <li><img src="./fnag5.png" alt=""><span>潜标</span><i>6</i></li>
                  <li><img src="./fang6.png" alt=""><span>志愿船</span><i>6</i></li>

                </ul>
              </div>


              <!--<div class="singleElTableDiv">-->
              <!--<div class="checkTop"><p>设备类型</p></div>-->
              <!--<div class="checkDv">-->
              <!--<el-radio-group size="small" v-model="radioType" @change="getType">-->
              <!--&lt;!&ndash;<el-radio label="all" >全部</el-radio>&ndash;&gt;-->
              <!--<el-radio label="buoyinfo">浮标</el-radio>-->
              <!--<el-radio label="marinestationinfo">台站</el-radio>-->
              <!--<el-radio label="xbandradarinfo">雷达</el-radio>-->
              <!--<el-radio label="volunteership">志愿船</el-radio>-->
              <!--</el-radio-group>-->
              <!--</div>-->
              <!--</div>-->
              <!--<div class="singleElTableDiv">-->
              <!--<div class="checkTop"><p>观测要素</p></div>-->
              <!--<div class="checkDv">-->
              <!--<el-radio-group size="small" v-model="radioView" @change="getView">-->
              <!--<el-radio label="1">水文</el-radio>-->
              <!--<el-radio label="2">气象</el-radio>-->
              <!--<el-radio label="3">化学</el-radio>-->
              <!--<el-radio label="4">其他</el-radio>-->
              <!--</el-radio-group>-->
              <!--</div>-->
              <!--</div>-->
              <!--<div class="singleElTableDiv">-->
              <!--<div class="checkTop"><p>区域</p></div>-->
              <!--<div class="checkDv">-->
              <!--<el-radio-group size="small" v-model="radioSea"  @change="getSea">-->
              <!--<el-radio label="北海">北海</el-radio>-->
              <!--<el-radio label="东海">东海</el-radio>-->
              <!--<el-radio label="南海">南海</el-radio>-->
              <!--</el-radio-group>-->
              <!--</div>-->
              <!--</div>-->

              <!--<div class="singleElTableDiv_last">-->
              <!--<div class="checkTop"><p>管理状态</p></div>-->
              <!--<div class="checkDv">-->
              <!--<el-radio-group size="small" v-model="radioState" @change="getState">-->
              <!--<el-radio label="1">鉴定校准</el-radio>-->
              <!--<el-radio label="2">维护保养</el-radio>-->
              <!--<el-radio label="3">报废处置</el-radio>-->
              <!--<el-radio label="4">年度巡检</el-radio>-->
              <!--</el-radio-group>-->
              <!--</div>-->
              <!--</div>-->


              <!--<div class="singleElTableDiv_last">-->
              <!--<div class="checkTop"><p>生产厂家</p></div>-->
              <!--<div class="checkDv">-->
              <!--<el-radio-group size="small" v-model="radio5">-->
              <!--<el-radio label="1"  border >国家海洋技术中心</el-radio>-->
              <!--<el-radio label="2" border >海华技术开发中心</el-radio>-->
              <!--<el-radio label="3" border >山仪所</el-radio>-->
              <!--</el-radio-group>-->
              <!--</div>-->
              <!--</div>-->

            </div>
          </div>
          <div class="info_r_mid">

            <div class="info_r_top_info">
              <p>查询结构列表<i class="el-icon-caret-right"></i></p>
            </div>
            <div class="line"></div>

            <div class="info_r_mid_tab">
              <el-table
                :data="showNum2"
                style="width: 100%;max-height: 100%"
                stripe
                size="mini"
                :height="guanceH"
                header-align="center"
                :row-class-name="tableRowClassName">
                <el-table-column
                  align="center"
                  type="index"
                  sortable
                  width="54"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="typename"
                  align="center"
                  width="57"
                  label="设备类型">
                </el-table-column>
                <el-table-column
                  prop="name"
                  align="center"
                  label="设备名称">
                </el-table-column>
                <el-table-column
                  prop="devicenumber"
                  align="center"
                  label="设备编号">
                </el-table-column>
                <el-table-column
                  prop="seaarea"
                  align="center"
                  label="区域">
                </el-table-column>
                <el-table-column
                  prop="useunit"
                  align="center"
                  label="管理单位">
                </el-table-column>
                <el-table-column
                  prop="state"
                  align="center"
                  label="运行状态">
                  <template slot-scope="scope">
                    <el-tag size="smail"
                            style="padding: 0px;margin: 0px;width: 100%;border:0px;color: #00A34C;background-color: transparent;">
                      &bull;{{scope.row.state}}
                    </el-tag>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>

          <!--detail-->
          <div class="detail" ref="detail">
            <i @click="clockDetail" class="el-icon-close detailClose" style=""></i>
            <div class="det_name"><p>浮标详情表</p></div>

            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="基本信息" name="first">
                <div class="first_count">
                  <div class="det_main">
                    <div class="det_imgTop">
                      <div class="imtTop_l"><img src="/static/img/biao.jpg" width="100%" alt=""></div>
                      <div class="imtTop_r">
                        <div class="top_r_l">
                          <p :title="buoyinfo.name"><span class="span_key">浮标名称</span><span class="span_val">{{buoyinfo.name}}</span>
                          </p>
                          <p :title="buoyinfo.specificationModel"><span class="span_key">浮标型号</span><span
                            class="span_val">{{buoyinfo.specificationModel}}</span></p>
                          <p :title="inspectionbuoyinfo.communicationType"><span class="span_key">通信类型</span><span
                            class="span_val">{{inspectionbuoyinfo.communicationType}}</span></p>
                          <p :title="buoyinfo.typeSize"><span class="span_key">尺寸</span><span class="span_val">{{buoyinfo.typeSize}}</span>
                          </p>
                          <p :title="inspectionbuoyinfo.factoryTime"><span class="span_key">出厂时间</span><span
                            class="span_val">{{inspectionbuoyinfo.factoryTime}}</span></p>
                          <p :title="inspectionbuoyinfo.lastLayingTime"><span class="span_key">最近布放时间</span><span
                            class="span_val">{{inspectionbuoyinfo.lastLayingTime}}</span></p>

                        </div>
                        <div class="top_r_r">
                          <p :title="buoyinfo.stationNumber"><span class="span_key">浮标站位号</span><span class="span_val">{{buoyinfo.stationNumber}}</span>
                          </p>
                          <p :title="buoyinfo.typeUse"><span class="span_key">用途类型</span><span class="span_val">{{buoyinfo.typeUse}}</span>
                          </p>
                          <p :title="inspectionbuoyinfo.observableParam"><span class="span_key">可观测参数</span><span
                            class="span_val">{{inspectionbuoyinfo.observableParam}}</span></p>
                          <p :title="inspectionbuoyinfo.material"><span class="span_key">主要材质</span><span
                            class="span_val">{{inspectionbuoyinfo.material}}</span></p>
                          <p title="是"><span class="span_key">是否在位</span><span class="span_val">是</span></p>
                          <p :title="buoyinfo.equipmentPlacementPosition"><span class="span_key">布放位置</span><span
                            class="span_val">{{buoyinfo.equipmentPlacementPosition}}</span></p>
                        </div>

                      </div>

                    </div>
                    <div class="det_imgBot">
                      <div class="bot_b_l">
                        <p :title="buoyinfo.usedeptNameTwo"><span class="span_key">用户单位</span><span class="span_val">{{buoyinfo.usedeptNameTwo}}</span>
                        </p>
                        <p :title="inspectionbuoyinfo.userAddress"><span class="span_key">用户单位地址</span><span
                          class="span_val">{{inspectionbuoyinfo.userAddress}}</span></p>
                        <p :title="inspectionbuoyinfo.contacts"><span class="span_key">负责人</span><span class="span_val">{{inspectionbuoyinfo.contacts}}</span>
                        </p>
                        <p :title="inspectionbuoyinfo.phone"><span class="span_key">电话</span><span class="span_val">{{inspectionbuoyinfo.phone}}</span>
                        </p>

                      </div>
                      <div class="bot_b_r">
                        <p :title="inspectionbuoyinfo.factory"><span class="span_key">生产/代理单位</span><span
                          class="span_val">{{inspectionbuoyinfo.factory}}</span></p>
                        <p :title="inspectionbuoyinfo.factoryContacts"><span class="span_key">负责人</span><span
                          class="span_val"> 无<!--{{inspectionbuoyinfo.factoryContacts}}--></span></p>
                        <p :title="inspectionbuoyinfo.factoryPhone"><span class="span_key">电话</span><span
                          class="span_val">无<!-- {{inspectionbuoyinfo.factoryPhone}}--></span></p>
                      </div>

                    </div>
                  </div>
                  <div class="det_dongtai">
                    <div class="det_title">浮标站动态信息</div>
                    <div class="dongtai_top">
                      <div class="dong_top_left">
                        <p :title="inspectionbuoyinfo.createTime"><span class="span_key">状态信息获取时间</span><span
                          class="span_val">{{inspectionbuoyinfo.createTime}}</span></p>
                        <p><span class="span_key">数据存储</span><span
                          class="span_val">{{inspectionbuoyinfo.dataStorage}}</span></p>
                      </div>
                      <div class="dong_top_right">
                        <p :title="inspectionbuoyinfo.currentPosition"><span class="span_key">当前位置</span><span
                          class="span_val">{{inspectionbuoyinfo.currentPosition}}</span></p>
                        <p :title="buoyinfo.currentState"><span class="span_key">当前状态</span><span class="span_val colr"><i
                          class="dian"></i>&nbsp;&nbsp;<span class="">{{buoyinfo.currentState}}</span></span></p>
                      </div>
                    </div>

                    <div class="dongtai_bot">
                      <div class="dong_top_left">
                        <p><span class="span_key">舱门状态</span><span class="span_val">关闭</span></p>
                        <p><span class="span_key">有无进水</span><span
                          class="span_val">{{inspectionbuoyinfo.inflowState}}</span></p>
                        <p><span class="span_key">最低电压</span><span class="span_val">16V
                          <!--{{inspectionbuoyinfo.minVoltage}}--></span></p>
                        <p><span class="span_key">姿态斜度</span><span class="span_val">10°</span></p>
                        <p><span class="span_key">姿态方位</span><span class="span_val">20°</span></p>
                      </div>

                      <div class="dong_top_right">
                        <p><span class="span_key">主要通信方式</span><span class="span_val">{{inspectionbuoyinfo.communicationStateA}}</span>
                        </p>
                        <p><span class="span_key">备用通信方式</span><span class="span_val">{{inspectionbuoyinfo.communicationStateB}}</span>
                        </p>
                        <p><span class="span_key">有效接收率</span><span class="span_val">{{inspectionbuoyinfo.rateA}}</span>
                        </p>
                        <p><span class="span_key">运行模式</span><span class="span_val">正常</span></p>
                        <p><span class="span_key">是否位移</span><span class="span_val">否</span></p>

                      </div>

                      <!--<div class="dong_bot_l">-->
                      <!--<div class="bot_l_top">-->
                      <!--<div class="bot_l_top_info">-->
                      <!--<p :title="inspectionbuoyinfo.minVoltage"><span class="span_val">{{inspectionbuoyinfo.minVoltage}}</span></p>-->
                      <!--<p><span class="span_key">电池电压</span></p>-->
                      <!--</div>-->
                      <!--</div>-->
                      <!--<div class="bot_l_bot">-->
                      <!--<div class="bot_l_bot_l">-->
                      <!--<p><span class="span_key">锚灯状态</span></p>-->
                      <!--<p :title="inspectionbuoyinfo.lampState"><span class="span_val">{{inspectionbuoyinfo.lampState}}</span></p>-->
                      <!--</div>-->
                      <!--<div class="bot_l_bot_r">-->
                      <!--<p><span class="span_key">开舱进水状态</span></p>-->
                      <!--<p :title="inspectionbuoyinfo.inflowState"><span class="span_val">{{inspectionbuoyinfo.inflowState}}</span></p>-->
                      <!--</div>-->
                      <!--</div>-->
                      <!--</div>-->
                      <!--<div class="dong_bot_r">-->
                      <!--<div class="dong_bot_r_top">-->
                      <!--<p class="bot_r_title"><span class="span_key">通信状态</span></p>-->
                      <!--</div>-->
                      <!--<div class="dong_bot_r_bot">-->
                      <!--<div class="bot_l_bot_l">-->
                      <!--<p><span class="span_key">通信1类型</span></p>-->
                      <!--<p :title="inspectionbuoyinfo.communicationStateA"><span class="span_val">{{inspectionbuoyinfo.communicationStateA}}</span></p>-->
                      <!--<p><span class="span_key">当日接收率</span></p>-->
                      <!--<p :title="inspectionbuoyinfo.rateA"><span class="span_val">{{inspectionbuoyinfo.rateA}}</span></p>-->
                      <!--</div>-->
                      <!--<div class="bot_l_bot_r">-->
                      <!--<p><span class="span_key">通信2类型</span></p>-->
                      <!--<p :title="inspectionbuoyinfo.communicationStateB"><span class="span_val">{{inspectionbuoyinfo.communicationStateB}}</span></p>-->
                      <!--<p><span class="span_key">当日接收率</span></p>-->
                      <!--<p :title="inspectionbuoyinfo.rateB"><span class="span_val">{{inspectionbuoyinfo.rateB}}</span></p>-->
                      <!--</div>-->
                      <!--</div>-->
                      <!--</div>-->

                    </div>
                  </div>

                  <div class="det_chuanganqi">
                    <div class="det_title">搭载传感器</div>
                    <el-table
                      :data="detSensors"
                      style="width: 100%;max-height: 100%"
                      fixed
                      stripe
                      :height="tabHeight"
                      size="mini"
                      header-align="center">
                      <el-table-column
                        prop="xuhao"
                        align="center"
                        type="index"
                        width="55"
                        label="序号">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        align="center"
                        label="名称">
                      </el-table-column>
                      <el-table-column
                        prop="manufacturer"
                        align="center"
                        label="厂家/型号">
                      </el-table-column>

                      <el-table-column
                        prop="deviceNumber"
                        align="center"
                        label="编号">
                      </el-table-column>
                      <!--<el-table-column-->
                      <!--prop="handOverTime"-->
                      <!--align="center"-->
                      <!--sortable-->
                      <!--label="出厂日期">-->
                      <!--</el-table-column>-->
                      <el-table-column
                        align="center"
                        label="运行状态">
                        <template slot-scope="scope">
                          <i class=""></i><span
                          :class="scope.row.isNormal=='正常'?'nor':'err'">{{scope.row.isNormal}}</span>
                        </template>
                      </el-table-column>
                    </el-table>

                  </div>
                </div>
              </el-tab-pane>

              <el-tab-pane label="安装验收" name="second">
                <div class="second_count">
                  <div class="second_shilie">
                    <div class="det_title">基本信息</div>
                    <div class="dongtai_top">
                      <div class="dong_top_left">
                        <p title="大浮标"><span class="span_key">设备名称</span><span class="span_val">大浮标</span></p>
                        <p title="MF14003"><span class="span_key">站位号</span><span class="span_val">MF14003</span></p>
                        <p title="大浮标"><span class="span_key">日期</span><span class="span_val">2018.6.6</span></p>
                        <p title="大浮标"><span class="span_key">参加人员</span><span class="span_val">张三</span></p>
                      </div>
                      <div class="dong_top_right">
                        <p title="大浮标"><span class="span_key">设备编号</span><span class="span_val">SF301</span></p>
                        <p title="北海区青岛中心站小麦岛海洋站"><span class="span_key">安装地点</span><span class="span_val colr"><i
                          class="dian"></i>&nbsp;&nbsp;<span class="">北海区青岛中心站小麦岛海洋站</span></span></p>
                        <p title="19°52.39′N，115°52.39′E"><span class="span_key">安装位置</span><span class="span_val">19°52.39′N，115°52.39′E</span>
                        </p>
                        <p title="大浮标"><span class="span_key">负责人</span><span class="span_val colr"><i class="dian"></i>&nbsp;&nbsp;<span
                          class="">李四</span></span></p>
                      </div>
                    </div>

                  </div>

                  <!--<div class="second_shilie second_2">-->
                  <!--<div class="det_title">状态信息</div>-->
                  <!--&lt;!&ndash;<img src="./second.jpg" width="100%" style="padding-top: 20px" alt="">&ndash;&gt;-->
                  <!--<div class="tongxin"><img src="./detail_01.png" width="44"><p class="one">通讯状态</p><p class="two">北斗卫星</p></div>-->
                  <!--<div class="jieshou"><img src="./detail_02.png" alt="44"><p class="one">数据接收状态</p><p class="two">有效接收率：100%</p></div>-->
                  <!--<div class="cunchu"><img src="./detail_03.png" alt="44"><p class="one">存储状态</p><p class="two">良好</p></div>-->
                  <!--</div>-->

                  <div class="second_shilie second_3">
                    <div class="det_title">安装过程</div>
                    <div class="second_bot">
                      <div class="second_bot_t bot_m_1">
                        <div class="bot_title">依据资料</div>
                        <div class="bot_count">
                          <p>《海洋观测仪器设备运行维护责任制度（试行）》</p>
                          <p>《XXX型浮标使用说明书》</p>
                          <p>《XXX单位XX项目设备购置合同》</p>
                        </div>
                      </div>
                      <div class="second_bot_m bot_m_2">
                        <div class="bot_title">过程描述</div>
                        <div class="bot_count">
                          <p>详见观测记录</p>

                        </div>
                      </div>
                      <div class="second_bot_m bot_m_3">
                        <div class="bot_title">现场图片</div>
                        <div class="bot_count">

                        </div>
                      </div>
                      <div class="second_bot_m bot_m_4">
                        <div class="bot_title">安装检查</div>
                        <div class="bot_count">
                          <div class="l"><p>通讯状态 <i class="el-icon-success"></i></p></div>
                          <div class="l"><p>数据接收状态 <i class="el-icon-success"></i></p></div>
                          <div class="l"><p>存储状态 <i class="el-icon-success"></i></p></div>
                        </div>
                      </div>
                      <div class="second_bot_b bot_m_5">
                        <div class="bot_title">结论</div>
                        <div class="bot_count">
                          <p>安装过程已完成，详见安装验收报告，目前正在开展试运行。</p>

                        </div>
                      </div>
                    </div>

                  </div>


                </div>
              </el-tab-pane>
              <el-tab-pane label="检定校准" name="third">
                <div class="third_count third_data">
                  <div class="second_shilie">
                    <div class="det_title">待检定传感器</div>
                    <div class="det_title_img"><img src="./bangzhu.jpg" width=100% alt=""></div>
                    <el-table
                      :data="jianding"
                      style="width: 100%;max-height: 100%"
                      fixed
                      :height="jiandingTabHeight"
                      stripe
                      size="mini"
                      header-align="center">
                      <el-table-column
                        prop="xuhao"
                        align="center"
                        type="index"
                        width="40"
                        label="序号">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        align="center"
                        label="名称">
                      </el-table-column>
                      <el-table-column
                        prop="changjia"
                        align="center"
                        label="厂家/型号">
                      </el-table-column>

                      <el-table-column
                        prop="riqi"
                        align="center"
                        label="检定日期">
                      </el-table-column>
                      <el-table-column
                        prop="fuzeren"
                        align="center"
                        width="55"
                        label="负责人">
                      </el-table-column>
                      <el-table-column
                        prop="tel"
                        align="center"
                        label="联系方式">
                      </el-table-column>
                      <el-table-column
                        align="center"
                        label="状态">
                        <template slot-scope="scope">
                          <span style="color:#F17575">{{scope.row.zhuangtai}}</span>
                        </template>
                      </el-table-column>
                    </el-table>

                  </div>
                </div>

              </el-tab-pane>
              <el-tab-pane label="维护保养" name="fourth">
                <div class="third_count fourth_count">
                  <div class="second_shilie">
                    <div class="det_title">临近维护保养设备</div>
                    <el-table
                      :data="weihubaoyang"
                      style="width: 100%;max-height: 100%"
                      fixed
                      stripe
                      :height="tabHeight"
                      size="mini"
                      header-align="center">
                      <el-table-column
                        prop="xuhao"
                        align="center"
                        type="index"
                        width="55"
                        label="序号">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        align="center"
                        label="保养项目">
                      </el-table-column>
                      <el-table-column
                        prop="riqi"
                        align="center"
                        label="保养时间">
                      </el-table-column>

                      <el-table-column
                        prop="fuzeren"
                        align="center"
                        label="负责人">
                      </el-table-column>
                      <el-table-column
                        prop="tel"
                        align="center"
                        label="联系方式">
                      </el-table-column>
                      <!--<el-table-column-->
                      <!--align="center"-->
                      <!--label="操作">-->
                      <!--<template slot-scope="scope">-->
                      <!--<i class=""></i><span :class="scope.row.isNormal==1?'nor':'err'">{{scope.row.isNormal==1?"正常":"异常"}}</span>-->
                      <!--</template>-->
                      <!--</el-table-column>-->
                    </el-table>

                  </div>

                  <div class="second_shilie">
                    <div class="det_title">历次维护保养信息</div>
                    <el-table
                      :data="weihubaoyang2"
                      style="width: 100%;max-height: 100%"
                      fixed
                      stripe
                      :height="tabHeight"
                      size="mini"
                      header-align="center">
                      <el-table-column
                        prop="xuhao"
                        align="center"
                        type="index"
                        width="55"
                        label="序号">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        align="center"
                        label="保养项目">
                      </el-table-column>
                      <el-table-column
                        prop="riqi"
                        align="center"
                        label="保养时间">
                      </el-table-column>

                      <el-table-column
                        prop="fuzeren"
                        align="center"
                        label="经办人">
                      </el-table-column>
                      <el-table-column
                        prop="tel"
                        align="center"
                        label="联系方式">
                      </el-table-column>
                      <!--<el-table-column-->
                      <!--align="center"-->
                      <!--label="操作">-->
                      <!--<template slot-scope="scope">-->
                      <!--<i class=""></i><span :class="scope.row.isNormal==1?'nor':'err'">{{scope.row.isNormal==1?"正常":"异常"}}</span>-->
                      <!--</template>-->
                      <!--</el-table-column>-->
                    </el-table>

                  </div>

                </div>
              </el-tab-pane>
              <el-tab-pane label="故障处置" name="five">
                <div class="third_count five_count">
                  <div class="second_shilie">
                    <div class="det_title">待处理故障</div>
                    <el-table
                      :data="guzhang_1"
                      style="width: 100%;max-height: 100%"
                      fixed
                      stripe
                      :height="tabHeight"
                      size="mini"
                      header-align="center">
                      <el-table-column
                        prop="xuhao"
                        align="center"
                        type="index"
                        width="55"
                        label="序号">
                      </el-table-column>
                      <el-table-column
                        prop="riqi"
                        align="center"
                        label="故障时间">
                      </el-table-column>
                      <el-table-column
                        prop="yuanyi"
                        align="center"
                        label="故障原因">
                      </el-table-column>

                      <el-table-column
                        prop="xiangqing"
                        align="center"
                        label="故障详情">
                      </el-table-column>
                      <el-table-column
                        prop="fuzeren"
                        align="center"
                        label="上报人">
                      </el-table-column>
                      <el-table-column
                        prop="tel"
                        align="center"
                        label="联系方式">
                      </el-table-column>
                      <!--<el-table-column-->
                      <!--align="center"-->
                      <!--label="操作">-->
                      <!--<template slot-scope="scope">-->
                      <!--<i class=""></i><span :class="scope.row.isNormal==1?'nor':'err'">{{scope.row.isNormal==1?"正常":"异常"}}</span>-->
                      <!--</template>-->
                      <!--</el-table-column>-->
                    </el-table>

                  </div>

                  <div class="second_shilie">
                    <div class="det_title">已处理故障</div>
                    <el-table
                      :data="guzhang_2"
                      style="width: 100%;max-height: 100%"
                      fixed
                      stripe
                      :height="tabHeight"
                      size="mini"
                      header-align="center">
                      <el-table-column
                        prop="xuhao"
                        align="center"
                        type="index"
                        width="50"
                        label="序号">
                      </el-table-column>
                      <el-table-column
                        prop="riqi"
                        align="center"
                        label="故障时间">
                      </el-table-column>
                      <el-table-column
                        prop="yuanyi"
                        align="center"
                        label="故障原因">
                      </el-table-column>

                      <el-table-column
                        prop="fuzeren"
                        align="center"
                        width="65"
                        label="处置人">
                      </el-table-column>
                      <el-table-column
                        prop="time"
                        align="center"
                        label="处置时间">
                      </el-table-column>
                      <el-table-column
                        prop="fangshi"
                        align="center"
                        label="处置方式">
                      </el-table-column>
                      <!--<el-table-column-->
                      <!--align="center"-->
                      <!--label="操作">-->
                      <!--<template slot-scope="scope">-->
                      <!--<i class=""></i><span :class="scope.row.isNormal==1?'nor':'err'">{{scope.row.isNormal==1?"正常":"异常"}}</span>-->
                      <!--</template>-->
                      <!--</el-table-column>-->
                    </el-table>

                  </div>

                </div>
              </el-tab-pane>
              <el-tab-pane label="升级更换" name="six">
                <div class="third_count six_count">
                  <div class="second_shilie">
                    <div class="det_title">添加升级更换记录</div>
                    <!--{'xuhao':'1','name':'A气压传感器','yuanbianhao':'QY-001','riqi':'2017.9.9','fuzeren':'张三','tel':'13666666666','yuanyouxinghao':'CG-001','genghuanbianhao':'QY-002','genghuanxinghao':'CG-0011'},-->
                    <el-table
                      :data="shengji"
                      style="width: 100%;max-height: 100%"
                      fixed
                      stripe
                      :height="shengjiTabHeight"
                      size="mini"
                      header-align="center">
                      <el-table-column
                        prop="xuhao"
                        align="center"
                        type="index"
                        width="55"
                        label="序号">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        align="center"
                        label="名称">
                      </el-table-column>
                      <el-table-column
                        prop="yuanbianhao"
                        align="center"
                        label="原有编号">
                      </el-table-column>
                      <el-table-column
                        prop="yuanyouxinghao"
                        align="center"
                        label="原有型号">
                      </el-table-column>

                      <el-table-column
                        prop="genghuanbianhao"
                        align="center"
                        label="更换编号">
                      </el-table-column>
                      <el-table-column
                        prop="genghuanxinghao"
                        align="center"
                        label="更换型号">
                      </el-table-column>
                      <el-table-column
                        prop="riqi"
                        align="center"
                        label="更换时间">
                      </el-table-column>
                      <el-table-column
                        prop="fuzeren"
                        align="center"
                        label="负责人">
                      </el-table-column>
                      <el-table-column
                        prop="tel"
                        align="center"
                        label="联系方式">
                      </el-table-column>
                      <!--<el-table-column-->
                      <!--align="center"-->
                      <!--label="操作">-->
                      <!--<template slot-scope="scope">-->
                      <!--<i class=""></i><span :class="scope.row.isNormal==1?'nor':'err'">{{scope.row.isNormal==1?"正常":"异常"}}</span>-->
                      <!--</template>-->
                      <!--</el-table-column>-->
                    </el-table>
                  </div>
                </div>

              </el-tab-pane>
              <el-tab-pane label="备品备件" name="seven">
                <div class="third_count seven_count">
                  <div class="second_shilie">
                    <div class="det_title">部分备件</div>
                    <el-table
                      :data="beipin_1"
                      style="width: 100%;max-height: 100%"
                      fixed
                      stripe
                      :height="tabHeight"
                      size="mini"
                      header-align="center">
                      <el-table-column
                        prop="xuhao"
                        align="center"
                        type="index"
                        width="55"
                        label="序号">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        align="center"
                        label="名称">
                      </el-table-column>
                      <el-table-column
                        prop="xinghao"
                        align="center"
                        label="型号">
                      </el-table-column>

                      <el-table-column
                        prop="changshang"
                        align="center"
                        label="生产厂商">
                      </el-table-column>
                      <el-table-column
                        prop="num"
                        align="center"
                        label="库存数量">
                      </el-table-column>
                      <el-table-column
                        prop="kucundian"
                        align="center"
                        label="库存点">
                      </el-table-column>
                      <el-table-column
                        prop="time"
                        align="center"
                        label="采购时间">
                      </el-table-column>
                      <el-table-column
                        prop="guzhang"
                        align="center"
                        label="常见故障">
                      </el-table-column>
                    </el-table>
                  </div>

                  <div class="second_shilie">
                    <div class="det_title">整体备份</div>
                    <el-table
                      :data="beipin_2"
                      style="width: 100%;max-height: 100%"
                      fixed
                      stripe
                      :height="tabHeight"
                      size="mini"
                      header-align="center">
                      <el-table-column
                        prop="xuhao"
                        align="center"
                        type="index"
                        width="55"
                        label="序号">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        width="55"
                        align="center"
                        label="名称">
                      </el-table-column>
                      <el-table-column
                        prop="xinghao"
                        align="center"
                        width="70"
                        label="型号">
                      </el-table-column>

                      <el-table-column
                        prop="changshang"
                        align="center"
                        label="生产厂商">
                      </el-table-column>
                      <el-table-column
                        prop="num"
                        align="center"
                        width="70"
                        label="库存数量">
                      </el-table-column>
                      <el-table-column
                        prop="kucundian"
                        align="center"
                        width="60"
                        label="库存点">
                      </el-table-column>
                      <el-table-column
                        prop="time"
                        align="center"
                        label="采购时间">
                      </el-table-column>
                      <el-table-column
                        prop="guzhang"
                        align="center"
                        label="常见故障">
                      </el-table-column>
                    </el-table>
                  </div>

                </div>
              </el-tab-pane>
            </el-tabs>


          </div>
          <!--detail-->

          <div class="detail_ocean" id="detail_ocean" ref="detail_ocean">
            <i @click="clockDetail_ocean" class="el-icon-close detailClose" style=""></i>
            <div class="det_name"><p>海洋站详情表</p></div>

            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="基本信息" name="first">
                <div class="first_count">
                  <div class="det_main">
                    <div class="det_imgTop">
                      <div class="imtTop_l"><img src="/static/img/haiyang.jpg" width="100%" alt=""></div>
                      <div class="imtTop_r">
                        <div class="top_r_l">
                          <p :title="marinestationinfo.seaStationName"><span class="span_key">海洋站名称</span><span
                            class="span_val">{{marinestationinfo.seaStationName}}</span></p>
                          <p :title="marinestationinfo.centralStationName"><span class="span_key">中心站名称</span><span
                            class="span_val">{{marinestationinfo.centralStationName}}</span></p>
                          <p :title="marinestationinfo.stationNumber"><span class="span_key">站序号</span><span
                            class="span_val">{{marinestationinfo.stationNumber}}</span></p>
                          <p :title="marinestationinfo.stationCode"><span class="span_key">站代码</span><span
                            class="span_val">{{marinestationinfo.stationCode}}</span></p>
                          <p :title="marinestationinfo.nameCode"><span class="span_key">名称代码</span><span
                            class="span_val">{{marinestationinfo.nameCode}}</span></p>

                        </div>
                        <div class="top_r_r">
                          <p :title="marinestationinfo.longitude"><span class="span_key">经度</span><span
                            class="span_val">{{marinestationinfo.longitude}}</span></p>
                          <p :title="marinestationinfo.latitude"><span class="span_key">纬度</span><span class="span_val">{{marinestationinfo.latitude}}</span>
                          </p>
                          <p :title="marinestationinfo.areaStationNumber"><span class="span_key">区站号</span><span
                            class="span_val">{{marinestationinfo.areaStationNumber}}</span></p>
                          <p :title="marinestationinfo.marineStationPosition"><span class="span_key">海洋站位置</span><span
                            class="span_val">{{marinestationinfo.marineStationPosition}}</span></p>
                          <p :title="marinestationinfo.constructionTime"><span class="span_key">建站时间</span><span
                            class="span_val">{{marinestationinfo.constructionTime}}</span></p>
                        </div>

                      </div>

                    </div>
                    <div class="det_imgBot">
                      <div class="bot_b_l">
                        <p :title="marinestationinfo.mailingAddress"><span class="span_key">通信地址</span><span
                          class="span_val">{{marinestationinfo.mailingAddress}}</span></p>
                        <p :title="marinestationinfo.contactsName"><span class="span_key">联系人</span><span
                          class="span_val">{{marinestationinfo.contactsName}}</span></p>
                        <p :title="marinestationinfo.officePhone"><span class="span_key">电话</span><span
                          class="span_val">{{marinestationinfo.officePhone}}</span></p>
                      </div>
                      <div class="bot_b_r">
                        <p :title="subsystemList.commMode_1"><span class="span_key">主要通信方式</span><span class="span_val">{{subsystemList.commMode_1}}</span>
                        </p>
                        <p :title="marinestationinfo.powerSupplyType"><span class="span_key">供电方式</span><span
                          class="span_val">{{marinestationinfo.powerSupplyType}}</span></p>
                        <p :title="subsystemList.commMode_2"><span class="span_key">备用通信方式</span><span class="span_val">{{subsystemList.commMode_2}}</span>
                        </p>
                      </div>

                    </div>
                  </div>
                  <div class="det_dongtai">
                    <div class="det_title">观测要素</div>
                    <div class="dongtai_bot">

                      <div class="dong_top_left">
                        <p :title="marinestationinfo.temperatureHumidity"><span class="span_key"><img src="./sea_1.png"
                                                                                                      alt="">气温</span><span
                          class="span_val">{{marinestationinfo.temperatureHumidity}}</span></p>
                        <p :title="marinestationinfo.pressure"><span class="span_key"><img src="./sea_4.png"
                                                                                           alt="">气压</span><span
                          class="span_val">{{marinestationinfo.pressure}}</span></p>
                        <p :title="marinestationinfo.windSpeedAndDirection"><span class="span_key"><img
                          src="./sea_6.png" alt="">风速风向</span><span class="span_val">{{marinestationinfo.windSpeedAndDirection}}</span>
                        </p>
                      </div>

                      <div class="dong_top_mid">
                        <p :title="marinestationinfo.precipitation"><span class="span_key"><img src="./sea_2.png"
                                                                                                alt="">降水</span><span
                          class="span_val">{{marinestationinfo.precipitation}}</span></p>
                        <p :title="marinestationinfo.visibility"><span class="span_key"><img src="./sea_3.png" alt="">能见度</span><span
                          class="span_val">{{marinestationinfo.visibility}}</span></p>
                        <p :title="marinestationinfo.seawaterTemperature"><span class="span_key"><img src="./sea_5.png"
                                                                                                      alt="">表层海水温度</span><span
                          class="span_val">{{marinestationinfo.seawaterTemperature}}</span></p>
                        <p :title="marinestationinfo.seawaterSalinity"><span class="span_key"><img src="sea_7.png"
                                                                                                   alt="">表层海水咸度</span><span
                          class="span_val">{{marinestationinfo.seawaterSalinity}}</span></p>
                      </div>

                      <div class="dong_top_right">
                        <p :title="marinestationinfo.tidalLevelObservation"><span class="span_key"><img src="sea_8.png"
                                                                                                        alt="">潮位观测方式</span><span
                          class="span_val">{{marinestationinfo.tidalLevelObservation}}</span></p>
                        <p :title="marinestationinfo.seaWave"><span class="span_key"><img src="sea_9.png"
                                                                                          alt="">海浪</span><span
                          class="span_val">{{marinestationinfo.seaWave}}</span></p>
                      </div>

                    </div>
                  </div>

                  <div class="det_chuanganqi">
                    <div class="det_title">搭载的传感器及其技术参数</div>
                    <div class="chuangan_top" v-for="item in subsystemList_1"
                         :style="{height:((item.detSensorList.length>0?item.detSensorList.length:1) *35+97+'px')}">
                      <div class="chuan_left"><p>{{item.name}}</p></div>
                      <div class="chuan_right">
                        <div class="chuan_right_top">
                          <div class="chuan_top_l">
                            <p><span class="key">型号</span><span class="val">{{item.model}}</span></p>
                            <p><span class="key">安装时间</span><span class="val">{{item.installationTime}}</span></p>
                            <p><span class="key">通信方式</span><span class="val">{{item.commMode}}</span></p>
                          </div>
                          <div class="chuan_top_r">
                            <p :title="marinestationinfo.manufacturer"><span class="key key_mini">生产厂商</span><span
                              class="val">{{item.manufacturer}}</span></p>
                            <p :title="marinestationinfo.installationSite"><span class="key key_mini">安装地点</span><span
                              class="val">{{item.installationSite}}</span></p>
                          </div>
                        </div>
                        <div class="chuan_right_bot"
                             :style="{ height:((item.detSensorList.length>0?item.detSensorList.length:1) *35+'px')}">
                          <div class="chuan_bot_info" v-if="item.detSensorList.length != 0"
                               v-for="itemChuan in item.detSensorList">
                            <p><span class="key">{{itemChuan.name}}型号</span><span class="val">{{itemChuan.specification}}</span>
                            </p>
                            <p><span class="key key_mini">厂家</span><span class="val">{{itemChuan.manufacturer}}</span>
                            </p>
                          </div>

                          <div v-if="item.detSensorList.length == 0" class="chuan_bot_info">
                            <p style="text-align: center;font-weight: 700;width: 100% ;line-height: 35px;">占无传感器</p>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </el-tab-pane>

              <el-tab-pane label="安装验收" name="second">
                <div class="second_count">
                  <div class="second_shilie">
                    <div class="det_title">示例数据模拟</div>
                    <div class="dongtai_top">
                      <div class="dong_top_left">
                        <p title="平潭海洋站"><span class="span_key">设备名称</span><span class="span_val">平潭海洋站</span></p>
                        <p title="500231"><span class="span_key">站位号</span><span class="span_val">500231</span></p>
                        <p title="2018.6.6"><span class="span_key">安装日期</span><span class="span_val">2018.6.6</span></p>
                        <p title="王大海，刘木辛"><span class="span_key">参加人员</span><span class="span_val">王大海，刘木辛</span></p>
                      </div>
                      <div class="dong_top_right">
                        <p title="RT25645"><span class="span_key">设备编号</span><span class="span_val">RT25645</span></p>
                        <p title="平潭海洋站"><span class="span_key">安装地点</span><span class="span_val"><span
                          class="">平潭海洋站</span></span></p>
                        <p title="19°52.39′N，115°52.39′E"><span class="span_key">安装位置</span><span class="span_val">19°52.39′N，115°52.39′E</span>
                        </p>
                        <p title="大浮标"><span class="span_key">负责人</span><span class="span_val colr"><i class="dian"></i>&nbsp;&nbsp;<span
                          class="">王大海</span></span></p>
                      </div>
                    </div>

                  </div>


                  <div class="second_shilie second_3">
                    <div class="det_title">安装过程</div>
                    <div class="second_bot">
                      <div class="second_bot_t bot_m_1">
                        <div class="bot_title">依据资料</div>
                        <div class="bot_count">
                          <p>《海洋观测仪器设备运行维护责任制度（试行）》</p>
                          <p>《XXX型浮标使用说明书》</p>
                          <p>《XXX单位XX项目设备购置合同》</p>
                        </div>
                      </div>
                      <div class="second_bot_m bot_m_2">
                        <div class="bot_title">过程描述</div>
                        <div class="bot_count">
                          <p>详见观测记录</p>

                        </div>
                      </div>
                      <div class="second_bot_m bot_m_3">
                        <div class="bot_title">现场图片</div>
                        <div class="bot_count">

                        </div>
                      </div>
                      <div class="second_bot_m bot_m_4">
                        <div class="bot_title">安装检查</div>
                        <div class="bot_count">
                          <div class="l"><p>通讯状态 <i class="el-icon-success"></i></p></div>
                          <div class="l"><p>数据接收状态 <i class="el-icon-success"></i></p></div>
                          <div class="l"><p>存储状态 <i class="el-icon-success"></i></p></div>
                        </div>
                      </div>
                      <div class="second_bot_b bot_m_5">
                        <div class="bot_title">结论</div>
                        <div class="bot_count">
                          <p>安装过程已完成，详见安装验收报告，目前正在开展试运行。</p>

                        </div>
                      </div>
                    </div>

                  </div>


                </div>
              </el-tab-pane>
              <el-tab-pane label="检定校准" name="third">
                <div class="third_count third_data">
                  <div class="second_shilie">
                    <div class="det_title">待检定传感器</div>
                    <div class="det_title_img"><img src="./bangzhu.jpg" width=100% alt=""></div>
                    <el-table
                      :data="jianding_hai"
                      style="width: 100%;max-height: 100%"
                      fixed
                      :height="jiandingTabHeight"
                      stripe
                      size="mini"
                      header-align="center">
                      <el-table-column
                        prop="number"
                        align="center"
                        type="index"
                        width="40"
                        label="序号">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        align="center"
                        label="名称">
                      </el-table-column>
                      <el-table-column
                        prop="manufacturer"
                        align="center"
                        label="厂家/型号">
                      </el-table-column>

                      <el-table-column
                        prop="date"
                        align="center"
                        label="检定日期">
                      </el-table-column>
                      <el-table-column
                        prop="user"
                        align="center"
                        width="55"
                        label="负责人">
                      </el-table-column>
                      <el-table-column
                        prop="phone"
                        align="center"
                        label="联系方式">
                      </el-table-column>
                      <el-table-column
                        align="center"
                        label="状态">
                        <template slot-scope="scope">
                          <span style="color:#F17575">{{scope.row.state}}</span>
                        </template>
                      </el-table-column>
                    </el-table>

                  </div>
                </div>

              </el-tab-pane>
              <el-tab-pane label="维护保养" name="fourth">
                <div class="third_count fourth_count">
                  <div class="second_shilie">
                    <div class="det_title">临近维护保养设备</div>
                    <el-table
                      :data="weihubaoyang_hai"
                      style="width: 100%;max-height: 100%"
                      fixed
                      stripe
                      :height="tabHeight"
                      size="mini"
                      header-align="center">
                      <el-table-column
                        prop="number"
                        align="center"
                        type="index"
                        width="55"
                        label="序号">
                      </el-table-column>
                      <el-table-column
                        prop="item"
                        align="center"
                        label="保养项目">
                      </el-table-column>
                      <el-table-column
                        prop="date"
                        align="center"
                        label="保养时间">
                      </el-table-column>

                      <el-table-column
                        prop="user"
                        align="center"
                        label="负责人">
                      </el-table-column>
                      <el-table-column
                        prop="phone"
                        align="center"
                        label="联系方式">
                      </el-table-column>
                      <!--<el-table-column-->
                      <!--align="center"-->
                      <!--label="操作">-->
                      <!--<template slot-scope="scope">-->
                      <!--<i class=""></i><span :class="scope.row.isNormal==1?'nor':'err'">{{scope.row.isNormal==1?"正常":"异常"}}</span>-->
                      <!--</template>-->
                      <!--</el-table-column>-->
                    </el-table>

                  </div>

                  <div class="second_shilie">
                    <div class="det_title">历次维护保养信息</div>
                    <el-table
                      :data="weihubaoyang_hai_1"
                      style="width: 100%;max-height: 100%"
                      fixed
                      stripe
                      :height="tabHeight"
                      size="mini"
                      header-align="center">
                      <el-table-column
                        prop="number"
                        align="center"
                        type="index"
                        width="55"
                        label="序号">
                      </el-table-column>
                      <el-table-column
                        prop="item"
                        align="center"
                        label="保养项目">
                      </el-table-column>
                      <el-table-column
                        prop="date"
                        align="center"
                        label="保养时间">
                      </el-table-column>

                      <el-table-column
                        prop="user"
                        align="center"
                        label="经办人">
                      </el-table-column>
                      <el-table-column
                        prop="phone"
                        align="center"
                        label="联系方式">
                      </el-table-column>
                      <!--<el-table-column-->
                      <!--align="center"-->
                      <!--label="操作">-->
                      <!--<template slot-scope="scope">-->
                      <!--<i class=""></i><span :class="scope.row.isNormal==1?'nor':'err'">{{scope.row.isNormal==1?"正常":"异常"}}</span>-->
                      <!--</template>-->
                      <!--</el-table-column>-->
                    </el-table>

                  </div>

                </div>
              </el-tab-pane>
              <el-tab-pane label="故障处置" name="five">
                <div class="third_count five_count">
                  <div class="second_shilie">
                    <div class="det_title">待处理故障</div>
                    <el-table
                      :data="guzhang_1_hai"
                      style="width: 100%;max-height: 100%"
                      fixed
                      stripe
                      :height="tabHeight"
                      size="mini"
                      header-align="center">
                      <el-table-column
                        prop="number"
                        align="center"
                        type="index"
                        width="55"
                        label="序号">
                      </el-table-column>
                      <!--<el-table-column-->
                      <!--prop="riqi"-->
                      <!--align="center"-->
                      <!--label="故障时间">-->
                      <!--</el-table-column>-->
                      <el-table-column
                        prop="item"
                        align="center"
                        label="故障原因">
                      </el-table-column>

                      <el-table-column
                        prop="date"
                        align="center"
                        label="故障详情">
                      </el-table-column>
                      <el-table-column
                        prop="user"
                        align="center"
                        label="上报人">
                      </el-table-column>
                      <el-table-column
                        prop="phone"
                        align="center"
                        label="联系方式">
                      </el-table-column>
                      <!--<el-table-column-->
                      <!--align="center"-->
                      <!--label="操作">-->
                      <!--<template slot-scope="scope">-->
                      <!--<i class=""></i><span :class="scope.row.isNormal==1?'nor':'err'">{{scope.row.isNormal==1?"正常":"异常"}}</span>-->
                      <!--</template>-->
                      <!--</el-table-column>-->
                    </el-table>

                  </div>

                  <div class="second_shilie">
                    <div class="det_title">已处理故障</div>
                    <el-table
                      :data="guzhang_2_hai"
                      style="width: 100%;max-height: 100%"
                      fixed
                      stripe
                      :height="tabHeight"
                      size="mini"
                      header-align="center">
                      <el-table-column
                        prop="numbe"
                        align="center"
                        type="index"
                        width="50"
                        label="序号">
                      </el-table-column>
                      <el-table-column
                        prop="item"
                        align="center"
                        label="故障原因">
                      </el-table-column>
                      <el-table-column
                        prop="date"
                        align="center"
                        label="故障详情">
                      </el-table-column>

                      <el-table-column
                        prop="user"
                        align="center"
                        width="65"
                        label="处置人">
                      </el-table-column>
                      <el-table-column
                        prop="phone"
                        align="center"
                        label="处置时间">
                      </el-table-column>
                      <el-table-column
                        prop="remark"
                        align="center"
                        label="处置方式">
                      </el-table-column>
                      <!--<el-table-column-->
                      <!--align="center"-->
                      <!--label="操作">-->
                      <!--<template slot-scope="scope">-->
                      <!--<i class=""></i><span :class="scope.row.isNormal==1?'nor':'err'">{{scope.row.isNormal==1?"正常":"异常"}}</span>-->
                      <!--</template>-->
                      <!--</el-table-column>-->
                    </el-table>

                  </div>

                </div>
              </el-tab-pane>
              <el-tab-pane label="升级更换" name="six">
                <div class="third_count six_count">
                  <div class="second_shilie">
                    <div class="det_title">添加升级更换记录</div>
                    <!--{'xuhao':'1','name':'A气压传感器','yuanbianhao':'QY-001','riqi':'2017.9.9','fuzeren':'张三','tel':'13666666666','yuanyouxinghao':'CG-001','genghuanbianhao':'QY-002','genghuanxinghao':'CG-0011'},-->
                    <el-table
                      :data="shengji_hai"
                      style="width: 100%;max-height: 100%"
                      fixed
                      stripe
                      :height="shengjiTabHeight"
                      size="mini"
                      header-align="center">
                      <el-table-column
                        prop="number"
                        align="center"
                        type="index"
                        width="55"
                        label="序号">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        align="center"
                        label="名称">
                      </el-table-column>
                      <el-table-column
                        prop="oldnum"
                        align="center"
                        label="原有编号">
                      </el-table-column>
                      <el-table-column
                        prop="oldtype"
                        align="center"
                        label="原有型号">
                      </el-table-column>

                      <el-table-column
                        prop="newnum"
                        align="center"
                        label="更换编号">
                      </el-table-column>
                      <el-table-column
                        prop="newtype"
                        align="center"
                        label="更换型号">
                      </el-table-column>
                      <el-table-column
                        prop="changetime"
                        align="center"
                        label="更换时间">
                      </el-table-column>
                      <el-table-column
                        prop="user"
                        align="center"
                        label="负责人">
                      </el-table-column>
                      <el-table-column
                        prop="phone"
                        align="center"
                        label="联系方式">
                      </el-table-column>
                      <!--<el-table-column-->
                      <!--align="center"-->
                      <!--label="操作">-->
                      <!--<template slot-scope="scope">-->
                      <!--<i class=""></i><span :class="scope.row.isNormal==1?'nor':'err'">{{scope.row.isNormal==1?"正常":"异常"}}</span>-->
                      <!--</template>-->
                      <!--</el-table-column>-->
                    </el-table>
                  </div>
                </div>

              </el-tab-pane>
              <el-tab-pane label="备品备件" name="seven">
                <div class="third_count seven_count">
                  <div class="second_shilie">
                    <div class="det_title">部分备件</div>
                    <el-table
                      :data="beipin_1_hai"
                      style="width: 100%;max-height: 100%"
                      fixed
                      stripe
                      :height="tabHeight"
                      size="mini"
                      header-align="center">
                      <el-table-column
                        prop="number"
                        align="center"
                        type="index"
                        width="55"
                        label="序号">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        align="center"
                        label="名称">
                      </el-table-column>
                      <el-table-column
                        prop="type"
                        align="center"
                        label="型号">
                      </el-table-column>

                      <el-table-column
                        prop="manufacturer"
                        align="center"
                        label="生产厂商">
                      </el-table-column>
                      <el-table-column
                        prop="count"
                        align="center"
                        label="库存数量">
                      </el-table-column>
                      <el-table-column
                        prop="location"
                        align="center"
                        label="库存点">
                      </el-table-column>
                      <el-table-column
                        prop="time"
                        align="center"
                        label="采购时间">
                      </el-table-column>
                      <el-table-column
                        prop="fault"
                        align="center"
                        label="常见故障">
                      </el-table-column>
                    </el-table>
                  </div>

                  <div class="second_shilie">
                    <div class="det_title">整体备份</div>
                    <el-table
                      :data="beipin_2_hai"
                      style="width: 100%;max-height: 100%"
                      fixed
                      stripe
                      :height="tabHeight"
                      size="mini"
                      header-align="center">
                      <el-table-column
                        prop="number"
                        align="center"
                        type="index"
                        width="55"
                        label="序号">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        width="55"
                        align="center"
                        label="名称">
                      </el-table-column>
                      <el-table-column
                        prop="type"
                        align="center"
                        width="70"
                        label="型号">
                      </el-table-column>

                      <el-table-column
                        prop="manufacturer"
                        align="center"
                        label="生产厂商">
                      </el-table-column>
                      <el-table-column
                        prop="count"
                        align="center"
                        width="70"
                        label="库存数量">
                      </el-table-column>
                      <el-table-column
                        prop="location"
                        align="center"
                        width="60"
                        label="库存点">
                      </el-table-column>
                      <el-table-column
                        prop="time"
                        align="center"
                        label="采购时间">
                      </el-table-column>
                      <el-table-column
                        prop="fault"
                        align="center"
                        label="常见故障">
                      </el-table-column>
                    </el-table>
                  </div>

                </div>
              </el-tab-pane>
            </el-tabs>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import ol from '../../../../static/js/globalviewer'

  export default {
    data (){
      return {
        //子系统
        subsystemList_1: [
          {
            "id": "3527b06b05ac432ea9e7fe56bde04e91",
            "seaStationId": "e9285b8991004f46a29b475d372f2550",
            "subsystemId": "510020f08f2d4f969b96f87795c3de08",
            "installationTime": "2007-04-01",
            "installationSite": "验潮室",
            "orderItem": 0,
            "deleteFlag": "0",
            "name": "气象观测子系统",
            "model": "SXZ2-1",
            "number": null,
            "observationMode": null,
            "manufacturer": "山东省科学院海洋仪器仪表研究所",
            "commMode": "GPRS",
            "detSensorList": [{
              "id": "03bc97db3da74fe7b28ddde67850d169",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "3527b06b05ac432ea9e7fe56bde04e91",
              "sensorId": "35675d99ded44dac83ab530e33215ea2",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "deviceNumber": null,
              "useDeviceNumber": null,
              "name": "气压传感器",
              "type": null,
              "specification": "61202V",
              "manufacturer": "R.M.YOUNG",
            }, {
              "id": "e974f58512a645cd964535d571b5f36c",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "3527b06b05ac432ea9e7fe56bde04e91",
              "sensorId": "2ff93d183c304a58a6cf246b53310b2b",
              "associationType": "1",
              "orderItem": 1,
              "deleteFlag": "0",
              "name": "温湿度传感器",
              "type": null,
              "specification": "41382LC",
              "manufacturer": "R.M.YOUNG",
            }, {
              "id": "0a0bacc2fae94ed0a9e34bfe30e2e1dc",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "3527b06b05ac432ea9e7fe56bde04e91",
              "sensorId": "9b1e339b3bfa4ad28a7c1c2436117de7",
              "associationType": "1",
              "orderItem": 2,
              "deleteFlag": "0",
              "deviceNumber": null,
              "useDeviceNumber": null,
              "name": "风速风向传感器",
              "type": null,
              "specification": "SXZ2-2",
              "manufacturer": "山仪所",
            }, {
              "id": "dd90f4a2ee524f39a8b10a89efe5dcd3",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "3527b06b05ac432ea9e7fe56bde04e91",
              "sensorId": "9cfe9b9863b611e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 3,
              "deleteFlag": "0",
              "name": "降水传感器",
              "type": null,
              "specification": "SL3-1",
              "manufacturer": "上海风云气象",

            }, {
              "id": "dd90f4a2ee524f39a8b10a89efe5dcd3",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "3527b06b05ac432ea9e7fe56bde04e91",
              "sensorId": "9cfe9b9863b611e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 3,
              "deleteFlag": "0",
              "name": "降水传感器",
              "type": null,
              "specification": "SL3-1",
              "manufacturer": "上海风云气象",

            }, {
              "id": "dd90f4a2ee524f39a8b10a89efe5dcd3",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "3527b06b05ac432ea9e7fe56bde04e91",
              "sensorId": "9cfe9b9863b611e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 3,
              "deleteFlag": "0",
              "name": "降水传感器",
              "type": null,
              "specification": "SL3-1",
              "manufacturer": "上海风云气象",

            }]
          },
          {
            "id": "1b6e6fa5b6b547dda0b4c50f7c655647",
            "seaStationId": "e9285b8991004f46a29b475d372f2550",
            "subsystemId": "d24ce1c3e2754960b4161d3b037b25bc",
            "installationTime": "",
            "installationSite": "无",
            "orderItem": 1,
            "deleteFlag": "0",
            "name": "潮位温盐观测子系统",
            "model": "SXZ2-1",
            "number": null,
            "observationMode": null,
            "manufacturer": "山东省科学院海洋仪器仪表研究所",
            "commMode": "GPRS",
            "detSensorList": [{
              "id": "32bf336cef994bab814fd48fe7c7806e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "1b6e6fa5b6b547dda0b4c50f7c655647",
              "sensorId": "d009d5f1190f4781b82fed3c8e7d2ece",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "deviceNumber": null,
              "useDeviceNumber": null,
              "name": "温盐传感器",
              "type": null,
              "specification": "ATC72-CAR",
              "manufacturer": "亚历克",
            }, {
              "id": "32bf336cef994bab814fd48fe7c7806e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "1b6e6fa5b6b547dda0b4c50f7c655647",
              "sensorId": "d009d5f1190f4781b82fed3c8e7d2ece",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "deviceNumber": null,
              "useDeviceNumber": null,
              "name": "温盐传感器",
              "type": null,
              "specification": "ATC72-CAR",
              "manufacturer": "亚历克",
            }, {
              "id": "32bf336cef994bab814fd48fe7c7806e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "1b6e6fa5b6b547dda0b4c50f7c655647",
              "sensorId": "d009d5f1190f4781b82fed3c8e7d2ece",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "deviceNumber": null,
              "useDeviceNumber": null,
              "name": "温盐传感器",
              "type": null,
              "specification": "ATC72-CAR",
              "manufacturer": "亚历克",
            }]
          },
          {
            "id": "0d27d62295aa4e1eaf99f9dac2d8f2fb",
            "seaStationId": "e9285b8991004f46a29b475d372f2550",
            "subsystemId": "21e58a457b294f2eba8eb9449ff41e6b",
            "installationTime": "",
            "installationSite": "无",
            "orderItem": 2,
            "deleteFlag": "0",
            "name": "数据接收处理计算机",
            "model": "联想6690",
            "number": null,
            "observationMode": null,
            "manufacturer": "联想",
            "commMode": "GPRS",
            "detSensorList": []
          },
          {
            "id": "90788892784448fa915ef0921e401803",
            "seaStationId": "e9285b8991004f46a29b475d372f2550",
            "subsystemId": "c756b0af1bd64488",
            "installationTime": "",
            "installationSite": "无",
            "orderItem": 3,
            "deleteFlag": "0",
            "name": "GNSS",
            "model": "NET-G3",
            "number": null,
            "observationMode": null,
            "manufacturer": "拓普康",
            "commMode": "GPRS",
            "detSensorList": [{
              "id": "4deb7e360b944175b76164391798fd4e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "90788892784448fa915ef0921e401803",
              "sensorId": "c15d631863ba11e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "name": "潮位仪",
              "specification": "GPH500",
              "manufacturer": "上海精浦机电有限公司",
            }]
          }, {
            "id": "90788892784448fa915ef0921e401803",
            "seaStationId": "e9285b8991004f46a29b475d372f2550",
            "subsystemId": "c756b0af1bd64488",
            "installationTime": "",
            "installationSite": "无",
            "orderItem": 3,
            "deleteFlag": "0",
            "name": "GNSS",
            "model": "NET-G3",
            "number": null,
            "observationMode": null,
            "manufacturer": "拓普康",
            "commMode": "GPRS",
            "detSensorList": [{
              "id": "4deb7e360b944175b76164391798fd4e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "90788892784448fa915ef0921e401803",
              "sensorId": "c15d631863ba11e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "name": "潮位仪",
              "specification": "GPH500",
              "manufacturer": "上海精浦机电有限公司",
            }]
          }, {
            "id": "90788892784448fa915ef0921e401803",
            "seaStationId": "e9285b8991004f46a29b475d372f2550",
            "subsystemId": "c756b0af1bd64488",
            "installationTime": "",
            "installationSite": "无",
            "orderItem": 3,
            "deleteFlag": "0",
            "name": "GNSS",
            "model": "NET-G3",
            "number": null,
            "observationMode": null,
            "manufacturer": "拓普康",
            "commMode": "GPRS",
            "detSensorList": [{
              "id": "4deb7e360b944175b76164391798fd4e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "90788892784448fa915ef0921e401803",
              "sensorId": "c15d631863ba11e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "name": "潮位仪",
              "specification": "GPH500",
              "manufacturer": "上海精浦机电有限公司",
            }]
          }, {
            "id": "90788892784448fa915ef0921e401803",
            "seaStationId": "e9285b8991004f46a29b475d372f2550",
            "subsystemId": "c756b0af1bd64488",
            "installationTime": "",
            "installationSite": "无",
            "orderItem": 3,
            "deleteFlag": "0",
            "name": "GNSS",
            "model": "NET-G3",
            "number": null,
            "observationMode": null,
            "manufacturer": "拓普康",
            "commMode": "GPRS",
            "detSensorList": [{
              "id": "4deb7e360b944175b76164391798fd4e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "90788892784448fa915ef0921e401803",
              "sensorId": "c15d631863ba11e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "name": "潮位仪",
              "specification": "GPH500",
              "manufacturer": "上海精浦机电有限公司",
            }, {
              "id": "4deb7e360b944175b76164391798fd4e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "90788892784448fa915ef0921e401803",
              "sensorId": "c15d631863ba11e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "name": "潮位仪",
              "specification": "GPH500",
              "manufacturer": "上海精浦机电有限公司",
            }, {
              "id": "4deb7e360b944175b76164391798fd4e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "90788892784448fa915ef0921e401803",
              "sensorId": "c15d631863ba11e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "name": "潮位仪",
              "specification": "GPH500",
              "manufacturer": "上海精浦机电有限公司",
            }, {
              "id": "4deb7e360b944175b76164391798fd4e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "90788892784448fa915ef0921e401803",
              "sensorId": "c15d631863ba11e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "name": "潮位仪",
              "specification": "GPH500",
              "manufacturer": "上海精浦机电有限公司",
            }, {
              "id": "4deb7e360b944175b76164391798fd4e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "90788892784448fa915ef0921e401803",
              "sensorId": "c15d631863ba11e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "name": "潮位仪",
              "specification": "GPH500",
              "manufacturer": "上海精浦机电有限公司",
            }, {
              "id": "4deb7e360b944175b76164391798fd4e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "90788892784448fa915ef0921e401803",
              "sensorId": "c15d631863ba11e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "name": "潮位仪",
              "specification": "GPH500",
              "manufacturer": "上海精浦机电有限公司",
            }, {
              "id": "4deb7e360b944175b76164391798fd4e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "90788892784448fa915ef0921e401803",
              "sensorId": "c15d631863ba11e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "name": "潮位仪",
              "specification": "GPH500",
              "manufacturer": "上海精浦机电有限公司",
            }, {
              "id": "4deb7e360b944175b76164391798fd4e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "90788892784448fa915ef0921e401803",
              "sensorId": "c15d631863ba11e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "name": "潮位仪",
              "specification": "GPH500",
              "manufacturer": "上海精浦机电有限公司",
            }, {
              "id": "4deb7e360b944175b76164391798fd4e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "90788892784448fa915ef0921e401803",
              "sensorId": "c15d631863ba11e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "name": "潮位仪",
              "specification": "GPH500",
              "manufacturer": "上海精浦机电有限公司",
            }, {
              "id": "4deb7e360b944175b76164391798fd4e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "90788892784448fa915ef0921e401803",
              "sensorId": "c15d631863ba11e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "name": "潮位仪",
              "specification": "GPH500",
              "manufacturer": "上海精浦机电有限公司",
            }, {
              "id": "4deb7e360b944175b76164391798fd4e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "90788892784448fa915ef0921e401803",
              "sensorId": "c15d631863ba11e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "name": "潮位仪",
              "specification": "GPH500",
              "manufacturer": "上海精浦机电有限公司",
            }, {
              "id": "4deb7e360b944175b76164391798fd4e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "90788892784448fa915ef0921e401803",
              "sensorId": "c15d631863ba11e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "name": "潮位仪",
              "specification": "GPH500",
              "manufacturer": "上海精浦机电有限公司",
            }, {
              "id": "4deb7e360b944175b76164391798fd4e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "90788892784448fa915ef0921e401803",
              "sensorId": "c15d631863ba11e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "name": "潮位仪",
              "specification": "GPH500",
              "manufacturer": "上海精浦机电有限公司",
            }, {
              "id": "4deb7e360b944175b76164391798fd4e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "90788892784448fa915ef0921e401803",
              "sensorId": "c15d631863ba11e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "name": "潮位仪",
              "specification": "GPH500",
              "manufacturer": "上海精浦机电有限公司",
            }, {
              "id": "4deb7e360b944175b76164391798fd4e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "90788892784448fa915ef0921e401803",
              "sensorId": "c15d631863ba11e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "name": "潮位仪",
              "specification": "GPH500",
              "manufacturer": "上海精浦机电有限公司",
            }]
          }, {
            "id": "90788892784448fa915ef0921e401803",
            "seaStationId": "e9285b8991004f46a29b475d372f2550",
            "subsystemId": "c756b0af1bd64488",
            "installationTime": "",
            "installationSite": "无",
            "orderItem": 3,
            "deleteFlag": "0",
            "name": "GNSS",
            "model": "NET-G3",
            "number": null,
            "observationMode": null,
            "manufacturer": "拓普康",
            "commMode": "GPRS",
            "detSensorList": [{
              "id": "4deb7e360b944175b76164391798fd4e",
              "seaStationId": "e9285b8991004f46a29b475d372f2550",
              "seaStationSubsystemId": "90788892784448fa915ef0921e401803",
              "sensorId": "c15d631863ba11e8ab100cda411dbe56",
              "associationType": "1",
              "orderItem": 0,
              "deleteFlag": "0",
              "name": "潮位仪",
              "specification": "GPH500",
              "manufacturer": "上海精浦机电有限公司",
            }]
          }
        ],
        //浮标
        buoyinfo: {},
        inspectionbuoyinfo: {},
        detSensors: [],
        //浮标 - end

        //海洋站
        marinestationinfo: {},
        subsystemList: {},
        detSensorList: [],
        //海洋站-end
        tabHeight: '',
        shengjiTabHeight: '',
        jiandingTabHeight: '',
        activeName: 'first',
        guanceH: '',
        checked: '',
        checked1: '',
        checked2: '',
        tableData1: [{name: '台站'}, {name: '雷达'}, {name: '浮标'}, {name: '漂流浮标'}, {name: '潜标'}, {name: '船舶'}/*,{name:'GNSS'},{name:'地震台'}*/],
        tableData2: [{name: '水文'},{name:'气象'},{name:'化学'},{name:'其他'}],
        tableData3: [{name: '北海'}, {name: '东海'}, {name: '南海'}],
        tableData4: [{name: '国家海洋技术中心'},{name: '海华技术开发中心'},{name: '山仪所'}],
        showNum2: [
          {
            'number': '1',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'HX4',
            'devicenumber': 'HX4',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '2',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF106',
            'devicenumber': 'QF106',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '3',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF111',
            'devicenumber': 'QF111',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '4',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF164',
            'devicenumber': 'QF164',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '5',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF107',
            'devicenumber': 'QF107',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '6',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF103',
            'devicenumber': 'QF103',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '7',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF303',
            'devicenumber': '',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '8',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF307',
            'devicenumber': '',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '9',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'SF301',
            'devicenumber': '',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '10',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF101',
            'devicenumber': 'QF101',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '11',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF108',
            'devicenumber': 'QF108',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '12',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF109',
            'devicenumber': 'QF109',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '13',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF163',
            'devicenumber': 'QF163',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '14',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF105',
            'devicenumber': 'QF105',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '15',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF113',
            'devicenumber': 'QF113',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '16',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF306',
            'devicenumber': '',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '17',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF114',
            'devicenumber': 'QF114',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '18',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'HX3',
            'devicenumber': 'HX3',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '19',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'SF303',
            'devicenumber': '',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '20',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF110',
            'devicenumber': 'QF110',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '21',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'HX2',
            'devicenumber': 'HX2',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '22',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF305',
            'devicenumber': '',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '23',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'SF306',
            'devicenumber': '',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '24',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF160',
            'devicenumber': 'QF160',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '25',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF161',
            'devicenumber': 'QF161',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '26',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF304',
            'devicenumber': '',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '27',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF104',
            'devicenumber': 'QF104',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '28',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF162',
            'devicenumber': 'QF162',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '29',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF112',
            'devicenumber': 'QF112',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '30',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF102',
            'devicenumber': 'QF102',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '31',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'SF305',
            'devicenumber': '',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '32',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'HX6',
            'devicenumber': 'HX6',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '33',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'QF159',
            'devicenumber': 'QF159',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '34',
            'type': 'buoyinfo',
            'typename': '浮标',
            'name': 'SF302',
            'devicenumber': '',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '35',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '石砰海洋测点',
            'devicenumber': '07458',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '36',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '南澳海洋环境监测站云澳测站',
            'devicenumber': '09710',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '37',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '深圳站赤湾测点',
            'devicenumber': '09713',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '38',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '大戢山海洋站',
            'devicenumber': '07416',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '39',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '芦潮港海洋环境监测站',
            'devicenumber': '05453',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '40',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '崇明海洋环境监测站',
            'devicenumber': '05454',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '41',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '饶平海洋环境监测站',
            'devicenumber': '09863',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '42',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '汕头海洋环境监测站',
            'devicenumber': '09735',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '43',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '惠来海洋环境监测站',
            'devicenumber': '09866',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '44',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '沙港头测点',
            'devicenumber': '07425',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '45',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '小衢山测点',
            'devicenumber': '06416',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '46',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '坎门海洋环境监测站',
            'devicenumber': '07424',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '47',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '惠州海洋环境监测站',
            'devicenumber': '09740',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '48',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '深圳站盐田测点',
            'devicenumber': '09733',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '49',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '大戢山海洋站',
            'devicenumber': '07415',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '50',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '大陈海洋环境监测站',
            'devicenumber': '07422',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '51',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '佘山海洋环境监测站',
            'devicenumber': '06414',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '52',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '南麂海洋环境监测站',
            'devicenumber': '07425',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '53',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '大门岛海洋测点',
            'devicenumber': '07460',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '54',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '遮浪海洋环境监测站',
            'devicenumber': '09712',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '55',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '温州海洋环境监测站',
            'devicenumber': '07450',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '56',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '陆丰海洋环境监测站',
            'devicenumber': '09867',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '57',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '东海大桥B平台',
            'devicenumber': '05452',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '58',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '汕尾海洋环境监测站',
            'devicenumber': '09711',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '59',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '南澳海洋环境监测站南澳岛测站',
            'devicenumber': '09803',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '60',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '瓯江口海洋测点',
            'devicenumber': '07451',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '61',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '鳌江海洋测点',
            'devicenumber': '07457',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '62',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '广州海洋站',
            'devicenumber': '09736',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '63',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '北麂海洋测点',
            'devicenumber': '07459',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '64',
            'type': 'marinestationinfo',
            'typename': '台站',
            'name': '椒江海洋测点',
            'devicenumber': '07455',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '65',
            'type': 'xbandradarinfo',
            'typename': '雷达',
            'name': '大戢山',
            'devicenumber': '',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '66',
            'type': 'xbandradarinfo',
            'typename': '雷达',
            'name': '小衢山',
            'devicenumber': '',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '67',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '雪龙号',
            'devicenumber': 'BNSK',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '68',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '新盐田',
            'devicenumber': 'BPBA',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '69',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '新福州',
            'devicenumber': 'BPBE',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '70',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '新赤湾',
            'devicenumber': 'BPBC',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '71',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '新厦门',
            'devicenumber': 'BPBB',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '72',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '新秦皇岛',
            'devicenumber': 'BPBD',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '73',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '新大连',
            'devicenumber': 'BPAO',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '74',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '向阳红20',
            'devicenumber': 'BNRC',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '75',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '海警2166',
            'devicenumber': 'BNRT',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '76',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '新天津',
            'devicenumber': 'BPAQ',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '77',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '新青岛',
            'devicenumber': 'BPAR',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '78',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '新常熟',
            'devicenumber': 'BPBG',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '79',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '新大洋洲',
            'devicenumber': 'BPKE',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '80',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '新浦东',
            'devicenumber': 'BPAP',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '81',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '新美洲',
            'devicenumber': 'BPKC',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '82',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '张骞',
            'devicenumber': 'BIBY6',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '83',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '海工拖208',
            'devicenumber': 'BVGP8',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '84',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '起重9',
            'devicenumber': '',
            'seaarea': '东海',
            'useunit': '国家海洋局东海分局',
            'state': '正常'
          },
          {
            'number': '85',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '南海救117',
            'devicenumber': 'BSGO',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '86',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '南海救116',
            'devicenumber': 'BSGN',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '87',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '南海救118',
            'devicenumber': 'BSGU',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '88',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '南海救131',
            'devicenumber': 'BSFV',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '89',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '广浚一号',
            'devicenumber': 'GJEH',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '90',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '康盛口',
            'devicenumber': 'KSHK',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '91',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '南海救111',
            'devicenumber': 'BSFW',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '92',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '南海救102',
            'devicenumber': 'BSGT',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '93',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '南海救113',
            'devicenumber': 'BSGK',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '94',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '南海救101',
            'devicenumber': 'BSGJ',
            'seaarea': '南海',
            'useunit': '国家海洋局南海分局',
            'state': '正常'
          },
          {
            'number': '95',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '中国海警1111',
            'devicenumber': 'BNPE',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '96',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '中国海警1115',
            'devicenumber': 'BNPS',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '97',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '中国海警1117',
            'devicenumber': 'BNPO',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '98',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '中国海警1118',
            'devicenumber': 'BNPM',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '99',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '中国海警1122',
            'devicenumber': 'BNPB',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '100',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '中国海警1123',
            'devicenumber': 'BNPT',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '101',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '中国海警1126',
            'devicenumber': 'BNPU',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '102',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '中国海警1127',
            'devicenumber': 'BNPN',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '103',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '中国海警1212',
            'devicenumber': 'BNQE',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '104',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '中国海警1310',
            'devicenumber': 'BNQC',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '105',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '中国海警1411',
            'devicenumber': 'BNQD',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '106',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '大洋一号',
            'devicenumber': 'BNTM',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '107',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '向阳红09',
            'devicenumber': 'BNPC',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '108',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '向阳红06',
            'devicenumber': 'BBML',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '109',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '向阳红07',
            'devicenumber': 'BTDY',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '110',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '考古一号',
            'devicenumber': 'BBLT',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '111',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '向阳红08',
            'devicenumber': 'BBRG',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '112',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '和晨轮',
            'devicenumber': 'BKWD6',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '113',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '德明海',
            'devicenumber': 'BQBO',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '114',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '向阳红01',
            'devicenumber': 'BKCL',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '115',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '向阳红03',
            'devicenumber': 'BVKK8',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '116',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '向阳红10',
            'devicenumber': 'BKLS',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          },
          {
            'number': '117',
            'type': 'volunteership',
            'typename': '志愿船',
            'name': '海洋6号',
            'devicenumber': 'BYAL',
            'seaarea': '北海',
            'useunit': '国家海洋局北海分局',
            'state': '正常'
          }

        ],
        showNum1: [],
        clientWidth: document.documentElement.clientWidth >= 1330 ? document.documentElement.clientWidth : 1330,
        //浮标
        jianding: [
          {
            'xuhao': '1',
            'name': '风速传感器',
            'changjia': 'M.YOUNG05106',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '2',
            'name': '单点海流计',
            'changjia': 'VAISALAPTB210',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '3',
            'name': '表层水温传感器',
            'changjia': 'TeledyneRD Instruments 300 kHz',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '4',
            'name': '气压传感器',
            'changjia': 'M.YOUNG05106',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '5',
            'name': '压力式波浪仪',
            'changjia': 'VAISALAPTB210',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '6',
            'name': '海流传感器',
            'changjia': 'TeledyneRD Instruments 300 kHz',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '7',
            'name': '表层水温传感器A',
            'changjia': 'TeledyneRD Instruments 300 kHz',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '8',
            'name': '气压传感器A',
            'changjia': 'M.YOUNG05106',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '9',
            'name': '压力式波浪仪A',
            'changjia': 'VAISALAPTB210',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '10',
            'name': '海流传感器A',
            'changjia': 'TeledyneRD Instruments 300 kHz',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
        ],
        weihubaoyang: [
          {
            'xuhao': '1',
            'name': '气压传感器',
            'changjia': 'M.YOUNG05106',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '2',
            'name': '压力式波浪仪',
            'changjia': 'VAISALAPTB210',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '3',
            'name': '海流传感器',
            'changjia': 'TeledyneRD Instruments 300 kHz',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '4',
            'name': '风速传感器',
            'changjia': 'M.YOUNG05106',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '5',
            'name': '单点海流计',
            'changjia': 'VAISALAPTB210',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '6',
            'name': '表层水温传感器',
            'changjia': 'TeledyneRD Instruments 300 kHz',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '7',
            'name': '气压传感器',
            'changjia': 'TeledyneRD Instruments 300 kHz',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '8',
            'name': '压力式波浪仪',
            'changjia': 'M.YOUNG05106',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '9',
            'name': '海流传感器',
            'changjia': 'VAISALAPTB210',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '10',
            'name': '表层水温传感器A',
            'changjia': 'TeledyneRD Instruments 300 kHz',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
        ],
        weihubaoyang2: [
          {
            'xuhao': '1',
            'name': 'A气压传感器',
            'changjia': 'M.YOUNG05106',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '2',
            'name': 'A压力式波浪仪',
            'changjia': 'VAISALAPTB210',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '3',
            'name': 'A海流传感器',
            'changjia': 'TeledyneRD Instruments 300 kHz',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '4',
            'name': '气压传感器',
            'changjia': 'M.YOUNG05106',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '5',
            'name': '压力式波浪仪',
            'changjia': 'VAISALAPTB210',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '6',
            'name': '海流传感器',
            'changjia': 'TeledyneRD Instruments 300 kHz',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '7',
            'name': '风速传感器',
            'changjia': 'TeledyneRD Instruments 300 kHz',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '8',
            'name': '单点海流计',
            'changjia': 'M.YOUNG05106',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '9',
            'name': '表层水温传感器',
            'changjia': 'VAISALAPTB210',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
          {
            'xuhao': '10',
            'name': '气压传感器',
            'changjia': 'TeledyneRD Instruments 300 kHz',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'zhuangtai': '超期未检定'
          },
        ],
        guzhang_1: [
          {
            'xuhao': '1',
            'yuanyi': '供电故障',
            'xiangqing': '电路板故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666'
          },
          {
            'xuhao': '2',
            'yuanyi': '通信故障',
            'xiangqing': '交换器故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666'
          },
          {
            'xuhao': '3',
            'yuanyi': '风传感器故障',
            'xiangqing': '采集器故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666'
          },
          {
            'xuhao': '4',
            'yuanyi': '部件老化',
            'xiangqing': '感应器故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666'
          },
          {
            'xuhao': '5',
            'yuanyi': '供电故障A',
            'xiangqing': '电路板故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666'
          },
          {
            'xuhao': '6',
            'yuanyi': '通信故障A',
            'xiangqing': '交换器故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666'
          },
          {
            'xuhao': '7',
            'yuanyi': '风传感器故障A',
            'xiangqing': '采集器故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666'
          },
          {
            'xuhao': '8',
            'yuanyi': '部件老化A',
            'xiangqing': '感应器故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666'
          },
          {
            'xuhao': '9',
            'yuanyi': '通信故障A',
            'xiangqing': '交换器故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666'
          },
          {
            'xuhao': '10',
            'yuanyi': '风传感器故障A',
            'xiangqing': '采集器故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666'
          },

        ],
        guzhang_2: [
          {
            'xuhao': '1',
            'yuanyi': '供电故障',
            'xiangqing': '电路板故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'fangshi': '维修',
            'time': '2018.6.9'
          },
          {
            'xuhao': '2',
            'yuanyi': '通信故障',
            'xiangqing': '交换器故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'fangshi': '维修',
            'time': '2018.6.9'
          },
          {
            'xuhao': '3',
            'yuanyi': '风传感器故障',
            'xiangqing': '采集器故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'fangshi': '维修',
            'time': '2018.6.9'
          },
          {
            'xuhao': '4',
            'yuanyi': '部件老化',
            'xiangqing': '感应器故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'fangshi': '更换部件',
            'time': '2018.6.9'
          },
          {
            'xuhao': '5',
            'yuanyi': '供电故障A',
            'xiangqing': '电路板故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'fangshi': '维修',
            'time': '2018.6.9'
          },
          {
            'xuhao': '6',
            'yuanyi': '通信故障A',
            'xiangqing': '交换器故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'fangshi': '维修',
            'time': '2018.6.9'
          },
          {
            'xuhao': '7',
            'yuanyi': '风传感器故障A',
            'xiangqing': '采集器故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'fangshi': '维修',
            'time': '2018.6.9'
          },
          {
            'xuhao': '8',
            'yuanyi': '部件老化A',
            'xiangqing': '感应器故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'fangshi': '更换部件',
            'time': '2018.6.9'
          },
          {
            'xuhao': '9',
            'yuanyi': '通信故障A',
            'xiangqing': '交换器故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'fangshi': '维修',
            'time': '2018.6.9'
          },
          {
            'xuhao': '10',
            'yuanyi': '风传感器故障A',
            'xiangqing': '采集器故障',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'fangshi': '维修',
            'time': '2018.6.9'
          },
        ],
        shengji: [
          {
            'xuhao': '1',
            'name': 'A气压传感器',
            'yuanbianhao': 'QY-001',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'yuanyouxinghao': 'CG-001',
            'genghuanbianhao': 'QY-002',
            'genghuanxinghao': 'CG-0011'
          },
          {
            'xuhao': '2',
            'name': 'A压力式波浪仪',
            'yuanbianhao': 'YL-001',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'yuanyouxinghao': 'CG-002',
            'genghuanbianhao': 'YL-002',
            'genghuanxinghao': 'CG-0012'
          },
          {
            'xuhao': '3',
            'name': 'A海流传感器',
            'yuanbianhao': 'HL-001',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'yuanyouxinghao': 'CG-003',
            'genghuanbianhao': 'HL-002',
            'genghuanxinghao': 'CG-0013'
          },
          {
            'xuhao': '4',
            'name': 'A气压传感器',
            'yuanbianhao': 'QY-001',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'yuanyouxinghao': 'CG-004',
            'genghuanbianhao': 'QY-002',
            'genghuanxinghao': 'CG-0014'
          },
          {
            'xuhao': '5',
            'name': 'A压力式波浪仪',
            'yuanbianhao': 'YL-001',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'yuanyouxinghao': 'CG-005',
            'genghuanbianhao': 'YL-002',
            'genghuanxinghao': 'CG-0015'
          },
          {
            'xuhao': '6',
            'name': 'A海流传感器',
            'yuanbianhao': 'HL-001',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'yuanyouxinghao': 'CG-006',
            'genghuanbianhao': 'HL-002',
            'genghuanxinghao': 'CG-0016'
          },
          {
            'xuhao': '7',
            'name': 'A气压传感器',
            'yuanbianhao': 'QY-001',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'yuanyouxinghao': 'CG-007',
            'genghuanbianhao': 'QY-002',
            'genghuanxinghao': 'CG-0017'
          },
          {
            'xuhao': '8',
            'name': 'A压力式波浪仪',
            'yuanbianhao': 'YL-001',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'yuanyouxinghao': 'CG-008',
            'genghuanbianhao': 'YL-002',
            'genghuanxinghao': 'CG-0018'
          },
          {
            'xuhao': '9',
            'name': 'A海流传感器',
            'yuanbianhao': 'HL-001',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'yuanyouxinghao': 'CG-009',
            'genghuanbianhao': 'HL-002',
            'genghuanxinghao': 'CG-0019'
          },
          {
            'xuhao': '10',
            'name': 'A压力式波浪仪',
            'yuanbianhao': 'YL-001',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'yuanyouxinghao': 'CG-010',
            'genghuanbianhao': 'YL-002',
            'genghuanxinghao': 'CG-0020'
          },
          {
            'xuhao': '11',
            'name': 'A海流传感器',
            'yuanbianhao': 'HL-001',
            'riqi': '2017.9.9',
            'fuzeren': '张三',
            'tel': '13666666666',
            'yuanyouxinghao': 'CG-011',
            'genghuanbianhao': 'HL-002',
            'genghuanxinghao': 'CG-0021'
          },
        ],
        beipin_1: [
          {
            'xuhao': '1',
            'name': '风速风向传感器',
            'xinghao': 'HY-002',
            'changshang': '国家海洋技术中心',
            'num': '10',
            'kucundian': '青岛中心站小麦岛海洋站',
            'time': '2017.9.9',
            'guzhang': '老化'
          },
          {
            'xuhao': '2',
            'name': '风速风向传感器',
            'xinghao': 'HY-003',
            'changshang': '国家海洋技术中心',
            'num': '20',
            'kucundian': '青岛中心站小麦岛海洋站',
            'time': '2017.9.9',
            'guzhang': '不准确'
          },
          {
            'xuhao': '3',
            'name': '风速风向传感器',
            'xinghao': 'HY-004',
            'changshang': '国家海洋技术中心',
            'num': '20',
            'kucundian': '青岛中心站小麦岛海洋站',
            'time': '2017.9.9',
            'guzhang': '损坏'
          },
          {
            'xuhao': '4',
            'name': '风速风向传感器',
            'xinghao': 'HY-006',
            'changshang': '国家海洋技术中心',
            'num': '10',
            'kucundian': '青岛中心站小麦岛海洋站',
            'time': '2017.9.9',
            'guzhang': '老化'
          },
          {
            'xuhao': '5',
            'name': '风速风向传感器',
            'xinghao': 'HY-007',
            'changshang': '国家海洋技术中心',
            'num': '20',
            'kucundian': '青岛中心站小麦岛海洋站',
            'time': '2017.9.9',
            'guzhang': '不准确'
          },
          {
            'xuhao': '6',
            'name': '风速风向传感器',
            'xinghao': 'HY-008',
            'changshang': '国家海洋技术中心',
            'num': '20',
            'kucundian': '青岛中心站小麦岛海洋站',
            'time': '2017.9.9',
            'guzhang': '损坏'
          },
          {
            'xuhao': '7',
            'name': '风速风向传感器',
            'xinghao': 'HY-009',
            'changshang': '国家海洋技术中心',
            'num': '20',
            'kucundian': '青岛中心站小麦岛海洋站',
            'time': '2017.9.9',
            'guzhang': '不准确'
          },
          {
            'xuhao': '8',
            'name': '风速风向传感器',
            'xinghao': 'HY-010',
            'changshang': '国家海洋技术中心',
            'num': '20',
            'kucundian': '青岛中心站小麦岛海洋站',
            'time': '2017.9.9',
            'guzhang': '损坏'
          },
        ],
        beipin_2: [
          {
            'xuhao': '1',
            'name': 'A浮标',
            'xinghao': 'HY-001',
            'changshang': '国家海洋技术中心',
            'num': '1',
            'kucundian': '青岛中心站小麦岛海洋站',
            'time': '2017.9.9',
            'guzhang': '老化'
          },
          {
            'xuhao': '2',
            'name': 'B浮标',
            'xinghao': 'HY-002',
            'changshang': '国家海洋技术中心',
            'num': '2',
            'kucundian': '青岛中心站小麦岛海洋站',
            'time': '2017.9.9',
            'guzhang': '不准确'
          },
          {
            'xuhao': '3',
            'name': 'C浮标',
            'xinghao': 'HY-003',
            'changshang': '国家海洋技术中心',
            'num': '3',
            'kucundian': '青岛中心站小麦岛海洋站',
            'time': '2017.9.9',
            'guzhang': '损坏'
          },
          {
            'xuhao': '4',
            'name': 'A浮标',
            'xinghao': 'HY-004',
            'changshang': '国家海洋技术中心',
            'num': '1',
            'kucundian': '青岛中心站小麦岛海洋站',
            'time': '2017.9.9',
            'guzhang': '老化'
          },
          {
            'xuhao': '5',
            'name': 'B浮标',
            'xinghao': 'HY-005',
            'changshang': '国家海洋技术中心',
            'num': '2',
            'kucundian': '青岛中心站小麦岛海洋站',
            'time': '2017.9.9',
            'guzhang': '老化'
          },
          {
            'xuhao': '6',
            'name': 'C浮标',
            'xinghao': 'HY-006',
            'changshang': '国家海洋技术中心',
            'num': '3',
            'kucundian': '青岛中心站小麦岛海洋站',
            'time': '2017.9.9',
            'guzhang': '不准确'
          },
          {
            'xuhao': '7',
            'name': 'A浮标',
            'xinghao': 'HY-007',
            'changshang': '国家海洋技术中心',
            'num': '1',
            'kucundian': '青岛中心站小麦岛海洋站',
            'time': '2017.9.9',
            'guzhang': '损坏'
          },
          {
            'xuhao': '8',
            'name': 'B浮标',
            'xinghao': 'HY-008',
            'changshang': '国家海洋技术中心',
            'num': '2',
            'kucundian': '青岛中心站小麦岛海洋站',
            'time': '2017.9.9',
            'guzhang': '不准确'
          },
          {
            'xuhao': '9',
            'name': 'C浮标',
            'xinghao': 'HY-009',
            'changshang': '国家海洋技术中心',
            'num': '3',
            'kucundian': '青岛中心站小麦岛海洋站',
            'time': '2017.9.9',
            'guzhang': '损坏'
          },
          {
            'xuhao': '10',
            'name': 'C浮标',
            'xinghao': 'HY-010',
            'changshang': '国家海洋技术中心',
            'num': '3',
            'kucundian': '青岛中心站小麦岛海洋站',
            'time': '2017.9.9',
            'guzhang': '不准确'
          },
        ],
        //海洋站
        jianding_hai: [
          {
            'number': '1',
            'name': '风速风向仪',
            'manufacturer': '国家海洋技术中心/XYT542',
            'date': '2017.5.6',
            'user': '张大海',
            'phone': '022-85858585',
            'state': '临近检定'
          },
          {
            'number': '2',
            'name': '温湿度仪',
            'manufacturer': '国家海洋技术中心/POT542',
            'date': '2017.6.6',
            'user': '周大海',
            'phone': '022-86868686',
            'state': '临近检定'
          },
          {
            'number': '3',
            'name': '风速风向仪',
            'manufacturer': '国家海洋技术中心/XYT542',
            'date': '2017.5.6',
            'user': '张大海',
            'phone': '022-85858585',
            'state': '临近检定'
          },
          {
            'number': '4',
            'name': '温湿度仪',
            'manufacturer': '国家海洋技术中心/POT542',
            'date': '2017.6.6',
            'user': '周大海',
            'phone': '022-86868686',
            'state': '临近检定'
          },
          {
            'number': '5',
            'name': '风速风向仪',
            'manufacturer': '国家海洋技术中心/XYT542',
            'date': '2017.5.6',
            'user': '张大海',
            'phone': '022-85858585',
            'state': '临近检定'
          },
          {
            'number': '6',
            'name': '温湿度仪',
            'manufacturer': '国家海洋技术中心/POT542',
            'date': '2017.6.6',
            'user': '周大海',
            'phone': '022-86868686',
            'state': '临近检定'
          },
          {
            'number': '7',
            'name': '温湿度仪',
            'manufacturer': '国家海洋技术中心/POT542',
            'date': '2017.6.6',
            'user': '周大海',
            'phone': '022-86868686',
            'state': '临近检定'
          },
          {
            'number': '8',
            'name': '气压仪',
            'manufacturer': '国家海洋技术中心/UIY542',
            'date': '2017.8.6',
            'user': '文大海',
            'phone': '022-86868686',
            'state': '临近检定'
          },
          {
            'number': '9',
            'name': '温湿度仪',
            'manufacturer': '国家海洋技术中心/POT542',
            'date': '2017.6.6',
            'user': '周大海',
            'phone': '022-86868686',
            'state': '临近检定'
          },
          {
            'number': '10',
            'name': '气压仪',
            'manufacturer': '国家海洋技术中心/UIY542',
            'date': '2017.8.6',
            'user': '文大海',
            'phone': '022-86868686',
            'state': '临近检定'
          }
        ],
        weihubaoyang_hai: [
          {'number': '1', 'item': '风速风向仪', 'date': '2017.5.5', 'user': '张大海', 'phone': '021-85858584'},
          {'number': '2', 'item': '气压仪', 'date': '2017.4.4', 'user': '文正立', 'phone': '021-87812125'},
          {'number': '3', 'item': '风速风向仪', 'date': '2017.5.5', 'user': '张大海', 'phone': '021-85858584'},
          {'number': '4', 'item': '气压仪', 'date': '2017.4.4', 'user': '文正立', 'phone': '021-87812125'},
          {'number': '5', 'item': '风速风向仪', 'date': '2017.5.5', 'user': '张大海', 'phone': '021-85858584'},
          {'number': '6', 'item': '气压仪', 'date': '2017.4.4', 'user': '文正立', 'phone': '021-87812125'},
          {'number': '7', 'item': '气压仪', 'date': '2017.4.4', 'user': '文正立', 'phone': '021-87812125'},
          {'number': '8', 'item': '风速风向仪', 'date': '2017.5.5', 'user': '张大海', 'phone': '021-85858584'},
          {'number': '9', 'item': '气压仪', 'date': '2017.4.4', 'user': '文正立', 'phone': '021-87812125'},
          {'number': '10', 'item': '风速风向仪', 'date': '2017.5.5', 'user': '张大海', 'phone': '021-85858584'}
        ],
        weihubaoyang_hai_1: [
          {'number': '1', 'item': '例行保养', 'date': '2018.4.12', 'user': '张大海', 'phone': '021-85858584', 'remark': ''},
          {'number': '2', 'item': '外观检查', 'date': '2018.5.12', 'user': '张大海', 'phone': '021-85858584', 'remark': ''},
          {'number': '3', 'item': '通信检查', 'date': '2018.4.12', 'user': '张大海', 'phone': '021-85858584', 'remark': ''},
          {'number': '4', 'item': '电源检查', 'date': '2018.6.12', 'user': '张大海', 'phone': '021-85858584', 'remark': ''},
          {'number': '5', 'item': '发射模块检查', 'date': '2018.4.12', 'user': '张大海', 'phone': '021-85858584', 'remark': ''},
          {'number': '6', 'item': '例行保养', 'date': '2018.5.12', 'user': '张大海', 'phone': '021-85858584', 'remark': ''},
          {'number': '7', 'item': '外观检查', 'date': '2018.3.12', 'user': '张大海', 'phone': '021-85858584', 'remark': ''},
          {'number': '8', 'item': '通信检查', 'date': '2018.2.12', 'user': '张大海', 'phone': '021-85858584', 'remark': ''},
          {'number': '9', 'item': '电源检查', 'date': '2018.4.12', 'user': '张大海', 'phone': '021-85858584', 'remark': ''},
          {'number': '10', 'item': '发射模块检查', 'date': '2018.5.12', 'user': '张大海', 'phone': '021-85858584', 'remark': ''}

        ],
        guzhang_1_hai: [
          {
            'number': '1',
            'item': '电源故障',
            'date': '电源模块，烧毁，无法正常工作',
            'user': '刘东海',
            'phone': '022-58757585',
            'remark': ''
          },
          {
            'number': '2',
            'item': '通信故障',
            'date': '通信板无信号，不能接入数据',
            'user': '夏利会',
            'phone': '021-85854512',
            'remark': ''
          },
          {
            'number': '3',
            'item': '发射模块故障',
            'date': '平潭地波雷达无射频信号',
            'user': '李大海',
            'phone': '021-85451232',
            'remark': ''
          },
          {
            'number': '4',
            'item': '存储模块故障',
            'date': '保文计算机出现存储错误',
            'user': '康孝理',
            'phone': '021-89541247',
            'remark': ''
          },
          {
            'number': '5',
            'item': '电源故障',
            'date': '电源模块，烧毁，无法正常工作',
            'user': '刘东海',
            'phone': '022-58757585',
            'remark': ''
          },
          {
            'number': '6',
            'item': '通信故障',
            'date': '通信板无信号，不能接入数据',
            'user': '夏利会',
            'phone': '021-85854512',
            'remark': ''
          },
          {
            'number': '7',
            'item': '发射模块故障',
            'date': '平潭地波雷达无射频信号',
            'user': '李大海',
            'phone': '021-85451232',
            'remark': ''
          },
          {
            'number': '8',
            'item': '通信故障',
            'date': '通信板无信号，不能接入数据',
            'user': '夏利会',
            'phone': '021-85854512',
            'remark': ''
          },
          {
            'number': '9',
            'item': '发射模块故障',
            'date': '平潭地波雷达无射频信号',
            'user': '李大海',
            'phone': '021-85451232',
            'remark': ''
          },
          {
            'number': '10',
            'item': '发射模块故障',
            'date': '平潭地波雷达无射频信号',
            'user': '李大海',
            'phone': '021-85451232',
            'remark': ''
          },
        ],
        guzhang_2_hai: [
          {
            'number': '1',
            'item': '电源故障',
            'date': '电源模块，烧毁，无法正常工作',
            'user': '刘东海',
            'phone': '2017.6.4',
            'remark': '更换模块'
          },
          {
            'number': '2',
            'item': '通信故障',
            'date': '通信板无信号，不能接入数据',
            'user': '夏利会',
            'phone': '2017.6.1',
            'remark': '更换备件'
          },
          {
            'number': '3',
            'item': '发射模块故障',
            'date': '平潭地波雷达无射频信号',
            'user': '李大海',
            'phone': '2017.6.2',
            'remark': '交付厂家维修'
          },
          {
            'number': '4',
            'item': '存储模块故障',
            'date': '保文计算机出现存储错误',
            'user': '康孝理',
            'phone': '2017.6.3',
            'remark': '更换模块'
          },
          {
            'number': '5',
            'item': '电源故障',
            'date': '电源模块，烧毁，无法正常工作',
            'user': '刘东海',
            'phone': '2017.6.4',
            'remark': '更换设备'
          },
          {
            'number': '6',
            'item': '通信故障',
            'date': '通信板无信号，不能接入数据',
            'user': '夏利会',
            'phone': '2017.6.5',
            'remark': '交付厂家维修'
          },
          {
            'number': '7',
            'item': '发射模块故障',
            'date': '平潭地波雷达无射频信号',
            'user': '李大海',
            'phone': '2017.6.4',
            'remark': '交付厂家维修'
          },
          {
            'number': '8',
            'item': '通信故障',
            'date': '通信板无信号，不能接入数据',
            'user': '夏利会',
            'phone': '2017.6.8',
            'remark': '更换模块'
          },
          {
            'number': '9',
            'item': '发射模块故障',
            'date': '平潭地波雷达无射频信号',
            'user': '李大海',
            'phone': '2017.6.4',
            'remark': '重新启动设备'
          },
          {
            'number': '10',
            'item': '发射模块故障',
            'date': '平潭地波雷达无射频信号',
            'user': '李大海',
            'phone': '2017.6.5',
            'remark': '重新启动设备'
          },
        ],
        shengji_hai: [
          {
            'number': '1',
            'name': '风速风向仪',
            'oldnum': 'XP5214',
            'oldtype': 'KPZ12',
            'newnum': 'XP5213',
            'newtype': 'KPZ19',
            'changetime': '2018.5.6',
            'user': '张冬冬',
            'phone': '022-87854512'
          },
          {
            'number': '2',
            'name': '气压仪',
            'oldnum': 'QI5245',
            'oldtype': 'YA58456',
            'newnum': 'SC5298',
            'newtype': 'PS58409',
            'changetime': '2018.5.15',
            'user': '陈木冬',
            'phone': '022-84845213'
          },
          {
            'number': '3',
            'name': '温湿度仪',
            'oldnum': 'AS5245',
            'oldtype': 'OP58456',
            'newnum': 'AS5298',
            'newtype': 'OP58409',
            'changetime': '2018.5.15',
            'user': '陈双双',
            'phone': '022-84845213'
          },
          {
            'number': '4',
            'name': '温湿度仪',
            'oldnum': 'AS5245',
            'oldtype': 'OP58456',
            'newnum': 'AS5298',
            'newtype': 'OP58409',
            'changetime': '2018.5.15',
            'user': '陈双双',
            'phone': '022-84845213'
          },
          {
            'number': '5',
            'name': '气压仪',
            'oldnum': 'QI5245',
            'oldtype': 'YA58456',
            'newnum': 'SC5298',
            'newtype': 'PS58409',
            'changetime': '2018.5.15',
            'user': '陈木冬',
            'phone': '022-84845213'
          },
          {
            'number': '6',
            'name': '风速风向仪',
            'oldnum': 'XP5214',
            'oldtype': 'KPZ12',
            'newnum': 'XP5213',
            'newtype': 'KPZ19',
            'changetime': '2018.5.6',
            'user': '张冬冬',
            'phone': '022-87854512'
          },
          {
            'number': '7',
            'name': '温湿度仪',
            'oldnum': 'AS5245',
            'oldtype': 'OP58456',
            'newnum': 'AS5298',
            'newtype': 'OP58409',
            'changetime': '2018.5.15',
            'user': '陈双双',
            'phone': '022-84845213'
          },
          {
            'number': '8',
            'name': '风速风向仪',
            'oldnum': 'XP5214',
            'oldtype': 'KPZ12',
            'newnum': 'XP5213',
            'newtype': 'KPZ19',
            'changetime': '2018.5.6',
            'user': '张冬冬',
            'phone': '022-87854512'
          },
          {
            'number': '9',
            'name': '温湿度仪',
            'oldnum': 'AS5245',
            'oldtype': 'OP58456',
            'newnum': 'AS5298',
            'newtype': 'OP58409',
            'changetime': '2018.5.15',
            'user': '陈双双',
            'phone': '022-84845213'
          },
          {
            'number': '10',
            'name': '风速风向仪',
            'oldnum': 'XP5214',
            'oldtype': 'KPZ12',
            'newnum': 'XP5213',
            'newtype': 'KPZ19',
            'changetime': '2018.5.6',
            'user': '张冬冬',
            'phone': '022-87854512'
          },
          {
            'number': '15',
            'name': '温湿度仪',
            'oldnum': 'AS5245',
            'oldtype': 'OP58456',
            'newnum': 'AS5298',
            'newtype': 'OP58409',
            'changetime': '2018.5.15',
            'user': '陈双双',
            'phone': '022-84845213'
          },
        ],
        beipin_1_hai: [
          {
            'number': '1',
            'name': '   风速风向传感器',
            'type': '型号SK2542',
            'manufacturer': '国家海洋技术中心',
            'count': '10',
            'location': '平潭海洋站',
            'time': '2018.5.15',
            'fault': '电源故障；通信故障'
          },
          {
            'number': '2',
            'name': '   风速风向传感器',
            'type': '型号PL2562',
            'manufacturer': '国家海洋技术中心',
            'count': '20',
            'location': '厦门中心站',
            'time': '2018.5.6',
            'fault': '电源故障；通信故障'
          },
          {
            'number': '3',
            'name': '   风速风向传感器',
            'type': '型号CK4525',
            'manufacturer': '国家海洋技术中心',
            'count': '20',
            'location': '南通中心站',
            'time': '2018.5.15',
            'fault': '电源故障；通信故障'
          },
          {
            'number': '4',
            'name': '   温湿度传感器',
            'type': '型号MK7878',
            'manufacturer': '国家海洋技术中心',
            'count': '10',
            'location': '平潭海洋站',
            'time': '2018.5.17',
            'fault': '电源故障；通信故障'
          },
          {
            'number': '5',
            'name': '   温湿度传感器',
            'type': '型号YL2562',
            'manufacturer': '国家海洋技术中心',
            'count': '20',
            'location': '厦门中心站',
            'time': '2018.5.16',
            'fault': '电源故障；通信故障'
          },
          {
            'number': '6',
            'name': '   温度度传感器',
            'type': '型号CK4875',
            'manufacturer': '国家海洋技术中心',
            'count': '20',
            'location': '南通中心站',
            'time': '2018.5.15',
            'fault': '电源故障；通信故障'
          },
          {
            'number': '7',
            'name': '   温湿度传感器',
            'type': '型号YL2562',
            'manufacturer': '国家海洋技术中心',
            'count': '20',
            'location': '厦门中心站',
            'time': '2018.5.16',
            'fault': '电源故障；通信故障'
          },
          {
            'number': '8',
            'name': '   温度度传感器',
            'type': '型号CK4875',
            'manufacturer': '国家海洋技术中心',
            'count': '20',
            'location': '南通中心站',
            'time': '2018.5.15',
            'fault': '电源故障；通信故障'
          },
        ],
        beipin_2_hai: [
          {
            'number': '1',
            'name': '海洋台站',
            'type': 'XYR1200',
            'manufacturer': '国家海洋技术中心',
            'count': '20',
            'location': '上海中心站',
            'time': '2018.2.6',
            'fault': '通信故障；电源故障'
          },
          {
            'number': '2',
            'name': '地波雷达',
            'type': 'CODA2000',
            'manufacturer': '武汉德威斯有限公司',
            'count': '20',
            'location': '上海中心站',
            'time': '2018.2.6',
            'fault': '通信故障；电源故障'
          },
          {
            'number': '3',
            'name': 'X波段雷达',
            'type': 'XDA4545',
            'manufacturer': '武汉德威斯有限公司',
            'count': '20',
            'location': '上海中心站',
            'time': '2018.2.6',
            'fault': '通信故障；电源故障'
          },
          {
            'number': '4',
            'name': '10M浮标',
            'type': 'DAF9000',
            'manufacturer': '国家海洋技术中心',
            'count': '20',
            'location': '上海中心站',
            'time': '2018.2.6',
            'fault': '通信故障；电源故障'
          },
          {
            'number': '5',
            'name': '3M浮标',
            'type': 'UR7878',
            'manufacturer': '国家海洋技术中心',
            'count': '20',
            'location': '上海中心站',
            'time': '2018.2.6',
            'fault': '通信故障；电源故障'
          },
          {
            'number': '6',
            'name': '海啸浮标',
            'type': 'SL-8976',
            'manufacturer': '国家海洋技术中心',
            'count': '20',
            'location': '上海中心站',
            'time': '2018.2.6',
            'fault': '通信故障；电源故障'
          },
          {
            'number': '7',
            'name': '潜标',
            'type': 'KKS-6543',
            'manufacturer': '国家海洋技术中心',
            'count': '20',
            'location': '上海中心站',
            'time': '2018.2.6',
            'fault': '通信故障；电源故障'
          },
          {
            'number': '8',
            'name': 'S波段雷达',
            'type': 'LP9890',
            'manufacturer': '武汉德威斯有限公司',
            'count': '20',
            'location': '上海中心站',
            'time': '2018.2.6',
            'fault': '通信故障；电源故障'
          },
          {
            'number': '9',
            'name': '海洋台站',
            'type': 'SL-8987',
            'manufacturer': '国家海洋技术中心',
            'count': '20',
            'location': '上海中心站',
            'time': '2018.2.6',
            'fault': '通信故障；电源故障'
          },
          {
            'number': '10',
            'name': 'Argo浮标',
            'type': 'AG8000',
            'manufacturer': '国家海洋技术中心',
            'count': '20',
            'location': '上海中心站',
            'time': '2018.2.6',
            'fault': '通信故障；电源故障'
          },
        ],
      }

    },
    methods: {
      handleClick(tab, event) {

      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      clockDetail() {
        $(".detail").animate({"margin-left": -this.clientWidth * .9 * .41 + 'px'}, 500, function () {
          $(".detail").hide()
        })
      },
      clockDetail_ocean() {
        $(".detail_ocean").animate({"margin-left": -this.clientWidth * .9 * .41 + 'px'}, 500, function () {
          $(".detail_ocean").hide()
        })
      },
      //单选
      // getType(){
      //   let that = this
      //   console.log(this.radioType)
      //   if(this.radioType=="volunteership"){
      //     this.showNum1 =[]
      //     this.showNum2.forEach(function (item,index) {
      //       if(item.type == that.radioType) {
      //         that.showNum1.push(item)
      //       }
      //     })
      //     return this.showNum1
      //   }
      //
      //   this.$http.get('http://71.0.1.192/otes/baseDataPort/getAllViewData?type='+this.radioType+'&view='+this.radioView+'&sea='+this.radioSea+'&state='+this.radioState).then((res)=>{
      //     that.showNum1 = res.data.dataList
      //   }, (err) => {
      //     console.log(err)
      //   })
      //
      // },
      // getView(){
      //   let that = this
      //   console.log(this.radioView)
      //   this.$http.get('http://71.0.1.192/otes/baseDataPort/getAllViewData?type='+this.radioType+'view='+this.radioView+'sea='+this.radioSea+'state='+this.radioState).then((res)=>{
      //     that.showNum1 = res.data.dataList
      //   }, (err) => {
      //     console.log(err)
      //   })
      // },
      // getSea(){
      //   let that = this
      //   console.log(this.radioSea)
      //   this.$http.get('http://71.0.1.192/otes/baseDataPort/getAllViewData?type='+this.radioType+'view='+this.radioView+'sea='+this.radioSea+'state='+this.radioState).then((res)=>{
      //     that.showNum1 = res.data.dataList
      //   }, (err) => {
      //     console.log(err)
      //   })
      // },
      // getState(){
      //   let that = this
      //   console.log(this.radioState)
      //   this.$http.get('http://71.0.1.192/otes/baseDataPort/getAllViewData?type='+this.radioType+'view='+this.radioView+'sea='+this.radioSea+'state='+this.radioState).then((res)=>{
      //     that.showNum1 = res.data.dataList
      //   }, (err) => {
      //     console.log(err)
      //   })
      // },

    },
    mounted (){
      var that = this

      $('.det_tab_ul li').on('click', function () {
        $('.det_tab_ul li').each(function (key, val) {
          $(val).removeClass('active')
        })
        $(this).addClass('active')
      })


      let oceanHeight = document.documentElement.clientHeight
      oceanHeight = oceanHeight < 800 ? 800 * .8 : oceanHeight * .8
      $('.info_r_mid').css('margin-top',oceanHeight*.02)
      let info_r_botW = $('.info_r_bot_bot').width()
      let info_r_botH = $('.info_r_bot_bot').height()
      $(".bot_r").width(info_r_botW - 240-5-15 -5)
      $(".bot_r").height(info_r_botH)
      $('.first_count').height(oceanHeight - 150)
      $('.second_count').height(oceanHeight - 150)
      $('.first_count').height(oceanHeight - 150)
      $('.third_count').height(oceanHeight - 150)
      $('.fourth_count').height(oceanHeight - 150)

      /*自适应-start*/
      this.tabHeight = (oceanHeight - 150) * .44 - 30
      this.shengjiTabHeight = oceanHeight - 150
      this.jiandingTabHeight = oceanHeight - 150

      /*自适应-end*/
      let screeH = document.documentElement.clientHeight >= 800 ? document.documentElement.clientHeight : 800
      this.guanceH = screeH * .49 - 40
      var layer = this.$layer;
      var serverip = 'http://127.0.0.1';

      var tiandituserverip = "http://10.0.4.72:81";
      var configip = "http://71.0.1.192"
      // var tiandituserverip="http://t0.tianditu.com";
      var configip = "http://127.0.0.1:3000"

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


      // $(".tob_radio_1 input:radio[name=type]").change(function () {
      //   radioType = $(this).val()
      //   console.log(radioType)
      //   // if(radioType=="volunteership"){
      //   //   that.showNum1 =[]
      //   //   that.showNum2.forEach(function (item,index) {
      //   //     if(item.type == that.radioType) {
      //   //       console.log(item)
      //   //       that.showNum1.push(item)
      //   //     }
      //   //   })
      //   //   console.log(that.showNum1)
      //   //   return that.showNum1
      //   // }
      //   that.$http.get('http://71.0.1.192/otes/baseDataPort/getAllViewData?type='+radioType+'&view='+radioView+'&sea='+radioSea+'&state='+radioState).then((res)=>{
      //     console.log(res.data)
      //     that.showNum2 = res.data.dataList
      //   })
      //
      // });
      // $(".tob_radio_2 input:radio[name=view]").change(function () {
      //   radioView = $(this).val()
      // });
      // $(".tob_radio_3 input:radio[name=sea]").change(function () {
      //   radioSea = $(this).val()
      // });
      // $(".tob_radio_4 input:radio[name=state]").change(function () {
      //   radioState = $(this).val()
      // });

      // var g_core = this.globalviewercore1();
      var g_core = new globalviewercore();
      g_core.initmap(121.56301, 34.36754, 'map');
      g_core.switchlayer('lantiandituvector')
      g_core.switchoperation('singletargetselection');

      //数据总入口
      // var arr = [
      //   {'name':'石砰海洋测点','id':'045262f5d2f647c68b5ff282835cc54b','lat':'120°38\′43.4″','lng':'27°24\′29.2″','type':'marinestationinfo'},
      //   {'name':'大戢山海洋站','id':'2475880ecef04ee08d94372c9571f602','lat':'121°37\′12.0″','lng':'30°36\′30.0″','type':'marinestationinfo'},
      //   {'name':'芦潮港海洋环境监测站','id':'304dd4e55ad94665adb568e041056da8','lat':'121°50\′25.1″','lng':'30°51\′29.0″','type':'marinestationinfo'},
      //   {'name':'沙港头测点','id':'7c494abda5574e26bd965a94439cc5e4','lat':'121°06\′09.7″','lng':'28°10\′30.0″','type':'marinestationinfo'},
      //   {'name':'小衢山测点','id':'8800507122834f02a29284690abab7e2','lat':'122°16\′19.0″','lng':'30°31\′33.7″','type':'marinestationinfo'},
      //   {'name':'坎门海洋环境监测站','id':'8a16e3336625485bbe14a71e5f61550d','lat':'121°17\′04.6″','lng':'28°05\′23.8″','type':'marinestationinfo'},
      //   {'name':'大陈海洋环境监测站','id':'9e0fd42e4fdd4c728a82f6d5249095d1','lat':'121°54\′03.2″','lng':'28°27\′10.2″','type':'marinestationinfo'},
      //   {'name':'南麂海洋环境监测站','id':'a20683fb1ec64be1a65c1ffb0c862583','lat':'121°03\′58.0″','lng':'27°28\′1.2″','type':'marinestationinfo'},
      //   {'name':'大门岛海洋测点','id':'ab14dabae21e485fbc1c7fe15f3670fa','lat':'121°02\′17.7″','lng':'27°57\′01.4″','type':'marinestationinfo'},
      //   {'name':'温州海洋环境监测站','id':'b5dba665892f4725bd84b5033f64db28','lat':'121°08\′50.9″','lng':'27°51\′44.6″','type':'marinestationinfo'},
      //   {'name':'东海大桥B平台','id':'c415830c3e9d488fa82b196026620a14','lat':'121°58\′36.0″','lng':'30°44\′17.8″','type':'marinestationinfo'},
      //   {'name':'瓯江口海洋测点','id':'d549f053ff4a4005ad2b4ca81157adf9','lat':'120°49\′51.0″','lng':'27°59\′21.3″','type':'marinestationinfo'},
      //   {'name':'南澳海洋环境监测站云澳测站','id':'6740fe00eeb64a78b46c869cfd4e94ff','lat':'117°6\′','lng':'23°24\′','type':'marinestationinfo'},
      //   {'name':'深圳站赤湾测点','id':'21a2bed201564f7abccd1ce1858c568a','lat':'113°52.9\′','lng':'22°27.5\′','type':'marinestationinfo'},
      //   {'name':'崇明海洋环境监测站','id':'370643cf835a47589b0f58b01efeb9ff','lat':'121°36.0\′','lng':'31°31.5\′','type':'marinestationinfo'},
      //   {'name':'饶平海洋环境监测站','id':'3f7e2feb9b074639803dfec52eea5fcd','lat':'117°6.08\′','lng':'23°33.24\′','type':'marinestationinfo'},
      //   {'name':'汕头海洋环境监测站','id':'46d0e0265676421582c6de4a901c4a79','lat':'116°46.5\′','lng':'23°13.2\′','type':'marinestationinfo'},
      //   {'name':'惠来海洋环境监测站','id':'588ce61ce8e64802a2108c663b950570','lat':'116°32.50\′','lng':'23°0.39\′','type':'marinestationinfo'},
      //   {'name':'惠州海洋环境监测站','id':'90e73905da174fba8d12edc5abc27a80','lat':'114°33.876\′','lng':'22°41.668\′','type':'marinestationinfo'},
      //   {'name':'深圳站盐田测点','id':'93209f9064304f368a79a1cca0c21511','lat':'114°16.7\′','lng':'22°35.3\′','type':'marinestationinfo'},
      //   {'name':'大戢山海洋站','id':'9aef712db6d3410589391b1bd2fe1421','lat':'122°10\′','lng':'30°49\′','type':'marinestationinfo'},
      //   {'name':'佘山海洋环境监测站','id':'a1183b04abe8409f88763be622508fde','lat':'122°14\′','lng':'31°25\′','type':'marinestationinfo'},
      //   {'name':'遮浪海洋环境监测站','id':'abd43020eb1d4856a5adc78012e4b342','lat':'115°34.0100\′','lng':'22°39.0008′\′','type':'marinestationinfo'},
      //   {'name':'陆丰海洋环境监测站','id':'bdb121d71bf34bdc9ff7d565b56f6663','lat':'116°4.712\′','lng':'22°50.84′\′','type':'marinestationinfo'},
      //   {'name':'汕尾海洋环境监测站','id':'c55ddf811d434ea4a1d8443c4d95db5a','lat':'115°22.0\′','lng':'22°46.0′\′','type':'marinestationinfo'},
      //   {'name':'南澳海洋环境监测站南澳岛测站','id':'c590743ee2614e17aafe6f46a5945bda','lat':'116°59.7\′','lng':'23°25.2′\′','type':'marinestationinfo'},
      //   {'name':'广州海洋站','id':'e9285b8991004f46a29b475d372f2550','lat':'113°41\′','lng':'22°40′\′','type':'marinestationinfo'},
      //   {'name':'椒江海洋测点','id':'ec54e04e3ad045ecadd58ca0a18aeac6','lat':'121°26\′20.2″','lng':'28°42\′08.6″','type':'marinestationinfo'},
      //   {'name':'北麂海洋测点','id':'ec2897c6832b435ba4ad4fe88a3e39b6','lat':'121°11\′24.5″','lng':'27°37\′9.1″','type':'marinestationinfo'},
      //   {'name':'大型海洋监测浮标','id':'09b94d76571a4f2a808c154cf7ddba33','lat':'123°20.31\′E','lng':'38°54.93\′N','type':'buoyinfo'},
      //   {'name':'大型海洋监测浮标','id':'15c757e1c9c44838b3e5df11eeb318a7','lat':'120°44.65\′E','lng':'35°14.60\′N','type':'buoyinfo'},
      //   {'name':'大型海洋监测浮标','id':'1da23de74fa54ca9bd5b3aa83d2f1ec3','lat':'123°29.98\′E','lng':'37°59.70\′N','type':'buoyinfo'},
      //   {'name':'大型海洋监测浮标','id':'247038e1345e47e5a97f4d5ab8ae3f01','lat':'121°22.95\′E','lng':'36°11.99\′N','type':'buoyinfo'},
      //   {'name':'QF303','id':'26a46f684c8e4fd29789740c689c3e98','lat':'115°35.53\′E','lng':'22°16.55\′N','type':'buoyinfo'},
      //   {'name':'QF307','id':'27eb607dced346a58deab01f15cd2795','lat':'117°6.02\′E','lng':'22°51.98\′N','type':'buoyinfo'},
      //   {'name':'SF301','id':'2a645d31f590458d998e692c349a597c','lat':'115°27.85\′E','lng':'19°51.63\′N','type':'buoyinfo'},
      //   {'name':'大型海洋监测浮标','id':'400e41701cc1448d9f311d2f1bb903f0','lat':'120°26.82\′E','lng':'36°03.04\′N','type':'buoyinfo'},
      //   {'name':'大型海洋监测浮标','id':'4287f5695e2c49e98abec88868f6c980','lat':'122°00.67\′E','lng':'35°15.30\′N','type':'buoyinfo'},
      //   {'name':'大型海洋监测浮标','id':'45bdc3bfc67a44868321db21e7644c20','lat':'120°04.43\′E','lng':'39°01.32\′N','type':'buoyinfo'},
      //   {'name':'大型海洋监测浮标','id':'54a2016d4de34e0d9cdbbf54f0f97a58','lat':'120°36.07\′E','lng':'39°29.84\′N','type':'buoyinfo'},
      //   {'name':'大型海洋监测浮标','id':'5a6e760cd3044c1fbb071281a390506c','lat':'121°09.06\′E','lng':'38°33.03\′N','type':'buoyinfo'},
      //   {'name':'QF306','id':'5c2d092cd6834e6f9586e9c60aa19862','lat':'112°38.01\′E','lng':'21°6.97\′N','type':'buoyinfo'},
      //   {'name':'大型海洋监测浮标','id':'5cd9465a965946e78ceec9b1f5e7b478','lat':'121°03.38\′E','lng':'38°09.31\′N','type':'buoyinfo'},
      //   {'name':'海啸浮标','id':'6034726efe4e4a038a51f818d6ea28e0','lat':'116.0°E','lng':'18.5°N','type':'buoyinfo'},
      //   {'name':'SF303','id':'652f576e661c4071982a143dd7887355','lat':'112°41.90\′E','lng':'9°24.83\′N','type':'buoyinfo'},
      //   {'name':'大型海洋监测浮标','id':'67945d94105e42a1930671d9be351c25','lat':'123°29.21\′E','lng':'35°14.50\′N','type':'buoyinfo'},
      //   {'name':'QF305','id':'7b69a10a6ebf4e2288913ab98731df18','lat':'113°59.94\′E','lng':'21°30.04\′N','type':'buoyinfo'},
      //   {'name':'SF306','id':'7dbc958ee1c64709b7c16fa9e882bfed','lat':'111°20.34\′E','lng':'17°56.55\′N','type':'buoyinfo'},
      //   {'name':'大型海洋监测浮标','id':'7fd8322fc35b4ff5941289d347b5c440','lat':'119°27.50\′E','lng':'35°04.00\′N','type':'buoyinfo'},
      //   {'name':'大型海洋监测浮标','id':'88ca0c464aa94fc3b2a0600e1b5549e3','lat':'119°38.30\′E','lng':'35°22.70\′N','type':'buoyinfo'},
      //   {'name':'QF304','id':'92326e639aee4e639918b0e8af4fd59e','lat':'108°29.98\′E','lng':'19°59.95\′N','type':'buoyinfo'},
      //   {'name':'大型海洋监测浮标','id':'93159332eef14845bee540d69b319142','lat':'119°51.07\′E','lng':'38°02.09\′N','type':'buoyinfo'},
      //   {'name':'大型海洋监测浮标','id':'b8acad8b84104da3a0c3c074211ee344','lat':'123°29.76\′E','lng':'36°51.28\′N','type':'buoyinfo'},
      //   {'name':'SF305','id':'d7f3209678814d0caf4814d8f3b5fbcf','lat':'113°45.06\′E','lng':'17°29.74\′N','type':'buoyinfo'},
      //   {'name':'大型海洋监测浮标','id':'dbb4fee6870f425cb0aeafee9c97281b','lat':'121°36.51\′E','lng':'36°41.31\′N','type':'buoyinfo'},
      //   {'name':'SF302','id':'f79d0234cd9f4f329e7f14f91893ef90','lat':'111°21.47\′E','lng':'17°57.15\′N','type':'buoyinfo'},
      //   {'name':'大戢山','id':'0b6915949b8d44ab99bf845e8f9a6281','lat':'122°10\′26.89″','lng':'30°48\′38.59″','type':'xbandradarinfo'},
      //   {'name':'小衢山','id':'8662b449d3aa4db7a827f8a906e030b3','lat':'122°15\′55.06″','lng':'30°31\′40.99″','type':'xbandradarinfo'},
      // ]
      // var arr_marinestationinfo=[] ,arr_buoyinfo=[] ,arr_subsurfacebuoyinfo=[] ,arr_xbandradarinfo=[];
      // arr.forEach(function (item,index) {
      //   if(item.type=='marinestationinfo'){ //海洋站
      //     arr_marinestationinfo.push(item)
      //   }
      //   if(item.type=='buoyinfo'){ //浮标
      //     arr_buoyinfo.push(item)
      //   }
      //   if(item.type=='subsurfacebuoyinfo'){ //潜标
      //     arr_subsurfacebuoyinfo.push(item)
      //   }
      //   if(item.type=='xbandradarinfo'){ //雷达
      //     arr_xbandradarinfo.push(item)
      //   }
      // })
      // g_core.addrawjsonpoints('gro_marinestationinfo',sendJson(arr_marinestationinfo));//海洋站
      // g_core.addrawjsonpoints('gro_buoyinfo',sendJson(arr_buoyinfo));//浮标
      // g_core.addrawjsonpoints('gro_subsurfacebuoyinfo',sendJson(arr_subsurfacebuoyinfo));//潜标
      // g_core.addrawjsonpoints('gro_xbandradarinfo',sendJson(arr_xbandradarinfo));//雷达


      //接口总入口
      // var LocalAPI = 'http://71.0.1.192/otes/baseDataPort/getAllData?username=admin&password=admin'
      var arrRadio = 'http://71.0.1.192/otes/baseDataPort/getAllViewData'
      var arr_marinestationinfo = [], arr_buoyinfo = [], arr_subsurfacebuoyinfo = [], arr_xbandradarinfo = [];
      this.$http.get(arrRadio).then((res) => {
        var arr = []
        arr = res.data.dataList
        that.showNum2 = arr
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

      }, (err) => {
        console.log(err)
      })

      function sendJson(arrAdd) {
        var _arr = arrAdd
        var iconType = {}
        iconType.type = "FeatureCollection";
        iconType.features = [];
        _arr.forEach(function (item, index) {
          //海洋站
          if (item.type == "marinestationinfo") {
            item.imgUrlPath = configip + '/static/img/wuIcon.png'
          }
          //浮标
          if (item.type == "buoyinfo") {
            item.imgUrlPath = configip + '/static/img/reg_11.png'
          }
          //潜标
          if (item.type == "subsurfacebuoyinfo") {
            item.imgUrlPath = configip + '/static/img/reg_06.png'
          }
          //雷达
          if (item.type == "xbandradarinfo") {
            item.imgUrlPath = configip + '/static/img/reg_05.png'
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

      //总渲染- end

      //右上单选 默认渲染
      // this.$http.get('http://71.0.1.192/otes/baseDataPort/getAllViewData').then((res)=>{
      //   this.showNum1 = res.data.dataList
      // }, (err) => {
      //   console.log(err)
      // })


      // this.showNum1 = [
      //   {
      //     "devicenumber": "07455",
      //     "lng": "28°42′08.6″",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局温州海洋环境监测中心站",
      //     "name": "椒江海洋测点",
      //     "id": "ec54e04e3ad045ecadd58ca0a18aeac6",
      //     "state": "在用",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "121°26′20.2″"
      //   }, {
      //     "devicenumber": "07459",
      //     "lng": "27°37′9.1″",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局温州海洋环境监测中心站",
      //     "name": "北麂海洋测点",
      //     "id": "ec2897c6832b435ba4ad4fe88a3e39b6",
      //     "state": "在用",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "121°11′24.5″"
      //   }, {
      //     "devicenumber": "09736",
      //     "lng": "22°40′′",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局南海预报中心",
      //     "name": "广州海洋站",
      //     "id": "e9285b8991004f46a29b475d372f2550",
      //     "state": "在用",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "113°41′"
      //   }, {
      //     "devicenumber": "07451",
      //     "lng": "27°59′21.3″",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局温州海洋环境监测中心站",
      //     "name": "瓯江口海洋测点",
      //     "id": "d549f053ff4a4005ad2b4ca81157adf9",
      //     "state": "在用",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "120°49′51.0″"
      //   }, {
      //     "devicenumber": "09803",
      //     "lng": "23°25.2′′",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局汕尾海洋环境监测中心站",
      //     "name": "南澳海洋环境监测站南澳岛测站",
      //     "id": "c590743ee2614e17aafe6f46a5945bda",
      //     "state": "在建",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "116°59.7′"
      //   }, {
      //     "devicenumber": "09711",
      //     "lng": "22°46.0′′",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局汕尾海洋环境监测中心站",
      //     "name": "汕尾海洋环境监测站",
      //     "id": "c55ddf811d434ea4a1d8443c4d95db5a",
      //     "state": "无",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "115°22.0′"
      //   }, {
      //     "devicenumber": "05452",
      //     "lng": "30°44′17.8″",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局东海预报中心",
      //     "name": "东海大桥B平台",
      //     "id": "c415830c3e9d488fa82b196026620a14",
      //     "state": "无",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "121°58′36.0″"
      //   }, {
      //     "devicenumber": "09867",
      //     "lng": "22°50.84′′",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局汕尾海洋环境监测中心站",
      //     "name": "陆丰海洋环境监测站",
      //     "id": "bdb121d71bf34bdc9ff7d565b56f6663",
      //     "state": "无",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "116°4.712′"
      //   }, {
      //     "devicenumber": "07450",
      //     "lng": "27°51′44.6″",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局温州海洋环境监测中心站",
      //     "name": "温州海洋环境监测站",
      //     "id": "b5dba665892f4725bd84b5033f64db28",
      //     "state": "无",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "121°08′50.9″"
      //   }, {
      //     "devicenumber": "09712",
      //     "lng": "22°39.0008′′",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局汕尾海洋环境监测中心站",
      //     "name": "遮浪海洋环境监测站",
      //     "id": "abd43020eb1d4856a5adc78012e4b342",
      //     "state": "无",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "115°34.0100′"
      //   }, {
      //     "devicenumber": "07460",
      //     "lng": "27°57′01.4″",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局温州海洋环境监测中心站",
      //     "name": "大门岛海洋测点",
      //     "id": "ab14dabae21e485fbc1c7fe15f3670fa",
      //     "state": "在用",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "121°02′17.7″"
      //   }, {
      //     "devicenumber": "07425",
      //     "lng": "27°28′1.2″",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局温州海洋环境监测中心站",
      //     "name": "南麂海洋环境监测站",
      //     "id": "a20683fb1ec64be1a65c1ffb0c862583",
      //     "state": "无",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "121°03′58.0″"
      //   }, {
      //     "devicenumber": "06414",
      //     "lng": "31°25′",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局东海预报中心",
      //     "name": "佘山海洋环境监测站",
      //     "id": "a1183b04abe8409f88763be622508fde",
      //     "state": "无",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "122°14′"
      //   }, {
      //     "devicenumber": "07422",
      //     "lng": "28°27′10.2″",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局温州海洋环境监测中心站",
      //     "name": "大陈海洋环境监测站",
      //     "id": "9e0fd42e4fdd4c728a82f6d5249095d1",
      //     "state": "在用",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "121°54′03.2″"
      //   }, {
      //     "devicenumber": "07415",
      //     "lng": "30°49′",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局东海分局",
      //     "name": "大戢山海洋站",
      //     "id": "9aef712db6d3410589391b1bd2fe1421",
      //     "state": "在用",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "122°10′"
      //   }, {
      //     "devicenumber": "09733",
      //     "lng": "22°35.3′",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局深圳海洋管理处",
      //     "name": "深圳站盐田测点",
      //     "id": "93209f9064304f368a79a1cca0c21511",
      //     "state": "无",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "114°16.7′"
      //   }, {
      //     "devicenumber": "09740",
      //     "lng": "22°41.668′",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局深圳海洋管理处",
      //     "name": "惠州海洋环境监测站",
      //     "id": "90e73905da174fba8d12edc5abc27a80",
      //     "state": "在用",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "114°33.876′"
      //   }, {
      //     "devicenumber": "07424",
      //     "lng": "28°05′23.8″",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局温州海洋环境监测中心站",
      //     "name": "坎门海洋环境监测站",
      //     "id": "8a16e3336625485bbe14a71e5f61550d",
      //     "state": "无",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "121°17′04.6″"
      //   }, {
      //     "devicenumber": "06416",
      //     "lng": "30°31′33.7″",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局东海预报中心",
      //     "name": "小衢山测点",
      //     "id": "8800507122834f02a29284690abab7e2",
      //     "state": "在用",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "122°16′19.0″"
      //   }, {
      //     "devicenumber": "07425",
      //     "lng": "28°10′30.0″",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局温州海洋环境监测中心站",
      //     "name": "沙港头测点",
      //     "id": "7c494abda5574e26bd965a94439cc5e4",
      //     "state": "在用",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "121°06′09.7″"
      //   }, {
      //     "devicenumber": "09866",
      //     "lng": "23°0.39′",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局汕尾海洋环境监测中心站",
      //     "name": "惠来海洋环境监测站",
      //     "id": "588ce61ce8e64802a2108c663b950570",
      //     "state": "在用",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "116°32.50′"
      //   }, {
      //     "devicenumber": "09735",
      //     "lng": "23°13.2′",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局汕尾海洋环境监测中心站",
      //     "name": "汕头海洋环境监测站",
      //     "id": "46d0e0265676421582c6de4a901c4a79",
      //     "state": "在用",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "116°46.5′"
      //   }, {
      //     "devicenumber": "09863",
      //     "lng": "23°33.24′",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局汕尾海洋环境监测中心站",
      //     "name": "饶平海洋环境监测站",
      //     "id": "3f7e2feb9b074639803dfec52eea5fcd",
      //     "state": "在用",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "117°6.08′"
      //   }, {
      //     "devicenumber": "05454",
      //     "lng": "31°31.5′",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局东海预报中心",
      //     "name": "崇明海洋环境监测站",
      //     "id": "370643cf835a47589b0f58b01efeb9ff",
      //     "state": "在用",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "121°36.0′"
      //   }, {
      //     "devicenumber": "05453",
      //     "lng": "30°51′29.0″",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局东海预报中心",
      //     "name": "芦潮港海洋环境监测站",
      //     "id": "304dd4e55ad94665adb568e041056da8",
      //     "state": "在建",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "121°50′25.1″"
      //   }, {
      //     "devicenumber": "07416",
      //     "lng": "30°36′30.0″",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局东海预报中心",
      //     "name": "大戢山海洋站",
      //     "id": "2475880ecef04ee08d94372c9571f602",
      //     "state": "在用",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "121°37′12.0″"
      //   }, {
      //     "devicenumber": "09713",
      //     "lng": "22°27.5′",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局深圳海洋管理处",
      //     "name": "深圳站赤湾测点",
      //     "id": "21a2bed201564f7abccd1ce1858c568a",
      //     "state": "在用",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "113°52.9′"
      //   }, {
      //     "devicenumber": "09710",
      //     "lng": "23°24′",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局东海预报中心",
      //     "name": "南澳海洋环境监测站云澳测站",
      //     "id": "1ad3acf422374d0984d24ed2c409c80c",
      //     "state": "在用",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "117°6′"
      //   }, {
      //     "devicenumber": "07458",
      //     "lng": "27°24′29.2″",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局温州海洋环境监测中心站",
      //     "name": "石砰海洋测点",
      //     "id": "045262f5d2f647c68b5ff282835cc54b",
      //     "state": "在用",
      //     "type": "marinestationinfo",
      //     "typename": "台站",
      //     "lat": "120°38′43.4″"
      //   }, {
      //     "devicenumber": null,
      //     "lng": "17°57.15′N",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局南海调查技术中心",
      //     "name": "SF302",
      //     "id": "f79d0234cd9f4f329e7f14f91893ef90",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "111°21.47′E"
      //   }, {
      //     "devicenumber": "QF159",
      //     "lng": "36°41.31′N",
      //     "seaarea": "北海",
      //     "useunit": "国家海洋局青岛海洋预报台(国家海洋局北海预报中心)",
      //     "name": "QF159",
      //     "id": "dbb4fee6870f425cb0aeafee9c97281b",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "121°36.51′E"
      //   }, {
      //     "devicenumber": null,
      //     "lng": "17°29.74′N",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局南海调查技术中心",
      //     "name": "SF305",
      //     "id": "d7f3209678814d0caf4814d8f3b5fbcf",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "113°45.06′E"
      //   }, {
      //     "devicenumber": "QF112",
      //     "lng": "36°51.28′N",
      //     "seaarea": "北海",
      //     "useunit": "国家海洋局青岛海洋预报台(国家海洋局北海预报中心)",
      //     "name": "QF112",
      //     "id": "b8acad8b84104da3a0c3c074211ee344",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "123°29.76′E"
      //   }, {
      //     "devicenumber": "QF104",
      //     "lng": "38°02.09′N",
      //     "seaarea": "北海",
      //     "useunit": "国家海洋局青岛海洋预报台(国家海洋局北海预报中心)",
      //     "name": "QF104",
      //     "id": "93159332eef14845bee540d69b319142",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "119°51.07′E"
      //   }, {
      //     "devicenumber": null,
      //     "lng": "19°59.95′N",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局南海调查技术中心",
      //     "name": "QF304",
      //     "id": "92326e639aee4e639918b0e8af4fd59e",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "108°29.98′E"
      //   }, {
      //     "devicenumber": "QF161",
      //     "lng": "35°22.70′N",
      //     "seaarea": "北海",
      //     "useunit": "国家海洋局青岛海洋预报台(国家海洋局北海预报中心)",
      //     "name": "QF161",
      //     "id": "88ca0c464aa94fc3b2a0600e1b5549e3",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "119°38.30′E"
      //   }, {
      //     "devicenumber": "QF160",
      //     "lng": "35°04.00′N",
      //     "seaarea": "北海",
      //     "useunit": "国家海洋局青岛海洋预报台(国家海洋局北海预报中心)",
      //     "name": "QF160",
      //     "id": "7fd8322fc35b4ff5941289d347b5c440",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "119°27.50′E"
      //   }, {
      //     "devicenumber": null,
      //     "lng": "17°56.55′N",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局南海调查技术中心",
      //     "name": "SF306",
      //     "id": "7dbc958ee1c64709b7c16fa9e882bfed",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "111°20.34′E"
      //   }, {
      //     "devicenumber": null,
      //     "lng": "21°30.04′N",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局南海调查技术中心",
      //     "name": "QF305",
      //     "id": "7b69a10a6ebf4e2288913ab98731df18",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "113°59.94′E"
      //   }, {
      //     "devicenumber": "QF110",
      //     "lng": "35°14.50′N",
      //     "seaarea": "北海",
      //     "useunit": "国家海洋局青岛海洋预报台(国家海洋局北海预报中心)",
      //     "name": "QF110",
      //     "id": "67945d94105e42a1930671d9be351c25",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "123°29.21′E"
      //   }, {
      //     "devicenumber": null,
      //     "lng": "9°24.83′N",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局南海调查技术中心",
      //     "name": "SF303",
      //     "id": "652f576e661c4071982a143dd7887355",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "112°41.90′E"
      //   }, {
      //     "devicenumber": "HX3",
      //     "lng": "18.5°N",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局南海调查技术中心",
      //     "name": "HX3",
      //     "id": "6034726efe4e4a038a51f818d6ea28e0",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "116.0°E"
      //   }, {
      //     "devicenumber": "QF114",
      //     "lng": "38°09.31′N",
      //     "seaarea": "北海",
      //     "useunit": "国家海洋局青岛海洋预报台(国家海洋局北海预报中心)",
      //     "name": "QF114",
      //     "id": "5cd9465a965946e78ceec9b1f5e7b478",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "121°03.38′E"
      //   }, {
      //     "devicenumber": null,
      //     "lng": "21°6.97′N",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局南海调查技术中心",
      //     "name": "QF306",
      //     "id": "5c2d092cd6834e6f9586e9c60aa19862",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "112°38.01′E"
      //   }, {
      //     "devicenumber": "QF113",
      //     "lng": "38°33.03′N",
      //     "seaarea": "北海",
      //     "useunit": "国家海洋局青岛海洋预报台(国家海洋局北海预报中心)",
      //     "name": "QF113",
      //     "id": "5a6e760cd3044c1fbb071281a390506c",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "121°09.06′E"
      //   }, {
      //     "devicenumber": "QF105",
      //     "lng": "39°29.84′N",
      //     "seaarea": "北海",
      //     "useunit": "国家海洋局青岛海洋预报台(国家海洋局北海预报中心)",
      //     "name": "QF105",
      //     "id": "54a2016d4de34e0d9cdbbf54f0f97a58",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "120°36.07′E"
      //   }, {
      //     "devicenumber": "QF109",
      //     "lng": "39°01.32′N",
      //     "seaarea": "北海",
      //     "useunit": "国家海洋局青岛海洋预报台(国家海洋局北海预报中心)",
      //     "name": "QF109",
      //     "id": "45bdc3bfc67a44868321db21e7644c20",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "120°04.43′E"
      //   }, {
      //     "devicenumber": "QF108",
      //     "lng": "35°15.30′N",
      //     "seaarea": "北海",
      //     "useunit": "国家海洋局青岛海洋预报台(国家海洋局北海预报中心)",
      //     "name": "QF108",
      //     "id": "4287f5695e2c49e98abec88868f6c980",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "122°00.67′E"
      //   }, {
      //     "devicenumber": "QF101",
      //     "lng": "36°03.04′N",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局南海规划与环境研究院",
      //     "name": "QF101",
      //     "id": "400e41701cc1448d9f311d2f1bb903f0",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "120°26.82′E"
      //   }, {
      //     "devicenumber": null,
      //     "lng": "19°51.63′N",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局南海调查技术中心",
      //     "name": "SF301",
      //     "id": "2a645d31f590458d998e692c349a597c",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "115°27.85′E"
      //   }, {
      //     "devicenumber": null,
      //     "lng": "22°51.98′N",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局南海调查技术中心",
      //     "name": "QF307",
      //     "id": "27eb607dced346a58deab01f15cd2795",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "117°6.02′E"
      //   }, {
      //     "devicenumber": null,
      //     "lng": "22°16.55′N",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局南海调查技术中心",
      //     "name": "QF303",
      //     "id": "26a46f684c8e4fd29789740c689c3e98",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "115°35.53′E"
      //   }, {
      //     "devicenumber": "QF103",
      //     "lng": "36°11.99′N",
      //     "seaarea": "南海",
      //     "useunit": "国家海洋局南海规划与环境研究院",
      //     "name": "QF103",
      //     "id": "247038e1345e47e5a97f4d5ab8ae3f01",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "121°22.95′E"
      //   }, {
      //     "devicenumber": "QF107",
      //     "lng": "37°59.70′N",
      //     "seaarea": "北海",
      //     "useunit": "国家海洋局青岛海洋预报台(国家海洋局北海预报中心)",
      //     "name": "QF107",
      //     "id": "1da23de74fa54ca9bd5b3aa83d2f1ec3",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "123°29.98′E"
      //   }, {
      //     "devicenumber": "QF111",
      //     "lng": "35°14.60′N",
      //     "seaarea": "北海",
      //     "useunit": "国家海洋局青岛海洋预报台(国家海洋局北海预报中心)",
      //     "name": "QF111",
      //     "id": "15c757e1c9c44838b3e5df11eeb318a7",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "120°44.65′E"
      //   }, {
      //     "devicenumber": "QF106",
      //     "lng": "38°54.93′N",
      //     "seaarea": "北海",
      //     "useunit": "国家海洋局青岛海洋预报台(国家海洋局北海预报中心)",
      //     "name": "QF106",
      //     "id": "09b94d76571a4f2a808c154cf7ddba33",
      //     "state": "在用",
      //     "type": "buoyinfo",
      //     "typename": "浮标",
      //     "lat": "123°20.31′E"
      //   }, {
      //     "devicenumber": null,
      //     "lng": "30°31′40.99″",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局东海预报中心",
      //     "name": "小衢山",
      //     "id": "8662b449d3aa4db7a827f8a906e030b3",
      //     "state": "在用",
      //     "type": "xbandradarinfo",
      //     "typename": "雷达",
      //     "lat": "122°15′55.06″"
      //   }, {
      //     "devicenumber": null,
      //     "lng": "30°48′38.59″",
      //     "seaarea": "东海",
      //     "useunit": "国家海洋局东海预报中心",
      //     "name": "大戢山",
      //     "id": "0b6915949b8d44ab99bf845e8f9a6281",
      //     "state": "在用",
      //     "type": "xbandradarinfo",
      //     "typename": "雷达",
      //     "lat": "122°10′26.89″"
      //   }]


      var a = true;
      var b = true;
      var c = true;
      var d = true;
      var bgc = '#5A5A5A';
      var typeRido = ['marinestationinfo', 'buoyinfo', 'xbandradarinfo']
      //点击显示与隐藏
      $('.info_l_list>ul>li').on('click', function () {
        $('.pointMessage').hide(200)

        if ($(this).text() == "海洋站") {
          if (a) {
            //数组方法
            g_core.removelayer('gro_marinestationinfo');

            a = false;
            $(this).css('background', bgc)
          } else {
            //数组方法
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


      })

      //观测预报  海洋站

      // var arr_mar = [
      //   {'id':'045262f5d2f647c68b5ff282835cc54b','name':'石砰海洋测点','state':'在用','centralstation':'国家海洋局温州海洋环境监测中心站','stationcode':'3353','observationelements':''},
      //   {'id':'1ad3acf422374d0984d24ed2c409c80c','name':'南澳海洋环境监测站云澳测站','state':'在用','centralstation':'国家海洋局东海预报中心','stationcode':'4404','observationelements':''},
      //   {'id':'21a2bed201564f7abccd1ce1858c568a','name':'深圳站赤湾测点','state':'在用','centralstation':'国家海洋局深圳海洋管理处','stationcode':'4434','observationelements':''},
      //   {'id':'2475880ecef04ee08d94372c9571f602','name':'大戢山海洋站','state':'在用','centralstation':'国家海洋局东海预报中心','stationcode':'3305','observationelements':''},
      //   {'id':'304dd4e55ad94665adb568e041056da8','name':'芦潮港海洋环境监测站','state':'在用','centralstation':'国家海洋局东海预报中心','stationcode':'3111','observationelements':''},
      //   {'id':'370643cf835a47589b0f58b01efeb9ff','name':'崇明海洋环境监测站','state':'在用','centralstation':'国家海洋局东海预报中心','stationcode':'3103','observationelements':''},
      //   {'id':'3f7e2feb9b074639803dfec52eea5fcd','name':'饶平海洋环境监测站','state':'在用','centralstation':'国家海洋局汕尾海洋环境监测中心站','stationcode':'4480','observationelements':''},
      //   {'id':'46d0e0265676421582c6de4a901c4a79','name':'汕头海洋环境监测站','state':'在用','centralstation':'国家海洋局汕尾海洋环境监测中心站','stationcode':'4477','observationelements':''},
      //   {'id':'588ce61ce8e64802a2108c663b950570','name':'惠来海洋环境监测站','state':'在用','centralstation':'国家海洋局汕尾海洋环境监测中心站','stationcode':'4483','observationelements':''},
      //   {'id':'7c494abda5574e26bd965a94439cc5e4','name':'沙港头测点','state':'在用','centralstation':'国家海洋局温州海洋环境监测中心站','stationcode':'3345','observationelements':''},
      //   {'id':'8800507122834f02a29284690abab7e2','name':'小衢山测点','state':'在用','centralstation':'国家海洋局东海预报中心','stationcode':'3354','observationelements':''},
      //   {'id':'8a16e3336625485bbe14a71e5f61550d','name':'坎门海洋环境监测站','state':'在用','centralstation':'国家海洋局温州海洋环境监测中心站','stationcode':'3334','observationelements':''},
      //   {'id':'90e73905da174fba8d12edc5abc27a80','name':'惠州海洋环境监测站','state':'在用','centralstation':'国家海洋局深圳海洋管理处','stationcode':'4474','observationelements':''},
      //   {'id':'93209f9064304f368a79a1cca0c21511','name':'深圳站盐田测点','state':'在用','centralstation':'国家海洋局深圳海洋管理处','stationcode':'4475','observationelements':''},
      //   {'id':'9aef712db6d3410589391b1bd2fe1421','name':'大戢山海洋站','state':'在用','centralstation':'国家海洋局东海分局','stationcode':'3302','observationelements':''},
      //   {'id':'9e0fd42e4fdd4c728a82f6d5249095d1','name':'大陈海洋环境监测站','state':'在用','centralstation':'国家海洋局温州海洋环境监测中心站','stationcode':'3330','observationelements':''},
      //   {'id':'a1183b04abe8409f88763be622508fde','name':'佘山海洋环境监测站','state':'在用','centralstation':'国家海洋局东海预报中心','stationcode':'3104','observationelements':''},
      //   {'id':'a20683fb1ec64be1a65c1ffb0c862583','name':'南麂海洋环境监测站','state':'在用','centralstation':'国家海洋局温州海洋环境监测中心站','stationcode':'3342','observationelements':''},
      //   {'id':'ab14dabae21e485fbc1c7fe15f3670fa','name':'大门岛海洋测点','state':'在用','centralstation':'国家海洋局温州海洋环境监测中心站','stationcode':'3352','observationelements':''},
      //   {'id':'abd43020eb1d4856a5adc78012e4b342','name':'遮浪海洋环境监测站','state':'在用','centralstation':'国家海洋局汕尾海洋环境监测中心站','stationcode':'4427','observationelements':''},
      //   {'id':'b5dba665892f4725bd84b5033f64db28','name':'温州海洋环境监测站','state':'在用','centralstation':'国家海洋局温州海洋环境监测中心站','stationcode':'3335','observationelements':''},
      //   {'id':'bdb121d71bf34bdc9ff7d565b56f6663','name':'陆丰海洋环境监测站','state':'在用','centralstation':'国家海洋局汕尾海洋环境监测中心站','stationcode':'4483','observationelements':''},
      //   {'id':'c415830c3e9d488fa82b196026620a14','name':'东海大桥B平台','state':'在用','centralstation':'国家海洋局东海预报中心','stationcode':'3114','observationelements':''},
      //   {'id':'c55ddf811d434ea4a1d8443c4d95db5a','name':'汕尾海洋环境监测站','state':'在用','centralstation':'国家海洋局汕尾海洋环境监测中心站','stationcode':'4423','observationelements':''},
      //   {'id':'c590743ee2614e17aafe6f46a5945bda','name':'南澳海洋环境监测站南澳岛测站','state':'在用','centralstation':'国家海洋局汕尾海洋环境监测中心站','stationcode':'4403','observationelements':''},
      //   {'id':'d549f053ff4a4005ad2b4ca81157adf9','name':'瓯江口海洋测点','state':'在用','centralstation':'国家海洋局温州海洋环境监测中心站','stationcode':'3351','observationelements':''},
      //   {'id':'e9285b8991004f46a29b475d372f2550','name':'广州海洋站','state':'在用','centralstation':'国家海洋局南海预报中心','stationcode':'4408','observationelements':''},
      //   {'id':'ec2897c6832b435ba4ad4fe88a3e39b6','name':'北麂海洋测点','state':'在用','centralstation':'国家海洋局温州海洋环境监测中心站','stationcode':'3340','observationelements':''},
      //   {'id':'ec54e04e3ad045ecadd58ca0a18aeac6','name':'椒江海洋测点','state':'在用','centralstation':'国家海洋局温州海洋环境监测中心站','stationcode':'3346','observationelements':''}
      // ]
      var arr_mar
      //海洋站
      this.$http.get('http://71.0.1.192/otes/baseDataPort/getData?type=marinestationinfo').then((res) => {
        arr_mar = res.data.dataList
      }, (err) => {
        console.log(err)
      })
      // var arr_buo = [
      //   {'id':'09674f87ce45405c9920f0c7e5881bbe','name':'海啸浮标','stationcode':'HX4','state':'在库','centralstation':'国家海洋局南海调查技术中心','observationelements':''},
      //   {'id':'09b94d76571a4f2a808c154cf7ddba33','name':'大型海洋监测浮标','stationcode':'QF106','state':'在用','centralstation':'国家海洋局青岛海洋预报台(国家海洋局北海预报中心)','observationelements':''},
      //   {'id':'15c757e1c9c44838b3e5df11eeb318a7','name':'大型海洋监测浮标','stationcode':'QF111','state':'在用','centralstation':'国家海洋局青岛海洋预报台(国家海洋局北海预报中心)','observationelements':''},
      //   {'id':'187846d1c4af40ba8dbb17514052fad6','name':'大型海洋监测浮标','stationcode':'QF164','state':'在库','centralstation':'国家海洋局青岛海洋预报台(国家海洋局北海预报中心)','observationelements':''},
      //   {'id':'1da23de74fa54ca9bd5b3aa83d2f1ec3','name':'大型海洋监测浮标','stationcode':'QF107','state':'在用','centralstation':'国家海洋局青岛海洋预报台(国家海洋局北海预报中心)','observationelements':''},
      //   {'id':'247038e1345e47e5a97f4d5ab8ae3f01','name':'大型海洋监测浮标','stationcode':'QF103','state':'在用','centralstation':'国家海洋局南海规划与环境研究院','observationelements':''},
      //   {'id':'26a46f684c8e4fd29789740c689c3e98','name':'QF303','stationcode':'','state':'在用','centralstation':'国家海洋局南海调查技术中心','observationelements':''},
      //   {'id':'27eb607dced346a58deab01f15cd2795','name':'QF307','stationcode':'','state':'在用','centralstation':'国家海洋局南海调查技术中心','observationelements':''},
      //   {'id':'2a645d31f590458d998e692c349a597c','name':'SF301','stationcode':'','state':'在用','centralstation':'国家海洋局南海调查技术中心','observationelements':''},
      //   {'id':'400e41701cc1448d9f311d2f1bb903f0','name':'大型海洋监测浮标','stationcode':'QF101','state':'在用','centralstation':'国家海洋局南海规划与环境研究院','observationelements':''},
      //   {'id':'4287f5695e2c49e98abec88868f6c980','name':'大型海洋监测浮标','stationcode':'QF108','state':'在用','centralstation':'国家海洋局青岛海洋预报台(国家海洋局北海预报中心)','observationelements':''},
      //   {'id':'45bdc3bfc67a44868321db21e7644c20','name':'大型海洋监测浮标','stationcode':'QF109','state':'在用','centralstation':'国家海洋局青岛海洋预报台(国家海洋局北海预报中心)','observationelements':''},
      //   {'id':'545aec2e9ccd47148bc5ef3ebf279196','name':'大型海洋监测浮标','stationcode':'QF163','state':'在库','centralstation':'国家海洋局青岛海洋预报台(国家海洋局北海预报中心)','observationelements':''},
      //   {'id':'54a2016d4de34e0d9cdbbf54f0f97a58','name':'大型海洋监测浮标','stationcode':'QF105','state':'在用','centralstation':'国家海洋局青岛海洋预报台(国家海洋局北海预报中心)','observationelements':''},
      //   {'id':'5a6e760cd3044c1fbb071281a390506c','name':'大型海洋监测浮标','stationcode':'QF113','state':'在用','centralstation':'国家海洋局青岛海洋预报台(国家海洋局北海预报中心)','observationelements':''},
      //   {'id':'5c2d092cd6834e6f9586e9c60aa19862','name':'QF306','stationcode':'','state':'在用','centralstation':'国家海洋局南海调查技术中心','observationelements':''},
      //   {'id':'5cd9465a965946e78ceec9b1f5e7b478','name':'大型海洋监测浮标','stationcode':'QF114','state':'在用','centralstation':'国家海洋局青岛海洋预报台(国家海洋局北海预报中心)','observationelements':''},
      //   {'id':'6034726efe4e4a038a51f818d6ea28e0','name':'海啸浮标','stationcode':'HX3','state':'在用','centralstation':'国家海洋局南海调查技术中心','observationelements':''},
      //   {'id':'652f576e661c4071982a143dd7887355','name':'SF303','stationcode':'','state':'在用','centralstation':'国家海洋局南海调查技术中心','observationelements':''},
      //   {'id':'67945d94105e42a1930671d9be351c25','name':'大型海洋监测浮标','stationcode':'QF110','state':'在用','centralstation':'国家海洋局青岛海洋预报台(国家海洋局北海预报中心)','observationelements':''},
      //   {'id':'68758ed36d3c465787e28f32b191605a','name':'海啸浮标','stationcode':'HX2','state':'在库','centralstation':'国家海洋局南海调查技术中心','observationelements':''},
      //   {'id':'7b69a10a6ebf4e2288913ab98731df18','name':'QF305','stationcode':'','state':'在用','centralstation':'国家海洋局南海调查技术中心','observationelements':''},
      //   {'id':'7dbc958ee1c64709b7c16fa9e882bfed','name':'SF306','stationcode':'','state':'在用','centralstation':'国家海洋局南海调查技术中心','observationelements':''},
      //   {'id':'7fd8322fc35b4ff5941289d347b5c440','name':'大型海洋监测浮标','stationcode':'QF160','state':'在用','centralstation':'国家海洋局青岛海洋预报台(国家海洋局北海预报中心)','observationelements':''},
      //   {'id':'88ca0c464aa94fc3b2a0600e1b5549e3','name':'大型海洋监测浮标','stationcode':'QF161','state':'在用','centralstation':'国家海洋局青岛海洋预报台(国家海洋局北海预报中心)','observationelements':''},
      //   {'id':'92326e639aee4e639918b0e8af4fd59e','name':'QF304','stationcode':'','state':'在用','centralstation':'国家海洋局南海调查技术中心','observationelements':''},
      //   {'id':'93159332eef14845bee540d69b319142','name':'大型海洋监测浮标','stationcode':'QF104','state':'在用','centralstation':'国家海洋局青岛海洋预报台(国家海洋局北海预报中心)','observationelements':''},
      //   {'id':'aa39b4d970594bc594635019002d414c','name':'大型海洋监测浮标','stationcode':'QF162','state':'在库','centralstation':'国家海洋局青岛海洋预报台(国家海洋局北海预报中心)','observationelements':''},
      //   {'id':'b8acad8b84104da3a0c3c074211ee344','name':'大型海洋监测浮标','stationcode':'QF112','state':'在用','centralstation':'国家海洋局青岛海洋预报台(国家海洋局北海预报中心)','observationelements':''},
      //   {'id':'cad0b552d6914b2e9adab0bd992d70bb','name':'大型海洋监测浮标','stationcode':'QF102','state':'在库','centralstation':'国家海洋局青岛海洋预报台(国家海洋局北海预报中心)','observationelements':''},
      //   {'id':'d7f3209678814d0caf4814d8f3b5fbcf','name':'SF305','stationcode':'','state':'在用','centralstation':'国家海洋局南海调查技术中心','observationelements':''},
      //   {'id':'d8738195448d4065ae7ee843e96eb1f2','name':'海啸浮标','stationcode':'HX6','state':'在库','centralstation':'国家海洋局南海调查技术中心','observationelements':''},
      //   {'id':'dbb4fee6870f425cb0aeafee9c97281b','name':'大型海洋监测浮标','stationcode':'QF159','state':'在用','centralstation':'国家海洋局青岛海洋预报台(国家海洋局北海预报中心)','observationelements':''},
      //   {'id':'df73169fd7e5479d9ac09586f480183b','name':'asdasd','stationcode':'asd','state':'在用','centralstation':'国家海洋局南海规划与环境研究院','observationelements':''},
      //   {'id':'f79d0234cd9f4f329e7f14f91893ef90','name':'SF302','stationcode':'','state':'在用','centralstation':'国家海洋局南海调查技术中心','observationelements':''}
      // ]
      var arr_buo
      //浮标
      this.$http.get('http://71.0.1.192/otes/baseDataPort/getData?type=buoyinfo').then((res) => {
        arr_buo = res.data.dataList
      }, (err) => {
        console.log(err)
      })
      //雷达
      // var arr_xban = [
      //   {'id':'0b6915949b8d44ab99bf845e8f9a6281','name':'大戢山','specification':'WAMOSII','ownerunit':'国家海洋局东海预报中心','useunit':'国家海洋局东海预报中心','state':'在用','communication':'CDMA'},
      //   {'id':'8662b449d3aa4db7a827f8a906e030b3','name':'小衢山','specification':'EM-129','ownerunit':'','useunit':'','state':'在用','communication':'CDMA'},
      // ]
      var arr_xban
      //雷达
      this.$http.get('http://71.0.1.192/otes/baseDataPort/getData?type=xbandradarinfo').then((res) => {
        arr_xban = res.data.dataList
      }, (err) => {
        console.log(err)
      })

      //点击图标

      function popupinfo(type, id, ev) {
        $('.pointMessage').empty()
        var obj;
        if (type == 'marinestationinfo') {
          var _url = configip + '/static/img/fangwuTubiao.png'
          arr_mar.forEach(function (item, index) {
            if (item.id == id) {
              obj = '<i class="el-icon-close" style="position: absolute;right: 5px;top:3px;cursor: pointer;"></i><p class="p_name" style="background:#0088fe;line-height: 25px;font-size: 15px;padding-left: 5px;vertical-align: middle; "><img width="20px" style="padding-right: 5px;" src=' + _url + '>' + item.name + '</p><div style="padding: 5px;"><ul><li><p>名称：<span>' + item.name + '</span></p> <p>站代码：<span>' + item.stationcode + '</span></p><p>巡检状态：<span>' + item.state + '</span></p> <p>所属单位：<span>' + item.centralstation + '</span> </p> <p>观测要素：<span>' + item.observationelements + '</span></p></li></ul><p class="detial_p" ><a _type="' + type + '" _id="' + id + '">查看详情</a> </p></div>'
            }
          })

        }
        if (type == 'buoyinfo') {
          var _url = configip + '/static/img/5.png'
          arr_buo.forEach(function (item, index) {
            //item.stationcode
            if (item.id == id) {
              obj = '<i class="el-icon-close" style="position: absolute;right: 5px;top:3px;cursor: pointer;"></i><p style="background:#0088fe;line-height: 25px;font-size: 15px;padding-left: 5px;vertical-align: middle; "><img width="20px" style="padding-right: 5px;" src=' + _url + '>' + item.name + '</p><div style="padding: 5px;"><ul><li><p>名称：<span>' + item.name + '</span></p> <p>巡检状态：<span>' + item.state + '</span></p> <p>所属单位：<span>' + item.centralstation + '</span> </p> <p>观测要素：<span>' + item.observationelements + '</span></p></li></ul><p class="detial_p" ><a _type="' + type + '" _id="' + id + '">查看详情</a> </p></div>'
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
        $('.pointMessage .detial_p a').css('cursor', 'pointer')
        $('.pointMessage').css({
          "left": _a.x + 5 + 'px',
          "top": _a.y + 'px',
          "max-width": "530px",
          "min-width": "240px",
          "max-height": "500px",
          "min-height": "235px",
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
        $('.pointMessage .detial_p a').css({
          'position': 'absolute',
          'display': 'block',
          'width': '80px',
          'line-height': '24px',
          'background': 'rgb(0, 136, 254,.9)',
          'margin': '0 auto',
          'margin-top': '20px',
          'text-align': 'center',
          'border-radius': '10px',
          'cursor': 'pointer',
          'color': '#fff',
          'bottom': '10px',
          'left': '50%',
          'margin-left': '-40px'
        })
        $('.pointMessage .detial_p a').mouseenter(function () {
          $(this).css({'color': 'red'})
        }).mouseleave(function () {
          $(this).css({'color': ''})
        })
        $('.pointMessage .el-icon-close').click(function () {
          $('.pointMessage').hide(300)
        })

        $('.pointMessage .detial_p a').on('click', function () {
          var _type = $(this).attr('_type')
          var _id = $(this).attr('_id')
          if (_type == 'buoyinfo') {
            that.$http.get('http://71.0.1.192/otes/detailInfoPort/getBuoyInfo?id=' + _id).then((res) => {
              var _data = res.data
              that.buoyinfo = _data.buoyinfo
              that.inspectionbuoyinfo = _data.inspectionbuoyinfo
              that.detSensors = _data.detSensors
            }, (err) => {
              console.log(err)
            })
            $(".detail_ocean").hide()
            $(".detail").hide()
            $(".detail").css("margin-left", -that.clientWidth * .9 * .41 + 'px')
            $(".detail").show()
            $(".detail").animate({"margin-left": "0px"}, 500)
          }
          if (_type == 'marinestationinfo') {
            that.$http.get('http://71.0.1.192/otes/detailInfoPort/getMarinestationinfo?id=' + _id).then((res) => {
              var _data_haiyang = res.data
              that.marinestationinfo = _data_haiyang.marinestationinfo
              that.detSensorList = _data_haiyang.detSensorList
              that.subsystemList.commMode_1 = _data_haiyang.subsystemList[0].commMode
              that.subsystemList.commMode_2 = _data_haiyang.subsystemList[1].commMode
              that.subsystemList_1 = _data_haiyang.subsystemList
              $('#detail_ocean .det_chuanganqi').height(that.subsystemList_1.length * 200)
              $('#detail_ocean .det_chuanganqi').css({"min-height": "240px"})
            }, (err) => {
              console.log(err)
            })
            $(".detail").hide()
            $(".detail_ocean").hide()
            $(".detail_ocean").css("margin-left", -that.clientWidth * .9 * .41 + 'px')
            $(".detail_ocean").show()
            $(".detail_ocean").animate({"margin-left": "0px"}, 500)

            // var detailH = 0;
            // $('#detail_ocean .det_chuanganqi .chuangan_top').each(function (key, val) {
            //   detailH += $(val).height()
            // })
            // $('#detail_ocean .det_chuanganqi').height(900)

          }

        })

        $('.baseInstMainInfo .third_count .el-table td .cell').each(function (key, val) {
          $(val).attr('title', $(this).text())
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


      //获取鼠标位置
      function getMousePos(event) {
        var e = event || window.event;
        return {'x': e.clientX, 'y': e.clientY}
      }

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
          width 58%
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
              top 180px
              z-index 999
              &>li
                width 68px
                height 65px
                /*line-height 74px*/
                margin-top 4px
                border-radius 5px
                text-align center
                cursor pointer
                box-shadow 0 0 20px 0 rgba(0,0,0,0.18)
                &:nth-child(1)
                  background-color #0babfe
                &:nth-child(2)
                  background-color #4884aa
                &:nth-child(3)
                  background-color #4bceaf
                &:nth-child(4)
                  background-color #ffad1e
                &:nth-child(5)
                  background-color #a360fe
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
                  width 30px
                  padding-top 5px
                p
                  font-size 16px
                  color #fff
                  text-align center
                  padding-top 2px
                &:hover
                  background-color #ccc
        .info_r
          width 41%
          height 100%
          margin-left 1%
          position relative
          overflow hidden
          .detail, .detail_ocean
            width 100%
            height 100%
            position absolute
            display none
            overflow hidden
            border-radius 4px
            left 0
            top 0
            padding 0 20px 20px 20px
            box-sizing border-box
            background url("/static/img/bg.jpg") no-repeat center top
            background-size 100%
            background-color rgb(211, 219, 232)
            z-index 99
            .first_count
              margin-top 5px
              width 100% + 0.7
              overflow-x visible
              overflow-y auto
              .det_main
                width 100%
                height 400px
                margin-top 27px
                background-color #fff
                box-sizing border-box
                //box-shadow 0 0 3px 1px rgba(255,255,255,.4)
                box-shadow 0 0 20px 0 rgba(0, 0, 0, 0.3)
                opacity .9
                padding 10px
                box-sizing border-box
                .det_imgTop
                  width 100%
                  height 55%
                  box-sizing border-box
                  background-color #fff
                  .imtTop_l
                    width 25%
                    height 95%
                    //background url("/static/img/biao.jpg") no-repeat center top
                    float left
                    background-color #fff
                    border-radius 4px
                    overflow hidden
                    img
                      border-radius 4px
                  .imtTop_r
                    width 72%
                    height 100%
                    float left
                    background-color #fff
                    .top_r_l
                      width 50%
                      height 100%
                      float left
                      p
                        overflow hidden
                        text-overflow ellipsis
                        word-break keep-all
                        white-space nowrap
                        .span_key
                          display inline-block
                          width 88px
                          height 38px
                          //line-height 50px
                          font-weight 700
                          text-align right
                        .span_val
                          color #168ddd
                          padding-left 15px
                          font-weight 700
                    .top_r_r
                      width 50%
                      float left
                      height 100%
                      p
                        overflow hidden
                        text-overflow ellipsis
                        word-break keep-all
                        white-space nowrap
                        .span_key
                          display inline-block
                          width 80px
                          height 38px
                          font-weight 700
                          text-align right
                        .span_val
                          color #168ddd
                          padding-left 15px
                          font-weight 700
                .det_imgBot
                  width 100%
                  height 43%
                  margin-top 2%
                  .bot_b_l
                    width 49%
                    height 100%
                    float left
                    padding-top 10px
                    box-sizing border-box
                    background-color #d0e4ef
                    p
                      overflow hidden
                      text-overflow ellipsis
                      word-break keep-all
                      white-space nowrap
                      .span_key
                        display inline-block
                        width 110px
                        height 35px
                        line-height 35px
                        font-weight 700
                        text-align right
                      .span_val
                        color #168ddd
                        padding-left 15px
                        font-weight 700
                  .bot_b_r
                    width 49%
                    height 100%
                    float right
                    padding-top 10px
                    box-sizing border-box
                    background-color #ebe2f7
                    p
                      overflow hidden
                      text-overflow ellipsis
                      word-break keep-all
                      white-space nowrap
                      .span_key
                        display inline-block
                        width 110px
                        height 35px
                        line-height 35px
                        font-weight 700
                        text-align right
                      .span_val
                        color #168ddd
                        padding-left 15px
                        font-weight 700

              .det_chuanganqi
                width 100%
                height 300px
                margin-top 47px
                background #fff
                box-shadow 0 0 50px 0 rgba(0, 0, 0, 0.3)
                opacity .9
                position relative
                padding 10px
                box-sizing border-box
                padding-top 22px
                .det_title
                  background-color #0088FE
                  width 130px
                  line-height 40px
                  position absolute
                  color #fff
                  border-radius 5px
                  text-align center
                  top -20px
                  left 0px
              .det_dongtai
                width 100%
                height 280px
                margin-top 47px
                background #fff
                box-shadow 0 0 50px 0 rgba(0, 0, 0, 0.3)
                opacity .9
                position relative
                padding 10px
                box-sizing border-box
                .det_title
                  background-color #0088FE
                  width 130px
                  line-height 40px
                  position absolute
                  color #fff
                  border-radius 5px
                  text-align center
                  top -20px
                  left 0px
                .dongtai_top, .dongtai_bot
                  width 100%
                  height 35%
                  background-color #fff
                  padding-top 20px
                  box-sizing border-box
                  .dong_top_left
                    width 50%
                    height 100%
                    float left
                    p
                      overflow hidden
                      text-overflow ellipsis
                      word-break keep-all
                      white-space nowrap
                      line-height 30px
                      .span_key
                        display inline-block
                        width 125px
                        height 30px
                        //line-height 50px
                        font-weight 700
                        text-align right

                      .span_val
                        color #168ddd
                        padding-left 15px
                        font-weight 700
                  .dong_top_right
                    width 50%
                    height 100%
                    float left
                    p
                      overflow hidden
                      text-overflow ellipsis
                      word-break keep-all
                      white-space nowrap
                      line-height 30px
                      .span_key
                        display inline-block
                        width 92px
                        height 30px
                        //line-height 50px
                        font-weight 700
                        text-align right
                      .span_val
                        color #168ddd
                        padding-left 15px
                        font-weight 700
                        .dian
                          display inline-block
                          width 8px
                          height 8px
                          border-radius 50%
                      .err
                        color #F05658
                        &:first-child
                          background-color #F05658
                      .nor
                        color #00ff00
                        &:first-child
                          background-color #00ff00
                .dongtai_bot
                  padding-top 0px
                  height 65%
                  padding-top 10px
                  box-sizing border-box
                  background-color #EDF5F8

            .second_count
              margin-top 5px
              width 100% + 0.7
              overflow-x visible
              overflow-y auto
              .second_shilie
                width 100%
                height 230px
                margin-top 47px
                background #fff
                box-shadow 0 0 50px 0 rgba(0, 0, 0, 0.3)
                opacity 1
                position relative
                padding 10px
                box-sizing border-box
                padding-top 20px
                .second_bot
                  height 100%
                  width 100%
                  .bot_count
                    p
                      font-weight 700
                  .second_bot_t
                    width 100%
                    height 33%
                    margin-top 30px
                    position relative
                    background-color #EFF4F8
                    .bot_count
                      width 100%
                      height 100%
                      padding 0 10px
                      box-sizing border-box
                      padding-top 30px
                      p
                        text-align left
                        word-break break-word
                        word-break break-all
                    .bot_title
                      position absolute
                      top -10px
                      left 0px
                      width 80px
                      line-height 30px
                      border-radius 10px
                      text-align center
                      background-color #7A86D0
                  .second_bot_m
                    width 100%
                    height 33%
                    margin-top 30px
                    position relative
                    background-color #EFF4F8
                    .bot_count
                      width 100%
                      height 100%
                      padding 0 10px
                      box-sizing border-box
                      padding-top 30px
                      p
                        text-align left
                        word-break break-word
                        word-break break-all
                    .bot_title
                      position absolute
                      top -10px
                      left 0px
                      width 80px
                      line-height 30px
                      border-radius 10px
                      text-align center
                      background-color #7A86D0
                  .second_bot_b
                    width 100%
                    height 14%
                    margin-top 30px
                    position relative
                    background-color #EFF4F8
                    .bot_count
                      width 100%
                      height 100%
                      padding 0 10px
                      box-sizing border-box
                      padding-top 30px
                      p
                        text-align left
                        word-break break-word
                        word-break break-all
                    .bot_title
                      position absolute
                      top -10px
                      left 0px
                      width 80px
                      line-height 30px
                      border-radius 10px
                      text-align center
                      background-color #7A86D0
                  .bot_m_1
                    height 15%
                  .bot_m_2
                    height 15%
                  .bot_m_3
                    height 30%
                  .bot_m_4
                    height 10%
                    .bot_count
                      div
                        p
                          padding-top 10px
                          text-align center
                          font-size 14px
                        i
                          color #2BFF94
                          font-size 16px
                        &:nth-child(1)
                          width 32%
                        &:nth-child(2)
                          width 32%
                          margin-left 2%
                        &:nth-child(3)
                          width 32%
                          margin-left 2%
                  .bot_m_5
                    height 10%
                &.second_2
                  padding 0 20px
                  padding-top 40px
                  .jieshou, .cunchu, .tongxin
                    height 90%
                    margin-left 2%
                    width 32%
                    float left
                    background-color #01C5DD
                    img
                      //padding 20px 10px 0 0px
                      display block
                      margin 20px auto
                      text-align center
                      vertical-align middle
                    p
                      line-height 35px
                      text-align center
                    .one
                      color #fff
                      font-weight 700
                    .two
                      color #fff
                      font-weight 400
                  .tongxin
                    margin-left 0px
                    background-color #68C26B
                  .cunchu
                    background-color #FFAA01
                &.second_3
                  height 880px
                .det_title
                  background-color #0088FE
                  width 130px
                  line-height 40px
                  position absolute
                  color #fff
                  border-radius 5px
                  text-align center
                  top -20px
                  left 0px
                .dongtai_top
                  width 100%
                  height 100%
                  background-color #fff
                  padding-top 20px
                  box-sizing border-box
                  .dong_top_left
                    width 40%
                    height 100%
                    padding-left 30px
                    box-sizing border-box
                    float left
                    p
                      overflow hidden
                      text-overflow ellipsis
                      word-break keep-all
                      white-space nowrap
                      line-height 38px
                      .span_key
                        display inline-block
                        width 75px
                        height 38px
                        //line-height 50px
                        font-weight 700
                        text-align right

                      .span_val
                        color #168ddd
                        padding-left 15px
                        font-weight 700
                  .dong_top_right
                    width 60%
                    height 100%
                    padding-left 30px
                    box-sizing border-box
                    float left
                    p
                      overflow hidden
                      text-overflow ellipsis
                      word-break keep-all
                      white-space nowrap
                      line-height 38px
                      .span_key
                        display inline-block
                        width 75px
                        height 38px
                        //line-height 50px
                        font-weight 700
                        text-align right
                      .span_val
                        color #168ddd
                        padding-left 15px
                        font-weight 700
            .third_count, .fourth_count, .five_count, .seven_count
              margin-top 5px
              width 100% + 0.7
              overflow-x visible
              overflow-y auto
              .second_shilie
                width 100%
                height 530px
                margin-top 47px
                background #fff
                box-shadow 0 0 50px 0 rgba(0, 0, 0, 0.3)
                opacity 1
                position relative
                padding 10px
                box-sizing border-box
                padding-top 40px
              .det_title
                background-color #0088FE
                width 130px
                line-height 40px
                position absolute
                color #fff
                border-radius 5px
                text-align center
                top -20px
                left 0px
              .det_title_img
                background-color #fff
                width 80px
                position absolute
                top 10px
                right 10px
                z-index 99999
                cursor pointer
                img
                  width 80px
            .third_data
              .second_shilie
                height 90%
            .fourth_count
              .second_shilie
                height 43%
                padding-top 20px
            .five_count
              .second_shilie
                height 43%
                padding-top 20px
            .six_count
              .second_shilie
                width 100%
                height 95%
                padding-top 50px
                position relative
                margin-top 20px
                .det_title
                  position absolute
                  background-color #7581C9
                  width 130px
                  height 30px
                  line-height 30px
                  color #fff
                  border-radius 10px
                  text-align center
                  top 10px
                  left 20px
                  cursor pointer
            .seven_count
              .second_shilie
                height 43%
                padding-top 20px
            .det_tab
              width 100%
              height 40px
              border 2px solid #148BDB
              box-sizing border-box
              margin-top 30px
              .det_tab_ul
                width 100%
                height 38px
                li
                  width 14.28%
                  float left
                  height 38px
                  line-height 38px
                  font-size 14px
                  text-align center
                  cursor pointer
                  color #000
                  &.active
                    color #fff
                    background-color #148BDB
                  &:hover
                    background-color #148BDB
            .det_name
              height 40px
              padding-top 30px
              text-align center
              color #fff
              line-height 40px
              p
                font-size 22px
                color #163681
                font-weight 700
            .detailClose
              position absolute
              right 5px
              top 5px
              z-index 999
              cursor pointer
              color #148bdb
              transition all 0.5s
              font-size 22px
              border 1px solid #148bdb
              padding 5px
              border-radius 50%
              &:hover
                transform rotate(180deg)
          #detail_ocean
            background url("/static/img/haiyangzhan-BG.jpg") no-repeat center top
            background-size cover
            .det_main
              height 380px
            .det_imgTop
              height 50%
            .det_imgBot
              .bot_b_l, .bot_b_r
                padding-top 20px
                box-sizing border-box
              .bot_b_l
                .span_key
                  width 85px
            .det_dongtai
              height 210px
            .dongtai_bot
              height 95%
              margin-top 10px
              background-color #fff
              .dong_top_left
                width 32%
                padding-left 15px
                padding-top 25px
                box-sizing border-box
                background-color #4CCEF0
                .span_key
                  color #F3FCF7
                  width 70px
                  font-weight 400
                .span_val
                  color #fff
                  padding-left 15px
                  font-weight 700
              .dong_top_right
                background-color #6892AB
                padding-top 25px
                padding-left 15px
                box-sizing border-box
                width 32%
                margin-left 1%
                .span_key
                  color #F3FCF7
                  width 87px
                  font-weight 400
                .span_val
                  color #fff
                  padding-left 15px
                  font-weight 700
              .dong_top_mid
                padding-top 25px
                padding-left 15px
                box-sizing border-box
                background-color #69D299
                width 32%
                margin-left 1%
                height 100%
                float left
                p
                  overflow hidden
                  text-overflow ellipsis
                  word-break keep-all
                  white-space nowrap
                  line-height 30px
                  .span_key
                    color #F3FCF7
                    display inline-block
                    width 86px
                    height 30px
                    //line-height 50px
                    font-weight 400
                    text-align right
                  .span_val
                    color #fff
                    padding-left 15px
                    font-weight 700
            .det_chuanganqi
              width 100%
              /*height 100%*/
              padding-top 35px
              box-sizing border-box
              background-color: #fff
              .chuangan_top, .chuangan_mid, .chuangan_bot
                width 98%
                margin 0 auto
                height 33%
                box-sizing border-box
                border 1px solid #ddd
                .chuan_left
                  width 15%
                  height 100%
                  float left
                  box-sizing border-box
                  position relative
                  border-right 1px solid #ddd
                  p
                    display block
                    position absolute
                    height 50px
                    width 100%
                    top 50%
                    font-weight 700
                    left 0
                    margin-top -25px
                    text-align center
                .chuan_right
                  box-sizing border-box
                  width 85%
                  height 100%
                  float left
                  p
                    overflow hidden
                    text-overflow ellipsis
                    word-break keep-all
                    white-space nowrap
                    .key
                      display inline-block
                      text-align right
                      font-weight 700
                      width 131px
                      padding-right 10px
                      line-height 34px
                    .val
                      font-weight 700
                      color #168ddd
                    .key_mini
                      width 80px
                  .chuan_right_top
                    width 100%
                    height 97px
                    border-bottom 1px solid #ddd

                    .chuan_top_l, .chuan_top_r
                      box-sizing border-box
                      width 50%
                      height 100%
                      float left
                      padding-top 10px
                      box-sizing border-box
                      .key
                        line-height 25px !important
                    .chuan_top_l
                      box-sizing border-box
                      border-right 1px solid #ddd

                  .chuan_right_bot
                    width 100%
                    box-sizing border-box
                    .chuan_bot_info
                      box-sizing border-box
                      width 100%
                      height 35px
                      /*height 25%*/
                      border-bottom 1px solid #ddd
                      &:last-child
                        border-bottom none
                      p
                        display inline-block
                        width 50%
                        height 100%
                        float left
              .chuangan_top
                font-size 14px
              .chuangan_mid
                border-top none
              .chuangan_bot
                border-top none
              .det_title
                width 200px
          .info_r_top
            height 35%
            padding 5px
            box-sizing border-box
            overflow hidden
            background-color #fff
            border-radius 4px
            .line
              height 1px
              background-color #1A305E
              width 95%
              box-sizing border-box
              margin 0 auto
              margin-top 1px
            .info_r_top_info
              width 150px
              height 27px
              margin-left 10px
              margin-left 2.5%
              background-color #2a3cba
              color #fff
              font-size 14px
              font-weight 700
              line-height 27px
              text-align center
            .info_r_top_tab
              /*text-align center*/
              width 95%
              height 95%
              margin 0 auto
              padding-top 5px
              box-sizing border-box
              overflow hidden
              margin-top 10px
              .tob_radio_detail
                height 50px
                border 1px solid #d4d4d4
                box-sizing border-box
                border-radius 4px
                width 100%
                margin 0 auto
                margin-top 10px
                ul
                  width 100%
                  height 100%
                  li
                    box-sizing border-box
                    width 20%
                    line-height 48px
                    float left
                    text-align center
                    img
                      width 18px
                      vertical-align middle
                      margin-top -3px
                      padding-right 1px
                    span
                      font-size 16px
                    i
                      font-weight 700
                      font-size 16px
                      padding-left 10px
                      color #0000ff
              .tit
                font-weight 700
                width 60px !important
                text-align right !important
              .tob_radio_1, .tob_radio_2, .tob_radio_3, .tob_radio_4
                width 100%
                height 50px
                .radio_1
                  float left
                  width 80px
                  text-align left
                  margin-right 25px
              label {
                position: relative;
                top: 14px;
                font-size: 14px;
                color: #000;
                line-height: 14px;
              }
              input[type="radio"] {
                display: none;
              }
              input[type='radio'] + label:before {
                margin-top: -2px;
                content: '';
                display: inline-block;
                width: 14px;
                height: 14px;
                margin-right: 6px;
                border-radius: 100%;
                vertical-align: middle;
                border: 1px solid #E4E4E4;
                background: #FFFFFF;
              }
              input[type='radio']:checked + label:before {
                background-image: url('/static/img/duigou.png');
                background-position: top center;
                background-size cover
                /*background: #777777;*/
              }
              .singleElTableDiv, .singleElTableDiv_last
                width 22%
                float left
                margin .5%
                /*border 1px solid #CBE0F5*/
                .checkTop
                  height 12px
                  min-width 117px
                  border-left 2px solid #0000ff
                  line-height 12px
                  color #fff
                  p
                    color #000
                .checkDv
                  width 100%
                  .el-radio-group
                    width 100%
                    height 100%
                    .el-radio
                      width 100%
                      font-size 16px
                      /*border-bottom 1px solid #dcdfe6*/
                      height 38px
                      display inline-block
                      float left
                      margin-left 0px
                      box-sizing border-box
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
              .singleElTableDiv_last
                min-width 135px

          .info_r_mid
            height 63%
            padding 5px
            box-sizing border-box
            overflow hidden
            background-color #fff
            border-radius 4px
            position relative
            overflow hidden
            .line
              height 1px
              background-color #8487c2
              width 95%
              box-sizing border-box
              margin 0 auto
              margin-top 1px
            .info_r_top_info
              width 150px
              height 27px
              margin-left 10px
              margin-left 2.5%
              background-color #2a3cba
              color #fff
              font-size 14px
              font-weight 700
              line-height 27px
              text-align center
            .info_r_mid_tab
              position absolute
              padding 0 15px 0 15px
              box-sizing border-box
              width 100%
              height 100%
              top 32px
              left 0px
              text-align center
              width 100%
              height 96%
              padding-top 15px
              overflow hidden
</style>
