import './bootstrap';


import { createApp } from 'vue';

 import app from './components/app.vue';


import router  from './router/index.js';


createApp(app).use(router).mount('#app');


// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

// import { routes } from './router/index';

// const router = new VueRouter({
//     routes
// })
// const app = new Vue({
//     el: '#app',
//     router,
//     app,
//     createApp
// })