import { createRouter, createWebHashHistory } from 'vue-router';
const Dashboard = () => import('../views/dashboard.vue')
const HelloWord = () => import('../views/HelloWorld.vue')

const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/hello',
        name: 'helloWorld',
        component: HelloWord,
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})