import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/MyPatients'
        },
        {
            path: '/',
            component: () =>
                import ( /* webpackChunkName: "dashboard" */ '../components/page/my_patients/MyPatients.vue'),
            meta: {title: '我的患者'},
            children: [{
                path: '/MyPatients',
                component: () =>
                    import ( /* webpackChunkName: "dashboard" */ '../components/page/my_patients/MyPatients.vue'),
                meta: {title: '我的患者'}
            }, {
                path: '/medicalAnesthesia',
                component: () =>
                    import ( /* webpackChunkName: "icon" */ '../components/page/medical_anesthesia/MedicalAnesthesia.vue'),
                meta: {title: '医技麻醉工作站'}
            }, {
                path: '/ClinicalPathway',
                component: () => import(/* webpackChunkName: "form" */ '../components/page/clinical_pathway/ClinicalPathway.vue'),
                meta: {title: '临床路径'}
            }, {
                path: '/ClinicalPathwaySetting',
                component: () => import(/* webpackChunkName: "form" */ '../components/page/clinical_pathway_setting/ClinicalPathwaySetting.vue'),
                meta: {title: '临床路径设置'}
            }, {
                path: '/TemplateMaintenance',
                component: () => import(/* webpackChunkName: "form" */ '../components/page/template_maintenance/TemplateMaintenance.vue'),
                meta: {title: '模版维护'}
            }, {
                path: '/MedicalDatabases',
                component: () => import(/* webpackChunkName: "form" */ '../components/page/medical_database/MedicalDatabases.vue'),
                meta: {title: '医学资料库'}
            }, {
                path: '/MyItemList',
                component: () =>
                    import ( /* webpackChunkName: "table" */ '../components/page/my_item/MyItemList.vue'),
                meta: {title: '我的待办事项'}
            }, {
                path: '/inpatientMedicalWorkstation',
                component: () => import(/* webpackChunkName: "tabs" */ '../components/page/inpatient_medical_workstation/InpatientMedicalWorkstation.vue'),
                meta: {title: '住院医护工作站'}
            }, {
                path: '/hospitalConsultationWorkstation',
                component: () => import(/* webpackChunkName: "form" */ '../components/page/hospital_consultation/HospitalConsultationWorkstation.vue'),
                meta: {title: '院内会诊工作站'}
            }, {
                // 拖拽列表组件
                path: '/medicalRecordLending',
                component: () => import(/* webpackChunkName: "drag" */ '../components/page/medical_record_lending/MedicalRecordLending.vue'),
                meta: {title: '病案借阅'}
            }, {
                // 拖拽Dialog组件
                path: '/medicalRecordQualityControlWorkstation',
                component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/hospital_medical_record_quality_control/MedicalRecordQualityControlWorkstation.vue'),
                meta: {title: '病例质控工作站'}
            }, {
                // 医疗质量管理系统
                path: '/medicalQualityManagementSystem',
                component: () =>
                    import ( /* webpackChunkName: "dragdialog" */ '../components/page/medical_quality_management_system/MedicalQualityManagementSystem.vue'),
                meta: {title: '医疗质量管理系统'}
            }, {
                path: '/reportStatistics',
                component: () =>
                    import ( /* webpackChunkName: "donate" */ '../components/page/hospital_statistical_reports/ReportStatistics.vue'),
                meta: {title: '报表统计工作站'}
            }, {
                path: '/systemMaintenance',
                component: () => import(/* webpackChunkName: "donate" */ '../components/page/system_maintenance/SystemMaintenance.vue'),
                meta: {title: '系统维护'}
            }, {
                path: '/404',
                component: () =>
                    import ( /* webpackChunkName: "404" */ '../components/page/404.vue'),
                meta: {title: '404'}
            }, {
                path: '/403',
                component: () =>
                    import ( /* webpackChunkName: "403" */ '../components/page/403.vue'),
                meta: {title: '403'}
            },

            ]
        },
        {
            path: '/login',
            component: () =>
                import ( /* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: {title: '登录'}
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
