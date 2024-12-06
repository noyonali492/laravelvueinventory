import { createRouter, createWebHistory } from "vue-router";

import home from '../components/HomePage.vue';
import about from '../components/AboutPage.vue';
import login from '../components/auth/login.vue';
import register from '../components/auth/register.vue';
import forgot from '../components/auth/forgot.vue'


// Define routes
const routes = [
   
    {path: '/',name: 'login',component: login},
    {path: '/register', name: 'register', component: register},
    {path: '/forgot', name: 'forgot', component: forgot},
    {path: '/home', name: 'home',component: home},
    {path: '/about', name: 'About',component: about}
];

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router
