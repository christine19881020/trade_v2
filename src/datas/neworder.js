//新建订单
var taskslist = [{
	oid: 'HDX000',
	title: '订单任务1',
	type:'order',
	newshow: false,
	newtitle: '',
	tasksmove: [],
	tasks: [{
		order: '11',
		fixed: false,
		tid: 'T111',
		checked: false,
		title: '面料采购111',
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
		title: '辅料采购111',
		contract: 'HDX111',
		chargeperson: '',
		closingdate: ''
	}]
}, {
	oid: 'KNO123',
	title: '面料',
	type:'product',
	contractno: 'HDX123',
	newshow: false,
	newtitle: '',
	tasksmove: [],
	tasks: [{
		order: '21',
		fixed: false,
		tid: 'T111',
		checked: false,
		title: '面料采购春季订单',
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
		order: '22',
		fixed: false,
		tid: 'T111',
		checked: false,
		title: '面料采购2春季订单',
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

//基本信息
var basicinfo = {
	name: '',
	client: '',
	no: '',
	finishtime: '',
	desc:''
}

//产品
var productlist=[{kno:'HKSS1111'}]

export {
	taskslist,
	chargepersonlist,
	basicinfo,productlist
}