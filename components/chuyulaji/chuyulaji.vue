<template>
  <view>
    <div class="container">
      <div class="logo">
        厨余垃圾
        <i class="iconfont icon-chuyulaji-yugu"></i>
      </div>
      <div class="content">
        <div class="canchulaji">餐厨垃圾</div>
        <rich-text :nodes="nodes1"></rich-text>  
       <div class="toufangyaoqiu">投放要求</div>
        <rich-text :nodes="nodes2"></rich-text>
      </div>
    </div>
    <list msg="厨余垃圾"></list>
  </view>
</template>

<script>
  export default {
    name: "chuyulaji",
    data() {
      return {
        nodes1:`<ul style="font-size:13px;color:#565153;margin-left:-12px">
          <li>指居民日常生活及食品加工、饮食服务、单位供餐等活动中产生的垃圾，包括丢弃不用的菜叶、剩菜、剩饭、果皮、蛋壳、茶渣、骨头等</li>
        </ul>
        `,
        nodes2:`<ul style="font-size:13px;color:#565153;margin-left:-12px">
          <li>存流质的食物垃圾，如牛奶等，应直接倒进下水口</li>
          <li>有包装物的其他垃圾应将包装物取出后分类投放，包装物请投放到对应的可回收物容器或餐厨垃圾容器</li>
        </ul>`,
      
      };
    }
  
  }
</script>

<style lang="scss" scoped>
.container{
  margin: 10px 10px;
  background-color: rgb(237, 243, 255);
  border-radius: 20px;
  padding: 10px;
  .logo{
    margin: 0 auto;
    width: 70px;
    height: 70px;
    background-color: #5dab46;
    border-radius: 10px;
    color: white;
    font-size: 13px;
    text-align: center;
    padding-top: 10px;
    box-sizing: border-box;
    .icon-chuyulaji-yugu{
      font-size: 45px;
    }
  }

  .content{
    margin-top: 10px;
    .canchulaji,.toufangyaoqiu{
      color: #feb549;
      font-weight: 600;
      margin: 5px 0;
      font-size: 15px;
      padding-left: 10px;
    }
  }
}
</style>
