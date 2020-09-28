<template>
    <div>
        <div class="btncli">
            <el-button type="info"  ><el-image class="imgwh" :src="borrowread"></el-image> 申请借阅</el-button>
            <el-button type="info" class="btnclichild"><el-image class="imgwh" :src="checkrecord"></el-image>查看病历</el-button>
            <el-button type="info" class="btnclichild"><el-image class="imgwh" :src="notapply"></el-image>取消申请</el-button>
            <el-button type="info" class="btnclichild"><el-image class="imgwh" :src="updateapply"></el-image>修改申请</el-button>
            <el-button type="info" class="btnclichild"><el-image class="imgwh" :src="close"></el-image>关闭</el-button>
        </div>
        <div class="radiocheck">
            <el-radio v-model="radio" style="margin-top:1%" label="1">全部</el-radio>
            <el-radio v-model="radio" class="radiocheckchild" label="">申请查阅</el-radio>
            <el-radio v-model="radio" class="radiocheckchild" label="">申请反归档</el-radio>
        </div>
        <div class="datecheck">
            <span >申请时间:</span>
            <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholde="开始日期"
                end-placeholde="结束日期"
                class="datechecktime"
                
            >
            </el-date-picker>
            <span class="datechecktime">患者姓名:</span>
            <el-input v-model="input" placeholder="请输入患者姓名" style="width: 10%" class="datechecktime"></el-input>
            <el-button class="datechecktime">查询</el-button>
        </div>
        <div class="btnsel">
            <el-button >已提交</el-button>
            <el-button class="btnselchild">已通过审批</el-button>
            <el-button class="btnselchild">未通过审批</el-button>
        </div>
        <div class="seltable">
            <el-table :data="applytable" style="width: 100%">
                <el-table-column prop="" label="申请时间" width="180px"></el-table-column>
                <el-table-column prop="" label="已通过审批" width="180px"></el-table-column>
                <el-table-column prop="" label="未通过审批" width="180px"></el-table-column>
            </el-table>
        </div>
        <div class="detailtable">
            <span>详细信息</span>
            <el-table :data="detailtable" style="width: 100%">
                <el-table-column prop="" label="归档年度" width="180px"></el-table-column>
                <el-table-column prop="" label="病人ID" width="180px"></el-table-column>
                <el-table-column prop="" label="姓名" width="180px"></el-table-column>
                <el-table-column prop="" label="申请状态" width="180px"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            radio: '1',
            input: '',
            value1: '',
            borrowread: require('../../../../assets/img/inpatient_medical_workstation//medical_record/病案借阅.png'),
            checkrecord: require('../../../../assets/img/inpatient_medical_workstation/medical_record/病历归档率统计.png'),
            notapply: require('../../../../assets/img/inpatient_medical_workstation/medical_record/病历未通过审批.png'),
            updateapply: require('../../../../assets/img/inpatient_medical_workstation/medical_record/病案编辑.png'),
            close: require('../../../../assets/img/inpatient_medical_workstation/medical_record/关闭.jpg')
        };
    }
};
</script>

<style scoped>
.imgwh{
  width: 35px;
  height: 30px;
}
.datechecktime,.btnclichild ,.selchild{
  margin-left: 0.5%;
}
.btncli,.radiocheck,.datecheck,.btnsel,.seltable,.detailtable{
  height: 45px;
}
</style>