import {createRouter, createWebHistory} from "vue-router";

export const routes = [
    {
        path: '/',
        name: 'Главная',
        meta: {
            show_in_sidebar: true,
            layout: 'sidebar-layout',
        },
        component: () => import('@/pages/Main.vue')
    },
    {
        path: '/sign-in',
        name: 'Вход',
        meta: {
            layout: 'empty-layout',
        },
        component: () => import('@/pages/SignIn.vue')
    },
    {
        path: '/buildings',
        name: 'Ваши объекты',
        meta: {
            show_in_sidebar: true,
            layout: 'sidebar-layout',
        },
        component: () => import('@/pages/Buildings.vue')
    },
    {
        path: '/buildings/:id',
        name: 'Редактирование объекта',
        meta: {
            layout: 'sidebar-layout',
        },
        component: () => import('@/pages/CEBuilding.vue')
    },
    {
        path: '/buildings/create',
        name: 'Создать объект',
        meta: {
            show_in_sidebar: true,
            layout: 'sidebar-layout',
        },
        component: () => import('@/pages/CEBuilding.vue')
    },
    {
        path: '/workers',
        name: 'Рабочие',
        meta: {
            show_in_sidebar: true,
            layout: 'sidebar-layout',
        },
        component: () => import('@/pages/Workers.vue')
    },
    {
        path: '/workers/:id',
        name: 'Редактирование рабочего',
        meta: {
            layout: 'sidebar-layout',
        },
        component: () => import('@/pages/CEWorker.vue')
    },
    {
        path: '/workers/create',
        name: 'Добавить рабочего',
        meta: {
            show_in_sidebar: true,
            layout: 'sidebar-layout',
        },
        component: () => import('@/pages/CEWorker.vue')
    },
    {
        path: '/brigades',
        name: 'Бригады',
        meta: {
            show_in_sidebar: true,
            layout: 'sidebar-layout',
        },
        component: () => import('@/pages/Brigades.vue')
    },
    {
        path: '/brigades/create',
        name: 'Создать бригаду',
        meta: {
            show_in_sidebar: true,
            layout: 'sidebar-layout',
        },
        component: () => import('@/pages/CEBrigade.vue')
    },
    {
        path: '/brigades/:id',
        name: 'Редактировать бригаду',
        meta: {
            layout: 'sidebar-layout',
        },
        component: () => import('@/pages/CEBrigade.vue')
    },
    {
        path: '/sign-up',
        name: 'Регистрация',
        meta: {
            layout: 'empty-layout',
        },
        component: () => import('@/pages/SignUp.vue')
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
