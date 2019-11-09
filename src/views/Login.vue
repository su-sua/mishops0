<template>
	<div>
		<van-cell-group>
		  <van-field
		    v-model="username"
		    clearable
		    right-icon="question-o"
		    placeholder="请输入用户名"
		    @click-right-icon="$toast('question')"
		  />
		  <van-field
		    v-model="password"
		    type="password"
		    placeholder="请输入密码"
		  />
		  <van-button type="danger" size="large" @click="loging">立即登录</van-button>
		</van-cell-group>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				username:"",
				password:""
			}
		},
		methods:{
			loging(){
				this.$http({
					url:'http://www.520mg.com/member/index_login.php',
					method:"post",
					data:`fmdo=login&dopost=login&userid=${this.username}&pwd=${this.password}`,
					withCredentials:true
				}).then((res)=>{
					console.log(res.data.status)
					if(res.data.status==1){
						this.$store.commit("change",false)
						this.$router.push('/')
					}
				})
			}
		}
	}
</script>

<style>
</style>
