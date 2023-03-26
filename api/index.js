// 获取热搜垃圾分类的列表
export async function  getList(type){
  // uni.$http.beforeRequest=function(options){
  //   options.header={'Content-Type':'application/x-www-form-urlencoded'}
  // }
  const {data:res}=await uni.$http.post('https://apis.tianapi.com/hotlajifenlei/index',{
    //   指定垃圾类型，0为可回收、1为有害、2为厨余(湿)、3为其他(干)
    key:'b8441c296ca222b20e6f891bb07167b8',
    type:type
  })
  
  if(res.code===200){
    return res.result.list
  }else{
   uni.showToast({
     title:res.msg,
     icon:'none'
   })
  }
}

export async function search(word){
  const {data:res}=await uni.$http.post('https://apis.tianapi.com/lajifenlei/index',{
    //   指定垃圾类型，0为可回收、1为有害、2为厨余(湿)、3为其他(干)
    key:'b8441c296ca222b20e6f891bb07167b8',
    word:word
  })
  if(res.code===200){
    return res.result.list
  }else{
   uni.showToast({
     title:res.msg,
     icon:'none'
   })
  }
}