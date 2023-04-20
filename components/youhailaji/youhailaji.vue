<template>
  <view>
    <div class="container">
      <div class="logo">
        有害垃圾
        <i class="iconfont icon-youhailaji-xudianchi"></i>
      </div>
      <div class="content">
        <div class="canchulaji">有害垃圾</div>
        <rich-text :nodes="nodes1"></rich-text>  
       <div class="toufangyaoqiu">投放要求</div>
        <rich-text :nodes="nodes2"></rich-text>
      </div>
    </div>
    <list msg="有害垃圾"></list>
  </view>
</template>

<script>
  export default {
    name: "youhailaji",
    data() {
      return {
        nodes1:`<ul style="font-size:13px;color:#565153;margin-left:-12px">
          <li>是指对人体健康或者自然环境造成直接或者潜在威海的零星废弃物，单位集中产生的除外。只要包括废电池、废灯管、非药品、废油漆桶等</li>
        </ul>
        `,
        nodes2:`<ul style="font-size:13px;color:#565153;margin-left:-12px">
          <li>充电电池、纽扣电池、蓄电池投放时请注意轻放</li>
          <li>油漆桶、杀虫剂如有残留请密闭后投放</li>
          <li>荧光灯、节能灯易破碎请连带包装或包裹后轻放</li>
          <li>废药品及其连带包装一并投放</li>
          
        </ul>`,
      
      };
    }
  
  }
</script>

<style lang="scss" scoped>
.container{
  margin: 10px 10px;
  background-color: #fff1f1;
  border-radius: 20px;
  padding: 10px;
  .logo{
    margin: 0 auto;
    width: 70px;
    height: 70px;
    background-color: #f53327;
    border-radius: 10px;
    color: white;
    font-size: 13px;
    text-align: center;
    padding-top: 10px;
    box-sizing: border-box;
    .icon-youhailaji-xudianchi{
      font-size: 35px;
      margin-top: 2px;
    }
  }

  .content{
    margin-top: 10px;
    .canchulaji,.toufangyaoqiu{
      color: #ff4d62;
      font-weight: 600;
      margin: 5px 0;
      font-size: 15px;
      padding-left: 10px;
    }
  }
}
</style>
