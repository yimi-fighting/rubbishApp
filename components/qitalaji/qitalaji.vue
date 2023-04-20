<template>
  <view>
    <div class="container">
      <div class="logo">
        其他垃圾
        <i class="iconfont icon-qitalaji-yantou"></i>
      </div>
      <div class="content">
        <div class="canchulaji">其他垃圾</div>
        <rich-text :nodes="nodes1"></rich-text>  
       <div class="toufangyaoqiu">投放要求</div>
        <rich-text :nodes="nodes2"></rich-text>
      </div>
    </div>
    <list msg="其他垃圾"></list>
  </view>
</template>

<script>
  export default {
    name: "qitalaji",
    data() {
      return {
        nodes1:`<ul style="font-size:13px;color:#565153;margin-left:-12px">
          <li>是指除有害垃圾、可回收物、餐厨垃圾以外的其他生活废弃物</li>
        </ul>
        `,
        nodes2:`<ul style="font-size:13px;color:#565153;margin-left:-12px">
          <li>尽量沥干水分</li>
          <li>难以识别的甚或垃圾投入餐厨垃圾容器内</li>
        </ul>`,
      
      };
    }
  
  }
</script>

<style lang="scss" scoped>
.container{
  margin: 10px 10px;
  background-color: #fff8ef;
  border-radius: 20px;
  padding: 10px;
  .logo{
    margin: 0 auto;
    width: 70px;
    height: 70px;
    background-color: #747371;
    border-radius: 10px;
    color: white;
    font-size: 13px;
    text-align: center;
    padding-top: 10px;
    box-sizing: border-box;
    .icon-qitalaji-yantou{
      font-size: 40px;
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
