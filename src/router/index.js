import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/pages/index')
const Product = () => import('@/pages/product/product')
const Msite = () => import('@/pages/msite')

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/msite',
      name: 'Msite',
      component: Msite
    }
  ]
})
