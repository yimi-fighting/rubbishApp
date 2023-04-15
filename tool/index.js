import {
  search
} from '../api/index.js'

export function typeToClass(list) {
  return list.map(item => {
    if (item.type === 0) {
      item.class = '可回收物'
      return item
    } else if (item.type === 1) {
      item.class = '有害垃圾'
      return item
    } else if (item.type === 2) {
      item.class = '厨余垃圾'
      return item
    } else {
      item.class = '其他垃圾'
      return item
    }
  })
}

export function getNewList(list) {
   // 由于item => { ... }箭头函数中使用了async关键字，异步函数会返回一个Promise对象。所以返回一个promise数组
  let arr=list.map(async item => {
    // 添加title
    const percentage = item.trust < 1 ? item.trust * 100 : item.trust
    item.title = `${item.name} | 相似度${percentage}%`
    // 添加list
    // 调用接口查询,根据name调用search得到详细的垃圾种类，将其存在对象的list属性中
    const list = await search(item.name)
    if(list===undefined){
      item.detailList = []
      //判断是否显示手风琴的下拉内容
      item.isShow=false
    }else{
      const newList=typeToClass(list)
      item.detailList = newList
      item.isShow=true
    }
    return item
  })
return arr
}

export function setXY(list){
  return list.map(item=>{
    item.x=Math.random()*300
    item.y=Math.random()*150
    return item
  })
}
