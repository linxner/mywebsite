<template>
  <div>
    <div id="header">
      <div class="menu">
        <div class="login">
          <!-- 登录 -->
          <span class="denglu" @click="login">登录</span>
          <span>/</span>
          <!-- 注册 -->
         <span class="zhuce" @click="register">注册</span>
        </div>
        <ul class="menulis">
          <router-link to="/" tag="li">首页</router-link>
          <router-link to="/experience" tag="li">个人经历</router-link>
          <router-link to="/blog" tag="li">个人博客</router-link>
          <router-link to="/journal" tag="li">我的日志</router-link>
        </ul>
      </div>
    </div>
    <my-login></my-login>         
  </div>
</template>
<script>
import myLogin from '../pages/login'

export default {
  data() {
    return {
      message: '',
      topHeight: '',
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
    login(){
      $('.loginpage').show()
    },
    register() {
       $('.loginpage').show()
      $('.loginContainer').hide()
      $('.register').show()
    }
  }
}
</script>
<style scope lang="less">
#header {
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: #fff
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
  line-height: 50px;
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
  line-height: 50px;
  cursor: pointer;
  float: left;
}
.denglu:hover{
  color: #E6A23C;
}
.zhuce:hover{
  color:#E6A23C;
}
</style>

