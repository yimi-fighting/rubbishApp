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
      <!-- 	confirm-type,键盘右下角按钮的文字，
            send	右下角按钮为“发送”
            search	右下角按钮为“搜索”
            next	右下角按钮为“下一个”
            go	右下角按钮为“前往”
            done	右下角按钮为“完成”
 -->
      <input class="search" type="text" confirm-type="search" @blur="search($event)" placeholder="输入垃圾名称">
    </div>
    <!-- 拍照识别 -->
    <div class="photograph" @click="takePohoto">
      <div v-if="show===1">
        <camera device-position="back" flash="off" binderror="error" style="width: 100%; height: 300px;"></camera>
      </div>
      <div v-else-if="show===2">
        <image :src="src" mode="widthFix" class="photo_img"></image>
      </div>
      <div class="photo">
        <i class="iconfont icon-weibiaoti1"></i>
      </div>
      <div class="text">拍照识别</div>
    </div>
    <!-- 弹出层 -->
    <!-- <button @click="open">点击</button> -->
    <uni-drawer ref="showLeft" mode="left" :width="300">
      <uni-collapse accordion v-model="accordionVal" @change="change" class="collapse_container">
        <uni-collapse-item :title="item.title" :show-arrow="false" v-for="(item,index) in photoList" :key="index" class="collapse_item">
            <div v-for="(item,index) in list_search" :key="index" class="content">
              <div class="name">{{item.name}}</div>
              <div :class="[item.class=='厨余垃圾'?'chuyulaji type':item.class=='其他垃圾'?'qitalaji type':item.class=='可回收物'?'kehuishouwu type':'youhailaji type']">{{item.class}}</div>
            </div>
        </uni-collapse-item>
      </uni-collapse>
    </uni-drawer>

    <!-- 首页新闻 -->
    <div class="new_contain">
      <div class="news">热点新闻</div>
      <div v-for="(item,index) in list" :key="item.id" class="new_item" @click="newsDetail(item.url,item.title)">
        <div class="left">
          <div class="title">{{item.title}}</div>
          <div class="time">{{item.ctime}}</div>
          <div class="description">{{item.description}}</div>
        </div>
        <div class="right">
          <div class="picUrl"><img :src="item.picUrl" alt=""></div>
        </div>
      </div>
    </div>
  </view>
</template>

<script>
  import {
    search,
    news,
    identifyPhoto
  } from '../../api/index.js'
  import {
    typeToClass,
    getTitle
  } from '../../tool/index.js';
  export default {
    data() {
      return {
        page: 1,
        list: [],
        src: '',
        show: 0,
        list_search: [],
        // 手风琴
        accordionVal: '1',
        photoList: [{
        "name": "化妆品",
        "trust": 20,
        "lajitype": 1,
        "lajitip": "化妆品是有毒有害垃圾，常见包括废电池、废油漆桶、各类过期药品等。投放时应注意尽量排空内容物或包裹妥善后投放。",
        title:`化妆品，20%`
      },],
      };
    },
    methods: {
      async search(e) {
        const list = await search(e.detail.value)
        // 获取搜索的信息
        let new_list = typeToClass(list)
        uni.navigateTo({
          // 动态路由跳转，传递参数
          url: '/pages/home/search/search?list=' + encodeURIComponent(JSON.stringify(new_list)),
          // 跳转成功回调
          success() {
            // console.log('success');
          },
          // 跳转失败回调
          fail() {
            // console.log('fail');
          },
          // 跳转完成回调
          complete() {
            // console.log('wanc');
          }
        })
      },
      async getNews(page) {
        const list = await news(page)
        this.list = [...this.list, ...list]
        // console.log(this.list);
      },
      newsDetail(url, navtitle) {
        // plus.runtime.openURL(url)
        console.log(url, navtitle);
        uni.navigateTo({
          url: `/pages/webview/webview?url=${url}&nav=${navtitle}`
        })
      },
      takePohoto() {
        // console.log('takephoto');
        this.show = 1
        const ctx = uni.createCameraContext()
        // console.log(ctx);
        ctx.takePhoto({
          quality: 'high',
          success: async (res) => {
            this.src = res.tempImagePath
            // 显示图片
            this.show = 2
            // 将本地图片转成array类型
            const base64Img = uni.getFileSystemManager().readFileSync(res.tempImagePath, 'base64')
            // 发送请求进行图片识别
            const result= await identifyPhoto(base64Img)
            const new_list=getTitle(result)
            this.photoList=new_list
            console.log(this.photoList);
            this.$refs.showLeft.open()
            // console.log('sadasdasda',new_list);
          }
        })
      },
      async change(e) {
        console.log('item',e);
        const name = this.photoList[e].name
        const list = await search(name)
        console.log('typeof',list);
        if (list===undefined) {
          console.log('数据空');
          this.list_search = []
        }
        else {
          // 获取搜索的信息
          let new_list = typeToClass(list)
          // 获取list的高度，解决空数组时，高度依然存在的问题
          // this.photoList[e].height=new_list.length*50
          console.log('new_list', new_list);
          this.list_search = new_list
        }
      },
    },
    onReachBottom() {
      // 滚动条触底加载更多
      this.getNews(++this.page)
    },
    onLoad() {
      this.getNews(this.page)
      this.$refs.showLeft.open()
    }
  }
