import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import ProfilePage from './views/ProfilePage.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import SearchCards from './views/SearchCards.vue'

const routes = 
[
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/profile',
        component: ProfilePage
    },
    {
        path: '/signin',
        component: SignIn
    },
    {
        path: '/signup',
        component: SignUp
    },
    {
        path: '/search',
        component: SearchCards
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;