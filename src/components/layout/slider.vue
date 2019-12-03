<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <div :class="isCollapse?'logo min-logo':'logo'">
      <img src="@/assets/logo.png" alt=""/>
    </div>
    <el-menu class="el-menu"
             unique-opened
             router
             @open="handleOpen"
             @close="handleClose"
             :collapse="isCollapse">
      <div v-for="(route,index) in routers" :key="index">
        <el-submenu :key="index" :index="route.name">
          <template slot="title"><i :class="route.meta.icon"></i>{{route.meta.name}}</template>
          <el-menu-item v-for="(minRoute,minIndex) in route.children" :key="minIndex"
                        :index="minRoute.name" :route="minRoute">
            {{minRoute.meta.name}}
          </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </el-aside>
</template>

<script>
import sliderPath from '@/router/sliderPath'
export default {
  name: 'slider',
  props: ['isCollapse'],
  data () {
    return {
      routers: sliderPath
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .el-aside{
    height: 100%;
    overflow-y: auto;
    color: #333;
    .logo{
      width: 200px;
      transition: width 0.5s linear;
      img{
        width: 100%;
      }
    }
    .min-logo {
      width: 64px;
      transition: width 0.3s;
    }
  }
</style>
