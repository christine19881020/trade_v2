<template>
	<div class="simple-stack" v-loading="loading">
		<div class="page page-root">
			<h1>工作流模板</h1>
			<ul class="templatesbox">
				<li v-for="(item,index) in templates" class="template" :key="item.ID" @click="gotemplateFn(item)">
					{{item.StageName}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { templates } from '@/datas/template'
	export default {
		name: 'newTemplate',
		data() {
			return {
				loading: false,
				templates: templates,
			}
		},
		methods: {
			gotemplateFn(item) {
				this.$router.push('/task/neworder/'+item.ID)
			}
		},
		mounted() {
			
		}
	}
</script>

<style>

</style>