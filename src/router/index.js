import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import Portfolio from '@/components/Portfolio'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
