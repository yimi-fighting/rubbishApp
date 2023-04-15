<template>
  <view class="container">
    <div class="card_container">
      <div class="card">
        <div class="content">
          {{aaa}}
        </div>
      </div><div class="card cover">
        <div class="content">
          {{aaa}}
        </div>
      </div>
    </div>
    <div class="tool">
      <button>取出三张卡片</button>
      <button>随机</button>
      <button>再来一轮</button>
    </div>
    <div class="three_card_container">
      <div class="card">
        <div class="content">
          {{aaa}}
        </div>
      </div> <div class="card">
        <div class="content">
          {{aaa}}
        </div>
      </div> <div class="card">
        <div class="content">
          {{aaa}}
        </div>
      </div></div>
    <div class="choose_card_container">
      <div class="card">
        <div class="content">
          {{aaa}}
        </div>
      </div>   <div class="card">
        <div class="content">
          {{aaa}}
        </div>
      </div>   <div class="card">
        <div class="content">
          {{aaa}}
        </div>
      </div>   <div class="card">
        <div class="content">
          {{aaa}}
        </div>
      </div>   <div class="card">
        <div class="content">
          {{aaa}}
        </div>
      </div>   <div class="card">
        <div class="content">
          {{aaa}}
        </div>
      </div>   <div class="card">
        <div class="content">
          {{aaa}}
        </div>
      </div>
    </div>
  
  </view>
</template>

<script>
  class Card{
    // 0:可回收垃圾；1：有害垃圾；2：湿垃圾；3：干垃圾
    static contentType=[
      {
        name:'📦',
        class:'0',
        style:'background: #73b0ff'
      }, {
        name:'📚',
        class:'0',
        style:'background: #73b0ff'
      }, {
        name:'🔩',
        class:'0',
        style:'background: #73b0ff'
      }, {
        name:'🍶',
        class:'0',
        style:'background: #73b0ff'
      }, {
        name:'👗',
        class:'0',
        style:'background: #73b0ff'
      },{
        name:'💊',
        class:'1',
        style:'background: #ff5c74'
      },{
        name:'🔋',
        class:'1',
        style:'background: #ff5c74'
      },{
        name:'🧪',
        class:'1',
        style:'background: #ff5c74'
      },{
        name:'💉',
        class:'1',
        style:'background: #ff5c74'
      },{
        name:'🎨',
        class:'1',
        style:'background: #ff5c74'
      },{
        name:'🚨',
        class:'1',
        style:'background: #ff5c74'
      },{
        name:'🍎',
        class:'2',
        style:'background: #82eb62'
      },{
        name:'🍗',
        class:'2',
        style:'background: #82eb62'
      },{
        name:'🍌',
        class:'2',
        style:'background: #82eb62'
      },{
        name:'🌿',
        class:'2',
        style:'background: #82eb62'
      },{
        name:'🍂',
        class:'2',
        style:'background: #82eb62'
      },{
        name:'🐟',
        class:'2',
        style:'background: #82eb62'
      },{
        name:'🧻',
        class:'3',
        style:'background: #ced5b2'
      },{
        name:'🚬',
        class:'3',
        style:'background: #ced5b2'
      },{
        name:'👞',
        class:'3',
        style:'background: #ced5b2'
      },{
        name:'🧯',
        class:'3',
        style:'background: #ced5b2'
      }
    ]
  }
  export default {
    data() {
      return {
        options:{},
        aaa:'🧻'
      };
    },
    onLoad(option) {
      // this.options=JSON.parse(option.options)
      this.options={
        x: 6,
        y: 5,
        z: 3,
        random:0.3,
        maxCard:10,
      }
      console.log(this.options);
    }
  }
</script>

<style lang="scss">
  .container{
    width: 100vw;
    height: 100vh;
    position: relative;
    .card_container{
        padding: 30px;
        height: 300px;
        background-color: pink;
      }

    .tool{
      // position: absolute;
      display: flex;
      width: 100vw;
      // transform: translate(-50%,0);
      justify-content: space-around;
    }
    .three_card_container{
      display: flex;
      width: 100%;
      height: 55px;
      padding:10px 20px;
      margin-top: 10px;
      // background-color: green;
      .card{
        margin-right: 7px;
      }
    }
    .choose_card_container{
      display: flex;
      margin-top: 20px;
      width: 95%;
      height: 78px;
      padding:10px 15px;
      background-color: #82eb62;
      border: 1px solid black;
      border-radius: 20px;
      box-sizing: border-box;
      margin: 10px 10px;
      .card{
        margin-right: 7px;
      }
    }
  }
 .card{
   width: 40px;
   height: 50px;
   // background-color: pink;
   border: 1px solid black;
   border-radius: 5px;
   
   .content{
     padding: 2px;
     height: 40px;
     // background-color: #73d3ff;
     background-color: white;
     font-size: 25px;
     text-align: center;
     line-height: 40px;
     border-radius: 5px;
     // pointer-events: none;
       box-shadow: 0px 3px 0 0 #999, 0 8px 0 0 #666, 0 8px 0 2px #000, 0 0 0 2px #000;
       // box-shadow: 0px 3px 0 0 #fff, 0 8px 0 0 #ddd, 0 8px 0 2px #333, 0 0 0 2px #333;
   }
 }
 .cover{
   background-color: #666;
 }

</style>
