<template>
	<div class="mm">
		
		<p>{{this.$route.params.id}}</p>
	
		<!-- 请求服务器 -->
			<van-swipe :autoplay="3000">
		  <van-swipe-item v-for="(item,index) in product.data.goods_info[0].gallery_v3" :key="index">
		    <img :src="item.img_url" style="width:100%"/>
		  </van-swipe-item>
		 <!-- <div data-v-ccdb1440="" class="top-overview ui-flex align-center justify-space-between">
			  <div data-v-ccdb1440="" class="top-left fz-m"><span data-v-ccdb1440="" class="pretxt">预付款</span>
			  <div data-v-ccdb1440="" class="price">100</div></div><div data-v-ccdb1440="" class="top-right layout align-center justify-end fz-xs">
			  <p data-v-ccdb1440="" class="text">仅剩</p><!---->
			  <!-- <div data-v-ccdb1440="" class="top-right-time ui-flex align-center justify-end">
				  <div data-v-ccdb1440="" class="day">2天</div>
				  <div data-v-ccdb1440="" class="hour wh">03</div>
				  <div data-v-ccdb1440="" class="spe">:</div>
				  <div data-v-ccdb1440="" class="minut wh">55</div>
				  <div data-v-ccdb1440="" class="spe">:</div>
				  <div data-v-ccdb1440="" class="second wh">33</div>
			  </div>
			  </div> -->
			 
		  <!-- </div> -->
			  </van-swipe>
				<div class="pp1">
					<div>预支付￥100</div>
						<span>
							<van-count-down
							  :time="time"
							format="剩余 DD 天 HH 时 mm 分 ss 秒"
							/>
						</span>
					</div>
			<van-goods-action>
			  <van-goods-action-icon icon="chat-o" text="首页" />
			  <van-goods-action-icon icon="cart-o" text="购物车" info="0" />
			  <van-goods-action-button type="danger" text="立即预订" @click="go" />
			</van-goods-action>
			<van-icon @click="$router.go(-1)" name="arrow-left" size=30 style="position: fixed;left:20px;top:20px;"> </van-icon>
			<div class="fff">
				<p>{{product.data.seo.title}}</p>
			</div>
			<div data-v-ccdb1440="" class="product_info_product_desc">
				<div data-v-ccdb1440="" class="overview overview-goods-brief">
					<div data-v-ccdb1440="" class="goods-brief fz-xs"><font color="#ff4a00">「新品上市，订金预售中，11.11日0点开始支付尾款，支付尾款可参与抽奖，最高赢75英寸小米电视」
					</font>1亿像素超清主摄 / 后置全场景五摄像头 / 双闪光双柔光四闪光灯 / 3200万像素超清前置相机 / 10倍混合光学变焦，50倍数字变焦 / 5260mAh大电量 / 标配30W疾速快充 / 小米首款超薄屏下指纹 / 德国莱茵低蓝光认证 / 多功能NFC / 红外万能遥控 / 1216 超线性扬声器</div>
				</div>
			</div>
	</div>
	
</template>

<script>
	import {ccf} from '../data.js'
	export default{
		data(){
			return{
				product:ccf,
				time: 30 * 60 * 60 * 1000
			}
			
		},
		methods:{
			go(){
				if(this.$store.getters.getf){
					this.$router.push('/login')
				}
				else{
					this.$store.state.goods.push({
						name:this.$route.params.id
					})
						
					
				}
				
				
				
			}
		}
	}
</script>

<style>

/* 	.clonj{
		width: 100%;	 
		height: 50px;
		background-color: #F56600;
	}
	.clonj span{
		margin-top: 0.125rem;
		float: right;
		color: white;
		} */
/* 	.dd{
		color: white;
	} */
	
	.pp1{
		width: 100%;
		height: 60px;
		background-color: orangered;
		margin-top: -4px;
	}
	.pp1 div{
		float: left;
		margin-top: 20px;
		font-size: 16px;
		margin-left: 20px;	
		color: white;
	}
	.pp1 span{
		float: right;
		margin-top: 2px;
		color: white;
	}
	.fff{
		float: left;
	}
	.product_info_product_desc{
		float: left;
	}
</style>
