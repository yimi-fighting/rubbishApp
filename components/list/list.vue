<template>
  <view>
      <div class="list" v-for="(item,index) in list" :key="item.id">
        <div :class="[index%2==0? 'odd':'even']" @click="active(item)">{{item.name}}</div>
      </div>
      <rubbishDetail v-show="isActive" :item="active_item"></rubbishDetail>
    

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
            class: '餐厨垃圾'
          },
          {
            id: 2,
            name: '菜头菜尾',
            class: '餐厨垃圾'
          },
          {
            id: 3,
            name: '肉蛋食品',
            class: '餐厨垃圾'
          },
          {
            id: 4,
            name: '糖果糕点',
            class: '餐厨垃圾'
          },
        ],
        isActive: true,
        active_item: {
          id: 4,
          name: '糖果糕点',
          class: '餐厨垃圾'
        },
      };
    },
    methods: {
      active(item) {
        this.isActive = !this.isActive
        this.active_item = item
      }
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
</style>
