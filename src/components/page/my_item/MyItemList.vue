<template>
    <div class="tabs">
        <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="质控消息" name="messagequality">
                <div class="myitem_messagequality">
                    <el-row :gutter="40" v-for="item in itemsfirst" :key="item.content">
                        <el-col :span="7" v-for="(cont, index) in item" :key="index">
                            <el-card shadow="hover" :body-style="{ padding: '0px' }">
                                <div class="grid-content" :class="cont.style" v-on:click="linkToDataInput(cont.title, cont.onclick)">
                                    <i class="grid-con-icon"></i>
                                    <div class="grid-cont-right">
                                        <div class="title grid-num">{{ cont.title }}</div>
                                        <div>{{ cont.content }}</div>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>


                </div>
            </el-tab-pane>

            <el-tab-pane label="待办事项" name="waittodo">
                <div class="myitem_waittodo">
                    <el-row :gutter="40" v-for="item in itemssecond" :key="item.content">
                        <el-col :span="7" v-for="(cont, index) in item" :key="index">
                            <el-card shadow="hover" :body-style="{ padding: '0px' }">
                                <div class="grid-content" :class="cont.style" v-on:click="linkToDataInput(cont.title, cont.onclick)">
                                    <i class="grid-con-icon"></i>
                                    <div class="grid-cont-right">
                                        <div class="title grid-num">{{ cont.title }}</div>
                                        <div>{{ cont.content }}</div>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>

                </div>
            </el-tab-pane>

            <el-tab-pane label="即时消息" name="instantmessage">
                <div class="myitem_instantmessage">
                    <el-row :gutter="40" v-for="item in itemthird" :key="item.content">
                        <el-col :span="7" v-for="(cont, index) in item" :key="index">
                            <el-card shadow="hover" :body-style="{ padding: '0px' }">
                                <div class="grid-content" :class="cont.style" v-on:click="linkToDataInput(cont.title, cont.onclick)">
                                    <i class="grid-con-icon"></i>
                                    <div class="grid-cont-right">
                                        <div class="title grid-num">{{ cont.title }}</div>
                                        <div>{{ cont.content }}</div>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>


                </div>
            </el-tab-pane>

            <el-tab-pane label="常用操作" name="commonoperations">
                <div class="myitem_commonoperations">
                    <el-row :gutter="40" v-for="item in itemfourth" :key="item.content">
                        <el-col :span="7" v-for="(cont, index) in item" :key="index">
                            <el-card shadow="hover" :body-style="{ padding: '0px' }">
                                <div class="grid-content" :class="cont.style" v-on:click="linkToDataInput(cont.title, cont.onclick)">
                                    <i class="grid-con-icon"></i>
                                    <div class="grid-cont-right">
                                        <div class="title grid-num">{{ cont.title }}</div>
                                        <div>{{ cont.content }}</div>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>

                </div>
            </el-tab-pane>
        </el-tabs>
        <el-dialog fullscreen :title="dialogName" :visible.sync="visible" width="80%">
            <component :is="current_window"> </component>
        </el-dialog>
    </div>
</template>

<script>
import '@/assets/css/tab.css';

export default {
    data() {
        return {
            visible: false,
            dialogName: '拖拽弹框',
            currentComponent: '',
            customer_id: '',
            current_window: null,
            itemsfirst: [
                [
                    {
                        style: 'myitem_messagelist',
                        title: '消息列表',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_messagehandle',
                        title: '消息处理',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_messagemedical',
                        title: '病历质量追踪',
                        content: '',
                        onclick: ''
                    }
                ]
            ],
            itemssecond: [
                [
                    {
                        style: 'myitem_writedocument',
                        title: '急需书写文档',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_submitdocument',
                        title: '待提交文档',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_signdocument',
                        title: '待签字文档',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_mysigndocument',
                        title: '需要我签字文档',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_nursingtable',
                        title: '护理报表',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_hospitalregister',
                        title: '出入院登记',
                        content: '',
                        onclick: ''
                    }
                ]
            ],
            itemthird: [
                [
                    {
                        style: 'myitem_invitedconsultation',
                        title: '应邀会诊',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_applyconsultation',
                        title: '会诊科室申请',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_waitinto',
                        title: '转科待转入',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_waitout',
                        title: '待转科转出',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_submitedmedical',
                        title: '病历已提交',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_approvalmedicaladopt',
                        title: '病历已通过审批',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_approvalmedicalfailed',
                        title: '病历未通过审批',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_rescueunconfirmed',
                        title: '抢救患者未确认',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_criticalunconfirmed',
                        title: '危重患者未确认',
                        content: '',
                        onclick: ''
                    }
                ]
            ],
            itemfourth: [
                [
                    {
                        style: 'myitem_entrustsign',
                        title: '委托签字',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_changeshifts',
                        title: '交接班',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_30daysnotdischarged',
                        title: '30天未出院患者',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_telfollow',
                        title: '电话随访',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_telfollowcensus',
                        title: '电话随访统计',
                        content: '',
                        onclick: ''
                    },
                    {
                        style: 'myitem_outpatientmedical',
                        title: '门诊病历',
                        content: '',
                        onclick: ''
                    }
                ]
            ],

            activeName: 'messagequality'
            // srcmesslist: require('../../../assets/img/my_item/待提交文档.png'),
            // srcmesshandle: require('../../../assets/img/my_item/质控已确认.png'),
            // srcmedicaltrack: require('../../../assets/img/my_item/护理排班.png'),
            // srcwrite: require('../../../assets/img/my_item/急需书写文档.png'),
            // srcwait: require('../../../assets/img/my_item/待提交文档.png'),
            // srcsign: require('../../../assets/img/my_item/待签字文档.png'),
            // srcmysign: require('../../../assets/img/my_item/护理排班.png'),
            // srcnurs: require('../../../assets/img/my_item/待提交文档.png'),
            // srchosreg: require('../../../assets/img/my_item/病历已提交.png'),
            // srcinvit: require('../../../assets/img/my_item/应邀会诊.png'),
            // srcapplycon: require('../../../assets/img/my_item/会诊科室申请.png'),
            // srcwaitinto: require('../../../assets/img/my_item/待转入患者.png'),
            // srcwaitout: require('../../../assets/img/my_item/待转出患者.png'),
            // srcsubmedi: require('../../../assets/img/my_item/病历已提交.png'),
            // srcapprovaladopt: require('../../../assets/img/my_item/病历已通过审批.png'),
            // srcapprovalfail: require('../../../assets/img/my_item/病历未通过审批.png'),
            // srcrescue: require('../../../assets/img/my_item/护理排班.png'),
            // srccritical: require('../../../assets/img/my_item/护理排班.png'),
            // srcentrust: require('../../../assets/img/my_item/委托签字.png'),
            // srcchange: require('../../../assets/img/my_item/交接班.png'),
            // src30: require('../../../assets/img/my_item/30天未出院患者.png'),
            // srctelfol: require('../../../assets/img/my_item/知识采集库.png'),
            // srctelfolcen: require('../../../assets/img/my_item/知识采集库.png'),
            // srcoutmed: require('../../../assets/img/my_item/护理排班.png')
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