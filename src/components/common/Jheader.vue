<template>
	<div class="Jheader clear">
		<div class="hdbox">
		<span class="name">集货宝</span>
		<Jnav class="fl"></Jnav> 

		<el-dropdown class="fr headDrop" placement="bottom" size="small">
			<span class="el-dropdown-link">
				 <i class="iconfont icon-jiantou32"></i><img src="../../assets/erha.jpg" class="headImg"/>
			</span>
			<el-dropdown-menu slot="dropdown" style="width:80px">
				<el-dropdown-item @click.native="">退出</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>

		<!--<div class="fr bell">
			<i class="iconfont icon-bell"></i><span>通知</span>
		</div>-->
		</div>
	</div>
</template>

<script>
	import Jnav from './Jnav'
	export default {
		name: 'Jheader',
		components: {
			Jnav
		},
		data() {
			return {
				ruleForm: {}
			}
		},
		methods: {
			goLoginFn() {

			},
			loginOutFn() {
				//				this.$store.dispatch('LogOut').then(res => {
				//					this.$router.push('/login');
				//				}).catch(err => {
				//					console.log('cuowu', err);
				//				})
			},
			selfSetFn() {
				//				this.$router.push('/user/selfSet')
			},
			initFn() {
				//				this.ruleForm = JSON.parse(sessionStorage.getItem('user'));
				//				console.log(this.ruleForm)
			}
		},
		mounted() {
			this.initFn();
		}
	}
</script>

<style lang="scss" scoped>
	.Jheader {
		/*position: fixed;
		top:0;*/
		z-index:100;
		height: 28px;
		line-height: 28px;
		text-align: center;
		padding: 16px 20px;
        background-color: #F1FEFF;
        .hdbox{
        	width:1000px;margin:0 auto;
        }
		.name {
			line-height:28px;
			color: #1F9AA5;
			font-size:20px;
			float: left;
		}
	}	
	.bell{
		margin:0 20px 0 0;cursor: pointer;
		.icon-bell{
			font-size:22px;float:left;color: #707070;
		}
		span{font-size:14px;display:block;float:left;line-height:30px;margin-left:5px;}
	}
	.headDrop {
		width:50px;
		.headImg {
			width: 25px;
			height: 25px;
			border-radius: 50%;
		}
		.icon-jiantou32 {
			color: #848486;			
			font-size:1.2em;
			margin-right:2px;
			float: left;
		}
		.el-dropdown-link {
			cursor: pointer;
		}
	}
</style>