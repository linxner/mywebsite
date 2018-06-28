<template>
  <div>
    <div id="mypage">
      <div id="content">
        <h1>一些初期的想法:</h1>
        <h2>这个网站的前期想法是分享一些我自己的学习以及工作上遇到的一些问题以及解决方法， 还有一些线上的测试，后期我想有自己的后端，数据库，可以提供个人账号，每个人拥有自己独立的空间。</h2>
      </div>
      <my-carousel></my-carousel>
    </div>
  </div>
</template>
<script>
import myCarousel from '../componet/carousel'
export default {
  data() {
    return {};
  },
  components: {
    myCarousel
  }
};
</script>
<style lang="less" scoped>
#mypage {
  margin-top: 60px;
}
#content{
  width: 1300px;
  margin: 0 auto 15px;
}
</style>
