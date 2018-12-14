<template>
	<section>
		<div class="search-box" :class="{'h120':filtershow}">
			<div class="oprateSquare clear">
				<el-button round size="small" @click="filterFn" class="tabBtn" :class="{'active':filtershow}">筛选</el-button>
				<el-button round size="small" @click="allmissionFn" class="tabBtn" :class="{'active':allmission}">全部任务</el-button>
				<el-button round size="small" @click="mymissionFn" class="tabBtn " :class="{'active':!allmission}">我的任务</el-button>
				<div class="fr">
					<el-button size="small" type="success" @click="goDealingFn">完成</el-button>
					<el-button size="small" type="text" @click="$router.push('/task/batchdeal')">取消</el-button>
				</div>
			</div>
			<div class="filterboxList clear" v-if="filtershow">
				<div class="selectlist">
					<el-select size="small" collapse-tags v-model="ordername" multiple filterable placeholder="订单名称" @change="searchFn('ordername',ordername)">
						<el-option v-for="(item,index) in groupname.ordername" :key="index" :label="item.value" :value="item.value">
						</el-option>
					</el-select>
					<i class="fa fa-close" v-if="ordername.length>0" @click="clearFn('ordername')"></i>
				</div>
				<div class="selectlist">
					<el-select size="small" collapse-tags v-model="orderno" multiple filterable placeholder="订单编号" @change="searchFn('orderno',orderno)">
						<el-option v-for="(item,index) in groupname.orderno" :key="index" :label="item.value" :value="item.value">
						</el-option>
					</el-select>
					<i class="fa fa-close" v-if="orderno.length>0" @click="clearFn('orderno')"></i>
				</div>
				<div class="selectlist">
					<el-select size="small" collapse-tags v-model="kno" multiple filterable placeholder="产品款号" @change="searchFn('orderno',orderno)">
						<el-option v-for="(item,index) in groupname.kno" :key="index" :label="item.value" :value="item.value">
						</el-option>
					</el-select>
					<i class="fa fa-close" v-if="orderno.length>0" @click="clearFn('orderno')"></i>
				</div>
				<div class="selectlist">
					<el-select size="small" collapse-tags v-model="client" multiple filterable placeholder="客户" @change="searchFn('client',client)">
						<el-option v-for="(item,index) in groupname.client" :key="index" :label="item.value" :value="item.value">
						</el-option>
					</el-select>
					<i class="fa fa-close" v-if="client.length>0" @click="clearFn('client')"></i>
				</div>
				<div class="selectlist">
					<el-select size="small" collapse-tags v-model="supplier" multiple filterable placeholder="供应商" @change="searchFn('supplier',supplier)">
						<el-option v-for="(item,index) in groupname.supplier" :key="index" :label="item.value" :value="item.value">
						</el-option>
					</el-select>
					<i class="fa fa-close" v-if="supplier.length>0" @click="clearFn('supplier')"></i>
				</div>
				<div class="selectlist">
					<el-select size="small" collapse-tags v-model="salesmen" multiple filterable placeholder="业务员" @change="searchFn('salesmen',salesmen)">
						<el-option v-for="(item,index) in groupname.salesmen" :key="index" :label="item.value" :value="item.value">
						</el-option>
					</el-select>
					<i class="fa fa-close" v-if="salesmen.length>0" @click="clearFn('salesmen')"></i>
				</div>
				<div class="selectlist">
					<el-select size="small" collapse-tags v-model="nodenames" multiple filterable placeholder="节点名称" @change="searchFn('nodenames',nodenames)">
						<el-option v-for="(item,index) in groupname.nodenames" :key="index" :label="item.value" :value="item.value">
						</el-option>
					</el-select>
					<i class="fa fa-close" v-if="nodenames.length>0" @click="clearFn('nodenames')"></i>
				</div>
				<div class="selectlist">
					<el-select size="small" collapse-tags v-model="missiontype" multiple filterable placeholder="任务类型" @change="searchFn('missiontype',missiontype)">
						<el-option v-for="(item,index) in groupname.missiontype" :key="index" :label="item.value" :value="item.value">
						</el-option>
					</el-select>
					<i class="fa fa-close" v-if="missiontype.length>0" @click="clearFn('missiontype')"></i>
				</div>
				<div class="selectlist">
					<el-select size="small" collapse-tags v-model="missionstatus" multiple filterable placeholder="任务状态" @change="searchFn('missionstatus',missionstatus)">
						<el-option v-for="(item,index) in groupname.missionstatus" :key="index" :label="item.value" :value="item.value">
						</el-option>
					</el-select>
					<i class="fa fa-close" v-if="missionstatus.length>0" @click="clearFn('missionstatus')"></i>
				</div>
				<div class="selectlist">
					<el-select size="small" collapse-tags v-model="deliverytime" multiple filterable placeholder="交期时间" @change="searchFn('deliverytime',deliverytime)">
						<el-option v-for="(item,index) in groupname.deliverytime" :key="index" :label="item.value" :value="item.value">
						</el-option>
					</el-select>
					<i class="fa fa-close" v-if="deliverytime.length>0" @click="clearFn('deliverytime')"></i>
				</div>
				<div class="selectlist">
					<el-select size="small" collapse-tags v-model="ordertime" multiple filterable placeholder="任务时间" @change="searchFn('ordertime',ordertime)">
						<el-option v-for="(item,index) in groupname.ordertime" :key="index" :label="item.value" :value="item.value">
						</el-option>
					</el-select>
					<i class="fa fa-close" v-if="ordertime.length>0" @click="clearFn('ordertime')"></i>
				</div>
				<i class="iconfont icon-paixu"></i>
			</div>
		</div>
		<div class="bggrey batchpage">
			<div class="tasksblock batch" :style="{'height':greybgheight+ 'px'}">
				<h1>
            		已选中批量处理的任务
            	</h1>
				<div class="newblock" style="background: #fff;">
					<div class="newhide" @click="$router.push('/task/batchdeal')">
						+继续添加要批量处理的文件
					</div>
				</div>
				<template v-if="batchbox.length==0">
					<div class="nodata" :style="{'margin-top':(greybgheight-80)/2+ 'px'}">当前没有选中任务</div>
				</template>
				<template v-else>
					<!--<EasyScrollbar :barOption="myBarOption">-->
						<div class="overflowy" :style="{'height':greybgheight-80+ 'px'}">
							<li class="commonblock" v-for="(itemT,indexT) in batchbox" :key="indexT" @click="backtolistFn(itemT,indexT)">
								<i class="iconfont icon-shanchu" @click="backtolistFn(itemT,indexT)"></i>
								<div class="forclick">
									<div class="title">
										<el-checkbox disabled v-model="itemT.checked"></el-checkbox>
										<a href="javascript:;" class="tname">{{itemT.title}}.{{itemT.contract}}</a>
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
									<!--<filesdrag></filesdrag>-->
									<div class="filelistcircle">
										<img v-for="(itemF,indexF) in itemT.filelists" :src="itemF.filepath" />
										<div class="more" v-if="itemT.filemore">
											<i class="iconfont icon-sandian"></i>
										</div>
									</div>
								</div>
							</li>
						</div>
					<!--</EasyScrollbar>-->
				</template>
			</div>
			<div class="page batch-page" :style="{'height':greybgheight+ 'px'}">
				<el-row class="delivery" style="margin-top:50px;height:150px;">
					<el-col :span="5" style="text-align:right;"><label>添加快件单号：</label></el-col>
					<el-col :span="10"><el-input size="small"></el-input></el-col>
				</el-row>
				<div class="filebox">
					<fileDrapUpload></fileDrapUpload>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import moment from 'moment'	
	import filesdrag from '@/components/common/filesdrag'
	import fileDrapUpload from '@/components/common/fileDrapUpload'
	//const message = ['vue.draggable', 'draggable', 'component', 'for', 'vue.js 2.0', 'based', 'on', 'Sortablejs']
	import { groupname, taskslist, chargepersonlist, batchbox } from '@/datas/batchdealing'
	export default {
		name: 'list',
		components: {			
			filesdrag,
			fileDrapUpload
		},
		data() {
			return {
				batchbox: batchbox,
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
				newkey: 0,
				groupname: groupname,
				taskslist: taskslist,			
				editable: true,
				isDragging: false,
				delayedDragging: false,
				chargepersonlist: chargepersonlist,
				filtershow: false,
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
				batchtype: null,
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
			filterFn() {
				this.filtershow = !this.filtershow;
			},
			allmissionFn() {
				this.allmission = true;
			},
			mymissionFn() {
				this.allmission = false;
			},
			batchDealFn() {

			},
//			onMove({
//				relatedContext,
//				draggedContext
//			}) {
//				const relatedElement = relatedContext.element;
//				const draggedElement = draggedContext.element;
//				return(!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
//			},
			searchFn(name, sortItem) {
				var itemString = JSON.stringify(sortItem);
				var itemParam = itemString.substring(1, itemString.length - 1);
				switch(name) {
					case 'ordername':
						this.queryParam.ordername = itemParam;
						sessionStorage.setItem('ordernameSort', itemParam);
						this.getlistFn();
						break;
					case 'orderno':
						this.queryParam.orderno = itemParam;
						sessionStorage.setItem('ordernoSort', itemParam);
						this.getlistFn();
						break;
					case 'client':
						this.queryParam.client = itemParam;
						sessionStorage.setItem('clientSort', itemParam);
						this.getlistFn();
						break;
					case 'supplier':
						this.queryParam.supplier = itemParam;
						sessionStorage.setItem('supplierSort', itemParam);
						this.getlistFn();
						break;
					case 'salesmen':
						this.queryParam.salesmen = itemParam;
						sessionStorage.setItem('salesmenSort', itemParam);
						this.getlistFn();
						break;
					case 'nodenames':
						this.queryParam.nodenames = itemParam;
						sessionStorage.setItem('nodenamesSort', itemParam);
						this.getlistFn();
						break;
					case 'missiontype':
						this.queryParam.missiontype = itemParam;
						sessionStorage.setItem('missiontypeSort', itemParam);
						this.getlistFn();
						break;
					case 'missionstatus':
						this.queryParam.missionstatus = itemParam;
						sessionStorage.setItem('missionstatusSort', itemParam);
						this.getlistFn();
						break;
					default:
						this.queryParam = {
							ordername: "",
							orderno: "",
							client: "",
							supplier: "",
							salesmen: "",
							nodenames: "",
							missiontype: "",
							missionstatus: ""
						}
						sessionStorage.removeItem('ordernameSort');
						sessionStorage.removeItem('ordernoSort');
						sessionStorage.removeItem('clientSort');
						sessionStorage.removeItem('supplierSort');
						sessionStorage.removeItem('salesmenSort');
						sessionStorage.removeItem('nodenamesSort');
						sessionStorage.removeItem('missiontypeSort');
						sessionStorage.removeItem('missionstatusSort');
						this.getlistFn();
				}
			},
			clearFn(name) {
				switch(name) {
					case 'ordername':
						this.ordername = [];
						sessionStorage.removeItem('ordernameSort');
						this.queryParam.ordername = "";
						this.getlistFn();
						break;
					case 'orderno':
						this.orderno = [];
						sessionStorage.removeItem('ordernoSort');
						this.queryParam.orderno = "";
						this.getlistFn();
						break;
					case 'client':
						this.client = [];
						sessionStorage.removeItem('clientSort');
						this.queryParam.client = "";
						this.getlistFn();
						break;
					case 'supplier':
						this.supplier = [];
						sessionStorage.removeItem('supplierSort');
						this.queryParam.supplier = "";
						this.getlistFn();
						break;
					case 'salesmen':
						this.salesmen = [];
						sessionStorage.removeItem('salesmenSort');
						this.queryParam.salesmen = "";
						this.getlistFn();
						break;
					case 'nodenames':
						this.nodenames = [];
						sessionStorage.removeItem('nodenamesSort');
						this.queryParam.nodenames = "";
						this.getlistFn();
						break;
					case 'missiontype':
						this.missiontype = [];
						sessionStorage.removeItem('missiontypeSort');
						this.queryParam.missiontype = "";
						this.getlistFn();
						break;
					case 'missionstatus':
						this.missionstatus = [];
						sessionStorage.removeItem('missionstatusSort');
						this.queryParam.missionstatus = "";
						this.getlistFn();
						break;
					default:

				}

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
			gotaskdetailFn(itemT) {
				this.$router.push('/task/taskDetail/' + itemT.tid + "/" + itemT.type);
				sessionStorage.setItem('tasktitle', itemT.title);
			},
			gobatchboxFn(itemtask, itemT, indexT) {
				if(this.batchbox.length == 0) {
					itemtask.splice(indexT, 1)
					this.batchbox.unshift(itemT);
				} else if(this.batchbox.length == 1) {
					this.batchtype = this.batchbox[0].type;
					if(itemT.type != this.batchtype) {
						this.$message({
							message: '不同类型任务不能批量操作！',
							type: 'warning'
						});

					} else {
						itemtask.splice(indexT, 1);
						this.batchbox.unshift(itemT);
					}
				} else {
					if(itemT.type != this.batchtype) {
						this.$message({
							message: '不同类型任务不能批量操作！',
							type: 'warning'
						});

					} else {
						itemtask.splice(indexT, 1);
						this.batchbox.unshift(itemT);
					}
				}

			},
			backtolistFn(itemb, indexb) {
				this.batchbox.splice(indexb, 1);
				this.taskslist[itemb.taskslistplace].tasks.unshift(itemb);
			},
			goDealingFn() {
				this.$router.push('/task/list');
			}
		},
		computed: {
			
			greybgheight() {
				var clientHeight = document.body.clientHeight;
				if(!this.filtershow) {
					return clientHeight - 170;
				} else {
					return clientHeight - 220;
				}
			},

		},
		watch: {
			
		},
		mounted() {
			this.getlistFn();
		}
	}
</script>

<style lang="scss" scoped>

</style>