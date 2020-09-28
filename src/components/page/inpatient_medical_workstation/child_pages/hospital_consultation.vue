<template>
  <div id="app">
    <template>
      <div>
        <el-button-group>
          <el-button size="mini" v-for="item in toolbarItems" @click="linkToDataInput(item.onclick)"><i :class="item.icon"
                                                                                                      v-if="item.icon"
                                                                                                      :style="item.color"></i>{{
              item.value
            }}
          </el-button>
        </el-button-group>
      </div>
      <!-- <div> -->
      <el-tabs value="first" @tab-click="handleClick">
        <el-tab-pane label="应邀会诊信息" name="first">
          <el-row class="el-table--border tab-title" style="text-align: left; margin-top: 5px">
            <span>应邀会诊总数: {{ totalConsultations }}</span>
            <span style="color: #00d1b2">普通: {{ ordinary }}</span>
            <span style="color: red">紧急: {{ emergency }}</span>
            <span>查询条件：  </span>
            <span>应邀科室  </span>
            <el-select v-model="invitedDepartmentSelectValue" placeholder="全部科室">
              <el-option
                  v-for="item in invitedDepartmentOption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="invitedDateSelectValue" placeholder="应邀会诊日期">
              <el-option
                  v-for="item in invitedDateOption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-date-picker
                v-model="invitedDate"
                type="datetimerange"
                :picker-options="pickerOptions"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right">
            </el-date-picker>
            <el-button size="mini" @click="consultationInquiry">查询</el-button>
            <el-button size="mini" @click="dataExport">导出</el-button>
          </el-row>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column v-for="item in tableDataTitle" :prop="item.prop" :label="item.label" width="">
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="会诊科室申请信息" name="second">
          <el-row class="el-table--border tab-title" style="text-align: left; margin-top: 5px">
            <span>应邀会诊总数: {{ totalConsultations }}</span>
            <span style="color: #00d1b2">普通: {{ ordinary }}</span>
            <span style="color: red">紧急: {{ emergency }}</span>
            <span>查询条件：  </span>
            <span>应邀科室  </span>
            <el-select v-model="invitedDepartmentSelectValue" placeholder="全部科室">
              <el-option
                  v-for="item in invitedDepartmentOption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="invitedDateSelectValue" placeholder="应邀会诊日期">
              <el-option
                  v-for="item in invitedDateOption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-date-picker
                v-model="invitedDate"
                type="datetimerange"
                :picker-options="pickerOptions"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right">
            </el-date-picker>
            <el-button size="mini" @click="consultationInquiry">查询</el-button>
            <el-button size="mini" @click="dataExport">导出</el-button>
          </el-row>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column v-for="item in tableDataTitle" :prop="item.prop" :label="item.label" width="">
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      totalConsultations: 10,
      ordinary: 10,
      emergency: 10,
      invitedDepartmentSelectValue: '',
      invitedDateSelectValue: '',
      invitedDepartmentOption: [
        {
          value: "0",
          label: "全部科室",
        },
      ],
      invitedDateOption: [{
        value: "0",
        label: "应邀会诊日期",
      },],
      toolbarItems: [
        {
          icon: "el-icon-refresh-right",
          value: "刷新",
          color: "color:lightgreen",
          click: ""
        }, {
          icon: "el-icon-data-analysis",
          value: "会诊",
          color: "color:rgb(27,86,131)",
          click: ""
        }, {
          icon: "el-icon-success",
          value: "完成会诊",
          color: "color:lightgreen",
          click: ""
        }, {
          icon: "el-icon-remove",
          value: "取消完成",
          color: "color:#f1df07",
          click: ""
        }, {
          icon: "el-icon-search",
          value: "查找",
          color: "",
          click: ""
        }, {
          icon: "el-icon-switch-button",
          value: "关闭",
          color: "color:rgb(233,27,33)",
          click: 'quit',
        }],
      consultationToolbarItem: {
        invitedConsultation: [{
          icon: "el-icon-refresh-right",
          value: "刷新",
          color: "color:lightgreen",
          click: ""
        }, {
          icon: "el-icon-data-analysis",
          value: "会诊",
          color: "color:rgb(27,86,131)",
          click: ""
        }, {
          icon: "el-icon-success",
          value: "完成会诊",
          color: "color:lightgreen",
          click: ""
        }, {
          icon: "el-icon-remove",
          value: "取消完成",
          color: "color:#f1df07",
          click: ""
        }, {
          icon: "el-icon-search",
          value: "查找",
          color: "",
          click: ""
        }, {
          icon: "el-icon-switch-button",
          value: "关闭",
          color: "color:rgb(233,27,33)",
          click: 'quit'
        }],
        applicationForConsultation: [{
          icon: "el-icon-refresh-right",
          value: "刷新",
          color: "color:lightgreen",
          click: ""
        }, {
          icon: "el-icon-document",
          value: "查看文档",
          color: "color:rgb(27,86,131)",
          click: ""
        }, {
          icon: "el-icon-error",
          value: "结束会诊",
          color: "color:rgb(233,27,33)",
          click: ""
        }, {
          icon: "el-icon-search",
          value: "查找",
          color: "",
          click: ""
        }, {
          icon: "el-icon-switch-button",
          value: "关闭",
          color: "color:rgb(233,27,33)",
          click: 'quit'
        }],
      },
      firstTableDataTile: [
        {
          prop: "state",
          label: "会诊状态",
        },
        {
          prop: "invited_date",
          label: "邀请时间",
        },
        {
          prop: "grade",
          label: "等级",
        },
        {
          prop: "consultation_period",
          label: "会诊期限",
        },
        {
          prop: "consultation_application_department",
          label: "会诊申请科室",
        },
        {
          prop: "applicant_physician",
          label: "申请医师",
        },
        {
          prop: "patientID",
          label: "病人ID",
        },
        {
          prop: "patient_name",
          label: "姓名",
        },
        {
          prop: "consultant",
          label: "会诊医师",
        },
        {
          prop: "completion_time_of_consultation",
          label: "会诊完成时间",
        },
        {
          prop: "bad_no",
          label: "床号",
        },
        {
          prop: "complete_the_consultation_department",
          label: "完成会诊科室",
        },
        {
          prop: "medical_record_number",
          label: "病案号",
        }, {
          prop: "attending_physician",
          label: "主治医师",
        },
      ],
      secondTableDataTile: [
        {
          prop: "state",
          label: "会诊状态",
        },
        {
          prop: "invited_date",
          label: "申请时间",
        },
        {
          prop: "grade",
          label: "等级",
        },
        {
          prop: "consultation_period",
          label: "会诊期限",
        },
        {
          prop: "consultation_application_department",
          label: "会诊申请科室",
        },
        {
          prop: "applicant_physician",
          label: "申请医师",
        },
        {
          prop: "patientID",
          label: "病人ID",
        },
        {
          prop: "patient_name",
          label: "姓名",
        },
        {
          prop: "consultant",
          label: "会诊医师",
        },
        {
          prop: "completion_time_of_consultation",
          label: "会诊完成时间",
        },
        {
          prop: "bad_no",
          label: "床号",
        },
        {
          prop: "complete_the_consultation_department",
          label: "完成会诊科室",
        },
        {
          prop: "medical_record_number",
          label: "病案号",
        }, {
          prop: "attending_physician",
          label: "主治医师",
        },
      ],
      firstTableData: [
        {
          state: '会诊结束',
          invited_date: '2020/9/23 11:40:01',
          grade: '0001',
          consultation_period: "2020/9/24 11:40:01",
          consultation_application_department: "外科",
          applicant_physician: "张医生",
          patientID: "41671",
          patient_name: "张三",
          consultant: "王医生",
          completion_time_of_consultation: "2020/9/25 11:39:50",
          bad_no: "8456",
          complete_the_consultation_department: "脑外科",
          medical_record_number: "831761",
          attending_physician: "张医生",
        }, {
          state: '会诊结束',
          invited_date: '2020/9/23 11:40:01',
          grade: '0001',
          consultation_period: "2020/9/24 11:40:01",
          consultation_application_department: "外科",
          applicant_physician: "张医生",
          patientID: "41671",
          patient_name: "张三",
          consultant: "王医生",
          completion_time_of_consultation: "2020/9/25 11:39:50",
          bad_no: "8456",
          complete_the_consultation_department: "脑外科",
          medical_record_number: "831761",
          attending_physician: "张医生",
        }, {
          state: '会诊结束',
          invited_date: '2020/9/23 11:40:01',
          grade: '0001',
          consultation_period: "2020/9/24 11:40:01",
          consultation_application_department: "外科",
          applicant_physician: "张医生",
          patientID: "41671",
          patient_name: "张三",
          consultant: "王医生",
          completion_time_of_consultation: "2020/9/25 11:39:50",
          bad_no: "8456",
          complete_the_consultation_department: "脑外科",
          medical_record_number: "831761",
          attending_physician: "张医生",
        }, {
          state: '会诊结束',
          invited_date: '2020/9/23 11:40:01',
          grade: '0001',
          consultation_period: "2020/9/24 11:40:01",
          consultation_application_department: "外科",
          applicant_physician: "张医生",
          patientID: "41671",
          patient_name: "张三",
          consultant: "王医生",
          completion_time_of_consultation: "2020/9/25 11:39:50",
          bad_no: "8456",
          complete_the_consultation_department: "脑外科",
          medical_record_number: "831761",
          attending_physician: "张医生",
        },],
      secondTableData: [
        {
          state: '会诊结束',
          invited_date: '2020/9/23 11:40:01',
          grade: '0001',
          consultation_period: "2020/9/24 11:40:01",
          consultation_application_department: "外科",
          applicant_physician: "张医生",
          patientID: "41671",
          patient_name: "张三",
          consultant: "王医生",
          completion_time_of_consultation: "2020/9/25 11:39:50",
          bad_no: "8456",
          complete_the_consultation_department: "脑外科",
          medical_record_number: "831761",
          attending_physician: "张医生",
        }, {
          state: '会诊结束',
          invited_date: '2020/9/23 11:40:01',
          grade: '0001',
          consultation_period: "2020/9/24 11:40:01",
          consultation_application_department: "外科",
          applicant_physician: "张医生",
          patientID: "41671",
          patient_name: "张三",
          consultant: "王医生",
          completion_time_of_consultation: "2020/9/25 11:39:50",
          bad_no: "8456",
          complete_the_consultation_department: "脑外科",
          medical_record_number: "831761",
          attending_physician: "张医生",
        }, {
          state: '会诊结束',
          invited_date: '2020/9/23 11:40:01',
          grade: '0001',
          consultation_period: "2020/9/24 11:40:01",
          consultation_application_department: "外科",
          applicant_physician: "张医生",
          patientID: "41671",
          patient_name: "张三",
          consultant: "王医生",
          completion_time_of_consultation: "2020/9/25 11:39:50",
          bad_no: "8456",
          complete_the_consultation_department: "脑外科",
          medical_record_number: "831761",
          attending_physician: "张医生",
        }, {
          state: '会诊结束',
          invited_date: '2020/9/23 11:40:01',
          grade: '0001',
          consultation_period: "2020/9/24 11:40:01",
          consultation_application_department: "外科",
          applicant_physician: "张医生",
          patientID: "41671",
          patient_name: "张三",
          consultant: "王医生",
          completion_time_of_consultation: "2020/9/25 11:39:50",
          bad_no: "8456",
          complete_the_consultation_department: "脑外科",
          medical_record_number: "831761",
          attending_physician: "张医生",
        },],
      tableDataTitle: [],
      tableData: [],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      invitedDate: ''
    }
  },
  mounted() {
    this.tableDataTitle = this.firstTableDataTile;
    this.tableData = this.firstTableData;
  },
  methods: {
    linkToDataInput(title1,method) {
      this.$options.methods[method]();
    },
    quit: function () {
    },
    handleClick: function (tab, event) {
      if (tab.name === "first") {
        this.toolbarItems = this.consultationToolbarItem.invitedConsultation;
        this.tableDataTitle = this.firstTableDataTile;
        this.tableData = this.firstTableData;
      } else if (tab.name === "second") {
        this.toolbarItems = this.consultationToolbarItem.applicationForConsultation;
        this.tableDataTitle = this.secondTableDataTile;
        this.tableData = this.secondTableData;
      }
    },
    consultationInquiry: function () {

    },
    dataExport: function () {

    }
  },

}
</script>

<style scoped="scoped">
.online-patient-toolbar li {
  list-style-type: none;
  float: left;
  margin-right: 5px;
}

.my-detailed-task-list {
  font-size: 15px;
  line-height: 30px;
}

.tab-title span {
  margin-left: 2vw;
  margin-right: 1vw;
}

.tab-title button {
  margin-left: 1.5vw;
}
</style>
