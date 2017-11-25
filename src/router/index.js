import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import class1 from '@/components/class/class'
import my from '@/components/my/my'
import shop from '@/components/shop/shop'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      alias:'/'
    },
    {
      path: '/class',
      name: 'class',
      component: class1
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }

  ]
})
