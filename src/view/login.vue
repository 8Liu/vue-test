<template>
    <div class="login">
      <div class="login-form">
        <!--ref:这个表单绑定的对象 ：model:这个表单绑定的对象 rules:表单验证规则-->
        <el-form ref="user" status-icon :model="user" :rules="userRules">
          <el-form-item label="用户名" prop="name">
            <el-input type="text" v-model="user.name" auto-complete="off" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="user.password" auto-complete="off" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login-btn" @click="submitForm('user')">登录</el-button>
          </el-form-item>
          <el-form-item style="text-align: center">
            <router-link to="/">注册</router-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: {
        name: '',
        password: ''
      },
      userRules: {
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 4, max: 8, message: '用户名的长度在4~8个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 10, message: '密码的长度在6~10个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .login{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=132600321,3123081067&fm=27&gp=0.jpg") no-repeat;
    background-size: cover;
    .login-form{
      position: absolute;
      right: 140px;
      top: 150px;
      width: 250px;
      border-radius: 20px;
      padding: 60px 30px 20px 30px;
      background: rgba(225,225,225,0.5);
      .login-btn{
        width: 100%;
      }
    }
  }
</style>
