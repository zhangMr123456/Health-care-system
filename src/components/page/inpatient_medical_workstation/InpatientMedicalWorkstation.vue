<template>

  <div class="inpatient-medical-workstation">
    <el-row :gutter="40" v-for="item in items">
      <el-col :span="7" v-for="cont in item">
        <el-card shadow="hover" :body-style="{padding: '0px'}">
          <div class="grid-content" :class="cont.style" v-on:click="linkToDataInput(cont.title, cont.onclick)">
            <i class="grid-con-icon"></i>
            <div class="grid-cont-right">
              <div class="title grid-num ">{{ cont.title }}</div>
              <div>{{ cont.content }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog fullscreen="true" :title=dialogName :visible.sync="visible" width="80%">
		  <component :is="current_window">
		  </component>
    </el-dialog>
  </div>

</template>

<script>
import '@/assets/css/tab.css';
import onlinePatientList from './child_pages/online_patient_list.vue';

export default {
  name: 'inpatientMedicalWorkstation',
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
          style: "grid-con",
          title: "在院患者",
          content: "病例文书的书写、患者转科等操作",
          onclick: onlinePatientList
        }, {
          style: "grid-con-1",
          title: "结构化检索",
          content: "查询患者信息及病例内容",
          onclick: "jieGouHUa"
        }
      ], [{
        style: "grid-con-2",
        title: "待转出患者",
        content: "已经进行转科操作的患者",
        onclick: "patientToBeTransferredOut"
      }, {
        style: "grid-con-3",
        title: "待转入患者",
        content: "由其他科室转入本科室的患者",
        onclick: "patientsToBeTransferred"
      }], [
        {
          style: "grid-con-4",
          title: "病例借阅",
          content: "借阅已经归档的患者病例",
          onclick: "medicalRecordBorrowing"
        }, {
          style: "grid-con-5",
          title: "委托签字",
          content: "签字权委托于其他医生",
          onclick: "entrustedSignature"
        }
      ], [{
        style: "grid-con-6",
        title: "科室共享病例",
        content: "其他科室共享病例",
        onclick: "departmentsShareCases"
      }, {
        style: "grid-con-7",
        title: "病例回收站",
        content: "保存已经删除的病例",
        onclick: "caseRecycleBin"
      }], [
        {
          style: "grid-con-8",
          title: "患者查询",
          content: "对在医院和归档者进行查询",
          onclick: "patientInquiry"
        },
        {
          style: "grid-con-9",
          title: "科室非计划手术统计",
          content: "科室非计划手术统计",
          onclick: "departmentUnplannedOperationStatistics"
        }
      ], [{
        style: "grid-con-10",
        title: "签名查询",
        content: "对电子签名病例查询，验证",
        onclick: "signatureQuery"
      }, {
        style: "grid-con-11",
        title: "护理排班",
        content: "护理部排班程序",
        onclick: "nursingScheduling"
      }], [
        {
          style: "grid-con-12",
          title: "远程会诊医疗",
          content: "河南省远程医疗协同服务平台",
          onclick: "teleconsultationMedicalTreatment"
        }
      ],]
    };
  },
  methods: {
    //根据方法名调用方法
    linkToDataInput(title1, methods) {
      this.dialogName = title1;
      this.current_window = methods;
      this.visible = true;
    },

    //在院患者
    inpatient() {
      console.log("在院患者被单击")
    },

    //结构化检索
    structuredRetrieval() {

    },


    //待转出患者
    patientToBeTransferredOut() {

    },
    //待转入患者
    patientsToBeTransferred() {

    },
    //病例借阅
    medicalRecordBorrowing() {
    },
    //委托签字
    entrustedSignature() {

    },

    //科室共享病例
    departmentsShareCases() {

    },
    //病例回收站
    caseRecycleBin() {

    },
    //患者查询
    patientInquiry() {

    },
    //科室非计划手术统计
    departmentUnplannedOperationStatistics() {

    },
    //签名查询
    signatureQuery() {

    },
    //护理排班
    nursingScheduling() {

    },
    //远程会诊医疗
    teleconsultationMedicalTreatment() {

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


</style>

