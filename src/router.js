import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  }
]

const router = createRouter({
 history: createWebHistory(),
 routes
})

export default router;
