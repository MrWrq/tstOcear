<template>
  <div class="yearChark">
    <div class="w" style="background-color: transparent">
      <div class="title_all_bottom_line" align="left">
        <ul>
          <li class="normalLeftDiv" id="topDiv1" @click="changeTopDiv(1)">海洋站</li>
          <li class="normalTopDiv" id="topDiv2" @click="changeTopDiv(2)">浮标</li>
          <li class="normalTopDiv" id="topDiv3" @click="changeTopDiv(3)">船舶</li>
          <!--<li class="normalTopDiv" id="topDiv4" @click="changeTopDiv(4)">潜器</li>-->
          <!--<li class="normalTopDiv" id="topDiv5" @click="changeTopDiv(5)">卫星</li>-->
          <li class="normalTopDiv" id="topDiv6" @click="changeTopDiv(6)">雷达</li>
        </ul>
      </div>
      <div class="yearChark_info">
        <div style="clear:both;"></div>
        <div class="yearChark_left">
          <div id="div1" class="normalLeftDiv" @click="changeLeftDiv(1)">东海分局</div>
          <div id="div2" class="normalLeftDiv" @click="changeLeftDiv(2)">南海分局</div>
          <!--<div id="div3" class="normalLeftDiv" @click="changeLeftDiv(3)">中心站</div>-->
        </div>
        <!--表格组件-->
        <div class="elTable">
          <el-table
            :data="dataTable"
            style="width: 100%"
            fixed
            stripe
            border
            :height="table"
            size="mini"
            header-align="center"
            :row-class-name="tableRowClassName">
            <el-table-column
              prop="number"
              align="center"
              width="88"
              label="序号">
            </el-table-column>
            <el-table-column
              prop="typename"
              align="center"
              label="类型">
            </el-table-column>
            <el-table-column
              prop="name"
              align="center"
              label="型号">
            </el-table-column>
            <el-table-column
              prop="devicenumber"
              align="center"
              label="编号">
            </el-table-column>
            <el-table-column
              prop="state"
              align="center"
              sortable
              label="状态">
            </el-table-column>
            <el-table-column
              prop="useunit"
              align="center"
              label="使用单位">
            </el-table-column>
            <el-table-column
              align="center"
              width="150"
              label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="mini"
                           style="display: inline-block;width: 45%;height: 80%; background-color: #7f8180;color:#fff;">
                  查看详情
                </el-button>
                <el-button @click="handleClick(scope.row)" type="text" size="mini"
                           style="display: inline-block;width: 35%;height: 80%; background-color: #7f8180;color:#fff;">
                  编辑
                </el-button>
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
        <!--<div class="yearChark_bottom_info" align="center">-->
        <!--<el-button class="yearChark_bottom_button" size="mini">&nbsp;&nbsp;批量确认&nbsp;&nbsp;</el-button>-->
        <!--<el-button class="yearChark_bottom_button"  size="mini">&nbsp;&nbsp;全部确认&nbsp;&nbsp;</el-button>-->
        <!--<el-button class="yearChark_bottom_button"  size="mini">&nbsp;&nbsp;信息补全&nbsp;&nbsp;</el-button>-->
        <!--</div>-->
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
                    <p :title="buoyinfo.name"><span class="span_key">浮标名称</span><span
                      class="span_val">{{buoyinfo.name}}</span></p>
                    <p :title="buoyinfo.specificationModel"><span class="span_key">浮标型号</span><span class="span_val">{{buoyinfo.specificationModel}}</span>
                    </p>
                    <p :title="inspectionbuoyinfo.communicationType"><span class="span_key">通信类型</span><span
                      class="span_val">{{inspectionbuoyinfo.communicationType}}</span></p>
                    <p :title="buoyinfo.typeSize"><span class="span_key">尺寸</span><span class="span_val">{{buoyinfo.typeSize}}</span>
                    </p>
                    <p :title="inspectionbuoyinfo.factoryTime"><span class="span_key">出厂时间</span><span class="span_val">{{inspectionbuoyinfo.factoryTime}}</span>
                    </p>
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
                    <p :title="inspectionbuoyinfo.material"><span class="span_key">主要材质</span><span class="span_val">{{inspectionbuoyinfo.material}}</span>
                    </p>
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
                  <p :title="inspectionbuoyinfo.userAddress"><span class="span_key">用户单位地址</span><span class="span_val">{{inspectionbuoyinfo.userAddress}}</span>
                  </p>
                  <p :title="inspectionbuoyinfo.contacts"><span class="span_key">负责人</span><span class="span_val">{{inspectionbuoyinfo.contacts}}</span>
                  </p>
                  <p :title="inspectionbuoyinfo.phone"><span class="span_key">电话</span><span class="span_val">{{inspectionbuoyinfo.phone}}</span>
                  </p>

                </div>
                <div class="bot_b_r">
                  <p :title="inspectionbuoyinfo.factory"><span class="span_key">生产/代理单位</span><span class="span_val">{{inspectionbuoyinfo.factory}}</span>
                  </p>
                  <p :title="inspectionbuoyinfo.factoryContacts"><span class="span_key">负责人</span><span
                    class="span_val"> 无<!--{{inspectionbuoyinfo.factoryContacts}}--></span></p>
                  <p :title="inspectionbuoyinfo.factoryPhone"><span class="span_key">电话</span><span class="span_val">无
                    <!-- {{inspectionbuoyinfo.factoryPhone}}--></span></p>
                </div>

              </div>
            </div>
            <div class="det_dongtai">
              <div class="det_title">浮标站动态信息</div>
              <div class="dongtai_top">
                <div class="dong_top_left">
                  <p :title="inspectionbuoyinfo.createTime"><span class="span_key">状态信息获取时间</span><span
                    class="span_val">{{inspectionbuoyinfo.createTime}}</span></p>
                  <p><span class="span_key">数据存储</span><span class="span_val">{{inspectionbuoyinfo.dataStorage}}</span>
                  </p>
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
                  <p><span class="span_key">有无进水</span><span class="span_val">{{inspectionbuoyinfo.inflowState}}</span>
                  </p>
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
                  <p><span class="span_key">有效接收率</span><span class="span_val">{{inspectionbuoyinfo.rateA}}</span></p>
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
                    <i class=""></i><span :class="scope.row.isNormal=='正常'?'nor':'err'">{{scope.row.isNormal}}</span>
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
  </div>


