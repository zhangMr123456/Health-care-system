<template>

  <div class="inpatient-medical-workstation">
    <!--    <div v-on:click="inpatient">test</div>-->
    <el-row :gutter="40" v-for="item in items">
      <el-col :span="7" v-for="cont in item">
        <el-card shadow="hover" :body-style="{padding: '0px'}">
          <div class="grid-content" :class="cont.style" v-on:click="linkToDataInput(cont.title,cont.onclick)">
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
  name: 'reportStatistics',
  components:{
    onlinePatientList,
  },
  data() {
    return {
      visible: false,
      dialogName: "拖拽弹框",
      currentComponent: "",
      customer_id:'',
      current_window: null,
      items: [[
        {
          style: "timeout-document-comparison-statistics",
          title: "超时文档对比统计",
          content: "各科室的超时文档对比明细",
          onclick: "timeoutDocumentComparisonStatistics"
        }, {
          style: "medical-record-error-information-statistics",
          title: "病历错误信息统计",
          content: "病历错误信息统计",
          onclick: "medicalRecordErrorInformationStatistics"
        }
      ], [
        {
          style: "trend-analysis",
          title: "趋势分析",
          content: "病例评分的趋势分析",
          onclick: "trendAnalysis"
        }, {
          style: "timeout-document-trend-analysis",
          title: "超时文档趋势分析",
          content: "各科室的超市文档趋势分析",
          onclick: "timeoutDocumentTrendAnalysis"
        }
      ], [
        {
          style: "medical-record-document-statistics",
          title: "病历文档统计",
          content: "病历文档统计",
          onclick: "medicalRecordDocumentStatistics"
        }, {
          style: "statistics-of-medical-record-filingRate",
          title: "病历归档率统计",
          content: "病历归档率统计",
          onclick: "statisticsOfMedicalRecordFilingRate"
        }
      ], [
        {
          style: "custom-report",
          title: "自定义报表",
          content: "自定义报表",
          onclick: "customReport"
        }, {
          style: "medical-record-signature-statistics",
          title: "病历签字统计",
          content: "病历签字统计",
          onclick: "medicalRecordSignatureStatistics"
        }
      ], [
        {
          style: "statistics-of-unfilled-medical-records",
          title: "病历未归档统计",
          content: "病历未归档统计",
          onclick: "statisticsOfUnfilledMedicalRecords"
        },
        {
          style: "critical-account",
          title: "危急台账",
          content: "浏览系统危急值及处理情况",
          onclick: "criticalAccount"
        }
      ], [
        {
          style: "unplanned-reoperation",
          title: "非计划性再次手术",
          content: "非计划性再次手术",
          onclick: "unplannedReoperation"
        },
        {
          style: "organization-structure-data-statistics",
          title: "组织架构数据统计",
          content: "组织架构数据统计",
          onclick: "organizationStructureDataStatistics"
        }
      ], [
        {
          style: "integrated-presentation-of-medical-records",
          title: "心脑发病登记统计",
          content: "心脑发病登记统计",
          onclick: "registrationStatisticsaOfHeartAndBrainDiseases"
        },
        {
          style: "integrated-presentation-of-medical-records",
          title: "肿瘤报告统计",
          content: "肿瘤报告统计",
          onclick: "tumorReportStatistics"
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

