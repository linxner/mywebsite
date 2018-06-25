<template>
  <div>
    <div id="header">
      <div class="menu">
        <div class="login">
          <!-- 登录 -->
          <span class="denglu" @click="loginTo">登录</span>
          <span>/</span>
          <!-- 注册 -->
          <span class="zhuce" @click="registerTo">注册</span>
        </div>
        <ul class="menulis">
          <router-link to="/" tag="li">首页</router-link>
          <router-link to="/project" tag="li">个人项目</router-link>
          <router-link to="/blog" tag="li">个人博客</router-link>
          <router-link to="/journal" tag="li">我的日志</router-link>
        </ul>
      </div>
    </div>
    <my-login :login="login" :register="register" :hide="hide" @hideLogin="hideLogin" @toRegister="toRegister"></my-login>
  </div>
</template>
<script>
import myLogin from '../pages/login'

export default {
  data() {
    return {
      message: '',
      topHeight: '',
      login: true,
      register: false,
      hide: false
    }
  },
  components: {
    myLogin
  },
  watch: {
    topHeight() {

    },
  },
  mounted() {
    $(window).scroll(function () {
      this.topHeight = $(window).scrollTop();
    }.bind(this))
  },

  methods: {
    loginTo() {
      this.hide = true
      this.login = true
      this.register = false
    },
    registerTo() {
      this.hide = true
      this.login = false
      this.register = true
    },
    hideLogin(e) {
      this.hide = false
    },
    toRegister() {
      this.register = true
      this.login = false
    }
  }
}
</script>
<style scope lang="less">
#header {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 9;
  background-color: #fff;
  line-height: 60px;
}
.menu {
  width: 1200px;
  margin: 0 auto;
}
.menulis {
  letter-spacing: -0.5em;
  width: 600px;
  list-style: none;
  text-align: center;
  float: right;
}
.menulis li {
  letter-spacing: normal;
  display: inline-block;
  font-size: 18px;
  padding: 0 25px;
  cursor: pointer;
}
.menulis li:hover {
  background: rgba(0, 183, 255, 0.747);
  border-radius: 5%;
  color: #fff;
}
.login {
  float: right;
  font-size: 14px;
}
.login span {
  cursor: pointer;
  float: left;
}
.denglu:hover {
  color: #e6a23c;
}
.zhuce:hover {
  color: #e6a23c;
}
</style>

