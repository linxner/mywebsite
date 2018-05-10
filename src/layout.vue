<template>
<div class="content">
    <my-header></my-header>  
    <router-view></router-view>
    <my-footer></my-footer>  
</div>
</template>

<script>
import myHeader from './components/componet/header'
import myFooter from './components/componet/footer'
export default {
  data() {
    return {}
  },
  components: {
    myFooter,
    myHeader
  }
};
</script>
<style>
body {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  min-width: 1000px;  
  background-color: #ccc;
}
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
</style>



