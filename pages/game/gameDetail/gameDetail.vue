<template>
  <view class="container">
     <image src="../../../static/game2.jpg" mode=""></image>
    <div class="card_container">
     
      <div class="card" :class="[item.cover?'cover':'']" v-for="item in cardList" :key="item.key" :style="item.style" @click="clickCard(item,'true')">{{item.content.name}}</div>
    </div>

    <div class="three_card_container">
      <div class="card" v-for="item in saveList" :key="item.key" :style="item.style" @click="clickCard(item,'false')">{{item.content.name}}</div>
    </div>
    <div class="choose_card_container">
      <div class="card" v-for="item in penddingList" :key="item.key" :style="item.style">{{item.content.name}}</div>
      </div>
      <div class="tool">
        <button @click="removeThree">取出三张卡片</button>
        <button @click="random">随机</button>
        <button @click="again">再来一轮</button>
      </div>
    </div>

  </view>
</template>

<script>
  // 引入垃圾总和的数组
  import contentType from '../../../tool/contentType.js'
  class Card {
    // 卡片的宽高,只有原本高度的一半，因为之后一个卡片占2*2的数组大小，方便形成上层卡片压到下层卡片的某个角的效果。
    static x = 20;
    static y = 25;
    static contentType=[];
    constructor({
      x,
      y,
      z,
      key
    }) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.key = key;
      this.val = key;
      this.content = {};
      this.cover=false;
      this.style = `top: ${y*Card.y+30}px;left:${x*Card.x+30}px;`
    }
    setVal(val) {
      this.val = val-1;
      this.content = Card.contentType[val-1]
      this.style+=`${this.content.style}`
    }
    static setContentType(list){
      Card.contentType=list
    }
  }
  export default {
    data() {
      return {
        options: {},
        aaa: '🧻',
        // 所有卡片
        cardList: [],
        // 保存的三张卡片
        saveList: [],
        // 选择的卡片
        penddingList: [],
        // 判断道具是否可以使用
        tools: {
          three: true,
          random: true,
        },
        // 判断是否以及获胜
        winner: false,
        // 数组的很轴和纵轴
        xUnit: 0,
        yUnit: 0,
        // 用于判断是否构成三张相同的可以消除
        calcValueList:[],
      };
    },
    methods: {
      // 初始化游戏
      init() {
        // 清空list
        this.cardList = []
        this.penddingList = []
        this.saveList = []
        // 重置tools
        this.tools.three = true
        this.tools.random = true
        // 绘制卡片地图
        this.getMaps()
      },
      // 绘制卡片地图
      getMaps() {
        // 初始化网络地图
        let cardMap = this.initMap()
        // 根据卡片密度，向cardmap中放入card,此时的卡片没有内容
        cardMap = this.setCard(cardMap)
        // 设置卡片的内容
        this.setContent()
        // 计算卡片的遮罩关系
        this.calcCover(cardMap)
      },
      clickCard(item,flag){
        // flag用来判断点击的是map中的还是saveList中的
       if(flag){
         // 将点击的卡片冲cardList中去除，保存在penddingList中
         let index=this.cardList.indexOf(item)
         this.cardList=this.cardList.slice(0,index).concat(this.cardList.slice(index+1))
       }else{
         // 将点击的卡片冲cardList中去除，保存在penddingList中
         let index=this.saveList.indexOf(item)
         this.saveList=this.saveList.slice(0,index).concat(this.saveList.slice(index+1))
       }
        // 重新设置item的style
        item.style=`left:${(this.penddingList.length-1)*Card.x*2+60}px;${item.content.style}`
        this.penddingList.push(item)
        // 重新计算遮挡关系
        this.calcCover()
        //判断是否有三个重复的可以消除
        this.cancelCard()
        setTimeout(()=>{
          // 判断是否成功或失败
          this.isWin()
        },500)
      },
      // 判断是否成功或失败
      isWin(){
        if(this.penddingList.length===7){
          uni.navigateTo({
            url:'/pages/game/gameResult/gameResult?winner=false'
          })
        }else if(this.cardList.length===0){
          uni.navigateTo({
            url:'/pages/game/gameResult/gameResult?winner=true'
          })
        }
      },
      // 三个重复的可以消除
      cancelCard(){
        this.calcValueList=new Array(this.options.maxCard).fill(0)
        this.penddingList.some(item=>{
             this.calcValueList[item.val]++
             if(this.calcValueList[item.val]===3){
              // 设置定时器，延后一点进行清除,使第三张卡片显示出来
              setTimeout(()=>{
                // 清除penddinglist中对应的卡片
                this.penddingList=this.penddingList.filter(e=>{
                  return e.val!==item.val
                })
                // 重新更新penddingList中的卡片样式
                this.penddingList=this.penddingList.map((e,index)=>{
                  e.style=`left:${(index-1)*Card.x*2+60}px;${e.content.style}`
                  return e
                })
              },500)
             }
        })
      },
      // 计算卡片遮罩关系
      calcCover(){
        // 从后往前，后面的层数高
        // 初始化cover数组，false表示改位置没有卡片，true表示该位置的上方有卡片，需要设置cover样式
        let coverMap=new Array(this.yUnit)
        for(let i=0;i<this.yUnit;i++){
          coverMap[i]=new Array(this.xUnit).fill(false)
        }
        for(let i=this.cardList.length-1;i>=0;i--){
          const item=this.cardList[i]
          const {x,y}=item
          if(coverMap[y][x]){
            item.cover=true
          }else if(coverMap[y+1][x]){
            item.cover=true
          }else if(coverMap[y][x+1]){
            item.cover=true
          }else if(coverMap[y+1][x+1]){
            item.cover=true
          }else{
            item.cover=false
          }
          coverMap[y][x]=true
          coverMap[y+1][x]=true
          coverMap[y][x+1]=true
          coverMap[y+1][x+1]=true
          
        }
      },
      // 设置卡片的内容
      setContent() {
        const { maxCard} = this.options
        const valStack = new Array(maxCard)
        // 给卡片设置值
        this.cardList.forEach((item) => {
          // 随机一个种类
          const value = Math.ceil(Math.random() * maxCard);
          if (valStack[value]) {
            // 将item赋值这个种类的卡片
            valStack[value].push(item);
            // 将他们进行三个三个配对
            if (valStack[value].length === 3) {
              valStack[value].forEach((item) => {
                item.setVal(value);
              });
              valStack[value] = null;
            }
          } else {
            valStack[value] = [item];
          }
        });
        // 对为进行分类的重新分类
        let count = 2;
        valStack.forEach(list => {
          list && list.map(item => {
            count++
            item.setVal(Math.floor(count / 3))
          })
        })
      },
      // 初始化地图，确认卡片位置
      setCard(map) {
        const {
          x,
          y,
          z,
          random
        } = this.options
        let key = 0
        const cardList = []
        const shrinkSpeed = 3
        for (let k = 0; k < z; k++) {
          const shrink = Math.floor((z - k - 1) / shrinkSpeed)
          const shrinkX = Math.min(Math.floor(this.xUnit / 2) - 2, shrink)
          const shrinkY = Math.min(Math.floor(this.yUnit / 2) - 2, shrink)
          // 行
          // -1是因为y是*2后的，最后一行不能放置卡片，不然就会超出边界
          for (let i = shrinkY; i < this.yUnit - 1 - shrinkY; i++) {
            // 列
            for (let j = shrinkX; j < Math.ceil((this.xUnit - 1) / 2); j++) {
              let canSetCard = true
              if (j > 0 && map[k][i][j - 1]) {
                // 左边不能有卡片
                canSetCard = false
              } else if (i > 0 && map[k][i - 1][j]) {
                // 上面不能有卡片
                canSetCard = false
              } else if (i > 0 && j > 0 && map[k][i - 1][j - 1]) {
                // 左上角不能有卡片
                canSetCard = false
              } else if (i > 0 && map[k][i - 1][j + 1]) {
                // 右上角不能有卡片
                canSetCard = false
              } else if (k > 0 && map[k - 1][i][j]) {
                // 正底下不能有卡片
                canSetCard = false
              }
              // 如果这个位置可以放置卡片，那么根据随机数，设置卡片的密度
              if (canSetCard) {
                const rand = Math.random()
                if (rand < random) {
                  // 设置卡片
                  const card = new Card({
                    x: j,
                    y: i,
                    z: k,
                    key
                  })
                  key++
                  map[k][i][j] = card
                  cardList.push(card)
                  // 对称放置卡片
                  const mirror = this.xUnit - 2 - j
                  if (mirror > j) {
                    const item = new Card({
                      x: mirror,
                      y: i,
                      z: k,
                      key
                    })
                    map[k][i][mirror] = item
                    key++
                    cardList.push(item)
                  }
                }
              }
            }
          }
        }
        // 卡片形成三的倍数,去掉顶层的卡片，因为顶层的卡片最多
        cardList.reverse()
        for (let i = 0; i < cardList.length % 3; i++) {
          let item = cardList.pop()
          map[item.z][item.y][item.x] = 0
        }
        cardList.reverse()
        this.cardList = cardList
        return map
      },
      // 初始化网络地图
      initMap() {
        const {
          x,
          y,
          z
        } = this.options
        this.xUnit = x * 2
        this.yUnit = y * 2
        const cardMap = new Array(z)
        for (var i = 0; i < z; i++) {
          cardMap[i] = new Array(this.yUnit)
          for (var j = 0; j < this.yUnit; j++) {
            cardMap[i][j] = new Array(this.xUnit).fill(0)
          }
        }
        return cardMap
      },
      // 根据maxCard初始化card类中的contentType数组，随机生产垃圾
      initContentType(){
        const contentList=contentType
        // 随机卡片样式数组
        // 洗牌算法
        let shuffle=(arr)=>{
          for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
          return arr;
        }
        const selected=shuffle(contentList).slice(0,this.options.maxCard)
         Card.setContentType(selected)
      },
      
      // 再来一轮
      again() {
        this.init()
      },
      // 随机
      random() {
        if(this.tools.random){
          // 使用洗牌算法
          for (let i = this.cardList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            let temp=this.cardList[i].content
            this.cardList[i].content=this.cardList[j].content
            this.cardList[j].content=temp
          }
          this.tools.random=false
        }else{
          uni.showToast({
            title:'该功能只能使用一次',
            icon:'none'
          })
        }
      },
      // 取出三张卡片
      removeThree() {
        if(this.tools.three){
          // 判断penddingList是否有三张卡片
          let temp;
          if(this.penddingList.length>=3){
            for(let i=0;i<3;i++){
              temp=this.penddingList.pop()
             temp.style=`left:${(this.saveList.length-1)*Card.x*2+60}px;${temp.content.style}`
              this.saveList.push(temp)
            }
          }else{
            while(this.penddingList.length!==0){
              temp=this.penddingList.pop()
              temp.style=`left:${(this.saveList.length-1)*Card.x*2+60}px;${temp.content.style}`
              this.saveList.push(temp)
            }
          }
          this.tools.three=false
          console.log('123',this.saveList);
        }else{
          uni.showToast({
            title:'该功能只能使用一次',
            icon:'none'
          })
        }
      }
    },
    onLoad(option) {
        this.options=JSON.parse(option.options)      
        // 根据maxCard初始化card类中的contentType数组，随机生产垃圾
        this.initContentType()
        // 初始化游戏
        this.init(this.options)
    },
    
  }
