import { createRouter, createWebHistory } from 'vue-router'

// Импортируем компоненты страниц
import Home from '@/views/Home.vue'
import Cream from '@/views/Cream.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/cream/:id',
        name: 'CreamDetail',
        component: Cream
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
