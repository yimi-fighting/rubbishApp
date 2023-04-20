<template>
  <view>
    <div class="title">垃圾分类考试
        <div class="score">{{score}}分</div></div>
    <div class="container">
   <uni-table class="table"  emptyText="暂无更多数据" >
   	<!-- 表头行 -->
   	<uni-tr>
      <uni-th align="center" width="20">序号</uni-th>
   		<uni-th align="center" width="20">题目</uni-th>
   		<uni-th align="center" width="20">我的答案</uni-th>
   		<uni-th align="center" width="20">正确答案</uni-th>
   	</uni-tr>
   	<!-- 表格数据行 -->
   	<uni-tr v-for="(item,index) in answer" :key="index">
      <uni-td align="center" >{{index+1}}</uni-td>
   		<uni-td align="center" >{{item.name}}</uni-td>
   		<uni-td align="center"><div :class="[item.answer!==item.yourAnswer?'error':'']">{{item.yourAnswer}}</div></uni-td>
   		<uni-td align="center" >{{item.answer}}</uni-td>
   	</uni-tr>
   </uni-table>
    </div>
   <button type="primary" plain="true" @click="again">再来一次</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        score:0,
        answer:[ ]
      };
    },
    methods:{
      again(){
        uni.switchTab({
          url:'/pages/test/test'
        })
      }
    },
    onLoad(options) {
      this.answer=JSON.parse(options.answerList)
      // 计算得分
      const eachScore=100/this.answer.length
      this.answer.map(item=>{
        if(item.answer===item.yourAnswer){
          this.score+=eachScore
        }
      })
    }
  }
</script>

<style lang="scss">
.title{
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
font: italic 30px "Fira Sans", serif;
 font-weight: 700;
 text-align: center;
 line-height: 70px;
 .score{
   line-height: 30px;
   color: red;
 }
  
}
.error{
    color: red;
    text-decoration: line-through;
  }
</style>
