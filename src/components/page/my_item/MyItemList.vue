<template>
    <div class>
        <div class="tabs">
            <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="质控消息" name="messagequality">
                    <div id="messagequality">
                        <div class="block" id="messagelist">
                            <el-image class="imgwh"  :src="srcmesslist"></el-image>
                            <div>
                                <span class="tagging">消息列表</span>
                                <span class="messagecount"></span>
                            </div>
                        </div>
                        <div class="block divmargin" id="messagehandle">
                            <el-image  class="imgwh" :src="srcmesshandle"></el-image>
                            <div>
                                <span class="tagging">消息处理</span>
                                <span class="messagecount"></span>
                            </div>
                        </div>
                        <div class="block divmargin" id="messagemedical">
                            <el-image class="imgwh" :src="srcmedicaltrack"></el-image>
                            <div>
                                <span class="tagging">病历质量追踪</span>
                                <span class="messagecount"></span>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <el-tab-pane label="待办事项" name="waittodo">
                    <div id="waittodo">
                        <div class="block" id="writedocument">
                            <el-image class="imgwh" :src="srcwrite"></el-image>
                            <div>
                                <span class="tagging">急需书写文档</span>
                                <span class="waitcount"></span>
                            </div>
                        </div>
                        <div class="block divmargin" id="submitdocument">
                            <el-image class="imgwh" :src="srcwait"></el-image>
                            <div>
                                <span class="tagging">待提交文档</span>
                                <span class="waitcount"></span>
                            </div>
                        </div>
                        <div class="block divmargin" id="signdocument">
                            <el-image class="imgwh" :src="srcsign"></el-image>
                            <div>
                                <span class="tagging">待签字文档</span>
                                <span class="waitcount"></span>
                            </div>
                        </div>
                        <div class="block divmargin" id="mysigndocument">
                            <el-image class="imgwh" :src="srcmysign"></el-image>
                            <div>
                                <span class="tagging">需要我签字文档</span>
                                <span class="waitcount"></span>
                            </div>
                        </div>
                        <div class="block divmargin" id="nursingtable">
                            <el-image class="imgwh" :src="srcnurs"></el-image>
                            <div>
                                <span class="tagging">护理报表</span>
                            </div>
                        </div>
                        <div class="block divmargin" id="hospitalregister">
                            <el-image class="imgwh" :src="srchosreg"></el-image>
                            <div>
                                <span class="tagging">出入院登记</span>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <el-tab-pane label="即时消息" name="instantmessage">
                    <div id="instantmessage">
                        <div class="block" id="invitedconsultation">
                            <el-image class="imgwh" :src="srcinvit"></el-image>
                            <div>
                                <span class="tagging">应邀会诊</span>
                                <span class="messagecount"></span>
                            </div>
                        </div>
                        <div class="block divmargin" id="applyconsultation">
                            <el-image class="imgwh" :src="srcapplycon"></el-image>
                            <div>
                                <span class="tagging">会诊科室申请</span>
                                <span class="messagecount"></span>
                            </div>
                        </div>
                        <div class="block divmargin" id="waitinto">
                            <el-image class="imgwh" :src="srcwaitinto"></el-image>
                            <div>
                                <span class="tagging">转科待转入</span>
                                <span class="messagecount"></span>
                            </div>
                        </div>
                        <div class="block divmargin" id="waitout">
                            <el-image class="imgwh" :src="srcwaitout"></el-image>
                            <div>
                                <span class="tagging">转科待转出</span>
                                <span class="messagecount"></span>
                            </div>
                        </div>
                        <div class="block divmargin" id="submitedmedical">
                            <el-image class="imgwh" :src="srcsubmedi"></el-image>
                            <div>
                                <span class="tagging">病历已提交</span>
                                <span class="messagecount"></span>
                            </div>
                        </div>
                        <div class="block divmargin" id="approvalmedicaladopt">
                            <el-image class="imgwh" :src="srcapprovaladopt"></el-image>
                            <div>
                                <span class="tagging">病历已通过审批</span>
                                <span class="messagecount"></span>
                            </div>
                        </div>
                        <div class="block divmargin" id="approvalmedicalfailed">
                            <el-image class="imgwh" :src="srcapprovalfail"></el-image>
                            <div>
                                <span class="tagging">病历未通过审批</span>
                                <span class="messagecount"></span>
                            </div>
                        </div>
                        <div class="block divmargin" id="rescueunconfirmed">
                            <el-image class="imgwh" :src="srcrescue"></el-image>
                            <div>
                                <span class="tagging">抢救患者未确认</span>
                                <span class="messagecount"></span>
                            </div>
                        </div>
                        <div class="block divmargin" id="criticalunconfirmed">
                            <el-image class="imgwh" :src="srccritical"></el-image>
                            <div>
                                <span class="tagging">危重患者未确认</span>
                                <span class="messagecount"></span>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <el-tab-pane label="常用操作" name="commonoperations">
                    <div id="commonoperations">
                        <div class="block" id="entrustsign">
                            <el-image class="imgwh" :src="srcentrust"></el-image>
                            <div>
                                <span class="tagging">委托签字</span>
                            </div>
                        </div>
                        <div class="block divmargin" id="changeshifts">
                            <el-image class="imgwh" :src="srcchange"></el-image>
                            <div>
                                <span class="tagging">交接班</span>
                            </div>
                        </div>
                        <div class="block divmargin" id="30daysnotdischarged">
                            <el-image class="imgwh" :src="src30"></el-image>
                            <div>
                                <span class="tagging">30天未出院患者</span>
                                <span class="messagecount"></span>
                            </div>
                        </div>
                        <div class="block divmargin" id="telfollow">
                            <el-image class="imgwh" :src="srctelfol"></el-image>
                            <div>
                                <span class="tagging">电话随访</span>
                            </div>
                        </div>
                        <div class="block divmargin" id="telfollowcensus">
                            <el-image class="imgwh" :src="srctelfolcen"></el-image>
                            <div>
                                <span class="tagging">电话随访统计</span>
                            </div>
                        </div>
                        <div class="block divmargin" id="outpatientmedical">
                            <el-image class="imgwh" :src="srcoutmed"></el-image>
                            <div>
                                <span class="tagging">门诊病历</span>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'messagequality',
            srcmesslist: 'static/img/待提交文档.png',
            srcmesshandle: 'static/img/质控已确认.png',
            srcmedicaltrack: '/static/img/护理排班.png',
            srcwrite: '/static/img/急需书写文档.png',
            srcwait: 'static/img/待提交文档.png',
            srcsign: '/static/img/待签字文档.png',
            srcmysign: '/static/img/护理排班.png',
            srcnurs: 'static/img/待提交文档.png',
            srchosreg: '/static/img/病历已提交.png',
            srcinvit: '/static/img/应邀会诊.png',
            srcapplycon: '/static/img/会诊科室申请.png',
            srcwaitinto: '/static/img/待转入患者.png',
            srcwaitout: '/static/img/待转出患者.png',
            srcsubmedi: '/static/img/病历已提交.png',
            srcapprovaladopt: '/static/img/病历已通过审批.png',
            srcapprovalfail: '/static/img/病历未通过审批.png',
            srcrescue: '/static/img/护理排班.png',
            srccritical: '/static/img/护理排班.png',
            srcentrust: '/static/img/委托签字.png',
            srcchange: '/static/img/交接班.png',
            src30: '/static/img/30天未出院患者.png',
            srctelfol: '/static/img/知识采集库.png',
            srctelfolcen: '/static/img/知识采集库.png',
            srcoutmed: '/static/img/护理排班.png'
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
};
</script>

<style scoped>
.block {
    display: inline-block;
    text-align: center;
}
.divmargin{
    margin-left: 50px;
}
.tagging {
    font-size: 10px;
}
.imgwh{
    width: 70px;
    height: 70px;
}
</style>