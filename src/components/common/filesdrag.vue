<template>
	<el-upload class="upload-demo" 
		drag 
		list-type='picture-card' 
		action="https://jsonplaceholder.typicode.com/posts/" 
		multiple :on-preview="handlePictureCardPreview" 
		:on-remove="handleRemove">
		<!--<i class="el-icon-upload"></i>-->
		<!--<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
		<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
	</el-upload>
</template>
<script>
	export default {
		data() {
			return {
				dialogImageUrl: '',
				dialogVisible: false
			};
		},
		methods: {
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>