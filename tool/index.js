export function typeToClass(list){
 return list.map(item=>{
    if(item.type===0){
       item.class='可回收物'
       return item
    }else if(item.type===1){
       item.class='有害垃圾'
       return item
    }else if(item.type===2){
       item.class='厨余垃圾'
       return item
    }else{
       item.class='其他垃圾'
       return item
    }
  })
}

export function getTitle(list){
  return list.map(item=>{
    const percentage=item.trust<1?item.trust*100:item.trust
    item.title=`${item.name} | 相似度${percentage}%`
    return item
  })
}