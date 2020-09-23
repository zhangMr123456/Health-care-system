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
    <el-dialog v-dialogDrag title=dialogName center :visible.sync="visible" width="30%">

    </el-dialog>
  </div>
</template>

<script>
import '@/assets/css/tab.css';

export default {
  name: 'medicalRecordLending',
  data() {
    return {
      visible: false,
      dialogName: "拖拽弹框",
      items: [[
        {
          style: "approve-medical-record-inquiry-application",
          title: "批准病历查询申请",
          content: "查询归档病历的申请进行批准",
          onclick: "approveMedicalRecordInquiryApplication"
        }, {
          style: "grid-con-1",
          title: "结构化检索",
          content: "查询患者信息及病例内容",
          onclick: "structuredRetrieval"
        }
      ], [
        {
          style: "medical-record-browsing",
          title: "病案浏览",
          content: "浏览个科室病历",
          onclick: "medicalRecordBrowsing"
        }, {
          style: "medical-record-collection",
          title: "病历代收",
          content: "对即将归档的病历代收集中提交",
          onclick: "medicalRecordCollection"
        }
      ], [
        {
          style: "follow-up-of-medical-records",
          title: "病案随访",
          content: "对出院病人病案随访",
          onclick: "followUpOfMedicalRecords"
        }, {
          style: "unreceived-medical-records",
          title: "未收病历",
          content: "已经出院但未代收的病历",
          onclick: "unreceivedMedicalRecords"
        }
      ], [
        {
          style: "event-report",
          title: "事件报表",
          content: "根据护士的事件统计报表",
          onclick: "eventReport"
        }, {
          style: "medical-record-editor",
          title: "病案编辑",
          content: "单独编辑病案首页信息",
          onclick: "medicalRecordEditor"
        }
      ], [
        {
          style: "integrated-presentation-of-medical-records",
          title: "病历一体化展现",
          content: "整体浏览者的病历，并打印",
          onclick: "integratedPresentationOfMedicalRecords"
        }
      ]]
    };
  },
  methods: {
    linkToDataInput(methods) {
      this.$options.methods[methods]();
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

