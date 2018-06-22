import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from '@/components/portfolio/Portfolio'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Portfolio',
      component: Portfolio,
      props: {content: ''}
    },
    {
      path: '#projects',
      name: 'Projects',
      component: Portfolio,
      props: {content: 'Work'}
    },
    {
      path: '#about',
      name: 'About',
      component: Portfolio,
      props: {content: 'About'}
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
