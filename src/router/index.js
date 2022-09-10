import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import HomeView2 from '../views/HomeView2.vue';
// import ErrorView from '../views/ErrorView.vue';
import AboutView from '../views/AboutView.vue';
import DocumentView from '../views/DocumentView.vue';
import CalendarView from '../views/CalendarView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
    redirect: "/Practice_VueJS_Tutorial"
  },
  {
    path: '/Practice_VueJS_Tutorial',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/Practice_VueJS_Tutorial/home2',
    name: 'home2',
    component: HomeView2,
  },
  {
    path: '/Practice_VueJS_Tutorial/about-props',
    name: 'aboutProps',
    component: AboutView,
  },
  {
    path: '/Practice_VueJS_Tutorial/document',
    name: 'document',
    component: DocumentView,
  },
  {
    path: '/Practice_VueJS_Tutorial/calendar',
    name: 'calendar',
    component: CalendarView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
