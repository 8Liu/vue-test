<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <div class="left-silder">
      <slider :isCollaspe="isCollapse"></slider>
    </div>

    <div class="right-main">
      <my-header @collapseFun="handleCollapse"></my-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </div>
  </el-container>
</template>

<script>
import myHeader from '@/components/layout/header'
import slider from '@/components/layout/slider'
export default {
  name: 'home',
  data () {
    return {
      isCollapse: true
    }
  },
  components: {
    myHeader,
    slider
  },
  methods: {
    handleCollapse (val) {
      this.isCollapse = val
    }
  }
}
</script>

<style scoped lang="scss">
  .el-container{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    display: flex;
  }
  .el-container .left-slider{
    width: auto;
  }
  .el-container .right-main{
    flex: 1;
    position: relative;
  }
  .el-container .right-main .el-main{
    height: 100%;
    overflow-y: auto;
  }
</style>
