<template>
         <view ref="myView"></view>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },
    methods:{
    },
    mounted() {
      // 获取 myView 元素的位置和尺寸信息
      uni.createSelectorQuery().in(this).select('#myView').boundingClientRect((res) => {
        console.log(res);
        console.log(res.width); // 输出宽度
        console.log(res.height); // 输出高度
      }).exec();
    }
  };
</script>

<style lang="scss">
  .movableArea {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-color: pink;
  }

  .movableView {
    width: 100px;
    height: 100px;
    pointer-events: auto; //可以点击
  }
</style>
