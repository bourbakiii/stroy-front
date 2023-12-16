import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Index',
        meta:{
            layout: 'sidebar-layout',
            },
        component: () => import('@/pages/Main.vue')
    },
    {
        path: '/login',
        name: 'Login',
        meta:{
        layout: 'empty-layout',
        },
        component: () => import('@/pages/Login.vue')
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
