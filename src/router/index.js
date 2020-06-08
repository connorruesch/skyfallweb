import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/announcements',
        name: 'Announcements',
        component: () => import('../views/Announcements.vue'),
    },
    {
        path: '/rules',
        name: 'Rules',
        component: () => import('../views/Rules.vue'),
    },
    {
        path: '/play',
        name: 'Play',
        component: () => import('../views/Play.vue'),
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
