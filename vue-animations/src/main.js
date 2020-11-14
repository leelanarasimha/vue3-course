import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/about',
            component: About,
        },
        {
            path: '/contact',
            component: Contact,
        },
    ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
