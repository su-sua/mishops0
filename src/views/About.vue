<template>
  <div class="about">
	  <div class="home_top">
	  	<van-search
	  	  v-model="value"
	  	  placeholder="请输入搜索关键词"
	  	  show-action
	  	  shape="round"
	  	  @search="onSearch"
	  	>
	  	  <div slot="action" @click="onSearch">搜索</div>
	  	</van-search>
	  </div>
    <van-tabs v-model="active" v-if="data.data">
      <van-tab v-for="item in data.data.tabs" :title="item.name">
		  <div v-show="active==0">
			  
			16163616
			  
		  </div>
		  <div v-show="active==1">手机模式</div>
		  <div v-show="active==2">智能电气</div>
		  <div v-show="active==3">电视模式</div>
      </van-tab>
	  
    </van-tabs>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
	data(){
	  return{
		  active:0,
		  data:{},
		  value:""
	  }
	},
	// 请求数据
	created(){
		// this.data={} 
		this.getRecommendDate();
	},
	watch:{
		active:function(oldvalue,newvalue){
			console.log(this.active);
		}
	},
	methods:{
		getRecommendDate(){
			if(localStorage.getItem("data")){
				console.log("页面数据有缓存，不需要请求网络")
				this.data=JSON.parse(localStorage.getItem("data"));
			}
			else{
				this.$http({
					url:'http://biger.applinzi.com/page.php',
					method:'get',
				}).then(res=>{
					console.log(res);
					this.data=res.data;  
					localStorage.setItem("data",JSON.stringify(this.data))
				})
			}
		},
	  //搜索事件
	  onSearch(){
		  
	  },
	},
	components: {
	// HelloWorld
	}
}
</script>