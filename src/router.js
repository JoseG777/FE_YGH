import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import FindCard from './views/FindCard.vue'
import ProfilePage from './views/ProfilePage.vue'
import { useAuthStore } from './stores/AuthStore' 

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn,
    requiresAuth: false 
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
    requiresAuth: false 
  },
  {
    path: '/find-card',
    name: 'FindCard',
    component: FindCard,
    requiresAuth: true 
  },
  {
    path: '/profile-page',
    name: 'ProfilePage',
    component: ProfilePage,
    requiresAuth: true 
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isLoggedIn = authStore.uid !== null; 

  if (to.meta.requiresAuth && !isLoggedIn) {
    next({ name: 'SignIn' });
  } else if (!to.meta.requiresAuth && isLoggedIn && (to.name === 'SignIn' || to.name === 'SignUp')) {
    next({ name: 'HomePage' });
  } else if (isLoggedIn && !isRouteInNavbar(to.name)) {
    next();
  } else if (!isLoggedIn && !isRouteInNavbar(to.name)) {
    next({ name: 'HomePage' });
  } else {
    next();
  }
});

function isRouteInNavbar(routeName) {
  const navbarRoutes = ['HomePage', 'SignIn', 'SignUp'];
  return navbarRoutes.includes(routeName);
}

export default router