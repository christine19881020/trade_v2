//列表下拉参数
var groupname = {
	ordername: [{
		text: '订单名称1',
		value: 'order1'
	}, {
		text: '订单名称2',
		value: 'order2'
	}],
	orderno: [{
		text: '订单名称1',
		value: 'order1'
	}, {
		text: '订单名称2',
		value: 'order2'
	}],
	kno: [{
		text: 'KNO1111',
		value: 'KNO1111'
	}, {
		text: 'KNO2222',
		value: 'KNO2222'
	}],
	client: [{
		text: '客户1',
		value: 'client1'
	}, {
		text: '客户2',
		value: 'client2'
	}],
	supplier: [{
		text: '供应商1',
		value: 'supplier1'
	}, {
		text: '供应商2',
		value: 'supplier2     '
	}],
	salesmen: [{
		text: '业务员1',
		value: 'salesman1'
	}, {
		text: '业务员2',
		value: 'salesman2'
	}],
	nodenames: [{
		text: '节点名称1',
		value: 'nodename1'
	}, {
		text: '节点名称2',
		value: 'nodename2'
	}],
	missiontype: [{
		text: '任务类型1',
		value: 'missiontype1'
	}, {
		text: '任务类型2',
		value: 'missiontype2'
	}],
	missionstatus: [{
		text: '任务状态1',
		value: 'missionstatus1'
	}, {
		text: '任务状态2',
		value: 'missionstatus2'
	}],
	deliverytime: [{
		text: '交期时间1',
		value: 'deliverytime1'
	}, {
		text: '交期时间2',
		value: 'deliverytime2'
	}],
	ordertime: [{
		text: '任务时间1',
		value: 'ordertime1'
	}, {
		text: '任务时间2',
		value: 'ordertime2'
	}],
}

//任务列表
var taskslist = [{
	oid: 'H110',
	title: '自由任务',
	newshow: false,
    type:'free',
	newtitle: '',
	tasksmove: [],
	tasks: [{
		order: '11',
		fixed: false,
		tid: 'T111',
		checked: false,
		title: '面料采购111经典',
		type: 0,//经典
		contract: 'HDX000',
		chargeperson: '',
		closingdate: '',
		filemore: true,
		filelists: [{
				filename: 'excel.jpg',
				filepath: require('../assets/excel.jpg')
			},
			{
				filename: 'word.png',
				filepath: require('../assets/word.png')
			}
		]
	}, {
		order: '12',
		fixed: false,
		tid: 'T111',
		checked: false,
		title: '辅料采购111快件',
		type: 1,//快件类
		contract: 'HDX111',
		chargeperson: '',
		closingdate: ''
	}]
}, {
	type:'order',
	oid: 'H1101',
	title: '订单任务1',
	contractno: 'HDX123',
	newshow: false,
	newtitle: '',
	tasksmove: [],
	tasks: [{
		order: '21',
		fixed: false,
		tid: 'T111',
		checked: false,
		title: '面料采购春季订单验货类',
		type: 2,//验货类
		contract: 'HD11122',
		chargeperson: '',
		closingdate: '',
		filemore: true,
		filelists: [{
				filename: 'excel.jpg',
				filepath: require('../assets/excel.jpg')
			},
			{
				filename: 'word.png',
				filepath: require('../assets/word.png')
			}
		]
	}, {
		order: '22xxx',
		fixed: false,
		tid: 'T111',
		checked: false,
		title: '面料采购2春季订单销售合同',
		type: 3,//销售合同
		contract: 'Hpppp',
		chargeperson: '',
		closingdate: ''
	}, {
		order: '22111',
		fixed: false,
		tid: 'T111',
		checked: false,
		title: '面料采购3春季订单采购合同',
		type: 4,//采购合同
		contract: 'Hpppp',
		chargeperson: '',
		closingdate: ''
	}]
}, {
	type:'product',
	oid: 'H1101x',
	title: '面料',
	contractno: 'KNO111',
	newshow: false,
	newtitle: '',
	tasksmove: [],
	tasks: [{
		order: '21',
		fixed: false,
		tid: 'T111',
		checked: false,
		title: '一次样',
		type: 2,
		contract: 'HD11122',
		chargeperson: '',
		closingdate: '',
		filemore: true,
		filelists: [{
				filename: 'excel.jpg',
				filepath: require('../assets/excel.jpg')
			},
			{
				filename: 'word.png',
				filepath: require('../assets/word.png')
			}
		]
	}, {
		order: '22xxx',
		fixed: false,
		tid: 'T111',
		checked: false,
		title: '二次样',
		type: 3,
		contract: 'Hpppp',
		chargeperson: '',
		closingdate: ''
	}, {
		order: '22111',
		fixed: false,
		tid: 'T111',
		checked: false,
		title: '三次样',
		type: 4,
		contract: 'Hpppp',
		chargeperson: '',
		closingdate: ''
	}]
}]

//负责人下拉
var chargepersonlist = [{
	value: '周一一',
	label: '周一一'
}, {
	value: '周二二',
	label: '周二二'
}, {
	value: '周三三',
	label: '周三三'
}, {
	value: '周四四',
	label: '周四四'
}, {
	value: '周五五',
	label: '周五五'
}]



export {
	groupname,
	taskslist,
	chargepersonlist,
	
}