</template>
<script type="es6">
  import regTitle from './../../minModule/title/Title'
  import regTable from './../../minModule/table/Table'

  export default {
    data() {
      return {
        table: '700',
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

        titL_Top: '各类装备的资产总值',
        //titL_Bot: '北极装备实时统计地图',
        topList: ['海洋站', '船舶', '潜艇', '雷达', '浮标', '潜标', '飞机'],
        iconsChart: [
          {name: '海洋站'},
          {name: '浮标'},
          {name: '海床基'},
          {name: '海啸浮标'},
          {name: '雷达'}
        ],
        // dataTable:[
        //   {seqno: '1',type: '海洋站',xinhao: 'HYZ001',bianhao: '1',status: '正常',usecompany:'厦门中心站','num':'','other':''},
        //   {seqno: '2',type: '浮标',xinhao: 'FB008',bianhao: '2',status: '待报废',usecompany:'东海预报中心','num':'','other':''},
        //   {seqno: '3',type: '海床基观测系统',xinhao: 'HCJGCXT',bianhao: '3',status: '遗失',usecompany:'宁波中心站','num':'','other':''},
        //   {seqno: '4',type: '雷达',xinhao: 'FB008',bianhao: '4',status: '损坏',usecompany:'厦门中心站','num':'','other':''},
        //   {seqno: '5',type: '海啸浮标',xinhao: 'HCJGCXT',bianhao: '5',status: '正常',usecompany:'东海预报中心','num':'','other':''},
        //   {seqno: '6',type: '海洋站',xinhao: 'HYZ001',bianhao: '1',status: '正常',usecompany:'厦门中心站','num':'','other':''},
        //   {seqno: '7',type: '浮标',xinhao: 'FB008',bianhao: '2',status: '待报废',usecompany:'东海预报中心','num':'','other':''},
        //   {seqno: '8',type: '海床基观测系统',xinhao: 'HCJGCXT',bianhao: '3',status: '遗失',usecompany:'宁波中心站','num':'','other':''},
        //   {seqno: '9',type: '雷达',xinhao: 'FB008',bianhao: '4',status: '损坏',usecompany:'厦门中心站','num':'','other':''},
        //   {seqno: '10',type: '海啸浮标',xinhao: 'HCJGCXT',bianhao: '5',status: '正常',usecompany:'东海预报中心','num':'','other':''},
        //   {seqno: '11',type: '海洋站',xinhao: 'HYZ001',bianhao: '1',status: '正常',usecompany:'厦门中心站','num':'','other':''},
        //   {seqno: '12',type: '浮标',xinhao: 'FB008',bianhao: '2',status: '待报废',usecompany:'东海预报中心','num':'','other':''},
        //   {seqno: '13',type: '海床基观测系统',xinhao: 'HCJGCXT',bianhao: '3',status: '遗失',usecompany:'宁波中心站','num':'','other':''},
        //   {seqno: '14',type: '雷达',xinhao: 'FB008',bianhao: '4',status: '损坏',usecompany:'厦门中心站','num':'','other':''},
        // ]
        dataTable: [
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
        deptId: '',
        type: ''
      }
    },
    methods: {
      listChoose: (el) => {
        // el.target
      },
      clockDetail() {
        $(".detail").animate({"margin-left": -this.clientWidth * .9 * .41 + 'px'}, 500, function () {
          $(".detail").hide()
        })
      },
      handleClick(row) {
        console.log(row)
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      changeLeftDiv(index) {
        let that = this
        for (var i = 1; i < 4; i++) {
          $("#div" + i).removeClass("selectedLeftDiv");
          $("#div" + i).addClass("normalLeftDiv");
        }
        $("#div" + index).addClass("selectedLeftDiv");
        if (index == 1) {
          this.deptId = '17dbf523bc4a5f7aa3ceff4f4716c100'
        }//东海
        if (index == 2) {
          this.deptId = 'ea65f62f144a530b8cba0a79787433ad'
        }//南海
        this.$http.get('http://71.0.1.192/otes/baseDataPort/getInfoList?deptId=' + this.deptId + '&type=' + this.type).then((res) => {
          that.dataTable = res.data.dataList
        }, (err) => {
          console.log(err)
        })

      },
      changeTopDiv(index) {
        let that = this
        for (var i = 1; i < 7; i++) {
          $("#topDiv" + i).removeClass("selectedTopDiv");
          $("#topDiv" + i).addClass("normalTopDiv");
        }
        $("#topDiv" + index).removeClass("normalTopDiv");
        $("#topDiv" + index).addClass("selectedTopDiv");
        if (index == 1) {
          this.type = 'marinestationinfo'
        }
        if (index == 2) {
          this.type = 'buoyinfo'
        }
        if (index == 3) {
          this.type = 'buoyinfo'
        }
        if (index == 4) {
          this.type = 'buoyinfo'
        }
        if (index == 5) {
          this.type = 'buoyinfo'
        }
        if (index == 6) {
          this.type = 'xbandradarinfo'
        }
        this.$http.get('http://71.0.1.192/otes/baseDataPort/getInfoList?deptId=' + this.deptId + '&type=' + this.type).then((res) => {
          that.dataTable = res.data.dataList
        }, (err) => {
          console.log(err)
        })

      }

    },
    mounted() {
      let screeH = document.documentElement.clientHeight >= 800 ? document.documentElement.clientHeight : 800
      this.table = screeH * .8 - 80
    },
    created() {
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
  .detail
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
        background-color #fff
        overflow hidden
        float left
        position relative
        .elTable
          height 100%
          overflow hidden
          margin-top 20px
          padding 0px
          .el-table__body-wrapper
            width 101% !important
            height 100%
            overflow hidden !important
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
        width: 100%;
        height: 40px;
        margin-left 138px

    .title_all_bottom_line ul li {
      float: left;
      margin-right: 10px;
      width: 140px;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      margin-letf: 0px;
      margin-top: 1px;
    }
    .yearChark_left {
      width: 138px;
      padding: 10px;
      height 100%
      background-color #fff
      box-sizing border-box
      float: left;
    }
    .elTable
      background-color #fff
      margin-left 10px
    .yearChark_left div {
      margin-top: 11px;
      text-align: center;
      cursor: pointer;
      height: 45px;
      line-height: 45px;
      border-radius: 4px;
    }

    .normalLeftDiv {
      background-color: lightblue;
      color: #000000;
    }
    .selectedLeftDiv {
      background-color: #17cfff;
      color: #ffffff;
    }

    .normalTopDiv {
      background-color: lightblue;
      color: #000000;
    }
    .selectedTopDiv {
      background-color: #ffffff;
      color: #17cfff;
      border-top 2px solid #0000ff
      border-bottom: 0px;
      box-sizing border-box
    }
</style>