</script>

<style lang="scss">
  view {
    background-color: rgb(247, 247, 247);
  }

  swiper {
    .swiper-item,
    image {
      width: 100%;
      height: 100%;
    }
  }
  .search_contain {
    background-color: white;
    position: relative;
    height: 40px;
    box-sizing: border-box;
    margin: 20px 10px 20px 10px;
    // margin-right: 100px;
    border-radius: 30px;

    .icon-fangdajing {
      background-color: white;
      position: absolute;
      left: 15px;
      line-height: 40px;
      color: rgb(0, 203, 121);
    }
    .search {
      padding-left: 40px;
      position: absolute;
      top: 10px;
      font-size: 14px;
    }
  }
  .photograph {
    position: relative;

    .photo_img {
      width: 100%;
    }

    .photo {
      position: relative;
      width: 70px;
      height: 70px;
      background-color: rgb(0, 203, 121);
      border-radius: 50%;
      margin: 0 auto;

      .icon-weibiaoti1 {
        position: absolute;
        left: 35%;
        top: 35%;
        width: 20px;
        color: white;
        height: 20px;
        font-size: 40px;
        background-color: rgb(0, 203, 121);
        transform: translate(-50%, -50%);
      }
    }

    .text {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      margin-top: 10px;
      color: rgb(0, 203, 121);
      font-size: 14px;
      font-weight: 600;
      height: auto;
    }
  }
  .new_contain {
    height: auto;
    margin-top: 50px;

    .news {
      font-size: 25px;
      margin: 20px;
      border-left: 3px red solid;
      padding-left: 10px;
    }

    .new_item {
      border: 1px dashed black;
      border-radius: 10px;
      margin: 10px;
      padding: 5px;
      // background-color: pink;
      display: flex;

      .left {
        .title {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          -webkit-line-clamp: 1;
          text-overflow: ellipsis;
        }

        .time {
          font-size: 14px;
          line-height: 25px;
          color: dimgray;
        }

        .description {
          font-size: 13px;
          color: darkgray;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 3;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
        }
      }

      .right {
        margin-left: 10px;

        .picUrl {
          width: 70px;
          height: 70px;
          padding-top: 15px;

          img {
            width: 100%;
            height: 100%;
            object-fit: fill;
          }
        }
      }
    }
  }
  .photo_item {
    height: 50px;
    display: flex;
    line-height: 50px;
    background-color: #55bf53;
    color: white;
    border-bottom: 1px dashed #55bf53;
    padding-left: 10px;

    div {
      background-color: #55bf53;
    }

    .fenge {
      margin: 0 5px;
    }

    .icon {
      line-height: 50px;
      margin-right: 5px;
    }
  }

.collapse_container{
.collapse_item{
  .content{
    display: flex;
    height: 50px;
    padding: 0 10px;
    line-height: 50px;
    justify-content: space-between;
    .type{
      height: 30px;
      // display: inline;
      border-radius: 30px;
      color: white;
      box-sizing: border-box;
      margin-top: 10px;
      line-height: 30px;
      padding: 0 10px;
    }
    .chuyulaji{
      background-color: #5dab46;
    }
    .qitalaji{
      background-color: #747371;
    }
    .kehuishouwu{
      background-color: #0168b7;
    }
    .youhailaji{
      background-color: #f53327;
    }
  }
}
}
</style>
