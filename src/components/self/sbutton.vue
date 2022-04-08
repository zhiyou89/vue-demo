<template>
  <div id="sbutton">
    <div
    :style = "{background:activeFuction}"
    class="s-button"
    >
      <div>
        {{name}}
      </div>
      <div
      index="1"
      class="button-close-icon"
      v-show="closeIcon"
      @click.stop="closeButton(name)"
      >
        <i class="el-icon-close"></i>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: '首页'
    },
    closeIcon: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      visiable: true
    }
  },
  created: function () {
    console.log('created')
  },
  mounted: function () {

  },
  computed: {
    activeFuction: function () {
      if (this.active) {
        return '#67C23A'
      } else {
        return '#fff'
      }
    }
  },
  methods: {
    closeButton: function (index) {
      this.$emit('closeNavItem', index)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#sbutton
  display: flex
  .s-button
    position relative
    padding: 5px 15px
    border:1px solid #EBEEF5
  .button-close-icon
    .el-icon-close
      font-size: 12px
      color:#fff
      position absolute
      right:0
      top:0
</style>
