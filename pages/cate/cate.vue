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
    <div v-if="isActive=='chuyulaji'">
      <chuyulaji></chuyulaji>
    </div>
    <div v-else-if="isActive=='qitalaji'">
      <qitalaji></qitalaji>
    </div>
    <div v-else-if="isActive=='kehuishouwu'">
      <kehuishouwu></kehuishouwu>
    </div>
    <div v-else-if="isActive=='youhailaji'">
      <youhailaji></youhailaji>
    </div>
  </view>
</template>

<script>
  import {
    getList
  } from '@/api/index.js'
  import {
    onBeforeMount
  } from "vue";
  export default {
    data() {
      return {
        isActive: "",
      };
    },
    // 页面初次渲染时调用
    async onReady() {
      await this.showList(2)
      this.isActive = 'chuyulaji'
    },
    methods: {
     async active(e) {
        switch (e.target.id) {
          case 'kitchen':
           await this.showList(2)
            this.isActive = 'chuyulaji'
            break;
          case 'other':
           await this.showList(3)
            this.isActive = 'qitalaji'
            break;
          case 'recyclable':
            await this.showList(0)
            this.isActive = 'kehuishouwu'
            break;
          case 'harmful':
           await this.showList(1)
            this.isActive = 'youhailaji'

        }
      },
      async showList(type) {
        //   指定垃圾类型，0为可回收、1为有害、2为厨余(湿)、3为其他(干)
        const list = await getList(type)
        this.$store.dispatch('changeList', {
          list
        })
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
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

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
