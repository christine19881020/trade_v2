<template>
	<section class="pagehidden">
		<div class="search-box" :class="{'h120':filtershow}">
			<div class="oprateSquare clear">
				<el-button round size="small" @click="filterFn" class="tabBtn" :class="{'active':filtershow}">筛选</el-button>
				<el-button round size="small" @click="allmissionFn" class="tabBtn" :class="{'active':allmission}">全部任务</el-button>
				<el-button round size="small" @click="mymissionFn" class="tabBtn " :class="{'active':!allmission}">我的任务</el-button>
				<div class="fr">
					<router-link class="autoall" to="/task/template">批量创建</router-link>
					<a href="javascript:;" class="autoall" @click="batchDealFn">批量处理</a>
					<div class="vr"></div>
					<i class="iconfont icon-shitu active" @click=""></i>
					<i class="iconfont icon-caidan" @click=""></i>
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
		<div class="bggrey" :style="{'height':greybgheight+40+ 'px'}">
			<draggable v-model="taskslist" :options="{draggable:'.tasksblock'}">
				<transition-group>
					<div class="tasksblock" v-for="(item,index) in taskslist" :key="item.oid" :style="{'height':greybgheight+ 'px'}">
						<h1 v-if="item.type=='free'">
							{{item.title}}
								  <template v-if="item.contractno">
								  	· {{item.contractno}}
								  </template>
						</h1>
						<h1 v-if="item.type=='order'" style="cursor:pointer;" @click="$router.push('/task/orderinfo/1')">
							{{item.title}}
								  <template v-if="item.contractno">
								  	· {{item.contractno}}
								  </template>
						</h1>
						<h1 v-if="item.type=='product'" style="cursor:pointer;" @click="$router.push('/task/product/1')">
							{{item.title}}
								  <template v-if="item.contractno">
								  	· {{item.contractno}}
								  </template>
						</h1>
						<div class="newblock">
							<div class="newhide" v-if="!item.newshow" @click="newshowFn(item)">
								+添加新任务
							</div>
							<div v-else class="newinput">
								<input v-focus v-model="item.newtitle" placeholder="请输入任务名称，回车，新建任务" autofocus="autofocus" @keyup.enter="newtaskFn(item,index)" @blur="item.newshow=false" ></input>
							    <i class="iconfont icon-huiche"></i>
							</div>
							<!--<div v-else class="newinput">
								<el-input autofocus v-model="item.newtitle" placeholder="请输入任务名称，回车，新建任务" @keyup.enter.native="newtaskFn(item,index)" @blur="item.newshow=false" suffix-icon="iconfont icon-huiche"></el-input>
							</div>-->
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
	</section>
</template>

<script>
	import moment from 'moment'
	import draggable from 'vuedraggable'
	import filesdrag from '@/components/common/filesdrag'
	const message = ['vue.draggable', 'draggable', 'component', 'for', 'vue.js 2.0', 'based', 'on', 'Sortablejs']
	import { groupname, taskslist, chargepersonlist } from '@/datas/tasklist'
	export default {
		name: 'list',
		components: {
			draggable,
			filesdrag
		},
		data() {
			return {
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
			newshowFn(item) {
				item.newshow = true;
			},
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
				this.$router.push('/task/batchdeal');
			},
			onMove({
				relatedContext,
				draggedContext
			}) {
				const relatedElement = relatedContext.element;
				const draggedElement = draggedContext.element;
				return(!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
			},
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
				if(item.newtitle) {
					item.tasks.unshift(newOb);
				} else {
					this.$message({
						message: '任务名称不能为空！',
						type: 'warning'
					});
				}
				//				item.newshow=false;
				item.newtitle = "";
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
				} else {
					this.$router.push('/task/taskDetail/0');
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
				if(!this.filtershow) {
					return clientHeight - 170;
				} else {
					return clientHeight - 220;
				}
			}
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
			sessionStorage.setItem('hidden', true);
		}
	}
</script>

<style lang="scss" scoped>

</style>