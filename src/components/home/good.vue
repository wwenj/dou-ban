<template>
  <div id="app">
<!-- 内容列表 -->
    <div class="goods">
      <div class="goodList" v-for="(item,index) in goods ">
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
import $ from "jquery";
export default {
  name: "app",
  props:{
    goods:Array
  },
  data() {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../../static/css/pixel.scss";
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
  text-decoration: none;
  color: black;
  display: block;
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
.price-box {
  width: 100%;
  height: px(35);
  line-height: px(35);
}
.price {
  color: #f05f50;
  font-weight: 700;
  font-size: px(17);
  margin-top: px(10);
}
.market-price {
  margin-left: px(10);
  text-decoration: line-through;
  color: #9a9a9a;
  font-size: px(15);
}

</style>
