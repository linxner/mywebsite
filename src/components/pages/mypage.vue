<template>
  <div>
    <div id="mypage">
      <my-carousel></my-carousel>
    </div>
    <div id="content">
    </div>
  </div>
</template>
<script>
import myCarousel from  '../componet/carousel'
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
#mypage{
  margin-top: 60px;
}
</style>
