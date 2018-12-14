<template>
	<section>
		<div class="fileheader">
			<label>文件库</label>
			<el-dropdown>
				<el-button size="mini">
					上传文件<i class="el-icon-arrow-down el-icon--right"></i>
				</el-button>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>
						<el-upload :show-file-list="false" action="" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
							<el-button size="small" class="filebtn" type="text">点击上传</el-button>
						</el-upload>
					</el-dropdown-item>
					<el-dropdown-item>
						<el-button size="small" class="filebtn" type="text" @click.native="newFolderShow=true">创建文件夹</el-button>
					</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<div class="fileDrapUpload">
			<el-upload class="upload-demo" list-type="picture" drag action="" multiple>
				<i class="el-icon-upload"></i>
				<div class="el-upload__text">暂无添加文件<br/><em>(文件拖放至此处即可上传)</em></div>
			</el-upload>
		</div>
		<ul class="demo-upload-list">
			<!--新建文件夹-->
			<li class="newFolder" v-if="newFolderShow">
				<a href="#" class="imgbox">
					<img :alt="folder.FileName" src="../../assets/folder.png" :title="folder.FileName" />
				</a>
				<div class="link-name">
					<Input v-model="folder.FileName" type="text" placeholder="新的文件夹"></Input>
				</div>
				<div class="oprate">
					<span type="text" class="new greenA" @click="newFloderFn">创建</span>
					<span type="text" @click="newFolderShow=false">取消</span>
				</div>
			</li>		
		</ul>
	</section>
</template>

<script>
	export default {
		name: 'file',
		data() {
			return {
				fileList:[],
				uploadList: [],
				newFolderShow:false,
				folder: {
					FileType: 'folder',
					FileName: '',
					FilePath: '',
					FileSize: '',
					CreateDate: '',
					status: 'finished'
				},
			}
		},
		methods: {
			newFloderFn() {
				//创建文件夹
				this.uploadList.unshift({
  
				})
			},
			handlePreview(){},
			handleRemove(){},
			beforeRemove(){},
			handleExceed(){},
		},
		mounted() {

		}
	}
</script>

<style>

</style>