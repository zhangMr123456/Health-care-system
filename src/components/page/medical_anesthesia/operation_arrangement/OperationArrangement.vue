<template>
    <div>
        <div class="btntopclass">
            <el-button type="primary"  icon="el-icon-circle-plus-outline">增加</el-button>
            <el-button type="primary" class="btntop" icon="el-icon-edit">修改</el-button>
            <el-button type="primary" class="btntop" icon="el-icon-delete">删除</el-button>
            <el-button type="primary" class="btntop" icon="el-icon-printer">打印</el-button>
            <el-button type="primary" class="btntop" icon="el-icon-upload2">导出</el-button>
            <el-button type="primary" class="btntop" icon="el-icon-circle-close">关闭</el-button>
        </div>
        <div class="dataclass">
            <span >手术开始日期:</span>
            <el-date-picker v-model="value1" class="choicedate" type="date" placeholder="选择日期"> </el-date-picker>
            <span class="choicedate">手术结束日期:</span>
            <el-date-picker v-model="value1" class="choicedate" type="date" placeholder="选择日期"> </el-date-picker>
            <el-button class="choicedate">查询</el-button>
        </div>
        <div class="tableclass">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="" label="病区(科室)" width="180"> </el-table-column>
                <el-table-column prop="" label="通知时间" width="180"> </el-table-column>
                <el-table-column prop="" label="手术时间" width="180"> </el-table-column>
                <el-table-column prop="" label="手术间" width="180"> </el-table-column>
                <el-table-column prop="" label="手术台次" width="180"> </el-table-column>
                <el-table-column prop="" label="手术等级" width="180"> </el-table-column>
                <el-table-column prop="" label="患者姓名" width="180"> </el-table-column>
                <el-table-column prop="" label="性别" width="180"> </el-table-column>
                <el-table-column prop="" label="年龄" width="180"> </el-table-column>
                <el-table-column prop="" label="床号" width="180"> </el-table-column>
                <el-table-column prop="" label="住院号" width="180"> </el-table-column>
                <el-table-column prop="" label="诊断" width="180"> </el-table-column>
                <el-table-column prop="" label="逆施手术" width="180"> </el-table-column>
                <el-table-column prop="" label="一助" width="180"> </el-table-column>
                <el-table-column prop="" label="二助" width="180"> </el-table-column>                
                <el-table-column prop="" label="三助" width="180"> </el-table-column>       
                <el-table-column prop="" label="麻醉方法" width="180"> </el-table-column>       
                <el-table-column prop="" label="麻醉者" width="180"> </el-table-column>       
                <el-table-column prop="" label="传染病指标" width="180"> </el-table-column>       
                <el-table-column prop="" label="器械" width="180"> </el-table-column>       
                <el-table-column prop="" label="巡回" width="180"> </el-table-column>       
                <el-table-column prop="" label="手术费" width="180"> </el-table-column>
                <el-table-column prop="" label="麻醉费" width="180"> </el-table-column>
                <el-table-column prop="" label="备注" width="180"> </el-table-column>
            </el-table>
            <span >
                用户:
            </span>
            <span class="spanbottom">
                {{user}}
            </span>
            <span class="spanbottom">
                科室:
            </span>
            <span class="spanbottom">
                {{medicalskill}}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value1: '',
            user:'',
            medicalskill:''
        };
    }
};
</script>

<style scoped>
.btntopclass,.dataclass,.tableclass{
    height: 45px;
}
.btntop,.choicedate,.spanbottom{
    margin-left: 0.5%;
}
</style>