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
  name: 'systemMaintenance',
  data() {
    return {
      visible: false,
      dialogName: "拖拽弹框",
      items: [[
        {
          style: "organization-chart",
          title: "组织架构图",
          content: "分配科室人员",
          onclick: "organizationChart"
        }, {
          style: "user-management",
          title: "用户管理",
          content: "维护用户的基本信息",
          onclick: "userManagement"
        }
      ], [
        {
          style: "system-configuration",
          title: "系统配置",
          content: "配置系统运行的基本信息",
          onclick: "systemConfiguration"
        }, {
          style: "patient-information-maintenance",
          title: "患者信息维护",
          content: "维护患者基本信息",
          onclick: "patientInformationMaintenance"
        }
      ], [
        {
          style: "basic-dictionary",
          title: "基础字典",
          content: "系统中所需的各种基础信息",
          onclick: "basicDictionary"
        }, {
          style: "interface-configuration",
          title: "接口配置",
          content: "配置接口基本信息",
          onclick: "interfaceConfiguration"
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

