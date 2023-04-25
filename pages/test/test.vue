<template>
  <view>
    <!-- <button @click="getques">button</button> -->
    <div class="container" v-if="show">
<image src="../../static/picture/test_background.jpg" mode=""></image>
      <movable-area class="movableArea">
        
        <!-- direction移动方向 -->
        <movable-view class="movableView" direction="all" @change="(e)=>onchange(e,item)" v-for="item in questionList"
          :key="item.key" :x="item.x" :y="item.y">
          <button :style="item.style">{{item.val}}</button>
        </movable-view>
        <div class="lajiton">
          <div class="refushBin">
            <div class="chuyulaji bin">
              <image src="../../static/picture/厨余垃圾桶关闭.png" mode=""></image>
            </div>
            <div class="kehuishoulaji bin">
              <image src="../../static/picture/可回收垃圾桶关闭.png" mode=""></image>
            </div>
            <div class="youhailaji bin">
              <image src="../../static/picture/有害垃圾桶关闭.png" mode=""></image>
            </div>
            <div class="qitalaji bin">
              <image src="../../static/picture/其他垃圾桶关闭.png" mode=""></image>
            </div>
          </div>
        </div>
      </movable-area>
    </div>


  </view>
</template>

<script>
  import {
    getQuestions
  } from '../../api/index.js'
  import {
    keyToClass,
    setXY
  }
  from '../../tool/index.js'
  class Card {
    static colorType = {
      1: "background: #FFB7DD ",
      2: " background: #FFCCCC ",
      3: " background: #FFC8B4 ",
      4: " background: #FFDDAA ",
      5: " background: #FFEE99 ",
      6: " background: #FFFFBB ",
      7: " background: #EEFFBB ",
      8: " background: #CCFF99 ",
      9: " background: #99FF99 ",
      10: " background: #BBFFEE ",
      11: " background: #AAFFEE ",
      12: " background: #99FFFF ",
      13: "background: #CCEEFF",
      14: " background: #CCDDFF ",
    }
    constructor(key) {
      this.key = key;
    }

    setValue(name) {
      this.val = name;
      const random = Math.floor(Math.random() * 14) + 1
      this.style = Card.colorType[random]
    }
  }
  export default {
    data() {
      return {
        questionList: [],
        score: '',
        answerList: [],
        show: false,
        // top: 0,
        // left: 0,
        // 拖拽盒子的宽高
        dragWeight: 100,
        dragHeight: 30,
        // 垃圾桶的位置
        chuyulaji: {},
        kehuishoulaji: {
          aa: 'aa'
        },
        youhailaji: {},
        qitalaji: {},
        timer: null,
      }
    },
    methods: {
      // 拖拽卡片触发
      onchange(e, item) {
        // console.log('eee',e,item);
        const dragRect = {
          left: e.detail.x,
          top: e.detail.y,
          right: e.detail.x + this.dragWeight,
          bottom: e.detail.y + this.dragHeight,
        }
        // 进行节流操作，当有500ms没有进行移动时，进行判断到达那个垃圾桶上
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          // 判断位于那个垃圾桶上
          this.judgeBin(dragRect, item)
        }, 300)
      },
      // 判断垃圾位于那个垃圾桶上
      judgeBin(dragRect, item) {
        if (
          dragRect.left >= this.chuyulaji.left &&
          dragRect.right <= this.chuyulaji.right &&
          dragRect.top >= this.chuyulaji.top &&
          dragRect.bottom <= this.chuyulaji.bottom
        ) {
          // console.log('厨余垃圾');
          this.setAnswer('厨余垃圾', item)
        } else if (
          dragRect.left >= this.kehuishoulaji.left &&
          dragRect.right <= this.kehuishoulaji.right &&
          dragRect.top >= this.kehuishoulaji.top &&
          dragRect.bottom <= this.kehuishoulaji.bottom
        ) {
          // console.log('可回收垃圾');
          this.setAnswer('可回收物', item)
        } else if (
          dragRect.left >= this.youhailaji.left &&
          dragRect.right <= this.youhailaji.right &&
          dragRect.top >= this.youhailaji.top &&
          dragRect.bottom <= this.youhailaji.bottom
        ) {
          // console.log('有害垃圾');
          this.setAnswer('有害垃圾', item)
        } else if (
          dragRect.left >= this.qitalaji.left &&
          dragRect.right <= this.qitalaji.right &&
          dragRect.top >= this.qitalaji.top &&
          dragRect.bottom <= this.qitalaji.bottom
        ) {
          // console.log('其他垃圾');
          this.setAnswer('其他垃圾', item)
        }
      },
      // 答题后的操作
      setAnswer(answer, item) {
        let flag=false
        this.answerList.map(e=>{
          if(e.name===item.name){
            flag=true
          }
        })
       if(!flag){
         // 将答案放入answerlist数组中
         this.answerList.push({
           name: item.val,
           answer: item.class,
           yourAnswer: answer,
         })
       }
        // 将卡片从questionlist中移除
        this.questionList = this.questionList.filter(e => {
          return e.key !== item.key
        })
      },
      // 获取题目
      async getques() {
        this.questionList=new Array(10).fill({})
        this.answerList=[]
        const arr = this.questionList.map(async (item, index) => {
          item = await getQuestions()
          let card = new Card(index)
          card.setValue(item.name)
          return card
        })
        this.questionList = await Promise.all(arr)
        // 根据type向对象中添加中文的class
        this.questionList = keyToClass(this.questionList)

        console.log('123456', this.questionList);
        // 随机给卡片添加x和y
        this.questionList = setXY(this.questionList)
        // this.show = true
      },
      // 异步获取垃圾桶的位置
      getBinLocation(id) {
        return new Promise(resolve => {
          // select中的参数就如css选择器一样选择元素
          // 获取 myView 元素的位置和尺寸信息
          uni.createSelectorQuery().in(this).select(`.${id}`).boundingClientRect((res) => {
            // console.log('2312', res);
            let result = {
              left: res.left,
              right: res.right,
              top: res.top,
              bottom: res.bottom,
            }
            resolve(result)
          }).exec();
        })
      }
    },
    watch: {
      // 监听questionlist判断题目是否全部答完
      questionList(newValue, oldValue) {
        // console.log('999',newValue, oldValue);
        if(newValue.length===0){
          console.log('题目答完');
          // 跳转到成绩界面
          let answer=JSON.stringify(this.answerList)
          uni.navigateTo({
            url: `/pages/test/score/score?answerList=${answer}`
          })
        }
      }
    },
    onLoad() {
      // 显示页面
      this.show = true
    },
    async mounted() {
    
 // 获取垃圾桶的位置信息
      this.chuyulaji = await this.getBinLocation('chuyulaji')
      this.kehuishoulaji = await this.getBinLocation('kehuishoulaji')
      this.youhailaji = await this.getBinLocation('youhailaji')
      this.qitalaji = await this.getBinLocation('qitalaji')
    },
  onShow() {
      this.getques()
    },
  };
