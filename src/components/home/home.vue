<template>
  <div>
  <div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><img src="../../../static/img/home/swiper1.jpg" alt=""></div>
    <div class="swiper-slide"><img src="../../../static/img/home/swiper2.jpg" alt=""></div>
    <div class="swiper-slide"><img src="../../../static/img/home/swiper3.jpg" alt=""></div>
    <div class="swiper-slide"><img src="../../../static/img/home/swiper4.jpg" alt=""></div>
  </div>
  <div class="swiper-pagination"></div>
</div>
  </div>
</template>

<script>
import "../../../static/js/swiper-3.4.2.min.js";

export default {
  name: "app",
  data() {
    return {

    };
  },
  mounted:function(){
    this.swiper()
  },
  methods: {
    swiper: function() {
      var mySwiper = new Swiper(".swiper-container", {
        loop: true,
        pagination : '.swiper-pagination',
        paginationType : 'fraction',
        autoplay:3000
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../static/css/pixel.scss";
@import "../../../static/css/swiper-3.4.2.min.css";
.swiper-container {
  width: 100%;
  height: px(200);
}
.swiper-slide img {
  width: 100%;
  height: px(200);
}
</style>
