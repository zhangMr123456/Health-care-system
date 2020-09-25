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
  name: 'ClinicalPathwaySetting',
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
          style: "setting-of-complications-and-complications",
          title: "合并症、并发症设置",
          content: "设置合并症、并发症医嘱",
          onclick: "settingOfComplicationsAndComplications"
        }, {
          style: "check-for-updates",
          title: "检查更新",
          content: "检查更新临床路径",
          onclick: "checkForUpdates"
        }
      ], [
        {
          style: "path-form-settings",
          title: "路径表单设置",
          content: "设置临床路径表单信息",
          onclick: "pathFormSettings"
        }, {
          style: "path-classification",
          title: "路径分类",
          content: "设置临床路径分类",
          onclick: "pathClassification"
        }
      ], [
        {
          style: "path-basic-information",
          title: "路径基本信息",
          content: "设置临床路径基本信息",
          onclick: "pathBasicInformation"
        }, {
          style: "nursing-settings-in-path-stage",
          title: "路径阶段护理设置",
          content: "设置路径各阶段护理选项",
          onclick: "nursingSettingsInPathStage"
        }
      ], [
        {
          style: "path-stage-evaluation-settings",
          title: "路径阶段评估设置",
          content: "设置路径各阶段评估指标",
          onclick: "pathStageEvaluationSettings"
        }, {
          style: "path-stage-doctor-advice-setting",
          title: "路径阶段医嘱设置",
          content: "设置个路径各阶段重点医嘱",
          onclick: "pathStageDoctorAdviceSetting"
        }
      ], [
        {
          style: "data-dictionary",
          title: "数据字典",
          content: "临床路径相关数据字典",
          onclick: "dataDictionary"
        }, {
          style: "system-settings",
          title: "系统设置",
          content: "配置系统参数",
          onclick: "systemSettings"
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

