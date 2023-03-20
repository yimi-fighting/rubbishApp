<template>
  <view>
    <!-- <uni-calendar :insert="true" :lunar="true" :start-date="'2019-3-2'" :end-date="'2019-5-20'" @change="change" /> -->
    <!-- <div class="chuyulaji">
        <div class="name">{{item.name}}</div>
        属于
        <div class="class">{{item.class}}</div>
        <i class="iconfont icon-chuyulaji-yugu"></i>
      </div> -->
      <!-- <uni-popup ref="popup" type="bottom">底部弹出 Popup</uni-popup> -->
    <!--  <uni-calendar 
      	:insert="true"
      	:lunar="true" 
      	:start-date="'2019-3-2'"
      	:end-date="'2019-5-20'"
      	@change="change"
      	 /> -->
         <button @click="open">打开弹窗</button>
         <uni-popup ref="popup" type="dialog">
         	<uni-popup-dialog mode="input" message="成功消息" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
         </uni-popup>
  </view>
</template>

<script>
  export default {
    name: "rubbishDetail",
    props: ['item'],
    data() {
      return {

      };
    },
    methods:{
      open() {
        console.log(this.$refs.popup);
      			this.$refs.popup.open()
      		},
      		/**
      		 * 点击取消按钮触发
      		 * @param {Object} done
      		 */
      		close() {
      			// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 close 才会关闭对话框
      			// ...
      			this.$refs.popup.close()
      		},
      		/**
      		 * 点击确认按钮触发
      		 * @param {Object} done
      		 * @param {Object} value
      		 */
      		confirm(value) {
      			// 输入框的值
      			console.log(value)
      			// TODO 做一些其他的事情，手动执行 close 才会关闭对话框
      			// ...
      			this.$refs.popup.close()
      		}
    }

  }
</script>

<style lang="scss">
  .chuyulaji {
    width: 150px;
    height: 150px;
    background-color: #5dab46;
    border-radius: 10px;
    text-align: center;
    color: white;
    box-sizing: border-box;
    overflow: hidden;

    .name {
      font-size: 20px;
      font-weight: 800;
      margin: 10px 0;
    }

    .class {
      margin: 10px 0;
      font-size: 17px;
    }

    .icon-chuyulaji-yugu {
      font-size: 50px;
      font-weight: 500;
      margin-top: -10px;
    }
  }
</style>
