import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import class1 from '@/components/class/class'
import my from '@/components/my/my'
import shop from '@/components/shop/shop'
import xiang from '@/components/home/xiang'
import index from '@/components/index'
import classgood from '@/components/class/classGood'
import goods from '@/components/home/good'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index,
      alias:'/',
      children: [
      {
        path: 'home',
        name: 'home',
        component: home,
        alias:'/index'
      },
      {
        path: 'class',
        name: 'class',
        component: class1
      },
      {
        path: 'shop',
        name: 'shop',
        component: shop
      },
      {
        path: 'my',
        name: 'my',
        component: my
      }
    ]},
    {
      path: '/xiang/:id',
      name: 'xiang',
      component: xiang
    },
    {
      path: '/classgood/:id/:name',
      name: 'classgood',
      component: classgood
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    }

  ]
})
