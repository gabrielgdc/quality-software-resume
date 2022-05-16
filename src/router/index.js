import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IntroductionView from '../views/IntroductionView.vue'
import TestsView from '../views/TestsView.vue'
import GitView from '../views/GitView.vue'
import CmmiView from '../views/CmmiView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: IntroductionView
    },
    {
      path: '/tests',
      name: 'tests',
      component: TestsView
    },
    {
      path: '/git',
      name: 'git',
      component: GitView
    },
    {
      path: '/cmmi',
      name: 'cmmi',
      component: CmmiView
    }
  ]
})

export default router
