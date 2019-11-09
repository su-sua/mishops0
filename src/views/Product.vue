<template>
	<div>
		<p>{{this.$route.params.id}}</p>
	<!--  -->
		<!-- 请求服务器 -->
		<van-swipe :autoplay="3000">
		  <van-swipe-item v-for="(item,index) in product.data.goods_info[0].gallery_v3" :key="index">
		    <img :src="item.img_url " style="width:100%"/>
		  </van-swipe-item>
		</van-swipe>
		<van-goods-action>
		  <van-goods-action-icon icon="chat-o" text="首页" />
		  <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
		  <van-goods-action-button type="danger" text="立即预订" />
		</van-goods-action>
		<van-icon @click="$router.go(-1)" name="arrow-left" size=30 style="position: fixed;left:20px;top:20px;"> </van-icon>
	</div>
	
</template>

<script>
	import {product} from '../data.js'
	export default{
		data(){
			return{
				product:product
			}
			
		}
	}
</script>

<style>
</style>
