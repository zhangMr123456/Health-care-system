<template>
    <div>
        <div>
            <div>
                <p>
                    <span>科&nbsp;&nbsp;&nbsp; 室:</span>
                    <el-select v-model="value" placeholder="所有科室" style="margin-left:0.5%">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                    </el-select>
                </p>
                <p>
                    <span style="width: 48px; height: 20px; ">住院号:</span>
                    <el-input v-model="input" placeholder="请输入内容" style="width: 215px;margin-left:0.5%"></el-input>
                </p>
                <p>
                    <span style="width: 40px; height: 20px;">姓&nbsp;&nbsp;&nbsp; 名:</span>
                    <el-input v-model="input" style="width: 215px;margin-left:0.5%" placeholder="请输入内容"></el-input>
                </p>
            </div>
            <div>
                <p>
                <el-radio v-model="radio" label="1">未进入路径 在院患者</el-radio>
                </p>
                <p>
                <el-radio v-model="radio" label="2">已进入路径 患者</el-radio>
                </p>
                <p>
                <el-radio v-model="radio" label="3">已退出路径 患者</el-radio>
                </p>
            </div>
            <div>
                <el-button type="info" icon="el-icon-search">查询</el-button>
                <el-button type="info" icon="el-icon-edit">修改信息</el-button>
                <el-button type="info" icon="el-icon-download">导入</el-button>
                <el-button type="info" icon="el-icon-close">禁止导入</el-button>
                <el-button type="info" icon="el-icon-switch-button">关闭</el-button>
            </div>
        </div>
        <div>
            <el-table :data="tablePath" style="width: 100%">
                <el-table-column prop="admissionNum" label="住院号"> </el-table-column>
                <el-table-column prop="name" label="姓名"> </el-table-column>
                <el-table-column prop="gender" label="性别"> </el-table-column>
                <el-table-column prop="birthday" label="出生日期"> </el-table-column>
                <el-table-column prop="age" label="年龄"> </el-table-column>
                <el-table-column prop="feeType" label="费用类型"> </el-table-column>
                <el-table-column prop="admissionDate" label="入院日期"> </el-table-column>
                <el-table-column prop="bedNum" label="床位号"> </el-table-column>
            </el-table>
        </div>
        <div>
            <div>
                <el-table :data="diagnostician" style="width: 65%">
                    <el-table-column prop="diagnosisType" label="诊断类型"> </el-table-column>
                    <el-table-column prop="diagnostician" label="诊断医生"> </el-table-column>
                    <el-table-column prop="diagnosisContent" label="诊断内容"> </el-table-column>
                </el-table>
            </div>
            <div>
                <el-table :data="lowerRight" style="width: 35%">
                    <el-table-column prop="diagnosisType" label="诊断类型"> </el-table-column>
                    <el-table-column prop="diagnostician" label="诊断医生"> </el-table-column>
                    <el-table-column prop="diagnosisContent" label="诊断内容"> </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            radio: '1',
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
            value: ''
        };
    }
};
</script>
