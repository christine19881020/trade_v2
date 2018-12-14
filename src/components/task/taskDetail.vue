<template>
	<!--经典-->
	<div class="simple-stack" v-loading="loading" style="margin:45px auto">
		<div class="page page-behind" @click="$router.push('/task/list')">
			<!--{{tasktitle}}-->
			返回任务列表
		</div>
		<div class="page page-root">
			<ul class="opratefixed">
				<li>编辑</li>
				<li>设置</li>
				<li>
					<el-dropdown class="headDrop" placement="bottom" size="small">
						<span class="el-dropdown-link">
							<el-button type="text" slot="reference" style="color: #5E5E5E;">类型</el-button>
						</span>
						<el-dropdown-menu slot="dropdown" style="width:100px">
							<el-dropdown-item @click.native="">经典</el-dropdown-item>
							<el-dropdown-item @click.native="">快件</el-dropdown-item>
							<el-dropdown-item @click.native="">验货类</el-dropdown-item>
							<el-dropdown-item @click.native="">销售合同</el-dropdown-item>
							<el-dropdown-item @click.native="">采购合同</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</li>
				<li @click="smalltasks.title+'复制'">复制</li>
				<li class="red">删除</li>
			</ul>
			<div class="taskdetail">
				<ul class="smalltasks">
					<li>
						<el-checkbox v-model="smalltasks.checked"></el-checkbox>
						<a>色卡收养客户批办</a>
						<el-popover popper-class="assignpop" placement="right-start" title="将任务指派给" width="170" trigger="click">
							<el-button class="assignBtn" round size="mini" slot="reference">
								<template v-if="ruleForm.chargeperson&&ruleForm.closingdate">
									{{ruleForm.chargeperson}}&nbsp;&nbsp;{{ruleForm.closingdate|moment}}
								</template>
								<template v-if="!ruleForm.chargeperson&&!ruleForm.closingdate">
									未指派
								</template>
								<template v-if="!ruleForm.chargeperson&&ruleForm.closingdate">
									{{ruleForm.closingdate|moment}}
								</template>
								<template v-if="ruleForm.chargeperson&&!ruleForm.closingdate">
									{{ruleForm.chargeperson}}
								</template>
							</el-button>
							<el-form size="mini" :model="ruleForm" :rules="rules" ref="ruleForm" class="assignForm">
								<el-form-item prop="chargeperson">
									<el-select size="mini" v-model="ruleForm.chargeperson" placeholder="请选择">
										<el-option v-for="itemp in chargepersonlist" :key="itemp.value" :label="itemp.label" :value="itemp.value" :disabled="itemp.disabled">
										</el-option>
									</el-select>
								</el-form-item>
								</el-form-item>
								<el-form-item prop="closingdate">
									<el-date-picker size="mini" type="date" placeholder="选择日期" v-model="ruleForm.closingdate" style="width: 100%;"></el-date-picker>
								</el-form-item>
								<!--<el-form-item>
									<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
									<el-button @click="resetForm('ruleForm')">重置</el-button>
								</el-form-item>-->
							</el-form>
						</el-popover>
						<div class="adddesc">
							<el-button size="mini" type="text" @click="smalltasks.descshow=!smalltasks.descshow">添加备注</el-button>
							<transition name="el-zoom-in-top">
								<div class="descbox clear" v-if="smalltasks.descshow">
									<el-input class="desc" type="textarea"></el-input>
									<div class="clear">
										<div class="fr">
											<el-button size="mini" type="success">确定</el-button>
											<el-button size="mini" type="text">取消</el-button>
										</div>
									</div>

								</div>
							</transition>
						</div>
					</li>
				</ul>
				<div class="fileblock">
					<fileDrapUploadDetail></fileDrapUploadDetail>
				</div>
				<div class="recordblock">
					<h1>记录</h1>
					<ul>
						<li v-for="(item,index) in recordlist">
							<span>{{item.time}}</span>
							<span>{{item.hour}}</span>
							<span>{{item.record}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import moment from 'moment'
	import { chargepersonlist } from '@/datas/tasklist'
	import { smalltasks, recordlist } from '@/datas/taskdetail'
	import fileDrapUploadDetail from '@/components/common/fileDrapUploadDetail'
	export default {
		name: 'newTemplate',
		components: {
			fileDrapUploadDetail
		},
		data() {
			return {
				loading: false,
				recordlist: recordlist,
				chargepersonlist: chargepersonlist,
				smalltasks: smalltasks,
				tasktitle: '',
				ruleForm: {
					chargeperson: '',
					closingdate: ''
				},
				rules: {
					chargeperson: [{
						required: true,
						message: '请输入负责人',
						trigger: 'blur'
					}],
					closingdate: [{
						required: true,
						message: '请选择截止时间',
						trigger: 'change'
					}],
				}
			}
		},
		methods: {
			gotemplateFn(item) {
				this.$router.push('/task/neworder/' + item.ID)
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		},
		mounted() {
			this.tasktitle = sessionStorage.getItem('tasktitle');
			sessionStorage.setItem('hidden', false);
		}
	}
</script>

<style scoped>
	#app {
		overflow: scroll!important;
	}
</style>