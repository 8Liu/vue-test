<template>
  <div>
    <el-progress :percentage="0"></el-progress>
    <el-progress :percentage="70"></el-progress>
    <el-progress :percentage="80" color="#8e71c7"></el-progress>
    <el-progress :percentage="100" status="success"></el-progress>
    <el-progress :percentage="100" exception="exception"></el-progress>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
