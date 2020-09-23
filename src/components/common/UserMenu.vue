<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu"
             :collapse="collapse"
             background-color="#324157"
             text-color="#bfcbd9"
             active-text-color="#20a0ff"
             unique-opened
             router>
      <template class="user-menu">
        <!-- 用户头像 -->
        <div class="user-avator " :class="{'user-collapse':collapse}">
          <img class="user-img " :class="{'user-collapse-img':collapse}" src="../../assets/img/img.jpg" alt=""/>
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{ username }}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
          <el-dropdown-menu slot="dropdown">
            <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
              <el-dropdown-item>项目仓库</el-dropdown-item>
            </a>
            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>

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
          index: 'dashboard',
          title: '我的签字文档'
        },
        {
          icon: 'el-icon-lx-cascades',
          index: 'table',
          title: '委托签字'
        },
        {
          icon: 'el-icon-lx-copy',
          index: 'tabs',
          title: '选择科室'
        },
        {
          icon: 'el-icon-lx-calendar',
          index: '3',
          title: '更改密码'
        },
        {
          icon: 'el-icon-lx-emoji',
          index: 'icon',
          title: '值班医生'
        },
        {
          icon: 'el-icon-rank',
          index: '6',
          title: '最近打开文档',
          subs: [
            {
              index: 'drag',
              title: '拖拽列表'
            },
            {
              index: 'dialog',
              title: '拖拽弹框'
            }
          ]
        }
      ]
    };
  },
  computed: {
    username() {
      let username = localStorage.getItem('ms_username');
      return username ? username : this.name;
    },
    onRoutes() {
      return this.$route.path.replace('/', '');
    }

  },
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if (command == 'loginout') {
        localStorage.removeItem('ms_username');
        this.$router.push('/login');
      }
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
  right: 0;
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

.user-name {
  margin-left: 90px;
}

.user-avator {
  margin-left: 85px;
  margin-top: 60px;
}

.user-collapse {
  margin-left: 7px;
  margin-top: 30px;
}


.user-menu {
}

.user-img {
  display: block;
  width: 75px;
  height: 75px;
  border-radius: 50%;
}

.user-collapse-img {
  width: 50px;
  height: 50px;
}

.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}

.el-dropdown-menu__item {
  text-align: center;
}
</style>