</script>

<style lang="scss">
  .container {
    width: 100vw;
    height: 100vh;
    position: relative;
    image{
      position: absolute;
      width: 100vw;
      height: 100vh;
      opacity: 0.6;
    }
    .card_container {
      position: relative;
      padding: 30px;
      height: 300px;
    }

    .tool {
      // position: absolute;
      display: flex;
      width: 100vw;
      // transform: translate(-50%,0);
      justify-content: space-around;
    }

    .three_card_container {
      position: relative;
      display: flex;
      width: 100%;
      height: 55px;
      padding: 10px 20px;
      margin-top: 10px;

      // background-color: green;
      .card {
        margin-right: 7px;
      }
    }

    .choose_card_container {
      position: relative;
      display: flex;
      margin-top: 20px;
      width: 90%;left: 10px;
      height: 70px;
      padding: 10px 15px;
      // background-color: #ccebc6;
      border: 1px solid black;
      border-radius: 20px;
      box-sizing: border-box;
      margin: 10px 10px;
      // opacity: 0.3;

      .card {
        margin-right: 7px;
        // opacity: 10;
      }
    }
  }

  .card {
    font-size: 28px;
    text-align: center;
    position: absolute;
    border-radius: 2px;
    box-sizing: border-box;
    background: #ddd;
    opacity: 1;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0px 3px 0 0 #fff, 0 8px 0 0 #ddd, 0 8px 0 2px #333, 0 0 0 2px #333;

    &:hover {
      transform: scale3d(1.1, 1.1, 1.1);
      z-index: 1;
    }
  }

  .cover {
    pointer-events: none;
    box-shadow: 0px 3px 0 0 #999, 0 8px 0 0 #666, 0 8px 0 2px #000, 0 0 0 2px #000;
  }

  .cover:after {
    border-radius: 2px;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #000;
    opacity: 0.55;
  }
</style>
