<template>

  <div>
    <el-tabs type="border-card">
      <el-tab-pane v-for="item in items" :label="item.name">
        <div class="inpatient-medical-workstation">
          <!--    <div v-on:click="inpatient">test</div>-->
          <el-row :gutter="40" v-for="rows in item.items">
            <el-col :span="7" v-for="card in rows">
              <el-card shadow="hover" :body-style="{padding: '0px'}">
                <div class="grid-content" :class="card.style" v-on:click="linkToDataInput(card.title,card.onclick)">
                  <i class="grid-con-icon"></i>
                  <div class="grid-cont-right">
                    <div class="title grid-num ">{{ card.title }}</div>
                    <div>{{ card.content }}</div>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>
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
  name: 'medicalRecordQualityControlWorkstation',
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
      items: [{
        name: "环节质控",
        items:
            [[{
              style: "pathological-examination",
              title: "病例检查",
              content: "环节质控/对医生所写文档进行监",
              onclick: "pathologicalExamination"
            }, {
              style: "implement-monitoring",
              title: "实现监控",
              content: "环节质控/对医生所写文档进行监",
              onclick: "implementMonitoring"
            }], [{
              style: "medical-record-quality-control-settings",
              title: "病例质控设置",
              content: "病例质控设置",
              onclick: "medicalRecordQualityControlSettings"
            }, {
              style: "statistics-of-scoring-quantity",
              title: "评分数量统计",
              content: "评分数量统计",
              onclick: "statisticsOfScoringQuantity"
            }]]
      }, {
        name: "终末质控",
        items: [[
          {
            style: "case-scoring-and-filing",
            title: "病例评分及归档",
            content: "终末质控/病力评分",
            onclick: "caseScoringAndFiling"
          }
        ]]
      }, {
        name: "核心质控",
        items: [[{
          style: "hospitalized-patients",
          title: "入院病人",
          content: "核心质控/质控当天入院病历",
          onclick: "hospitalizedPatients"
        }, {
          style: "car-critical",
          title: "危重",
          content: "核心质控/质控危重病人",
          onclick: "critical"
        }],
          [{
            style: "car-operation",
            title: "手术",
            content: "陔心质控/质控当天手术病人",
            onclick: "operation"
          }, {
            style: "car-death",
            title: "死亡",
            content: "核心质控/质控死亡病人病历",
            onclick: "death"
          }],
          [{
            style: "discharged-from-hospital",
            title: "出院",
            content: "核心质控/质控出院病人病历",
            onclick: "dischargedFromHospital"
          }, {
            style: "car-other",
            title: "其他",
            content: "核心质控/质控其他病人病历",
            onclick: "other"
          }],
          [{
            style: "templateQualityControl",
            title: "模版质控",
            content: "核心质控/病历系统模板的批复使",
            onclick: "templateQualityControl"
          }, {
            style: "small-template-quality-control",
            title: "小模版质控",
            content: "核心质控/病历系统小模板的批复",
            onclick: "smallTemplateQualityControl"
          }],
          [{
            style: "small-template-quality-control",
            title: "复杂元素质控",
            content: "核心质控/病历系统模板的批复使",
            onclick: "complexElementQualityControl"
          }, {
            style: "small-template-quality-control",
            title: "简单元素质控",
            content: "核心质控/病历系统小模板的批复",
            onclick: "simpleElementQualityControl"
          }],
        ]
      }]
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