</script>

<style lang="scss">
  .container {
    display: flex;
    overflow-y: scroll;
    height: 100%;
    // background-color: pink;
image{
width: 100vh;
height: 100vh;
position: relative;
opacity: 0.6;
}
    .movableArea {
      position: absolute;
      // position: fixed;
      // display: flex;
      // top: 0;
      // left: 0;
      width: 100%;
      height: 100vh;
      pointer-events: none;
      // background-color: #edf3ff;
      // background-image: url("../../static/picture/test_background.jpg");
    }

    .movableView {
      width: 100px;
      height: 30px;
      pointer-events: auto; //可以点击
      z-index: 999;

      .card {
        padding: 5px;
        line-height: 30px;
        font-size: 15px;
        text-align: center;
        margin: 10px;
        border-radius: 10px;
        border: 1px solid black;
        box-shadow: -5px -5px 5px rgba(0, 0, 0, 0.2);
        // text-shadow: 3px 3px rgba(0, 0, 0, 0.2);
      }
    }

    .lajiton {
      position: relative;
      bottom: -200px;

      .refushBin {
        display: flex;
        height: 65vh;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-items: center;

        .bin {
          width: 40%;
          height: 150px;
          border-radius: 20px;
          line-height: 60px;
          text-align: center;
          font-size: 30px;
          padding: 5px;

          image {
            width: 100%;
            height: 100%;
            border-radius: 20px;
            // &:hover{
            //   width: 120%;
            //   height: 120%;
            //   transform: translate(-8%,-8%);
            //   transition: 1s;
            // }
          }
        }

        .kehuishoulaji {
          background-color: #0168b7;
          text-shadow: 5px 5px rgba(0, 0, 0, 0.2);
          box-shadow: 0 0 10px #0168b7;
          // opacity: 0.2;
        }

        .chuyulaji {
          background-color: #5dab46;
          text-shadow: 5px 5px rgba(0, 0, 0, 0.2);
          box-shadow: 0 0 10px #5dab46;
          // background-image: url("../..//static/picture/厨余垃圾桶关闭.jpg");
        }

        .youhailaji {
          background-color: #f53327;
          text-shadow: 5px 5px rgba(0, 0, 0, 0.2);
          box-shadow: 0 0 10px #f53327;
        }

        .qitalaji {
          background-color: #747371;
          text-shadow: 5px 5px rgba(0, 0, 0, 0.2);
          box-shadow: 0 0 10px #747371;
        }
      }
    }
  }
  
</style>
