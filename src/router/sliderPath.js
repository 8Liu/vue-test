import Vue from 'vue'
import Router from 'vue-router'
import abstract from '@/view/common/abstract'
import goodsList from '@/view/goods/goods-list'
import orderList from '@/view/orders/order-list'
import user from '@/view/setting/user'

Vue.use(Router)

export default [
  {
    path: '/setting',
    name: 'setting',
    meta: {
      name: '基本设置',
      auth: false,
      icon: 'el-icon-setting'
    },
    component: abstract,
    children: [
      {
        path: 'user',
        name: 'user',
        meta: {
          name: '个人中心',
          auth: false,
          icon: ''
        },
        component: user
      }
    ]
  },
  {
    path: '/goods',
    name: 'goods',
    meta: {
      name: '商品管理',
      auth: false,
      icon: 'el-icon-picture'
    },
    component: abstract,
    children: [
      {
        path: 'list',
        name: 'goodsList',
        meta: {
          name: '商品列表',
          auth: false,
          icon: ''
        },
        component: goodsList
      }
    ]
  },
  {
    path: '/order',
    name: 'orders',
    meta: {
      name: '订单管理',
      auth: false,
      icon: 'el-icon-date'
    },
    component: abstract,
    children: [
      {
        path: 'list',
        name: 'ordersList',
        meta: {
          name: '商品列表',
          auth: false,
          icon: ''
        },
        component: orderList
      }
    ]
  }
]
