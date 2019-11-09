<template>
	<div>
		<div>
			<van-nav-bar title="购物车"  left-arrow left-text="返回"   @click-left="onClickLeft">
				<van-icon name="arrow-left" slot="left"  />
			  <van-icon name="search" slot="right" />
			</van-nav-bar>
			<!-- <van-nav-bar title="分类" left-text="返回" left-arrow  @click-left="onClickLeft" @click-right="onClickRight">
			  <van-icon name="search" slot="right" /> -->
		</div>
		<div class="go" @click="go" v-show="this.$store.getters.getf">
			<span>登录后享受更多优惠</span>
			<span id="wde">去登录></span>
		</div>
		<div class="container">
			<table v-show="!this.$store.getters.getf" border="" cellpadding="" cellspacing="">
				<th>商品名</th>
				<th>价格</th>
				<th>数量</th>		
				<tr v-for="item in this.$store.state.goods">
				<td>{{item.name}}</td>
				<td>{{price}}</td>
				<td><button @click="ssd">-</button>{{num}}<button @click="ssf">+</button></td>
				
				</tr>
				
				
			</table>
		</div>
		<van-image
		
		  width="100%"
		  height="80"
		  :src="car.data.header.body.items[0].img_url"
		/>
		<div >
			<van-row type="flex" justify="space-around">
			  <van-col span="12">
				  <van-image
				    @click="goto(car.data.recom_list[0].name)"
				    width="90%"
				    height="150"
				    :src="car.data.recom_list[0].image_url"
				  />
				  <p>{{car.data.recom_list[0].name}}</p>
				  <p>{{car.data.recom_list[0].price}}</p>
			  </van-col>
			  <van-col span="12">
				  <van-image
				  @click="goto(car.data.recom_list[1].name)"
				    width="90%"
				    height="150"
				    :src="car.data.recom_list[1].image_url"
				  />
				  <p>{{car.data.recom_list[1].name}}</p>
				  <p>{{car.data.recom_list[1].price}}</p>
			  </van-col>
			</van-row>
		</div>
		<div >
			<van-row type="flex" justify="space-around">
			  <van-col span="12">
				  <van-image
				  @click="goto(car.data.recom_list[2].name)"
				    width="90%"
				    height="150"
				    :src="car.data.recom_list[2].image_url"
				  />
				  <p>{{car.data.recom_list[2].name}}</p>
				  <p>{{car.data.recom_list[2].price}}</p>
			  </van-col>
			  <van-col span="12">
				  <van-image
				  @click="goto(car.data.recom_list[3].name)"
				    width="90%"
				    height="150"
				    :src="car.data.recom_list[3].image_url"
				  />
				  <p>{{car.data.recom_list[3].name}}</p>
				  <p>{{car.data.recom_list[3].price}}</p>
			  </van-col>
			</van-row>
		</div>
		<div >
			<van-row type="flex" justify="space-around">
			  <van-col span="12">
				  <van-image
				  @click="goto(car.data.recom_list[4].name)"
				    width="90%"
				    height="150"
				    :src="car.data.recom_list[4].image_url"
				  />
				  <p>{{car.data.recom_list[4].name}}</p>
				  <p>{{car.data.recom_list[4].price}}</p>
			  </van-col>
			  <van-col span="12">
				  <van-image
				  @click="goto(car.data.recom_list[5].name)"
				    width="90%"
				    height="150"
				    :src="car.data.recom_list[5].image_url"
				  />
				  <p>{{car.data.recom_list[5].name}}</p>
				  <p>{{car.data.recom_list[5].price}}</p>
			  </van-col>
			</van-row>
		</div>
		<div @click="goto">
			<van-row type="flex" justify="space-around">
			  <van-col span="12">
				  <van-image
				  @click="goto(car.data.recom_list[6].name)"
				    width="90%"
				    height="150"
				    :src="car.data.recom_list[6].image_url"
				  />
				  <p>{{car.data.recom_list[6].name}}</p>
				  <p>{{car.data.recom_list[6].price}}</p>
			  </van-col>
			  <van-col span="12">
				  <van-image
				  @click="goto(car.data.recom_list[7].name)"
				    width="90%"
				    height="150"
				    :src="car.data.recom_list[7].image_url"
				  />
				  <p>{{car.data.recom_list[7].name}}</p>
				  <p>{{car.data.recom_list[7].price}}</p>
			  </van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
	import {gos} from '../data.js'
	export default{
		data(){
			return{
				car:gos,
				loading:"",
				num:1,
				price:1000
			}
		},
		methods: {
		    onClickLeft() {
		      this.$router.go(-1)
		    },
		    onClickRight() {
		      Toast('按钮');
		    },
			go(){
				this.$router.push(`login`)
			},
			goto(id){
				this.$router.push(`/tza/${id}`)
			},
			ssd(){
				this.num--;
			},
			ssf(){
				// this.$store.state.goods.forEach((item)=>{
				// 	if(item.name==this.$route.params.id)
				// 	{
				// 		item
				// 	}
				// })
				// this.goods.forEach((item)=>{
				// 	if(item==this.data.price)
				// 	{
						
				// 	}
				// })
				this.num++;
			}
		  }
	}
</script>

<style lang="less">
.go{
	width: 100%;
	background-color: papayawhip;
	height: 50px;
	span{
		position: relative;
		top: 12px;
		left: -50px;
	}
	#wde{
		position: relative;
		top: 12px;
		left: 50px;
	}
}
.container{
	display: flex;
	justify-content: center;
}
</style>
