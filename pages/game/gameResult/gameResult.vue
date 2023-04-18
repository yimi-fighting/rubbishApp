<template>
  <view>
   <div v-if="winner">成功</div>
    <div v-else>失败</div>
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
  }
  }
</script>

<style lang="scss">
.item{
display: flex;
justify-content: space-around;
.btn{
  width: 50px;
  height: 50px;
  background-color: pink;
  margin: 5px;
}
}
</style>
