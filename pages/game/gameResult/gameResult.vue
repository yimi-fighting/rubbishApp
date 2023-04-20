<template>
  <view>
   <div v-if="winner==='true'">
     <image src="../../../static/success.jpg" mode=""></image>
   </div>
    <div v-else>
      <image src="../../../static/fail.jpg" mode=""></image>
    </div>
    <button class="btn" @click="again">再来一次</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        winner:false,
      };
    },
    methods:{
    },
  onLoad(option) {
    this.winner=option.winner
  },
  methods:{
    again(){
      uni.switchTab({
         url:'/pages/game/game'
      })
    }
  }
  }
</script>

<style lang="scss">
  image{
    width: 100vw;
    height: 90vh;
  }
  .btn{
    background-color: #00cb79;
  }
</style>
