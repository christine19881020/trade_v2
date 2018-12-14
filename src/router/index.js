import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import tasklist from '@/components/task/list'
import orderinfo from '@/components/task/orderinfo'
import template from '@/components/task/template'
import neworder from '@/components/task/neworder'
import product from '@/components/task/product'
import taskDetail from '@/components/task/taskDetail'
import taskDetail1 from '@/components/task/taskDetail1'
import taskDetail2 from '@/components/task/taskDetail2'
import taskDetail3 from '@/components/task/taskDetail3'
import taskDetail4 from '@/components/task/taskDetail4'
import productDetail from '@/components/task/productDetail'
import batchDeal from '@/components/task/batchDeal'
import batchdealing from '@/components/task/batchDealing'

import orderlist from '@/components/order/list'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '',
			redirect: '/login',
			hidden: true
		},
		{
			path: '/login',
			name: 'login',
			component: () =>import('@/components/login'),
			active: false,
			hidden: true,
		},		
		{
			path: '/order',
			label: '订单',
			component: index,
			active: false,
			children: [{
				path: '',
				redirect: '/order/list',
				component: orderlist,
			}, {
				path: '/order/list',
				name: 'orderlist',
				component: orderlist,
			}
			]
		},
		{
			path: '/task',
			label: '任务',
			component: index,
			active: true,
			children: [{
				path: '',
				redirect: '/task/list',
				component: tasklist,
			}, {
				path: '/task/list',
				name: 'tasklist',
				component: tasklist,
			}, {
				path: '/task/template',
				name: 'template',
				component: template,
			},{
				path: '/task/neworder/:tid',
				name: 'neworder',
				component: neworder,
			},{
				path: '/task/product/:pid',
				name: 'product',
				component: product,
			},{
				path: '/task/taskDetail/:taskid',
				name: 'taskDetail',
				component: taskDetail,
			},{
				path: '/task/taskDetail1/:taskid',
				name: 'taskDetail1',
				component: taskDetail1,
			},{
				path: '/task/taskDetail2/:taskid',
				name: 'taskDetail2',
				component: taskDetail2,
			},{
				path: '/task/taskDetail3/:taskid',
				name: 'taskDetail3',
				component: taskDetail3,
			},{
				path: '/task/taskDetail4/:taskid',
				name: 'taskDetail4',
				component: taskDetail4,
			},{
				path: '/task/productDetail/:taskid/:type',
				name: 'productDetail',
				component: productDetail,
			},{
				path: '/task/orderinfo/:id',
				name: 'orderinfo',
				component: () =>import('@/components/task/orderinfo'),
			}, {
				path: '/task/batchdeal',
				name: 'batchDeal',
				component: batchDeal,
			}, {
				path: '/task/batchdealing',
				name: 'batchdealing',
				component: () =>import('@/components/task/batchDealing'),
			}]
		}
	]
})