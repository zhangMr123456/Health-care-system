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
    <el-dialog v-dialog-drag :title=dialogName :visible.sync="visible" width="80%">
      <component :is="current_window">
      </component>
    </el-dialog>
  </div>
</template>

<script>
import '@/assets/css/tab.css';
import onlinePatientList from "@/components/page/inpatient_medical_workstation/child_pages/online_patient_list";

export default {
  name: 'ClinicalPathway',
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
          style: "query-statistics",
          title: "查询统计",
          content: "临床路径相关查询",
          onclick: "queryStatistics"
        }, {
          style: "outgoing-diameter",
          title: "出径",
          content: "因不再符合路径规定需要离开路径",
          onclick: "outgoingDiameter"
        }
      ], [
        {
          style: "import-path",
          title: "导入路径",
          content: "将符合条件的住院人员导入临床",
          onclick: "importPath"
        }, {
          style: "nursing-records",
          title: "护理记录",
          content: "填写加班护理情况",
          onclick: "nursingRecords"
        }
      ], [
        {
          style: "path-evaluation",
          title: "路径评估",
          content: "对路径每日执行情况评估",
          onclick: "pathEvaluation"
        }, {
          style: "path-complete",
          title: "路径完成",
          content: "病人出院或路径转移",
          onclick: "pathComplete"
        }
      ], [
        {
          style: "generate-daily-orders",
          title: "生成每日医嘱",
          content: "根据路径阶段医嘱设置生成医嘱",
          onclick: "generateDailyOrders"
        }, {
          style: "medical-ddvice-inquiry-andTransmission",
          title: "医嘱查询及传送",
          content: "查询医嘱执行情况传送路径医嘱",
          onclick: "medicalDdviceInquiryAndTransmission"
        }
      ], [
        {
          style: "custom-query",
          title: "自定义查询",
          content: "路径相关自定义查询",
          onclick: "customQuery"
        }
      ]]
    };
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

