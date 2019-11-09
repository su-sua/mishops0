import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Cookie from 'js-cookie'

export default new Vuex.Store({
	// state 相当于vue data
	// 获取数据 this.$store.state.age
  state: {
	  flag:true,
	  goods:[]
  },
  getters:{
	  getf(state){
		  return state.flag||Cookie.get("islog");
	  }
  },
  // mutations 相当于vue methods
  // 调用方法 this.$store.commit("函数名",参数列表)
  mutations: {  
	  change(state,flag1){
		  state.flag=flag1
		  
		  if(flag1){
			Cookie.set("islog",false)
		}
		  else{
			  Cookie.remove("islog")
		  }
	  }
  },
  actions: {
  },
  modules: {
  }
})
