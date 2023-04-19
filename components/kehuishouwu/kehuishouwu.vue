<template>
  <view>
    <div class="container">
      <div class="logo">
        可回收物
        <i class="iconfont icon-kehuishou"></i>
      </div>
      <div class="content">
        <div class="canchulaji">可回收物</div>
        <rich-text :nodes="nodes1"></rich-text>  
       <div class="toufangyaoqiu">投放要求</div>
        <rich-text :nodes="nodes2"></rich-text>
      </div>
    </div>
    <list msg="可回收物"></list>
  </view>
</template>

<script>
  export default {
    name: "kehuishouwu",
    data() {
      return {
        nodes1:`<ul style="font-size:13px;color:#565153;margin-left:-12px">
          <li>是指适宜回收和可循环再利用的废弃物。主要包括废玻璃、废金属、废塑料、废纸张、废织物等。</li>
        </ul>
        `,
        nodes2:`<ul style="font-size:13px;color:#565153;margin-left:-12px">
          <li>轻投轻放</li>
          <li>清洁干燥，避免污染</li>
          <li>废纸尽量平整</li>
          <li>立体包装请清空内容物，清洁后压扁投放</li>
          <li>有尖锐边角的，应包裹后投放</li>
        </ul>`,
      
      };
    }
  
  }
</script>

<style lang="scss" scoped>
.container{
  margin: 10px 10px;
  background-color: #edf3ff;
  border-radius: 20px;
  padding: 10px;
  .logo{
    margin: 0 auto;
    width: 70px;
    height: 70px;
    background-color: #0168b7;
    border-radius: 10px;
    color: white;
    font-size: 13px;
    text-align: center;
    padding-top: 10px;
    box-sizing: border-box;
    .icon-kehuishou{
      margin-top: 5px;
      font-size: 30px;
    }
  }

  .content{
    margin-top: 10px;
    .canchulaji,.toufangyaoqiu{
      color: #378bff;
      font-weight: 600;
      margin: 5px 0;
      font-size: 15px;
      padding-left: 10px;
    }
  }
}
</style>
