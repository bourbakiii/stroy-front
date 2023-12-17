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
        path: '/sign-in',
        name: 'Sign in',
        meta:{
        layout: 'empty-layout',
        },
        component: () => import('@/pages/SignIn.vue')
    },
    {
        path: '/buildings',
        name: 'Your building',
        meta:{
            layout: 'sidebar-layout',
        },
        component: () => import('@/pages/Buildings.vue')
    },
    {
        path: '/buildings/:id',
        name: 'Update building',
        meta:{
            layout: 'sidebar-layout',
        },
        component: () => import('@/pages/CEBuilding.vue')
    },
    {
        path: '/buildings/create',
        name: 'Create building',
        meta:{
            layout: 'sidebar-layout',
        },
        component: () => import('@/pages/CEBuilding.vue')
    },
    {
        path: '/sign-up',
        name: 'Sign up',
        meta:{
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
