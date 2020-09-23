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
  name: 'hospitalConsultationWorkstation',
  data() {
    return {
      visible: false,
      dialogName: "拖拽弹框",
      items: [[
        {
          style: "grid-con",
          title: "院内会诊工作站",
          content: "院内会诊工作站",
          onclick: "hospitalConsultation"
        },
      ]]
    };
  },
  methods: {
    linkToDataInput(methods) {
      this.visible = true;
    },
    //院内会诊工作站
    hospitalConsultation() {

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

