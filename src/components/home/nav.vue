<template>
  <div id="nav">
    <div id="nav-url">
      <!-- <i class="el-icon-s-fold"></i> -->
      <div class="" @click="collapse">
        <i :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold','collapse']"></i>
      </div>
      <div><span> 首页</span></div>
      <div v-show="navName" class="subnav">
        <span>/</span><span>{{ navName }}</span>
      </div>
      <div v-show="navName" class="subnav">
        <span>/</span><span>{{ subNav }}</span>
      </div>
    </div>
    <div class="nav-windows">
      <div class="nav-items">
        <div v-for="tab in routerTab" :key="tab.name">
          <MButton
            :name="tab.subNav"
            :active="tab.active"
            :closeIcon="tab.showCloseIcon"
            @closeNavItem="closeNavItem"
            class="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bus from '../../bus/bus.vue'
import MButton from '../../components/self/sbutton.vue'
import { doRouterTabArray, delRouterTab } from '../../common/function/nav'
export default {
  data () {
    return {
      isCollapse: false,
      navName: '',
      subNav: '',
      routerTab: [
        {
          active: true,
          nav: '',
          subNav: '首页',
          url: '/index',
          showCloseIcon: false
        }
      ]
    }
  },
  mounted: function () {
    Bus.$on('navParams', (params) => {
      this.navName = params.nav
      this.subNav = params.subNav
      params.active = false
      params.showCloseIcon = true
      this.routerTab = doRouterTabArray(this.routerTab, params)
    })
  },
  computed: {},
  methods: {
    closeNavItem: function (subNav) {
      this.routerTab = delRouterTab(this.routerTab, subNav)
      this.navName = this.routerTab[this.routerTab.length - 1].nav
      this.subNav = this.routerTab[this.routerTab.length - 1].subNav
      this.$router.push(this.routerTab[this.routerTab.length - 1].url)
      Bus.$emit(
        'defaultActive',
        this.routerTab[this.routerTab.length - 1].subNav
      )
    },
    collapse: function () {
      this.isCollapse = !this.isCollapse
      Bus.$emit('asideCollapse', this.isCollapse)
    }
  },
  components: {
    MButton
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#nav {
  #nav-url {
    display: flex;
    line-height: 20px;
    padding: 5px 10px;
    border-bottom: 1px solid #eee;
    box-shadow: 0 1px 3px 0 #F2F6FC, 0 0 3px 0 #eee;

    .collapse {
      font-size: 20px;
      padding: 0 10px 0 0;
    }

    .subnav {
      color: #909399;
    }

    span {
      padding: 0 4px;
    }
  }

  .nav-windows {
    border-bottom: 1px solid #eee;
    box-shadow: 0 1px 3px 0 #DCDFE6, 0 0 5px 0 #EBEEF5;

    .nav-items {
      display: flex;

      .item {
        padding: 5px;
      }
    }
  }
}
</style>
