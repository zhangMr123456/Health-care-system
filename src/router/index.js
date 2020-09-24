import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () =>
                import ( /* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: {title: '自述文件'},
            children: [{
                    path: '/MyPatients',
                    component: () =>
                        import ( /* webpackChunkName: "dashboard" */ '../components/page/my_patients/MyPatients.vue'),
                    meta: {title: '我的患者'}
                },
                {
                    path: '/textdadadsc',
                    component: () =>
                        import ( /* webpackChunkName: "icon" */ '../components/page/inpatient_medical_workstation/child_pages/online_patient_list.vue'),
                    meta: {title: '自定义图标'}
                },
                {
                    path: '/icon',
                    component: () =>
                        import ( /* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                    meta: {title: '自定义图标'}
                },
                {
                    path: '/MyItemList',
                    component: () =>
                        import ( /* webpackChunkName: "table" */ '../components/page/my_item/MyItemList.vue'),
                    meta: {title: '我的待办事项'}
                },
                {
                    path: '/inpatientMedicalWorkstation',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/inpatient_medical_workstation/InpatientMedicalWorkstation.vue'),
                    meta: {title: '住院医护工作站'}
                },
                {
                    path: '/hospitalConsultationWorkstation',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/hospital_consultation/HospitalConsultationWorkstation.vue'),
                    meta: {title: '院内会诊工作站'}
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: () =>
                        import ( /* webpackChunkName: "editor" */ '../components/page/VueEditor.vue'),
                    meta: {title: '富文本编辑器'}
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: () =>
                        import ( /* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
                    meta: {title: 'markdown编辑器'}
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: () =>
                        import ( /* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
                    meta: {title: '文件上传'}
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: () =>
                        import ( /* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
                    meta: {title: 'schart图表'}
                },
                {
                    // 拖拽列表组件
                    path: '/medicalRecordLending',
                    component: () => import(/* webpackChunkName: "drag" */ '../components/page/medical_record_lending/MedicalRecordLending.vue'),
                    meta: {title: '病案借阅'}
                },
                {
                    // 拖拽Dialog组件
                    path: '/medicalRecordQualityControlWorkstation',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/hospital_medical_record_quality_control/MedicalRecordQualityControlWorkstation.vue'),
                    meta: {title: '病例质控工作站'}
                },
                {
                    // 医疗质量管理系统
                    path: '/medicalQualityManagementSystem',
                    component: () =>
                        import ( /* webpackChunkName: "dragdialog" */ '../components/page/medical_quality_management_system/MedicalQualityManagementSystem.vue'),
                    meta: {title: '拖拽弹框'}
                },
                {
                    // 国际化组件
                    path: '/i18n',
                    component: () =>
                        import ( /* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
                    meta: {title: '国际化'}
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () =>
                        import ( /* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: {title: '权限测试', permission: true}
                },
                {
                    path: '/404',
                    component: () =>
                        import ( /* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: {title: '404'}
                },
                {
                    path: '/403',
                    component: () =>
                        import ( /* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: {title: '403'}
                },
                // {
                //     path: '/statistics-report',
                //     component: () =>
                //         import ( /* webpackChunkName: "donate" */ '../components/page/hospital_statistical_reports/ReportStatistics.vue'),
                //     meta: {title: '报表统计工作站'}
                // },
                {
                    path: '/statistics-report',
                    component: () =>
                        import ( /* webpackChunkName: "donate" */ '../components/page/hospital_statistical_reports/statistics_report.vue'),
                    meta: {title: '报表统计工作站'}
                },
                {
                    path: '/systemMaintenance',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/system_maintenance/SystemMaintenance.vue'),
                    meta: {title: '系统维护'}
                }
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
