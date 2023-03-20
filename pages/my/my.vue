<template>
  <view>
    <div class="a">
      盒子1
      <div class="b">
        2
      </div>
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
.a{
  width: 100px;
  height: 100px;
  position: relative;
  background-color: pink;
  .b{
    background-color: red;
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0;
  }
}
</style>
