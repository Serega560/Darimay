import { createRouter, createWebHashHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const Home  = () => import('@/views/Home.vue')
const Cream = () => import('@/views/Cream.vue')

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: MainLayout,
            children: [
                { path: '', name: 'Home', component: Home },
                { path: 'cream/:id', name: 'CreamDetail', component: Cream },
            ],
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        // 1) если нажали "назад/вперёд" — вернуть сохранённую позицию
        if (savedPosition) return savedPosition

        // 2) если у перехода есть hash — скроллим к якорю
        if (to.hash) {
            return { el: to.hash, behavior: 'smooth' }
        }

        // 3) если переход на страницу деталей — всегда в начало
        if (to.name === 'CreamDetail') {
            return { left: 0, top: 0 }
        }

        // 4) по умолчанию — в начало страницы
        return { left: 0, top: 0 }
    },
})

export default router
