<template>
  <div>
    <div style="display: inline-block">
      <el-button type="info"><el-image class="imgwh" :src="reload"></el-image>刷新</el-button>
      <el-button type="info"><el-image class="imgwh" :src="patientsinfo"></el-image>患者信息</el-button>
      <el-button type="info"><el-image class="imgwh" :src="checkrecord"></el-image>查看病历 </el-button>
      <el-button type="info"><el-image class="imgwh" :src="receivepatient"></el-image>接收患者</el-button>

      <el-button type="info"><el-image class="imgwh" :src="checkall"></el-image>查找</el-button>

      <el-button type="info"><el-image class="imgwh" :src="close"></el-image>关闭</el-button>
    </div>
    <div>
      <el-table :data="griData">
        <el-table-column
          property=""
          label="患者状态"
          width="150"
        ></el-table-column>
        <el-table-column
          property=""
          label="病人ID"
          width="150"
        ></el-table-column>
        <el-table-column
          property=""
          label="患者姓名"
          width="150"
        ></el-table-column>
        <el-table-column
          property=""
          label="现住科室"
          width="150"
        ></el-table-column>
        <el-table-column
          property=""
          label="转住科室"
          width="150"
        ></el-table-column>
        <el-table-column
          property=""
          label="指定接收医生"
          width="150"
        ></el-table-column>
        <el-table-column
          property=""
          label="主管医生"
          width="150"
        ></el-table-column>
        <el-table-column
          property=""
          label="主治医生"
          width="150"
        ></el-table-column>
        <el-table-column property="" label="床号" width="150"></el-table-column>
        <el-table-column
          property=""
          label="入院日期"
          width="150"
        ></el-table-column>
        <el-table-column
          property=""
          label="病案号"
          width="150"
        ></el-table-column>
      </el-table>
    </div>

    <div>
      <span>工号:</span>
      <span class="spanspc">{{jobnumber}}</span>
      <span class="spanspc">姓名:</span>
      <span class="spanspc">{{username}}</span>
      <span class="spanspc">科室:</span>
      <span class="spanspc">{{department}}</span>
      <span class="spanspc">职称:</span>
      <span class="spanspc">{{title}}</span>
      <span class="spanspc">登录时间</span>
      <span class="spanspc">{{logintime}}</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {},
  data() {
    return {
      reload: require("../../../../assets/img/inpatient_medical_workstation/wait_patients_in/刷新.jpg"),
      patientsinfo: require("../../../../assets/img/inpatient_medical_workstation/wait_patients_in/患者查询.png"),
      checkrecord: require("../../../../assets/img/inpatient_medical_workstation/wait_patients_in/病历文档统计.png"),
      receivepatient: require("../../../../assets/img/inpatient_medical_workstation/wait_patients_in/search1.jpg"),
      checkall: require("../../../../assets/img/inpatient_medical_workstation/wait_patients_in/21.jpg"),
      close: require("../../../../assets/img/inpatient_medical_workstation/wait_patients_in/关闭.jpg"),
    };
  },
};
</script>

<style scoped>
.imgwh{
  width: 25px;
  height: 25px;
}
.spanspc{
  margin-left: 15px;
}
</style>