<template>

  <div class="inpatient-medical-workstation">
    <!--    <div v-on:click="inpatient">test</div>-->
    <el-row :gutter="40" v-for="item in items">
      <el-col :span="7" v-for="cont in item">
        <el-card shadow="hover" :body-style="{padding: '0px'}">
          <div class="grid-content" :class="cont.style" v-on:click="linkToDataInput(cont.onclick)">
            <i class="grid-con-icon"></i>
            <div class="grid-cont-right">
              <div class="title grid-num ">{{ cont.title }}</div>
              <div>{{ cont.content }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog fullscreen :title=dialogName :visible.sync="visible" width="80%">
      <component :is="current_window">
      </component>
    </el-dialog>
  </div>
</template>

<script>
import '@/assets/css/tab.css';
import onlinePatientList from "@/components/page/inpatient_medical_workstation/child_pages/online_patient_list";

export default {
  name: 'medicalRecordLending',
  components: {
    onlinePatientList,
  },
  data() {
    return {
      visible: false,
      dialogName: "拖拽弹框",
      currentComponent: "",
      customer_id: '',
      current_window: null,
      items: [[
        {
          style: "approve-medical-record-inquiry-application",
          title: "组织架构图",
          content: "组织架构图",
          onclick: "approveMedicalRecordInquiryApplication"
        }, {
          style: "grid-con-1",
          title: "非计划性再次手术",
          content: "非计划性再次手术",
          onclick: "structuredRetrieval"
        }
      ], [
        {
          style: "medical-record-browsing",
          title: "交接班管理",
          content: "交接班管理",
          onclick: "medicalRecordBrowsing"
        }, {
          style: "medical-record-collection",
          title: "规范诊断管理",
          content: "规范诊断管理",
          onclick: "medicalRecordCollection"
        }
      ], [
        {
          style: "follow-up-of-medical-records",
          title: "危机值管理",
          content: "危机值管理",
          onclick: "followUpOfMedicalRecords"
        }, {
          style: "unreceived-medical-records",
          title: "值班管理",
          content: "值班管理",
          onclick: "unreceivedMedicalRecords"
        }
      ], [
        {
          style: "event-report",
          title: "超30天患者管理",
          content: "住院时间超30天患者管理",
          onclick: "eventReport"
        }, {
          style: "medical-record-editor",
          title: "再住院管理",
          content: "再住院管理",
          onclick: "medicalRecordEditor"
        }
      ], [
        {
          style: "management-of-critical-patients",
          title: "危重患者管理",
          content: "危重患者管理",
          onclick: "managementOfCriticalPatients"
        },
        {
          style: "rescue-management",
          title: "抢救管理",
          content: "抢救记录模块",
          onclick: "rescueManagement"
        }
      ], [
        {
          style: "standardize-operation-management",
          title: "规范操作管理",
          content: "规范操作管理",
          onclick: "standardizeOperationManagement"
        },
        {
          style: "operation-authorization-management",
          title: "手术授权管理",
          content: "手术授权管理",
          onclick: "operationAuthorizationManagement"
        }
      ], [
        {
          style: "operation-classification-management",
          title: "手术分级管理",
          content: "手术分级管理",
          onclick: "operationClassificationManagement"
        },
        {
          style: "standardize-operation-management",
          title: "规范手术管理",
          content: "规范手术管理",
          onclick: "standardizeOperationManagement"
        }
      ], [
        {
          style: "scoring-statistics",
          title: "评分统计",
          content: "评分统计",
          onclick: "scoringStatistics"
        },
        {
          style: "diagnostic-query",
          title: "诊断查询",
          content: "诊断查询",
          onclick: "diagnosticQuery"
        }
      ], [
        {
          style: "timeoutQuery",
          title: "超时查询",
          content: "超时查询",
          onclick: "timeoutQuery"
        },
        {
          style: "first-page-statistics-of-medical-records",
          title: "病案首页统计",
          content: "病案首页统计",
          onclick: "firstPageStatisticsOfMedicalRecords"
        }
      ]]
    }
        ;
  },
  methods: {
    //根据方法名调用方法
    linkToDataInput(title1, methods) {
      this.dialogName = title1;
      this.current_window = methods;
      this.visible = true;
    },
    handleRead(index) {
      const item = this.unread.splice(index, 1);
      console.log(item);
      this.read = item.concat(this.read);
    },
    handleDel(index) {
      const item = this.read.splice(index, 1);
      this.recycle = item.concat(this.recycle);
    },
    handleRestore(index) {
      const item = this.recycle.splice(index, 1);
      this.read = item.concat(this.read);
    }
  },
  computed: {
    unreadNum() {
      return this.unread.length;
    }
  }
};

</script>

<style>
.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
  background-repeat: no-repeat;
  background-position: center;
}

</style>

