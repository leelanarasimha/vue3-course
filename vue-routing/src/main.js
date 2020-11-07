import { createApp } from 'vue';
import App from './App.vue';
import Home from './components/pages/Home.vue';
import Posts from './components/pages/Posts.vue';
import CreatePost from './components/pages/CreatePost.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/posts',
        component: Posts,
    },
    {
        path: '/createpost',
        component: CreatePost,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
