<template>
  <div>
    <!-- <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banners">
          <img src="../../../static/img/home/swiper1.jpg">
          <img :src=item.img>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div> -->
<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="item in banners">
      <img :src=item.img alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>

    <div class="goods">
      <div class="goodList" v-for="item in goods ">
        <img :src=item.img alt="">
        <p class="good-title">{{item.name}}</p>
        <p class="price-box">
          <span class="price">￥{{item.price}}</span>
          <span class="market-price">￥{{item.market_price}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
require('swiper/dist/css/swiper.css')
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import $ from "jquery";
export default {
   components: {
    swiper,
    swiperSlide
  },
  name: "app",
  data() {
    return {
      banners:[],
      goods: [],
       notNextTick: true,
        swiperOption: {
          loop: true,
          paginationType: "fraction",
          autoplay: 3000,
          direction: 'horizontal',
          grabCursor: false,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          scrollbar: null,
          mousewheelControl: false,
          observeParents: false,
        }
    };
  },
  mounted: function() {
    this.getHome();
  },
  methods: {
    getHome: function() {
      var that = this;
      $.ajax({
        // url: "http://ebay.com/api/index/index",
        url: "../../../static/json/home.json",
        type: "get",
        dataType: "json",
        data: {},
        success: function(res) {
          that.banners = res.data.banner;
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
  height: px(200);
  overflow: hidden;
}
.swiper-slide img {
  width: 100%;
  height: px(200);
}
.swiper-slide-active{
  background: yellow;

}
.goods {
  width: 100%;
  display: flex;
  // justify-content: space-around;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 px(12);
  box-sizing: border-box;
}
.goodList {
  width: px(170);
  height: px(235);
  margin-top: px(10);
  // border: 1px solid black;
}
.goodList img {
  width: px(170);
  height: px(170);
}
.good-title {
  width: 100%;
  height: px(20);
  line-height: px(20);
  font-size: px(16);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.price-box{
  width: 100%;
  height: px(35);
  line-height: px(35);
}
.price{
  color: #f05f50;
  font-weight: 700;
  font-size: px(17);
  margin-top:px(10);
}
.market-price{
  margin-left: px(10);
  text-decoration: line-through;
  color: #9a9a9a;
  font-size: px(15);
}
</style>
