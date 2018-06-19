<template>
  <div class="calibration">
    <div class="w">
      <div class="region_info">
        <div class="region_info_l">
          <div class="detail" ref="detail">
            <i @click="clockDetail" class="el-icon-close detailClose" style=""></i>
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
                  align="center"
                  label="全部详情">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="mini"
                               style="display: inline-block;width: 80%;height: 80%; background-color: #7f8180;color:#fff;">
                      查看详情
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
        <div class="region_info_r">
          <div class="detail_r" ref="detail_r">
            <i @click="clockDetail_r" class="el-icon-close detailClose" style=""></i>
          </div>
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
                    <el-button @click="handle_r_Click(scope.row.num)" type="text" size="mini"
                               style="display: inline-block;width: 80%;height: 80%; background-color: #7f8180;color:#fff;">
                      查看详情
                    </el-button>
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
  import regTitle from './../../minModule/title/Title'
  import regTable from './../../minModule/table/Table'
  import icon from './../../minModule/icon/Icon'
  import normal from './../../minModule/normal/Normal'

  export default {
    data (){
      return {
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
        titL_Top: '观测装备鉴定校准分布地图',
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
        clientWidth: document.documentElement.clientWidth >= 1330 ? document.documentElement.clientWidth : 1330,
      }
    },
    methods: {
      listChoose: (el) => {
        // el.target
      },
      handleClick(row) {
        $(".detail").hide()
        $(".detail").css("margin-left", -this.clientWidth * .9 * .41 + 'px')
        $(".detail").show()
        $(".detail").animate({"margin-left": "0px"}, 500)
      },
      handle_r_Click(row) {
        $(".detail_r").hide()
        $(".detail_r").css("margin-left", this.clientWidth * .9 * .41 + 'px')
        $(".detail_r").show()
        $(".detail_r").animate({"margin-left": "0px"}, 500)
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
        $(".detail").animate({"margin-left": -this.clientWidth * .9 * .495 + 'px'}, 500, function () {
          $(".detail").hide()
        })
      },
      clockDetail_r() {
        $(".detail_r").animate({"margin-left": this.clientWidth * .9 * .495 + 'px'}, 500, function () {
          $(".detail_r").hide()
        })
      }

    },
    mounted (){


      let screeH = document.documentElement.clientHeight > 800 ? document.documentElement.clientHeight : 800


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
          overflow hidden
          position relative
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
            background-size 100%
            background-color rgb(211, 219, 232)
            z-index 999999999999
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
          .info_l_top
            width 100%
            height 100%
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
              top 50%
              margin-top -117px
              right 10px
              ul
                li
                  width 68px
                  height 64px
                  text-align center
                  color #fff
                  box-sizing border-box
                  border 1px solid #a8a8aa
                  box-shadow 0 0 3px 0 #5c6275
                  background #666666
                  border-radius 5px
                  margin-top 2px
                  img
                    width 30px
                    padding-top 6px
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

        .region_info_r
          float left
          border-radius 4px
          width 49.5%
          height 100%
          margin-left 1%
          position relative
          overflow hidden
          .detail_r
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
            background-size 100%
            background-color rgb(211, 219, 232)
            z-index 999999999999
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
              z-index 10
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

        .region_info_l
          padding 50px 10px 10px 10px
          box-sizing border-box
          height 100%
          background-color #fff
          position relative
          .heading
            width 154px
            height 27px
            position absolute
            top 10px
            left 5px
            background-color red
          .info_r_bot
            margin-top 0px
            height 100%
            .elTable
              height 95%
              div
                height 100%
        .region_info_r
          height 100%
          .info_r_top
            height 100%


</style>
