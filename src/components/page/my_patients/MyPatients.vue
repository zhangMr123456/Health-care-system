<template>
    <div>
        <el-select v-model="value" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            ></el-option>
        </el-select>
        <!-- label待看数据具体状态 -->
        <el-radio v-model="radio" label="1" style="margin-left:1%">在院</el-radio>       
        <el-radio v-model="radio" label="2">出院</el-radio>
        <el-radio v-model="radio" label="3">腕感</el-radio>
        <el-radio v-model="radio" label="4">进入路径</el-radio>
        <el-radio v-model="radio" label="5">危急</el-radio>
        <el-radio v-model="radio" label="6">入院3天内</el-radio>
        
        <el-button type="success">感染监测</el-button>
        <el-button type="info">上一页</el-button>
        <el-button type="info">下一页</el-button>

        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
    </div>

</template>

<script>
export default {
  name:"MyPatients",
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ],
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
            radio: '1'
        };
    }
};
</script>