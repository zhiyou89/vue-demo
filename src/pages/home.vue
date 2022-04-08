<template>
  <el-container id="home-container">
    <el-aside id="left" :width="leftWith">
      <Aside/>
    </el-aside>
    <el-container id="home-right">
      <el-header>
        <Header/>
      </el-header>

      <el-main>
        <Nav
          @asideCollapse = "asideCollapse"
        />
        <keep-alive>
           <router-view />
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import { mapState } from 'vuex'
import Aside from '../components/home/aside.vue'
import Header from '../components/home/header.vue'
import Nav from '../components/home/nav.vue'
export default {
  data () {
    return {
      leftWith: 200
    }
  },
  mounted () {

  },

  computed: {

  },
  methods: {
    asideCollapse: function (msg) {
      alert(msg)
    }
  },
  components: {
    Aside,
    Header,
    Nav
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../common/stylus/base.styl';

#home-container
  height: calc(100vh)
  border: 1px solid $ele-border-color-l
  #left
    background: $color-background
  #home-right
    .el-main
      padding:0
      margin:0
    .el-header
      background-color: $ele-brand-color
      line-height: 60px

</style>
