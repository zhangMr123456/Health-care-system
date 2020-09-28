<template>
    <div>
        <div style="display: inline-flex">
            <div class="departandnum">
                <div>
                    <span>科 &nbsp;&nbsp; 室:</span>
                    <el-select v-model="value" placeholder="所有科室">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                    </el-select>
                </div>
                <div>
                    <span>住院号:</span>
                    <el-input v-model="input" placeholder="请输入住院号" style="width: 215px"></el-input>
                </div>
            </div>
            <div class="btnsearch">
                <el-button type="info" style="height: 64px" icon="el-icon-search">查询</el-button>
            </div>
            <div style="height: 64px; width: 1150px">
                <el-radio v-model="radio" style="margin-top: 2%" label="">只显示我的病人</el-radio>
                <el-button type="info" class="btnclose" style="height: 64px" icon="el-icon-switch-button">关闭</el-button>
                <el-button type="info" class="btnsetup" style="height: 64px" icon="el-icon-setting">变异原因设置</el-button>
                <el-button type="info" class="btnexport" style="height: 64px" icon="el-icon-document-copy">导出</el-button>
                <el-button type="info" class="btnpreview" style="height: 64px" icon="el-icon-view">预览</el-button>
                <el-button type="info" class="btnprinting" style="height: 64px" icon="el-icon-printer">打印</el-button>
            </div>
        </div>
        <div class="tab">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="[当前在院]路径患者列表" name="first">
                    <el-button type="info" icon="el-icon-circle-close">变异退出</el-button>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="bedNum" label="床号"> </el-table-column>
                        <el-table-column prop="admissionNum" label="住院号"> </el-table-column>
                        <el-table-column prop="name" label="姓名"> </el-table-column>
                        <el-table-column prop="gender" label="性别"> </el-table-column>
                        <el-table-column prop="age" label="年龄"> </el-table-column>
                        <el-table-column prop="ward" label="所在病区"> </el-table-column>
                        <el-table-column prop="attendDoc" label="主治医生"> </el-table-column>
                        <el-table-column prop="admissionTime" label="入院时间"> </el-table-column>
                        <el-table-column prop="enterPathTime" label="进入路径日期"> </el-table-column>
                        <el-table-column prop="pathName" label="路径名称"> </el-table-column>
                        <el-table-column prop="currentStage" label="当前阶段"> </el-table-column>
                    </el-table>
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400"
                    >
                    </el-pagination>
                </el-tab-pane>

                <el-tab-pane label="变异退出患者列表" name="second">
                    <span>变异退出日期:</span>
                    <el-date-picker
                        v-model="value1"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                    >
                    </el-date-picker>
                    <el-radio v-model="radio" label="1">所有审批</el-radio>
                    <el-radio v-model="radio" label="2">特殊审批</el-radio>
                    <el-radio v-model="radio" label="3">非特殊审批</el-radio>
                    <el-button type="info" icon="el-icon-search">查询</el-button>
                    <el-button type="info" icon="el-icon-delete">撤销变异退出</el-button>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="bedNum" label="床号"> </el-table-column>
                        <el-table-column prop="admissionNum" label="住院号"> </el-table-column>
                        <el-table-column prop="name" label="姓名"> </el-table-column>
                        <el-table-column prop="gender" label="性别"> </el-table-column>
                        <el-table-column prop="age" label="年龄"> </el-table-column>
                        <el-table-column prop="ward" label="所在病区"> </el-table-column>
                        <el-table-column prop="attendDoc" label="主治医生"> </el-table-column>
                        <el-table-column prop="admissionTime" label="入院时间"> </el-table-column>
                        <el-table-column prop="enterPathTime" label="进入路径日期"> </el-table-column>
                        <el-table-column prop="pathName" label="路径名称"> </el-table-column>
                        <el-table-column prop="exitPhaseMutation" label="变异退出时阶段"> </el-table-column>
                        <el-table-column prop="exitDateMutation" label="变异退出时日期"> </el-table-column>
                    </el-table>
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400"
                    >
                    </el-pagination>
                </el-tab-pane>

                <el-tab-pane label="禁止导入路径患者列表" name="third">
                    <span>变异退出日期:</span>
                    <el-date-picker
                        v-model="value1"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                    >
                    </el-date-picker>
                    <el-button type="info" icon="el-icon-search">查询</el-button>
                    <el-button type="info" icon="el-icon-delete">撤销禁止导入</el-button>

                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="admissionNum" label="住院号"> </el-table-column>
                        <el-table-column prop="name" label="姓名"> </el-table-column>
                        <el-table-column prop="variationDate" label="变异日期"> </el-table-column>
                        <el-table-column prop="variationReason" label="变异原因"> </el-table-column>
                        <el-table-column prop="message" label="说明"> </el-table-column>
                        <el-table-column prop="operator" label="操作员"> </el-table-column>
                    </el-table>
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400"
                    >
                    </el-pagination>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    },
    data() {
        return {
            activeName: 'first', //默认打开该选项卡
            currentPage4: 4, //控制总页码
            options: [
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项2',
                    label: '双皮奶'
                },
                {
                    value: '选项3',
                    label: '蚵仔煎'
                },
                {
                    value: '选项4',
                    label: '龙须面'
                },
                {
                    value: '选项5',
                    label: '北京烤鸭'
                }
            ],
            value: '',
            input: ''
        };
    }
};
</script>
<style>
.btnclose,
.btnsetup,
.btnexport,
.btnpreview,
.btnprinting {
    float: right;
}
</style>