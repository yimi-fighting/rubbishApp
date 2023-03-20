<template>
  <view>
    <!-- 轮播图 -->
    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
      <swiper-item>
        <view class="swiper-item">
          <image src="../../static/picture/lbt1.webp" mode=""></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <image src="../../static/picture/lbt3.jpg" mode=""></image>
        </view>
      </swiper-item>
    </swiper> 

<!-- 搜索框 -->
    <div class="search_contain">
      <i class="iconfont icon-fangdajing"></i>
      <input class="search" type="text" placeholder="输入垃圾名称">
    </div>
    <!-- 拍照识别 -->
    <div class="photograph">
      <div class="photo">
        <i class="iconfont icon-weibiaoti1"></i>
      </div>
      <div class="text">拍照识别</div>
    </div>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">
  html,body{
    width: 100%;
    height: 100%;
  }
  view {
    background-color: rgb(247, 247, 247);
    height: 100%;
  }

  swiper {
    .swiper-item,
    image {
      width: 100%;
      height: 100%;
    }
  }
  
  .search_contain{
    background-color: white;
    position: relative;
    height: 40px;
    box-sizing: border-box;
    margin:20px 10px 20px 10px;
    // margin-right: 100px;
    border-radius: 30px;
    .icon-fangdajing{
      background-color: white;
    position: absolute;
    left: 15px;
    line-height: 40px;
    color: rgb(0, 203, 121);
    }
    .search{
      padding-left: 40px;
      position: absolute;
      top: 10px;
      font-size: 14px;
    }
  }

  .photograph{
    position: relative;
    .photo{
      position: relative;
      width: 70px;
      height: 70px;
      background-color: rgb(0, 203, 121);
      border-radius: 50%;
      margin: 0 auto;
      .icon-weibiaoti1{
        position: absolute;
        left:35%;
        top:35%;
        width: 20px;
        color: white;
        height: 20px;
        font-size: 40px;
        background-color: rgb(0, 203, 121);
        transform: translate(-50%,-50%);
      }
    }
    .text{
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      margin-top: 10px;
      color: rgb(0, 203, 121);
      font-size: 14px;
      font-weight: 600;
    }
  }

</style>
