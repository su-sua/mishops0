<template>
	<div class="home">
		<!-- <img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<div class="home_top">
			<div class="img_tog">
			<img src="../assets/mi.png" alt="">
			</div>
			<van-search
			  v-model="value"
			  placeholder="请输入搜索关键词"
			  show-action
			  shape="round"
			  @search="onSearch"
			>
			  <div slot="action" @click="onSearch">搜索</div>
			</van-search>
			<div class="s_nav3"><van-icon size="27px" name="manager-o"  @click="ss"/></div>
		</div>
		<!-- <div class="home_top">
			<van-search
			  v-model="value"
			  placeholder="请输入搜索关键词"
			  show-action
			  shape="round"
			  @search="onSearch"
			>
			  <div slot="action" @click="onSearch">搜索</div>
			</van-search>
		</div> -->
		
		<div class="title_label">
			<!-- 标签显示 -->
			<van-tabs v-model="active" v-if="data.data">
			  <van-tab v-for="item in data.data.tabs" :title="item.name">
				<!-- 推荐标签内容显示 -->
			    <div v-show="active==0">
					<!--内容显示 -->
					<div class="recommend">
						<!-- 轮播图 -->
						<van-swipe :autoplay="3000">
							<van-swipe-item v-for="(image, index) in data.data.data.sections[0].body.items" :key="index">
								<img :src="image.img_url_webp" width="100%"/>
							</van-swipe-item>
						</van-swipe>
						<!-- 宫格 1-->
						<van-grid icon-size="63px" :column-num="5">
						  <van-grid-item
						    v-for="(value,index) in data.data.data.sections[1].body.items"
						    :key="index"
						    :icon="value.img_url_webp"
						  />
						</van-grid>
						<!-- 宫格 2-->
						<van-grid icon-size="63px" :column-num="5">
						  <van-grid-item
						    v-for="(value,index) in data.data.data.sections[2].body.items"
						    :key="index"
						    :icon="value.img_url_webp"
						  />
						</van-grid>
						<!-- 分割线 -->
						<div class="line_div"></div>
						<!-- layout布局 1-->
						<van-row >
							<van-col span="12">
								<img width="100%" :src="data.data.data.sections[4].body.items[0].img_url_webp">
							</van-col>
							<van-row flex-wrap="wrap" justify-content="space-around">
								<van-col span="12">
									<img width="100%" :src="data.data.data.sections[4].body.items[1].img_url_webp">
								</van-col>
								<van-col span="12">
									<img width="100%" :src="data.data.data.sections[4].body.items[2].img_url_webp">
								</van-col>
							</van-row>  
						</van-row>
						<!-- 分割线 -->
						<div class="line_div"></div>
						<!-- layout布局 2-->
						<van-row type="flex" justify="center">
							<van-col >
								<img width="100%" :src="data.data.data.sections[6].body.items[0].img_url_webp">
							</van-col>
						</van-row>
						<!-- 分割线 -->
						<div class="line_div"></div>
						<!-- layout布局 3-->
						<van-row type="flex" justify="center">
							<van-col >
								<img width="100%" :src="data.data.data.sections[8].body.items[0].img_url_webp">
							</van-col>
						</van-row>
						<!-- 分割线 -->
						<div class="line_div"></div>
						<!-- layout布局 手机购买 1-->
						<van-row class="van_buy1">
						  <van-col span="12" v-for="item in data.data.data.sections[10].body.items">
							  <img :src="item.img_url_webp">
							  <p id="p1">{{item.product_name}}</p>
							  <span id="span1">{{item.product_brief}}</span>
							  <p id="p2">￥{{item.product_price}}</p>
							  <van-button id="button_pay" type="primary" size="small">立即购买</van-button>
						  </van-col>
						</van-row>
						<!-- 分割线 -->
						<div class="line_div"></div>
						<!-- layout布局 手机购买 2-->
						<van-row class="van_buy1">
						  <van-col span="12" v-for="item in data.data.data.sections[12].body.items">
							  <img :src="item.img_url_webp">
							  <p id="p1">{{item.product_name}}</p>
							  <span id="span1">{{item.product_brief}}</span>
							  <p id="p2">￥{{item.product_price}} <span id="money_del">￥{{item.product_org_price}}</span></p>
							  <van-button id="button_pay" type="primary" size="small">立即购买</van-button>
						  </van-col>
						</van-row>
						<!-- 分割线 -->
						<div class="line_div"></div>
						<!-- layout布局 手机购买 3-->
						<!-- <van-row class="van_buy1">
						  <van-col span="12" v-for="item in data.data.data.sections[14].body.items">
							  <img :src="item.img_url_webp">
							  <p id="p1">{{item.product_name}}</p>
							  <span id="span1">{{item.product_brief}}</span>
							  <p id="p2">￥{{item.product_price}} <span id="money_del">￥{{item.product_org_price}}</span></p>
							  <van-button id="button_pay" type="primary" size="small">立即购买</van-button>
						  </van-col>
						</van-row> -->
						<br>
						
						<!-- 分割线 -->
						<div class="line_div"style="background-color: #C8C9CC;height: 1px;"></div>
						<!-- 更多小米手机产品 -->
						<van-row type="flex" justify="center">
							<van-col >
								<p class="more_product">{{data.data.data.sections[14].body.items[0].action_title}} ></p>
							</van-col>
						</van-row>
						
						<!-- 分割线 -->
						<div class="line_div"></div>
						<van-row type="flex" justify="center">
							<van-col >
								<img width="100%" :src="data.data.data.sections[16].body.items[0].img_url_webp">
							</van-col>
						</van-row>
						<!-- 分割线 -->
						<div class="line_div"></div>
						<van-row type="flex" justify="center">
							<van-col >
								<img width="100%" :src="data.data.data.sections[18].body.items[0].img_url_webp">
							</van-col>
						</van-row>
						
						<!-- 分割线 -->
						<div class="line_div"></div>
						
						<!-- layout布局 电视购买 1-->
						<van-row class="van_buy1">
						  <van-col span="12" v-for="item in data.data.data.sections[20].body.items">
							  <img :src="item.img_url_webp">
							  <p id="p1">{{item.product_name}}</p>
							  <span id="span1">{{item.product_brief}}</span>
							  <p id="p2">￥{{item.product_price}}</p>
							  <van-button id="button_pay" type="primary" size="small">立即购买</van-button>
						  </van-col>
						</van-row>
						<!-- 分割线 -->
						<!-- <div class="line_div"></div> -->
						<!-- layout布局 电视购买 2-->
						<van-row class="van_buy1">
						  <van-col span="12" v-for="item in data.data.data.sections[22].body.items">
							  <img :src="item.img_url_webp">
							  <p id="p1">{{item.product_name}}</p>
							  <span id="span1">{{item.product_brief}}</span>
							  <p id="p2">￥{{item.product_price}} <span id="money_del">￥{{item.product_org_price}}</span></p>
							  <van-button id="button_pay" type="primary" size="small">立即购买</van-button>
						  </van-col>
						</van-row>
						<!-- 分割线 -->
						<div class="line_div"></div>
						<!-- layout布局 电视购买 3-->
						<van-row class="van_buy1">
						  <van-col span="12" v-for="item in data.data.data.sections[24].body.items">
							  <img :src="item.img_url_webp">
							  <p id="p1">{{item.product_name}}</p>
							  <span id="span1">{{item.product_brief}}</span>
							  <p id="p2">￥{{item.product_price}} <span id="money_del">￥{{item.product_org_price}}</span></p>
							  <van-button id="button_pay" type="primary" size="small">立即购买</van-button>
						  </van-col>
						</van-row>
						<br>
						
						<!-- 分割线 -->
						<div class="line_div"style="background-color: #C8C9CC;height: 1px;"></div>
						<!-- 更多小米电视产品 -->
						<van-row type="flex" justify="center">
							<van-col >
								<p class="more_product">{{data.data.data.sections[26].body.items[0].action_title}} ></p>
							</van-col>
						</van-row>
						
						<!-- 分割线 -->
						<div class="line_div"></div>
						<van-row type="flex" justify="center">
							<van-col >
								<img width="100%" :src="data.data.data.sections[28].body.items[0].img_url_webp">
							</van-col>
						</van-row>
						<!-- 分割线 -->
						<div class="line_div"></div>
						<van-row type="flex" justify="center">
							<van-col >
								<img width="100%" :src="data.data.data.sections[30].body.items[0].img_url_webp">
							</van-col>
						</van-row>
						
						<!-- 分割线 -->
						<div class="line_div"></div>
						
						<!-- layout布局 笔记本购买 1-->
						<van-row class="van_buy1">
						  <van-col span="12" v-for="item in data.data.data.sections[32].body.items">
							  <img :src="item.img_url_webp">
							  <p id="p1">{{item.product_name}}</p>
							  <span id="span1">{{item.product_brief}}</span>
							  <p id="p2">￥{{item.product_price}}</p>
							  <van-button id="button_pay" type="primary" size="small">立即购买</van-button>
						  </van-col>
						</van-row>
						<!-- 分割线 -->
						<div class="line_div"></div>
						<!-- layout布局 笔记本购买 2-->
						<van-row class="van_buy1">
						  <van-col span="12" v-for="item in data.data.data.sections[34].body.items">
							  <img :src="item.img_url_webp">
							  <p id="p1">{{item.product_name}}</p>
							  <span id="span1">{{item.product_brief}}</span>
							  <p id="p2">￥{{item.product_price}} <span id="money_del">￥{{item.product_org_price}}</span></p>
							  <van-button id="button_pay" type="primary" size="small">立即购买</van-button>
						  </van-col>
						</van-row>
						<!-- 分割线 -->
						<div class="line_div"></div>
						<!-- layout布局 笔记本购买 3-->
						<van-row class="van_buy1">
						  <van-col span="12" v-for="item in data.data.data.sections[36].body.items">
							  <img :src="item.img_url_webp">
							  <p id="p1">{{item.product_name}}</p>
							  <span id="span1">{{item.product_brief}}</span>
							  <p id="p2">￥{{item.product_price}} <span id="money_del">￥{{item.product_org_price}}</span></p>
							  <van-button id="button_pay" type="primary" size="small">立即购买</van-button>
						  </van-col>
						</van-row>
						<br>
						
						<!-- 分割线 -->
						<div class="line_div"style="background-color: #C8C9CC;height: 1px;"></div>
						<!-- 更多小米笔记本产品 -->
						<van-row type="flex" justify="center">
							<van-col >
								<p class="more_product">{{data.data.data.sections[40].body.items[0].action_title}} ></p>
							</van-col>
						</van-row>
						
						<!-- 分割线 -->
						<div class="line_div"></div>
						<van-row type="flex" justify="center">
							<van-col >
								<img width="100%" :src="data.data.data.sections[42].body.items[0].img_url_webp">
							</van-col>
						</van-row>
						<!-- 分割线 -->
						<div class="line_div"></div>
						<van-row type="flex" justify="center">
							<van-col >
								<img width="100%" :src="data.data.data.sections[44].body.items[0].img_url_webp">
							</van-col>
						</van-row>
						
						<!-- 分割线 -->
						<div class="line_div"></div>
						
						<!-- layout布局 家电购买 1-->
						<van-row class="van_buy1">
						  <van-col span="12" v-for="item in data.data.data.sections[44].body.items">
							  <img :src="item.img_url_webp">
							  <p id="p1" style="text-align: left;">{{item.product_name}}</p>
							  <p id="span1"style="text-align: left;margin-bottom: 0;">{{item.product_brief}}</p>
							  <p id="p2"style="text-align: left;">￥{{item.product_price}}</p>
						  </van-col>
						</van-row>
						<!-- 分割线 -->
						<div class="line_div"></div>
						<!-- layout布局 家电购买 2-->
						<van-row class="van_buy1">
						  <van-col span="12" v-for="item in data.data.data.sections[46].body.items">
							  <img :src="item.img_url_webp">
							  <p id="p1"style="text-align: left;">{{item.product_name}}</p>
							  <p id="span1"style="text-align: left;margin-bottom: 0;">{{item.product_brief}}</p>
							  <p id="p2"style="text-align: left;">￥{{item.product_price}} <span id="money_del">￥{{item.product_org_price}}</span></p>
						  </van-col>
						</van-row>
						<br>
						
						<!-- 分割线 -->
						<div class="line_div"style="background-color: #C8C9CC;height: 1px;"></div>
						<!-- 更多小米家电产品 -->
						<van-row type="flex" justify="center">
							<van-col >
								<p class="more_product">{{data.data.data.sections[48].body.items[0].action_title}} ></p>
							</van-col>
						</van-row>
						
						<!-- 分割线 -->
						<div class="line_div"></div>
						<van-row type="flex" justify="center">
							<van-col >
								<img width="100%" :src="data.data.data.sections[50].body.items[0].img_url_webp">
							</van-col>
						</van-row>
						<!-- 分割线 -->
						<div class="line_div"></div>
						<van-row type="flex" justify="center">
							<van-col >
								<img width="100%" :src="data.data.data.sections[52].body.items[0].img_url_webp">
							</van-col>
						</van-row>
					
						<!-- 分割线 -->
						<div class="line_div"></div>
						<!-- 小米智能商品 -->
						<div class="headset">
							<van-row class="van_buy1">
							  <van-col span="12" v-for="item in data.data.data.sections[54].body.items">
								  <img :src="item.img_url">
							  </van-col>
							  <van-col span="10" offset="14" 
							  v-for="item in data.data.data.sections[56].body.items"
							  >
								  <div style="height: 130px; width:100%;margin-top: -134px; margin-left: -5px;">
									  <p id="p1"style="text-align: left;">{{item.product_name}}</p>
									  <p id="span1"style="text-align: left;margin-bottom: 0;">{{item.product_brief}}</p>
									  <p id="p2"style="text-align: left;">￥{{item.product_price}}</p>
								  </div>
							  </van-col>
							</van-row>
						</div>
						<div class="headset">
							<van-row class="van_buy1">
							  <van-col span="10" offset="2" 
							  v-for="item in data.data.data.sections[57].body.items"
							  >
								  <div style="height: 130px; width:100%;margin-top: 25px; margin-left: -5px;">
									  <p id="p1"style="text-align: left;">{{item.product_name}}</p>
									  <p id="span1"style="text-align: left;margin-bottom: 0;">{{item.product_brief}}</p>
									  <p id="p2"style="text-align: left;">￥{{item.product_price}}</p>
								  </div>
							  </van-col>
							  <van-col span="12" v-for="item in data.data.data.sections[57].body.items">
							  		<img :src="item.img_url" style="margin-top: -5px;">
							  </van-col>
							</van-row>
						</div>
						<div class="headset">
							<van-row class="van_buy1">
							  <van-col span="12" v-for="item in data.data.data.sections[58].body.items">
								  <img :src="item.img_url" style="margin-top: -5px;">
							  </van-col>
							  <van-col span="10" offset="14" 
							  v-for="item in data.data.data.sections[58].body.items"
							  >
								  <div style="height: 130px; width:100%;margin-top: -134px; margin-left: -5px;">
									  <p id="p1"style="text-align: left;">{{item.product_name}}</p>
									  <p id="span1"style="text-align: left;margin-bottom: 0;">{{item.product_brief}}</p>
									  <p id="p2"style="text-align: left;">￥{{item.product_price}}</p>
								  </div>
							  </van-col>
							</van-row>
						</div>
						
						<!-- 更多小米智能产品 -->
						<van-row type="flex" justify="center">
							<van-col >
								<p class="more_product">{{data.data.data.sections[60].body.items[0].action_title}} ></p>
							</van-col>
						</van-row>
						
						<!-- 分割线 -->
						<div style="border: 3px solid #F5F5F5; "></div>
						<!-- 更多小米产品展示 -->
						<van-row gutter="2" >
						  <van-col span="12" v-for="item in data.data.data.sections[62].body.items">
							  <img :src="item.img_url_webp" width="100%">
						  </van-col>
						</van-row>
						<van-row gutter="2" >
						  <van-col span="24" v-for="item in data.data.data.sections[64].body.items">
							  <img :src="item.img_url_webp" width="100%" style="margin-top: -3px;">
						  </van-col>
						</van-row>
						<!-- <van-row gutter="2" >
						  <van-col span="12" v-for="item in data.data.data.sections[66].body.items">
							  <img :src="item.img_url_webp" width="100%" style="margin-top: -4px;">
						  </van-col>
						</van-row> -->
						
						<!-- 分割线 -->
						<div style="border: 1px solid #FAFAFA; "></div>
						
						<!-- 双十换新产品 -->
					<!-- 	<van-row type="flex" justify="center">
							<van-col >
								<img width="100%" :src="data.data.data.sections[65].body.items[0].img_url_webp">
							</van-col>
						</van-row>
						 -->
						<!-- 了解小米 -->
						<van-row type="flex" justify="center">
							<van-col >
								<img width="100%" :src="data.data.data.sections[65].body.items[0].img_url_webp">
							</van-col>
						</van-row>
						<br>
						<br>
						<br>
					</div>			
					</div>
		
				<!-- 手机标签内容显示 -->
			   <div v-show="active==1">
					<van-row type="flex" justify="center">
						<van-col span="24">
							<img width="100%" :src="data3.data.data.sections[0].body.items[0].img_url_webp">
						</van-col>
					</van-row>
					<van-row type="flex" justify="center">
						<van-col span="24">
							<img width="100%" :src="data3.data.data.sections[4].body.items[0].img_url_webp">
						</van-col>
					</van-row>
					<!-- 会动的图 -->
					<!-- <van-swipe>
					  <van-swipe-item v-for="(image, index) in data3.data.data.sections[6].body.items" :key="index">
						<img width="100%" :scr="image.img_url"  />
						</van-swipe-item>
					</van-swipe> -->
					
					<!-- <div class="line_div"></div> -->
					<van-row type="flex" justify="center">
						<van-col span="24">
							<img width="100%" :src="data3.data.data.sections[8].body.items[0].img_url_webp">
						</van-col>
					</van-row>
					<!-- 拼图 1-->
					<div class="sjl">
						<van-row >
							<van-col span="8">
								<img width="100%"  :src="data3.data.data.sections[9].body.items[0].img_url_webp">
							</van-col>
							<van-row flex-wrap="wrap" justify-content="space-around">
								<van-col span="8">
									<img width="100%" :src="data3.data.data.sections[9].body.items[1].img_url_webp">
								</van-col>
								<van-col span="8">
									<img width="100%" :src="data3.data.data.sections[9].body.items[2].img_url_webp">
								</van-col>
							</van-row> 
						</van-row>
						<!-- 拼图 2 -->
						<van-row >
							<van-col span="8">
								<img width="100%"  :src="data3.data.data.sections[10].body.items[0].img_url_webp">
							</van-col>
							<van-row flex-wrap="wrap" justify-content="space-around">
								<van-col span="8">
									<img width="100%" :src="data3.data.data.sections[10].body.items[1].img_url_webp">
								</van-col>
								<van-col span="8">
									<img width="100%" :src="data3.data.data.sections[10].body.items[2].img_url_webp">
								</van-col>
							</van-row> 
						</van-row>
						<!-- 拼图 3 -->
						<van-row >
							<van-col span="8">
								<img width="100%"  :src="data3.data.data.sections[11].body.items[0].img_url_webp">
							</van-col>
							<van-row flex-wrap="wrap" justify-content="space-around">
								<van-col span="8">
									<img width="100%" :src="data3.data.data.sections[11].body.items[1].img_url_webp">
								</van-col>
								<van-col span="8">
									<img width="100%" :src="data3.data.data.sections[11].body.items[2].img_url_webp">
								</van-col>
							</van-row> 
						</van-row>
					</div>
				
					<van-col span="24">
						<img width="100%" :src="data3.data.data.sections[12].body.items[0].img_url_webp">
					</van-col>
				   	<van-col span="24">
						<img width="100%" :src="data3.data.data.sections[14].body.items[0].img_url_webp">
					</van-col>
					<!-- 活动规则 -->
					<van-row >
						<van-col span="24">
							<img width="100%" :src="data3.data.data.sections[14].body.items[0].img_url_webp">
						</van-col>
					</van-row>
					<van-row >
						<van-col span="24">
							<img width="100%" :src="data3.data.data.sections[16].body.items[0].img_url_webp">
						</van-col>
					</van-row>
					<!-- 购买 -->
					<div class="sh">
						<van-row class="van_buy1">
						  <van-col span="24" v-for="item in data3.data.data.sections[16].body.items">
							  <img width="100%" :src="item.img_url_webp">
							  <div class="kz">
							  <p id="p1">{{item.product_name}}</p>
							  <span id="span1">{{item.product_brief}}</span>
							  </div>
							  <div class="ky">
							  <p id="p2">￥{{item.product_price}}</p>
							  <van-button id="button_pay" type="primary" size="small">立即预约</van-button>
							  </div>
						  </van-col>
						</van-row>
					</div>
			   </div>
			    <div v-show="active==2">
					<!-- 智能好物 特惠狂欢显示 1-->
					<van-row type="flex" justify="center">
					  <van-col >
						  <img width="100%" :src="data2.data.data.sections[0].body.items[0].img_url_webp">
					  </van-col>
					</van-row>
					<van-row type="flex" justify="center" style="margin-top: -4px;">
					  <van-col >
						  <img width="100%" :src="data2.data.data.sections[1].body.items[0].img_url_webp">
					  </van-col>
					</van-row>
					<!-- 智能好物 特惠狂欢显示 2-->
					<van-row type="flex" justify="center" style="margin-top: -4px;">
					  <van-col  v-for="item in data2.data.data.sections[2].body.items">
						  <img width="100%" :src="item.img_url_webp">
					  </van-col>
					</van-row>
					
					<van-row type="flex" justify="center" style="margin-top: -4px;">
					  <van-col >
						  <img width="100%" :src="data2.data.data.sections[3].body.items[0].img_url_webp">
					  </van-col>
					</van-row>
					
					<van-row type="flex" justify="center" style="margin-top: -4px;">
					  <van-col  v-for="item in data2.data.data.sections[4].body.items">
						  <img width="100%" :src="item.img_url_webp">
					  </van-col>
					</van-row>
					<!-- 领券下单更优惠 -->
					<van-row type="flex" justify="center" style="margin-top: -4px;">
					  <van-col >
						  <img width="100%" :src="data2.data.data.sections[5].body.items[0].img_url_webp">
					  </van-col>
					</van-row>
					
					<van-row type="flex" justify="center" style="margin-top: -4px;">
					  <van-col >
						  <img width="100%" :src="data2.data.data.sections[7].body.items[0].img_url_webp">
					  </van-col>
					</van-row>
					
					<van-row class="van_buy1" style="background-color:#471793; margin-top: -3px;">
					  <van-col style="background-color:white ;" span="8" v-for="item in data2.data.data.sections[8].body.items">
						  <img :src="item.img_url_webp">
						  <p id="p1">{{item.product_name}}</p>
						  <span id="span1">{{item.product_brief}}</span>
						  <p id="p2">￥{{item.product_price}}</p>
					  </van-col>
					</van-row>
					
					
					
					
					
					
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					
				</div>
			    
			  </van-tab>
			</van-tabs>
			
			
		</div>		
		
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {data1,data2,data3} from "../data.js"
export default {
  name: 'home',
	data(){
	  return{
		  current: 0,
		  active:0,
		  data:{},
		  data1:{},
		  data2:{},
		  data3:{},
		  value:"", 
	  }
	},
	// 请求数据
	created(){
		// this.data={} 
		this.$http({
			url:'http://biger.applinzi.com/page.php',
			method:'get',
		}).then(res=>{
			console.log(res);
			this.data=res.data;  
		})
		this.data1=data1;
		// console.log(data1);
		this.data2=data2;
		this.data3=data3;
		
	},
	methods:{
		onChange(index) {
		      this.current = index;
		    },
		//搜索事件
		onSearch(){
			  
		},
		ss(){
		this.$router.push('/mine')	
		},
	},
	components: {
	// HelloWorld
	}
}
</script>
