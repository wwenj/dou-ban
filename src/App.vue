<template>
  <div id="app" @touchmove="touchMove" @scroll="touchMove">
    <div class="header-box" :class="goUpDown ? 'goup' : 'godown'">
      <div class="header-bg">
        <div class="header">
            <img src="../static/img/logo.png" alt="">
            <span class="find" ></span>
        </div>
      </div>
      <div class="nav">
        <ul>
          <li><router-link to="/home" class="router-link">首页</router-link></li>
          <li><router-link to="/class" class="router-link">分类</router-link></li>
          <li><router-link to="/shop" class="router-link">购物车</router-link></li>
          <li><router-link to="/my" class="router-link">我的</router-link></li>
        </ul>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "app",
  data() {
    return {
      changeColor:true,
      goUpDown:false
    };
  },
  methods: {
    touchMove: function(e) {
      if(document.documentElement.scrollTop>=100){
        this.goUpDown=true
      }else if(document.documentElement.scrollTop<=100){
         this.goUpDown=false
      }
    }
  }
};
</script>

<style lang="scss">
@import "../static/css/pixel.scss";

.header-box{
  width: 100%;
  position: fixed;
  top: px(0);
  left: 0;
  z-index: 1000;
}
.goup{
  transform: translate(0,px(-50));
  transition: all 0.5s;
}
.godown{
  transform: translate(0,px(0));
  transition: all 0.3s;
}
.header-bg {
  width: 100%;
  height: px(50);
  background-color: #0aa082;
}
.header {
  width: px(340);
  height: 100%;
  margin: 0 auto;
}
.header img {
  width: px(100);
  height: px(50);
}
.find {
  display: block;
  float: right;
  width: px(20);
  height: px(20);
  background-image: url("../static/img/find.png");
  background-size: px(20) px(20);
  margin-top: px(15);
}
/*导航*/
.nav {
  width: 100%;
  height: px(40);
  background-color:#FFFFFF;
}
.nav ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
.nav li {
  width: px(65);
  height: 100%;
  line-height: px(40);
  text-align: center;
  font-size: px(16);
}
.bgColor{
  color: #0aa082;
}
.router-view{
  margin-top: px(90);
  height: px(800);
}
.router-link{
  color: #000;
  text-decoration: none;
}
/*router-link自动添加的类*/
.router-link-active{
  color: #0aa082;
}
/*路由进出动画*/
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
</style>
