<template>
  <view>
    <div class="title">调节难度<uni-icons class="icon" color="#00cb79" type="gear" size="30"></uni-icons></div>
      <div class="container">
        <div>横向最大卡牌数：</div>
        <slider min="2" max="8" name="x" show-value @change="(e)=>sliderChange(e,'x')" :value="options.x"></slider>
        <div>纵向最大卡牌数：</div>
        <slider min="2" max="6" name="y" show-value  @change="(e)=>sliderChange(e,'y')" :value="options.y"></slider>
        <div>卡片层高：</div>
        <slider min="1" max="6" name="z" show-value @change="(e)=>sliderChange(e,'z')" :value="options.z"></slider>
        <div>卡片密度：</div>
        <slider min="0.1" max="1" step="0.1" name="random" show-value @change="(e)=>sliderChange(e,'random')" :value="options.random"></slider>
        <div>最大卡片种类：</div>
        <slider min="1" max="16" name="maxCard" show-value @change="(e)=>sliderChange(e,'maxCard')" :value="options.maxCard"></slider>
        <button @click="submit" class="btn">开始游戏</button>
      </div>

  </view>
</template>

<script>
  export default {
    data() {
      return {
        x:2,
        options: {
          x: 6,
          y: 5,
          z: 4,
          random:0.2,
          maxCard:10,
        },
      };
    },
    methods: {
      submit() {
        let jsonOptions=JSON.stringify(this.options)
        uni.navigateTo({
          url:`/pages/game/gameDetail/gameDetail?options=${jsonOptions}`
        })
      },
      sliderChange(e,item){
        this.options[item]=e.detail.value
      }
    }
  }
</script>

<style lang="scss">
  .title {
    font-size: 20px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    margin-bottom: 15px;
    .icon{
     margin-left: 10px;
     margin-top: 4px;
    }
  }
  .container {
    padding: 10px;
    .btn{
      width: 50%;
      border-radius: 20px;
      border: none;
      background-color: #00cb79;
      margin-top: 30px;
    }
  }
</style>
