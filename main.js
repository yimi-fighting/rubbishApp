import App from './App'
import {$http} from "@escook/request-miniprogram"
import "./static/iconfonts/iconfont.css"
import store from './store/index.js'

uni.$http=$http
//请求前显示loading
$http.beforeRequest=function(options){
    options.header={'Content-Type':'application/x-www-form-urlencoded'}
  uni.showLoading({
    title:"数据加载中……"
  })
  // options.header={'Content-Type':'application/x-www-form-urlencoded'}
}

// 请求后隐藏loading
$http.afterRequest=function(res){
  uni.getSystemInfo({
    success: function(res) {
      if (res.isLoading) {
        console.log('当前页面正在加载中...')
        uni.hideLoading()
      } else {
        console.log('当前页面未处于加载状态')
         // uni.hideLoading()
      }
    },
    fail: function(res) {
      console.log('获取页面状态信息失败')
    }
  })
  uni.hideLoading()
}



// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

try {
  function isPromise(obj) {
    return (
      !!obj &&
      (typeof obj === "object" || typeof obj === "function") &&
      typeof obj.then === "function"
    );
  }

  // 统一 vue2 API Promise 化返回格式与 vue3 保持一致
  uni.addInterceptor({
    returnValue(res) {
      if (!isPromise(res)) {
        return res;
      }
      return new Promise((resolve, reject) => {
        res.then((res) => {
          if (res[0]) {
            reject(res[0]);
          } else {
            resolve(res[1]);
          }
        });
      });
    },
  });
} catch (error) { }

const app = new Vue({
  // 引入vuex
  store,
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif