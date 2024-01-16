import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import ProfilePage from './views/ProfilePage.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'

const routes = 
[
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/ProfilePage',
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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;






