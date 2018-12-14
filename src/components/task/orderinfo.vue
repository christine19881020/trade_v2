<template>
	<section>
		<div class="search-box">
			<div class="navbox">
				<span class="flnav" @click="$router.push('/task/list')"><i class="iconfont icon-right"></i>任务</span>
				<div class="fr">
					<span>
						<i class="iconfont icon-renyuan"></i>
						<label>成员</label>
					</span>
					<span>
						<i class="iconfont icon-shezhi1"></i>
						<label>设置</label>
					</span>
				</div>
			</div>
			<div class="oprateSquare clear">
				<div class="orderTitle">BAW春季订单.HDX123</div>
				<ul class="tabs">
					<li v-for="(item,index) in navs" :class="{'active':item.active}" :key="index" @click="tabFn(item,index)">{{item.name}}</li>
				</ul>
				<div class="fr">
					<router-link class="autoall" to="/task/template">批量创建</router-link>
					<a href="javascript:;" class="autoall" @click="batchDealFn">批量处理</a>
					<div class="vr"></div>
					<i class="iconfont icon-shitu active" @click=""></i>
					<i class="iconfont icon-caidan" @click=""></i>
				</div>
			</div>
		</div>
		<div v-if="navs[0].active" class="bggrey" :style="{'min-height':greybgheight-5+ 'px'}">
			<div class="simple-stack">
				<div class="page">
					<div class="bascinfo">
						<el-form :model="basicinfoForm" :rules="rules" ref="basicinfoForm" label-width="100px" class="demo-ruleForm">
							<el-row>
								<el-col :span="12">
									<el-form-item label="订单名称" prop="name">
										<el-input clearable v-model="basicinfoForm.name"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="12">
									<el-form-item label="客户" prop="client">
										<el-input clearable v-model="basicinfoForm.client"></el-input>
									</el-form-item>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="12">
									<el-form-item label="订单编号" prop="no">
										<el-input clearable v-model="basicinfoForm.no"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="12">
									<el-form-item label="完成时间" prop="finishtime">
										<!--<el-input clearable v-model="basicinfoForm.finishtime"></el-input>-->
										<el-date-picker v-model="basicinfoForm.finishtime" type="date" placeholder="选择日期">
										</el-date-picker>
									</el-form-item>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="24">
									<el-form-item label="订单备注" prop="desc">
										<el-input clearable v-model="basicinfoForm.desc"></el-input>
									</el-form-item>
								</el-col>
							</el-row>

							<!--<el-form-item>
								<el-button type="primary" @click="submitForm('basicinfoForm')">立即创建</el-button>
								<el-button @click="resetForm('basicinfoForm')">重置</el-button>
							</el-form-item>-->
						</el-form>
					</div>
				</div>
			</div>
		</div>
		<div v-if="navs[1].active" class="bggrey" :style="{'min-height':greybgheight-5+ 'px'}">
			<div class="simple-stack">
				<div class="page">
					<div class="productinfo">
						<el-input class="big" v-model="newKno" clearable placeholder="请输入产品款号，按回车即可" @keyup.enter.native="addproductFn"></el-input>
						<ul>
							<li v-for="(item,index) in productlist" :key="index" @click="$router.push('/task/product/1')">{{item.kno}}</li>
						</ul>
					</div>

				</div>
			</div>
		</div>
		<div v-if="navs[2].active" class="bggrey" :style="{'height':greybgheight-5+ 'px'}">
			<draggable v-model="taskslist" :options="{draggable:'.tasksblock'}">
				<transition-group>
					<div class="tasksblock" v-for="(item,index) in taskslist" :key="item.oid" :style="{'height':greybgheight-40+ 'px'}">
						<h1>{{item.title}}
								  <template v-if="item.oid">
								  	· {{item.oid}}
								  </template>
								</h1>
						<div class="newblock">
							<div class="newhide" v-if="!item.newshow" @click="item.newshow=true">
								+添加新任务
							</div>
							<!--<div v-else class="newinput">
								<el-input v-model="item.newtitle" placeholder="请输入任务名称，回车，新建任务" @keyup.enter.native="newtaskFn(item,index)" @blur="item.newshow=false" suffix-icon="iconfont icon-huiche"></el-input>
							</div>-->
							<div v-else class="newinput">
								<input v-focus v-model="item.newtitle" placeholder="请输入任务名称，回车，新建任务" autofocus="autofocus" @keyup.enter="newtaskFn(item,index)" @blur="item.newshow=false" ></input>
							    <i class="iconfont icon-huiche"></i>
							</div>
						</div>
						<!--<EasyScrollbar :barOption="myBarOption">-->
						<div class="overflowy" :style="{'height':greybgheight-145+ 'px'}">
							<draggable class="list-group" element="ul" v-model="item.tasks" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
								<transition-group type="transition" :name="'flip-list'">
									<li class="commonblock" v-for="(itemT,indexT) in item.tasks" :key="itemT.order">
										<div class="forclick">
											<div class="title">
												<el-checkbox v-model="itemT.checked"></el-checkbox>
												<a href="javascript:;" class="tname" @click="gotaskdetailFn(itemT)">{{itemT.title}}</a>
											</div>
											<div class="oprateblock">
												<el-popover placement="right" title="将任务指派给" popper-class="assignpop" width="170" trigger="click">
													<el-button size="mini" round slot="reference">
														<template v-if="itemT.chargeperson&&itemT.closingdate">
															{{itemT.chargeperson}}&nbsp;&nbsp;{{itemT.closingdate|moment}}
														</template>
														<template v-if="!itemT.chargeperson&&!itemT.closingdate">
															未指派
														</template>
														<template v-if="!itemT.chargeperson&&itemT.closingdate">
															{{itemT.closingdate|moment}}
														</template>
														<template v-if="itemT.chargeperson&&!itemT.closingdate">
															{{itemT.chargeperson}}
														</template>
													</el-button>

													<el-form size="mini" :model="ruleForm" :rules="rules" ref="ruleForm" class="assignForm">
														<el-form-item prop="chargeperson">
															<el-select size="mini" v-model="itemT.chargeperson" placeholder="请选择">
																<el-option v-for="itemp in chargepersonlist" :key="itemp.value" :label="itemp.label" :value="itemp.value" :disabled="itemp.disabled">
																</el-option>
															</el-select>
														</el-form-item>
														</el-form-item>
														<el-form-item prop="closingdate">
															<el-date-picker size="mini" type="date" placeholder="选择日期" v-model="itemT.closingdate" style="width: 100%;"></el-date-picker>
														</el-form-item>

													</el-form>
												</el-popover>
											</div>
										</div>
										<div class="filesbox">
											<filesdrag></filesdrag>
											<!--<div class="filelistcircle">
											<img v-for="(itemF,indexF) in itemT.filelists" :src="itemF.filepath" />
											<div class="more" v-if="itemT.filemore">
												<i class="iconfont icon-sandian"></i>
											</div>
										</div>-->
										</div>
									</li>
								</transition-group>
							</draggable>
							<draggable element="span" v-model="item.tasksmove" :options="dragOptions" :move="onMove">
								<transition-group name="no" class="list-group" tag="ul">
									<li class="commonblock" v-for="(itemT,indexT) in item.tasksmove" :key="itemT.order">
										<div class="forclick">
											<div class="title">
												<el-checkbox v-model="itemT.checked"></el-checkbox>
												<router-link class="tname" to="">{{itemT.title}}</router-link>
											</div>
											<div class="oprateblock">
												<el-popover placement="right" title="将任务指派给" popper-class="assignpop" width="170" trigger="click">
													<el-button size="mini" round slot="reference">
														<template v-if="itemT.chargeperson&&itemT.closingdate">
															{{itemT.chargeperson}}&nbsp;&nbsp;{{itemT.closingdate|moment}}
														</template>
														<template v-if="!itemT.chargeperson&&!itemT.closingdate">
															未指派
														</template>
														<template v-if="!itemT.chargeperson&&itemT.closingdate">
															{{itemT.closingdate|moment}}
														</template>
														<template v-if="itemT.chargeperson&&!itemT.closingdate">
															{{itemT.chargeperson}}
														</template>
													</el-button>

													<el-form size="mini" :model="ruleForm" :rules="rules" ref="ruleForm" class="assignForm">
														<el-form-item prop="chargeperson">
															<el-select size="mini" v-model="itemT.chargeperson" placeholder="请选择">
																<el-option v-for="itemp in chargepersonlist" :key="itemp.value" :label="itemp.label" :value="itemp.value" :disabled="itemp.disabled">
																</el-option>
															</el-select>
														</el-form-item>
														</el-form-item>
														<el-form-item prop="closingdate">
															<el-date-picker size="mini" type="date" placeholder="选择日期" v-model="itemT.closingdate" style="width: 100%;"></el-date-picker>
														</el-form-item>

													</el-form>
												</el-popover>
											</div>
										</div>
										<div class="filesbox">
											<filesdrag></filesdrag>
											<!--<div class="filelistcircle">
											<img v-for="(itemF,indexF) in itemT.filelists" :src="itemF.filepath" />
											<div class="more" v-if="itemT.filemore">
												<i class="iconfont icon-sandian"></i>
											</div>
										</div>-->
										</div>
									</li>
								</transition-group>
							</draggable>
						</div>
						<!--</EasyScrollbar>-->
					</div>
				</transition-group>
			</draggable>
		</div>
		<div v-if="navs[3].active" class="bggrey" :style="{'min-height':greybgheight-5+ 'px'}">
			<div class="simple-stack">
				<div class="page filepage">
					<fileDrapUpload></fileDrapUpload>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import moment from 'moment'
	import draggable from 'vuedraggable'
	import filesdrag from '@/components/common/filesdrag'
	import fileDrapUpload from '@/components/common/fileDrapUpload'
	const message = ['vue.draggable', 'draggable', 'component', 'for', 'vue.js 2.0', 'based', 'on', 'Sortablejs']
	import { taskslist, chargepersonlist, basicinfo, productlist } from '@/datas/orderinfo'
	export default {
		name: 'neworder',
		components: {
			draggable,
			filesdrag,
			fileDrapUpload
		},
		data() {
			return {
				navs: [{
					value: 1,
					name: '订单信息',
					active: false,
				}, {
					value: 2,
					name: '产品信息',
					active: false,
				}, {
					value: 3,
					name: '任务',
					active: true,
				}, {
					value: 4,
					name: '文件',
					active: false,
				}],
				newKno: '',
				opt: {
					barColor: "#959595", //滚动条颜色
					barWidth: 6, //滚动条宽度
					railColor: "#eee", //导轨颜色
					barMarginRight: 0, //垂直滚动条距离整个容器右侧距离单位（px）
					barMaginBottom: 0, //水平滚动条距离底部距离单位（px)
					barOpacityMin: 0.3, //滚动条非激活状态下的透明度
					zIndex: "auto", //滚动条z-Index
					autohidemode: true, //自动隐藏模式
					horizrailenabled: true, //是否显示水平滚动条
				},
				myBarOption: {
					barColor: "rgb(165,165,165)"
				},
				basicinfoForm: basicinfo,
				productlist: productlist,
				rules: {
					name: [{
						required: true,
						message: '请输入订单名称',
						trigger: 'blur'
					}]
				},
				newkey: 0,
				taskslist: taskslist,
				editable: true,
				isDragging: false,
				delayedDragging: false,
				chargepersonlist: chargepersonlist,
				allmission: true,
				mymission: false,
				ordername: [],
				orderno: [],
				client: [],
				supplier: [],
				salesmen: [],
				nodenames: [],
				missiontype: [],
				missionstatus: [],
				deliverytime: [],
				ordertime: [],
				queryParam: {
					ordername: "",
					orderno: "",
					client: "",
					supplier: "",
					salesmen: "",
					nodenames: "",
					missiontype: "",
					missionstatus: ""
				},
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
			handleClick(tab, event) {
				console.log(tab, event);
			},
			batchDealFn() {
				this.$router.push('/task/batchdeal');
			},
			//tab切换
			tabFn(item, index) {
				this.navs.forEach(item => {
					item.active = false;
				})
				item.active = true;
			},
			onMove({
				relatedContext,
				draggedContext
			}) {
				const relatedElement = relatedContext.element;
				const draggedElement = draggedContext.element;
				return(!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
			},
			getlistFn() {

			},
			greybgheightFn() {

			},
newtaskFn(item, index) {
				var newOb = {}
				newOb.order = this.newkey++;
				newOb.title = item.newtitle;				
				if(item.newtitle){
					item.tasks.unshift(newOb);
				}else{
					this.$message({
							message: '任务名称不能为空！',
							type: 'warning'
						});
				}
//				item.newshow=false;
				item.newtitle = "";
			},
			submitForm(formName) {
				if(this.basicinfoForm.name == "") {
					this.navs[0].active = true;
				}
				setTimeout(() => {
					this.$refs[formName].validate((valid) => {
						if(valid) {
							alert('submit!');
						} else {
							console.log('error submit!!');
							return false;
						}
					});
				}, 300)

			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			addproductFn() {
				var knoOb = {}
				knoOb.kno = this.newKno
				this.productlist.unshift(knoOb);
			},
			gotaskdetailFn(itemT) {
				if(itemT.type == 0) {
					this.$router.push('/task/taskDetail/' + itemT.tid);
				} else if(itemT.type == 1) {
					this.$router.push('/task/taskDetail1/' + itemT.tid);
				} else if(itemT.type == 2) {
					this.$router.push('/task/taskDetail2/' + itemT.tid);
				} else if(itemT.type == 3) {
					this.$router.push('/task/taskDetail3/' + itemT.tid);
				} else if(itemT.type == 4) {
					this.$router.push('/task/taskDetail4/' + itemT.tid);
				}

				sessionStorage.setItem('tasktitle', itemT.title);
			}
		},
		computed: {
			dragOptions() {
				return {
					animation: 0,
					group: 'description',
					disabled: false,
					ghostClass: 'ghost'
				};
			},
			greybgheight() {
				var clientHeight = document.body.clientHeight;

				return clientHeight - 170;

			},

		},
		watch: {
			isDragging(newValue) {
				if(newValue) {
					this.delayedDragging = true
					return
				}
				this.$nextTick(() => {
					this.delayedDragging = false
				})
			},
		},
		mounted() {
			this.getlistFn();
		}
	}
</script>

<style lang="scss" scoped>
	.flip-list-move {
		transition: transform 0.5s;
	}
	
	.no-move {
		transition: transform 0s;
	}
	
	.ghost {
		opacity: .5;
		background: #C8EBFB;
	}
	
	.list-group {
		min-height: 20px;
	}
	
	.list-group-item {
		cursor: move;
	}
	
	.list-group-item i {
		cursor: pointer;
	}
</style>