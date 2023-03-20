<template>
  <view>
    <div class="list" v-for="(item,index) in list" :key="item.id">
      <div :class="[index%2==0? 'odd':'even']" @click="active(item)">{{item.name}}</div>
    </div>
    <!-- <rubbishDetail v-if="isActive" :item="active_item"></rubbishDetail> -->
    <uni-popup ref="popup" type="dialog">
      <div
        :class="[active_item.class=='厨余垃圾'?'chuyulaji':active_item.class=='其他垃圾'?'qitalaji':active_item.class=='可回收物'?'kehuishouwu':'youhailaji']">
        <div class="name">{{active_item.name}}</div>
        属于
        <div class="class">{{active_item.class}}</div>
        <i class="iconfont"
          :class="[active_item.class=='厨余垃圾'?'icon-chuyulaji-yugu':active_item.class=='其他垃圾'?'icon-qitalaji-yantou':active_item.class=='可回收物'?'icon-kehuishou':'icon-youhailaji-xudianchi']"></i>
      </div>
    </uni-popup>
  </view>
</template>

<script>
  export default {
    name: "list",
    data() {
      return {
        list: [{
            id: 1,
            name: '吃剩的快餐饭菜',
            class: '其他垃圾'
          },
          {
            id: 2,
            name: '菜头菜尾',
            class: '厨余垃圾'
          },
          {
            id: 3,
            name: '肉蛋食品',
            class: '可回收物'
          },
          {
            id: 4,
            name: '糖果糕点',
            class: '有害垃圾'
          },
        ],
        // isActive: false,
        active_item: '',
      };
    },
    methods: {
      active(item) {
        // this.isActive = !this.isActive
        this.active_item = item
        this.$refs.popup.open()
      },
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    padding: 0 10px;

    div {
      height: 30px;
      line-height: 30px;
    }

    .odd {
      background-color: #fafafa;
    }

    .even {
      background-color: #ffffff;
    }
  }

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

  .qitalaji {
    width: 150px;
    height: 150px;
    background-color: #747371;
    border-radius: 10px;
    text-align: center;
    color: white;
    box-sizing: border-box;
    overflow: hidden;

    .name {
      font-size: 20px;
      font-weight: 800;
      margin: 10px 0;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .class {
      margin: 10px 0;
      font-size: 17px;
    }

    .icon-qitalaji-yantou {
      font-size: 45px;
      font-weight: 500;
      margin-top: -10px;
    }
  }

  .kehuishouwu {
    width: 150px;
    height: 150px;
    background-color: #0168b7;
    border-radius: 10px;
    text-align: center;
    color: white;
    box-sizing: border-box;
    overflow: hidden;

    .name {
      font-size: 20px;
      font-weight: 800;
      margin: 10px 0;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .class {
      margin: 10px 0;
      font-size: 17px;
    }

    .icon-kehuishou {
      font-size: 35px;
      font-weight: 500;
      margin-top: 10px;
    }
  }

  .youhailaji {
    width: 150px;
    height: 150px;
    background-color: #f53327;
    border-radius: 10px;
    text-align: center;
    color: white;
    box-sizing: border-box;
    overflow: hidden;

    .name {
      font-size: 20px;
      font-weight: 800;
      margin: 10px 0;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .class {
      margin: 10px 0;
      font-size: 17px;
    }

    .icon-youhailaji-xudianchi {
      font-size: 35px;
      font-weight: 500;
      margin-top: 10px;
    }
  }
</style>
