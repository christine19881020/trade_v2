<template>
	<section>
		<ul class="Jnav">
			<template v-for="(item,index) in $router.options.routes">
				<li v-if="!item.hidden">
					<router-link :to="item.path">{{item.label}}</router-link>
				</li>
			</template>		
		</ul>
	</section>
</template>

<script>
	export default {
		name: 'Jnav',
		data() {
			return {

			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.Jnav {
		color: #666;
		font-size:16px;
		line-height:28px;
		margin-left: 28px;
		li {
			margin:0 22px 0 0;float:left;
			a {
				line-height:28px;
				padding-right: 22px;
				border-right: 1px solid #DEE3E7;
			}
			.router-link-active{
				color: #1f9aa5;
			}
		}
		li:last-child {
			a {
				border-right: none;
			}
		}
	}
</style> 