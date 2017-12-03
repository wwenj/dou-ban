<template>
  <div id="app">
    <div class="content">
     <router-link :to="{name:'classgood',params:{id:index,name:item.name}}" class="classify" :style="'background:'+color1()" v-for="(item,index) in classify">{{item.name}}</router-link>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "app",
  data() {
    return {
      classify: [],
      color: [
        "#c7e7d0",
        "#f8f4e9",
        "#cad7ec",
        "#d5e9bf",
        "#d4ecf1",
        "#fad6d6",
        "#ffe3cf",
        "#dcdcdc",
        "#f8f4e9"
      ]
    };
  },
  computed: {

  },
  mounted: function() {
    this.getClass();
  },
  methods: {
    getClass() {
      var that = this;
      $.ajax({
        // url:"http://ebay.com/api/classify/lists",
        url: "../../../static/json/class.json",
        type: "get",
        data: "",
        DataType: "json",
        success: function(res) {
          that.classify = res.data.classify;
        },
        error: function() {
          alert("失败");
        }
      });
    },
    color1:function(){
      var index=Number.parseInt(Math.random() * 10);
      return this.color[index]
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../static/css/pixel.scss";
.content {
  width: 100%;
  padding: 0 px(15);
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.classify {
  width: 30%;
  height: px(60);
  margin-top: px(15);
  border-radius: px(5);
  line-height: px(60);
  text-align: center;
  font-size: px(15);
  color: #5c5c5c;
  text-decoration: none;
}
</style>
