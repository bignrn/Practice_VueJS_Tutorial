import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeView2 from '../views/HomeView2.vue'
import ErrorView from '../views/ErrorView.vue'

const routes = [
  {
    path: '/',
    name: 'error',
    component: ErrorView
  },
  {
    path: '/Practice_VueJS_Tutorial/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Practice_VueJS_Tutorial/home2',
    name: 'home2',
    component: HomeView2
  },
  {
    path: '/Practice_VueJS_Tutorial/about-props',
    name: 'aboutProps',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Practice_VueJS_Tutorial/document',
    name: 'document',
    component: () => import(/* webpackChunkName: "document" */'../views/DocumentView.vue')
  },
  {
    path: '/Practice_VueJS_Tutorial/calendar',
    name: 'calendar',
    component: () => import(/* webpackChunkName: "calendar" */'../views/CalendarView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
