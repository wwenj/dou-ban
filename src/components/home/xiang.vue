<template>
  <div>
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <swiper-slide v-for="(item,index) in goods.imgs">
        <img :src=item.img alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
      <!-- <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
    <div class="content">
      <p class="title">{{goods.name}}</p>
      <p class="price-box">
          <span class="price">￥{{goods.price}}</span>
          <span class="market-price">￥{{goods.market_price}}</span>
        </p>
        <img class="linshi" src="../../../static/img/home/linshi.png" alt="">
        <p v-html="goods.desc"></p>
    </div>
  </div>
</template>

<script>
require("swiper/dist/css/swiper.css");
import { swiper, swiperSlide } from "vue-awesome-swiper";
import $ from "jquery";
export default {
  components: {
    swiper,
    swiperSlide
  },
  name: "app",
  data() {
    return {
      goods: {},
      notNextTick: true,
      swiperOption: {
        loop: true,
        paginationType: "bullets",
        autoplay: 3000,
        direction: "horizontal",
        grabCursor: false,
        setWrapperSize: true,
        autoHeight: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        // prevButton: ".swiper-button-prev",
        // nextButton: ".swiper-button-next",
        scrollbar: null,
        mousewheelControl: false,
        observeParents: false,
        preventLinksPropagation: true,
        preventClicks: false
      }
    };
  },
  mounted: function() {
    this.getXiang();
  },
  methods: {
    getXiang: function() {
      var that = this;
      var goodId = this.$route.params.id;
      $.ajax({
        // url: "http://ebay.com/api/goods/info",
        url: "../../../static/json/good.json",
        type: "get",
        dataType: "json",
        data: {
          id: goodId
        },
        success: function(res) {
          that.goods = res.data.goods;
        },
        error: function() {
          alert("请求错误");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../static/css/pixel.scss";
.swiper-container {
  width: 100%;
  height: px(380);
}
.swiper-slide img {
  width: 100%;
  height: px(380);
}
.content {
  width: 100%;
  padding: px(15);
  // border: 1px solid black;
  box-sizing: border-box;
}
.title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #5c5c5c;
  font-size: px(14);
}
.price-box{
  width: 100%;
  height: px(35);
  line-height: px(35);
  margin-top:px(5)
}
.price{
  color: #f05f50;
  font-weight: 700;
  font-size: px(18);
  margin-top:px(10);
}
.market-price{
  margin-left: px(10);
  text-decoration: line-through;
  color: #9a9a9a;
  font-size: px(16);
}
.linshi{
  width: 100%;
  height: px(390);
}
</style>
