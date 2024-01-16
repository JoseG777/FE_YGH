import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import ProfilePage from './views/ProfilePage.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'

const routes = 
[
    {
        path: '/Home',
        name: 'HomePage',
        components: HomePage
    },
    {
        path: '/ProfilePage',
        name: 'ProfilePage',
        component: ProfilePage
    },
    {
        path: '/SignIn',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
    },
]

    const router = createRouter({
        history: createWebHistory(process.env.Base_URL),
        routes
    })

    export default router






