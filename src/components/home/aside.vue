<template>
  <div id="aside">
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      unique-opened
      :default-active="defaultAcitve"
      background-color= "#eee"
    >
      <el-submenu v-for="navs in navList" :key="navs.id" :index="navs.id + ''">
        <template slot="title">
          <i :class="navs.icon"></i>
          <span>{{ navs.name }}</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <div v-for="nav in navs.erji" :key="nav.id">
            <el-menu-item
              :index="nav.name"
              @click="linkTo(nav.url, navs.name, nav.name)"
              >{{ nav.name }}</el-menu-item
            >
          </div>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import Bus from '../../bus/bus.vue'

import { mapState } from 'vuex'
export default {
  data () {
    return {
      isCollapse: false,
      defaultAcitve: '',
      background: '#eee'
    }
  },
  mounted: function () {
    Bus.$on('asideCollapse', (asideCollapse) => {
      this.isCollapse = asideCollapse
    })
    Bus.$on('defaultActive', (active) => {
      this.defaultAcitve = active
    })
  },
  computed: {
    ...mapState(['navList']),
    activeBackground: function () {
      if (this.active) {
        return '#67C23A'
      }
    }
  },
  methods: {
    linkTo (url, nav, subnav) {
      Bus.$emit('navParams', { nav: nav, subNav: subnav, url: url })
      this.$router.push(url)
    }
  },
  components: {}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
