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

export async function news(page){
  const {data:res}=await uni.$http.post('https://apis.tianapi.com/lajifenleinews/index',{
    key:'b8441c296ca222b20e6f891bb07167b8',
    num:10,
    word:'广州',
    page:page
  })
  if(res.code===200){
    return res.result.newslist
  }else{
    uni.showToast({
      title:res.msg,
      icon:'none'
    })
  }
}

export async function identifyPhoto(base64){
  const {data:res}=await uni.$http.post('https://apis.tianapi.com/imglajifenlei/index',{
    key:'b8441c296ca222b20e6f891bb07167b8',
    img:base64
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

export async function getQuestions(){
  const {data:res}=await uni.$http.post('https://apis.tianapi.com/anslajifenlei/index',{
    key:'b8441c296ca222b20e6f891bb07167b8'
  })
  if(res.code===200){
    return res.result
  }else{
    uni.showToast({
      title:res.msg,
      icon:'none'
    })
  }
}