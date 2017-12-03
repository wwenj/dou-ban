<template>
  <div>
<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <swiper-slide v-for="(item,index) in banners">
      <router-link :to="{name:'xiang',params:{id:item.id}}">
        <img :src=item.img alt="">
      </router-link>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
  <!-- 列表子组件 -->
<goods-list :goods="goods"></goods-list>

  </div>
</template>

<script>
require("swiper/dist/css/swiper.css");
import { swiper, swiperSlide } from "vue-awesome-swiper";
import $ from "jquery";
import goodsList from "@/components/home/good";
export default {
  components: {
    swiper,
    swiperSlide,
    goodsList
  },
  name: "app",
  data() {
    return {
      banners: [],
      goods: [],
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
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        scrollbar: null,
        mousewheelControl: false,
        observeParents: false,
        preventLinksPropagation: true,
        preventClicks: false
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
}
.swiper-slide img {
  width: 100%;
  height: px(200);
}
</style>
