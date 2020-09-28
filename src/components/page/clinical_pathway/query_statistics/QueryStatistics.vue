<template>
    <div style="height:600px">
        <div class="headerdrop">
            <el-dropdown class="pathmonitor">
                <span class="el-dropdown-link"> 路径监控<i class="el-icon-arrow-down el-icon--right"></i> </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item >在院人员监控</el-dropdown-item>
                    <el-dropdown-item >进出路径监控</el-dropdown-item>
                    <el-dropdown-item >路径明细变异查询</el-dropdown-item>
                    <el-dropdown-item >电子病历入院诊断查询</el-dropdown-item>
                    <el-dropdown-item >HIS病种诊断查询</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <el-dropdown class="pathcensus">
                <span class="el-dropdown-link"> 路径统计<i class="el-icon-arrow-down el-icon--right"></i> </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item >路径使用统计</el-dropdown-item>
                    <el-dropdown-item >路径变异统计</el-dropdown-item>
                    <el-dropdown-item >路径治愈率统计</el-dropdown-item>
                    <el-dropdown-item >路径明细变异统计</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <el-dropdown class="Indicatorscensus">
                <span class="el-dropdown-link"> 指标统计<i class="el-icon-arrow-down el-icon--right"></i> </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item >工作指标</el-dropdown-item>
                    <el-dropdown-item >效率指标</el-dropdown-item>
                    <el-dropdown-item >效果指标</el-dropdown-item>
                    <el-dropdown-item >卫生经济学指标</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <el-dropdown class="alltable">
                <span class="el-dropdown-link"> 综合报表<i class="el-icon-arrow-down el-icon--right"></i> </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus">指标综合统计</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">上报报表数据</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus-outline">临床路径检测指标</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-check">临床科室临床路径开展情况统计表</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-check">临床科室单病种质量指标评估统计表</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-check">指标综合统计(结合统计工具)</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
<div></div>
    </div>
</template>