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
    <el-dialog v-dialogDrag :title=dialogName center :visible.sync="visible" width="30%">

    </el-dialog>
  </div>
</template>

<script>
import '@/assets/css/tab.css';

export default {
  name: 'MedicalDatabases',
  data() {
    return {
      visible: false,
      dialogName: "拖拽弹框",

      items: [[
        {
          style: "drug-database",
          title: "药品资料库",
          content: "查询各种药品的使用方法",
          onclick: "drugDatabase"
        }, {
          style: "diagnosis-and-treatment-standard-of-common-diseases",
          title: "常见疾病诊疗规范",
          content: "常见疾病诊疗规范",
          onclick: "diagnosisAndTreatmentStandardOfCommonDiseases"
        }
      ], [
        {
          style: "international-Codebase",
          title: "ICD-10国际编码库",
          content: "查询手术、疾病等的国际编码",
          onclick: "internationalCodebase"
        }, {
          style: "medical-pPicture-library",
          title: "医学图片库",
          content: "对系统中使用的医学图或矢量图进行维护",
          onclick: "medicalPictureLibrary"
        }
      ], [
        {
          style: "medical-moderate-graphics-library",
          title: "医学适量图形库",
          content: "对系统中使用的医学图或矢量图进行维护",
          onclick: "medicalModerateGraphicsLibrary"
        }, {
          style: "knowledge-collection-library",
          title: "知识采集库",
          content: "医学知识采集资料库",
          onclick: "knowledgeCollectionLibrary"
        }
      ], [
        {
          style: "maintenance-of-surgical-library",
          title: "手术库维护",
          content: "查询手术、疾病等的国际编码",
          onclick: "maintenanceOfSurgicalLibrary"
        }, {
          style: "routine-diagnosis-and-treatment",
          title: "诊疗常规",
          content: "诊疗常规",
          onclick: "routineDiagnosisAndTreatment"
        }
      ], [
        {
          style: "body-temperature-entry",
          title: "体温单选择录入",
          content: "体温单选择录入",
          onclick: "bodyTemperatureEntry"
        }
      ]]
    };
  },
  methods: {
    linkToDataInput(methods) {
      this.visible = true;
      // this.$options.methods[methods]();
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

