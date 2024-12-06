import { createRouter, createWebHistory } from "vue-router";

import home from '../components/HomePage.vue';
import about from '../components/AboutPage.vue';
import app from '../components/app.vue';


// Define routes
const routes = [
    {
        path: '/',
        name: 'app',
        component: app
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/about',
        name: 'About',
        component: about
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router
