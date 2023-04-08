<template>
  <view>
    <div class="search_contain">
      <i class="iconfont icon-fangdajing"></i>
      <!-- 	confirm-type,键盘右下角按钮的文字，
               send	右下角按钮为“发送”
               search	右下角按钮为“搜索”
               next	右下角按钮为“下一个”
               go	右下角按钮为“前往”
               done	右下角按钮为“完成”
    -->
      <input class="search" type="text" confirm-type="search" @blur="search($event)" placeholder="输入垃圾名称">
    </div>
    <div v-if="show">
      <list></list>
    </div>
  </view>
</template>

<script>
  import {
    search
  } from '../../../api/index.js'
  import {
    typeToClass
  } from '../../../tool/index.js'
  export default {
    data() {
      return {
        list: [],
        show:false,
      };
    },
    onLoad(option) {
      // 拿到路由传递过来的参数，解码得到list
      this.list = JSON.parse(decodeURIComponent(option.list))
      this.show=true
      this.$store.dispatch('changeList', {
        list: this.list
      })
    },
    methods: {
      async search(e) {
        this.show=false
        const list = await search(e.detail.value)
        let new_list = typeToClass(list)
        this.$store.dispatch('changeList', {
          list: new_list
        })
        this.show=true
      }
    }
  }
</script>

<style lang="scss">
  .search_contain {
    background-color: white;
    position: relative;
    height: 40px;
    box-sizing: border-box;
    margin: 20px 10px 20px 10px;
    // margin-right: 100px;
    border-radius: 30px;
    border: 1px solid rgb(0, 203, 121);

    .icon-fangdajing {
      background-color: white;
      position: absolute;
      left: 15px;
      line-height: 40px;
      color: rgb(0, 203, 121);
      height: 20px;
    }

    .search {
      padding-left: 40px;
      position: absolute;
      top: 10px;
      font-size: 14px;
    }
  }
</style>
