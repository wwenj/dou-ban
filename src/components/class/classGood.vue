<template>
  <div id="app">
<!-- 分类 -->
    <div class="nav">
      <router-link to="/index/home" class="routerlink">首页</router-link>
      <div class="classify" @click="oneClass">{{$route.params.name}}
        <img src="../../../static/img/class/heade.png" alt="">
      </div>
    </div>
    <div class="navclass classnill">
      <ul class="good-box">
        <li class="good-title1">全部</li>
        <li v-for="item in classify" @click="classifyId(item.id)">{{item.name}}</li>
      </ul>
    </div>
<!-- 内容列表 -->
      <!-- 排序 -->
      <div class="order">
        <span @click="getClassGood(classifyParentId,twoId,1);">综合排序</span>
        <span @click="getClassGood(classifyParentId,twoId,2);">价格</span>
        <span @click="getClassGood(classifyParentId,twoId,1,1);">正序</span>
        <span @click="getClassGood(classifyParentId,twoId,1,2);">降序</span>
      </div>
      <goods-list :goods="goods"></goods-list>
<!-- 一级分类弹出层     -->
<div class="mask" v-if="maskIf" @click.stop="maskIn">
  <div class="contentOut">
    <ul>
      <li></li>
    </ul>
  </div>
</div>
  </div>
</template>

<script>
import $ from "jquery";
import goodsList from "@/components/home/good";
export default {
  name: "app",
  components: {
    goodsList
  },
  data() {
    return {
      classify: [],
      goods: [],
      classifyParentId: "",
      maskIf: false,
      twoId: 0
    };
  },
  computed: {},
  mounted: function() {
    this.classifyParentId = this.$route.params.id;
    this.getClass(this.classifyParentId);
    this.getClassGood(this.classifyParentId);
  },
  methods: {
    getClass(goodId) {
      var that = this;
      $.ajax({
        // url:"http://ebay.com/api/classify/lists",
        url: "../../../static/json/class.json",
        type: "get",
        data: {
          id: goodId
        },
        DataType: "json",
        success: function(res) {
          that.classify = res.data.classify;
        },
        error: function() {
          alert("失败");
        }
      });
    },
    getClassGood(classifyParentId, classifyId, order, orderType) {
      var that = this;
      $.ajax({
        // url:"http://ebay.com/api/goods/lists",
        url: "../../../static/json/json2/Apigoodslists.json",
        type: "get",
        data: {
          classify_parent_id: classifyParentId,
          classify_id: classifyId,
          order: order,
          order_type: orderType
        },
        DataType: "json",
        success: function(res) {
          that.goods = res.data.goods;
        },
        error: function() {
          alert("网络请求失败");
        }
      });
    },
    classifyId: function(twoId) {
      this.twoId = twoId;
      this.getClassGood(this.classifyParentId, twoId);
    },
    oneClass: function() {
      this.maskIf = true;
    },
    maskIn: function(ev) {
      ev.cancelBubble = true;
      this.maskIf = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../static/css/pixel.scss";
#app {
  overflow: hidden;
}
.nav {
  width: 100%;
  height: px(40);
  line-height: px(40);
  position: relative;
}
.routerlink {
  display: block;
  width: px(60);
  color: #5c5c5c;
  text-decoration: none;
  font-size: px(16);
  // margin-left: px(15)
  text-align: center;
}
.classify {
  position: absolute;
  top: 0;
  left: 50%;
  width: px(200);
  // border: 1px solid black;
  height: 100%;
  text-align: center;
  margin-left: px(-100);
  color: #0aa082;
  font-size: px(17);
}
.navclass {
  width: 100%;
  height: px(40);
  background-color: #0aa082;
  white-space: nowrap;
  overflow-x: auto;
}
.classnill::-webkit-scrollbar {display:none}
.good-box {
  height: px(40);
  // box-shadow: 0 0 4px #9a9a9a;
  float: left;
}
.navclass li {
  display:inline-block;
  height: px(40);
  line-height: px(40);
  padding: 0 px(15);
  color: #5c5c5c;
}
.good-box .good-title1 {
  color: #fff;
  font-weight: bold;
}

/*一级目录弹出*/
.mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
}
.contentOut {
  width: px(216);
  height: px(326);
  background: #fff;
  position: fixed;
  top: px(180);
  left: px(80);
  // margin-top: px(163);
  z-index: 100;
}
/*排序*/
.order {
  width: 100%;
  height: px(30);
  line-height: px(40);
  padding: 0 px(12);
  box-sizing: border-box;
}
.order span {
  display: inline-block;
  margin-right: px(20);
  font-size: px(16);
  color: #9a9a9a;
}
</style>
