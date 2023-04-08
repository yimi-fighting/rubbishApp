<template>
  <view>
    <!-- 跳转到h5页面 -->
    <web-view :src="url"></web-view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        url:'',
      };
    },
    onLoad(options) {
      this.url=options.url;
      uni.setNavigationBarTitle({
        title:options.nav
      })
    }
  }
</script>

<style lang="scss">

</style>
