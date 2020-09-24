<template>
  <div class="sidebar">
    <el-menu
        class="sidebar-el-menu"
        :default-active="onRoutes"
        :collapse="collapse"
        background-color="#324157"
        text-color="#bfcbd9"
        active-text-color="#20a0ff"
        unique-opened
        router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                  v-if="subItem.subs"
                  :index="subItem.index"
                  :key="subItem.index"
              >
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                    v-for="(threeItem,i) in subItem.subs"
                    :key="i"
                    :index="threeItem.index"
                >{{ threeItem.title }}
                </el-menu-item>
              </el-submenu>
              <el-menu-item
                  v-else
                  :index="subItem.index"
                  :key="subItem.index"
              >{{ subItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from '../common/bus';

export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: 'el-icon-lx-home',
          index: 'MyPatients',
          title: '我的患者'
        },
        {
          icon: 'el-icon-lx-cascades',
          index: 'MyItemList',
          title: '我的代办事项'
        },
        {
          icon: 'el-icon-lx-copy',
          index: '/inpatientMedicalWorkstation',
          title: '住院医护工作站'
        },
        {
          icon: 'el-icon-lx-calendar',
          index: '/hospitalConsultationWorkstation',
          title: '院内会诊工作站'
        },
        {
          icon: 'el-icon-lx-emoji',
          index: '/medicalAnesthesia',
          title: '医技麻醉工作站'
        },
        {
          icon: 'el-icon-pie-chart',
          index: 'ClinicalPathway',
          title: '临床路径'
        },
        {
          icon: 'el-icon-rank',
          index: 'ClinicalPathwaySetting',
          title: '临床路径设置'
        },
        {
          icon: 'el-icon-lx-global',
          index: 'TemplateMaintenance',
          title: '模板维护'
        },
        {
          icon: 'el-icon-lx-warn',
          index: 'medicalRecordLending',
          title: '病案借阅'
        },
        {
          icon: 'el-icon-lx-redpacket_fill',
          index: '/medicalRecordQualityControlWorkstation',
          title: '病历质控工作站'
        },
        {
          icon: 'el-icon-lx-redpacket_fill',
          index: '/MedicalDatabases',
          title: '医学资料库'
        },
        {
          icon: 'el-icon-lx-redpacket_fill',
          index: '/systemMaintenance',
          title: '系统维护'
        },
        {
          icon: 'el-icon-lx-redpacket_fill',
          index: '/medicalQualityManagementSystem',
          title: '医疗质量管理系统'
        },
        {
          icon: 'el-icon-lx-redpacket_fill',
          index: '/reportStatistics',
          title: '报表统计工作站'
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '');
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on('collapse', msg => {
      this.collapse = msg;
      bus.$emit('collapse-content', msg);
    });
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}

.sidebar > ul {
  height: 100%;
}
</style>
