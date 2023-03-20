<template>
  <view>
   <div class="topNavigation" @click="active">
      <div id="kitchen" :class="[isActive=='chuyulaji'?'active':'']">
        <i id="kitchen" class="iconfont icon-chuyulaji"></i>厨余垃圾
      </div>
      <div id="other" :class="[isActive=='qitalaji'?'active':'']">
        <i id="other" class="iconfont icon-qitalaji"></i>其他垃圾
      </div>
      <div id="recyclable" :class="[isActive=='kehuishouwu'?'active':'']">
        <i id="recyclable" class="iconfont icon-kehuishouwu"></i>可回收物
      </div>
      <div id="harmful" :class="[isActive=='youhailaji'?'active':'']">
        <i id="harmful" class="iconfont icon-youhailaji"></i>有害垃圾
      </div>
    </div>
   <chuyulaji></chuyulaji>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        isActive: "chuyulaji",
      };
    },
    methods: {
      active(e) {
        switch (e.target.id) {
          case 'kitchen':
            this.isActive = 'chuyulaji'
            break;
          case 'other':
            this.isActive = 'qitalaji'
            break;
          case 'recyclable':
            this.isActive = 'kehuishouwu'
            break;
          case 'harmful':
            this.isActive = 'youhailaji'
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .topNavigation {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    padding: 10px;
    box-shadow:0 0 5px rgba(0, 0, 0, 0.3);
    div {
      box-sizing: border-box;
      width: 70px;
      height: 70px;
      text-align: center;
      i {
        font-size: 40px;
        text-align: center;
      }
    }

    .active {
      border-bottom: 2px solid coral;
    }
  }
</style>
