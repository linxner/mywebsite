<template>
  <div class="loginpage" v-if="hide">
    <div></div>
    <div></div>
    <div></div>
    <div class="container">
      <i class="el-icon-close" @click="hideLogin"></i>
      <div id="register" v-if="register">
        <my-register @hideLogin="hideLogin"></my-register>
      </div>
      <div class="loginContainer" v-if="login">
        <el-row>
          <el-col :span="24">
            <span class="accountLogin">账号登录</span>
          </el-col>
        </el-row>
        <div class="inputname">
          <el-input placeholder="请输入用户名/手机号/邮箱" v-model="input" clearable prefix-icon="iconfont icon-user"></el-input>
        </div>
        <div class="password">
          <el-input placeholder="请输入密码" v-model="password" clearable type="password" prefix-icon="iconfont icon-cdiconpassword"></el-input>
        </div>
        <div class="auto">
          <el-row>
            <el-col :span="12" class="autoLogin">
              <el-checkbox v-model="checked">下次自动登录</el-checkbox>
            </el-col>
            <el-col :span="12" class="greyPassword">
              <span>忘记密码？</span>
            </el-col>
          </el-row>
        </div>
        <div class="loginBtn">
          <el-row>
            <el-button type="primary" style="width:100%">登录</el-button>
          </el-row>
        </div>
        <div class="noAccount">
          <el-row>
            <el-col :span="12" :offset="6">没有账号？请
              <span class="pleaseReg" @click="registerTo">注册</span>
            </el-col>
          </el-row>
        </div>
        <div class="otherLogin">
          <div class="loginElse">
            <el-row>
              <el-col :span="24">使用第三方账号登录:</el-col>
            </el-row>
          </div>
          <div class="loginLogo">
            <el-col :span="24">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-QQ"></use>
              </svg>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin"></use>
              </svg>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weibo"></use>
              </svg>
            </el-col>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import myRegister from '../pages/register'

export default {
  props: {
    register: {
      type: Boolean,
      default: true,
    },
    login: {
      type: Boolean,
      default: true,
    },
    hide: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      input: '',
      password: '',
      checked: false,
    }
  },
  components: {
    myRegister
  },
  methods: {
    hideLogin() {
      this.$emit('hideLogin')
    },
    registerTo() {
      this.$emit('toRegister')
    }
  }
}
</script>
<style>
.loginpage {
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  text-align: center;
}
.container {
  margin: 140px auto;
  width: 320px;
  background-color: #fff;
  padding: 30px 40px 20px;
  position: relative;
}
.el-icon-close {
  display: block;
  font-size: 14px;
  margin: 5px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  -webkit-transition: all linear 0.1s;
  transition: all linear 0.5s;
}
.el-icon-close:hover {
  transform: rotateZ(180deg);
}
.accountLogin {
  display: block;
  font-size: 20px;
  margin-bottom: 25px;
}
.noAccount,
.loginBtn,
.password,
.inputname {
  margin-bottom: 20px;
}
.auto {
  margin-bottom: 30px;
}
.autoLogin {
  text-align: left;
}
.greyPassword {
  text-align: right;
  color: #606266;
  font-size: 14px;
  cursor: pointer;
}
.greyPassword:hover {
  color: #409eff;
}
.pleaseReg {
  color: #409eff;
  cursor: pointer;
}
.loginElse {
  width: 160px;
  height: 28px;
  line-height: 28px;
  display: inline-block;
  letter-spacing: normal;
  text-align: right;
}
.loginline {
  height: 1px;
  background-color: #333;
  margin: auto 0;
}
.loginLogo {
  font-size: 24px;
  width: 150px;
  display: inline-block;
  text-align: left;
  padding-left: 10px;
  letter-spacing: normal;
}
.otherLogin {
  letter-spacing: -0.5em;
}
</style>
