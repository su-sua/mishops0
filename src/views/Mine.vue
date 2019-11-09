<template>
  <div class="mine_container">
    <header>
      <div class="login_box">
        <img src="../assets/default_user.png" alt />
        <p @click="go" v-if="this.$store.getters.getf" >登录/注册</p>
		<p v-else>个人中心</p>
		<p @click="out" v-show="!this.$store.getters.getf">注销</p>
      </div>
    </header>
    <section>
      <div class="item-head">
        <h1  class="clearfx">
          <span class="pull-left">我的订单</span>
          <span class="pull-right">
            全部订单
            <van-icon name="arrow" />
          </span>
        </h1>
        <div class="info">
          <van-grid :column-num="3">
            <van-grid-item icon="idcard" text="待付款" />
            <van-grid-item icon="logistics" text="代收款" />
            <van-grid-item icon="setting-o" text="退还修" />
          </van-grid>
        </div>
      </div>
    </section>
    <div class="line"></div>
    <section class="mine_item">
      <ul>
        <li>
          <div class="pull-left item_pic">
            <img src="../assets/hyzx.png" alt />
          </div>
          <div class="item_title">
            <span>会员中心</span>
            <van-icon name="arrow" />
          </div>
        </li>
        <li>
          <div class="pull-left item_pic">
            <img src="../assets/wdyh.png" alt />
          </div>
          <div class="item_title">
            <span>我的优惠</span>
            <van-icon name="arrow" />
          </div>
        </li>
      </ul>
    </section>
    <div class="line"></div>
    <section class="mine_item">
      <ul>
        <li>
          <div class="pull-left item_pic">
            <img src="../assets/fwzx.png" alt />
          </div>
          <div class="item_title">
            <span>服务中心</span>
            <van-icon name="arrow" />
          </div>
        </li>
        <li>
          <div class="pull-left item_pic">
            <img src="../assets/xmzj.png" alt />
          </div>
          <div class="item_title">
            <span>小米之家</span>
            <van-icon name="arrow" />
          </div>
        </li>
      </ul>
    </section>
    <div class="line"></div>
    <section class="mine_item">
      <ul>
        <li>
          <div class="pull-left item_pic">
            <img src="../assets/Fcode.png" alt />
          </div>
          <div class="item_title">
            <span>我的F码</span>
            <van-icon name="arrow" />
          </div>
        </li>
        <li>
          <div class="pull-left item_pic">
            <img src="../assets/lp.png" alt />
          </div>
          <div class="item_title">
            <span>礼物码兑换</span>
            <van-icon name="arrow" />
          </div>
        </li>
      </ul>
    </section>
    <div class="line"></div>
    <section class="mine_item">
      <ul>
        <li>
          <div class="pull-left item_pic">
            <img src="../assets/setting.png" alt />
          </div>
          <div class="item_title" style="border:none;">
            <span>设置</span>
            <van-icon name="arrow" />
          </div>
        </li>
      </ul>
    </section>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
	  go(){
		  this.$router.push('/login')
	  },
	  out(){
		  this.$http({
			  url:"http://www.520mg.com/member/index_login.php",
			  method:"post",
			  data:"dopost=exit",
			  withCredentials:true
		  }).then((res)=>{
			  if(res.data.status==1){
				  this.$store.commit("change",true)
			  }
		  })
	  }
  }
};
</script>

<style lang='less' scoped>
.mine_container {
  color: #424242;
  padding-bottom:50px;
  header {
    height: 50px;
    padding: 15px 0;
    background-image: url("../assets/mine_bg.png");
    background-color: #f37d0f;
    background-size: contain;
    .login_box {
      height: 100%;
      padding: 0 1rem;
      img {
        height: 100%;
		margin-left: -150px;
      }
      span {
        font-size: 12px;
        color: #fff;
        margin-left: 1rem;
		position: relative;
		top: -20px;
		
      }
    }
  }
  .item-head {
    h1 {
      padding: 0 1rem;
      font-weight: normal;
      font-size: 14px;
      line-height: 40px;
      border-bottom: 1px solid #ddd;
	  
    }
    .info {
      padding: 1rem 2rem;
    }
  }
  .mine_item {
    li {
      font-size: 14px;
      .item_pic {
        width: 50px;
        text-align: center;
        padding-top: 10px;
		
		float: left;
        img {
          width: 60%;
        }
      }
      .item_title {
        margin-left: 50px;
        line-height: 50px;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        i {
          font-size: 20px;
          float: right;
          margin-top: 15px;
          margin-right: 0.5rem;
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
}

.line {
  height: 10px;
  background-color: #f5f5f5;
}
	
.pull-left {
	float:left !important;
}

.pull-right {
	float:right !important;
}
.clearfx::after {
	content:'';
	display:block;
	width: 0;
	height: 0;
	visibility: hidden;
	clear:both;
}
</style>