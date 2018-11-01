import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import musicList from '@/pages/musicList/musicList'
import musicPlay from '@/pages/musicPlay/musicPlay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: index,
    },
    {
      path: '/musicList',
      name: 'musicList',
      component: musicList
    },
    {
      path: '/musicPlay/:id',
      name: 'musicPlay',
      component: musicPlay
    }
  ]
})
