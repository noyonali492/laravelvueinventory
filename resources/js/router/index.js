import { createRouter, createWebHistory } from "vue-router";

import home from '../components/HomePage.vue';
import about from '../components/AboutPage.vue';


// Define routes
const routes = [
    {
        path: '/',
        name: 'Home',
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
