<template>
  <el-row :gutter="20" type="flex" justify="space-between">
    <el-col :span="6" class="company">
      <div>
        <el-image
          class="logo"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        ></el-image>
      </div>
      <div>友冠信息科技</div>
    </el-col>
    <el-col :span="6" :offset="6" class="header-set">
      <el-dropdown>
        <i class="el-icon-setting icon-set"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-col>
  </el-row>
</template>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/base.styl';
  .company
    font-size: $font-size-large
    display: flex
    .logo
      width: 40px
      height: 40px
      padding:10px 10px 0 0
  .header-set
    text-align: right
    .icon-set
      margin-right: 15px
</style>
