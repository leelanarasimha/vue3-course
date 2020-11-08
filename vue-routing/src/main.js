import { createApp } from 'vue';
import App from './App.vue';
import Home from './components/pages/Home.vue';
import Posts from './components/pages/Posts.vue';
import CreatePost from './components/pages/CreatePost.vue';
import PostItem from './components/pages/PostItem.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Axios from 'axios';

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
        path: '/posts/:id',
        component: PostItem,
    },
    {
        path: '/createpost',
        component: CreatePost,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'active',
});

Axios.defaults.baseURL = 'https://vue-completecourse.firebaseio.com/';

const app = createApp(App);
app.use(router);
app.mount('#app');
