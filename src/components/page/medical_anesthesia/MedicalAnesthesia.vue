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
  name: 'medicalAnesthesia',
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
          style: "medical-anesthesia",
          title: "医技/麻醉工作站",
          content: "医技/麻醉工作站",
          onclick: "medicalAnesthesia"
        }, {
          style: "surgical-arrangement",
          title: "手术安排",
          content: "各科室之间的手术安排情况",
          onclick: "surgicalArrangement"
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

