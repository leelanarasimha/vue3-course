import { createApp } from 'vue';
import App from './App.vue';
import Posts from './components/pages/Posts.vue';
import CreatePost from './components/pages/CreatePost.vue';
import PostItem from './components/pages/PostItem.vue';
import NotFound from './components/pages/NotFound.vue';
import NoPost from './components/pages/NoPost.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Axios from 'axios';

const routes = [
    {
        path: '/',
        redirect: '/posts',
    },
    {
        path: '/posts',
        component: Posts,
        children: [
            {
                path: '',
                component: NoPost,
            },
            {
                path: ':id',
                component: PostItem,
                props: true,
            },
        ],
    },

    {
        path: '/createpost',
        component: CreatePost,
    },

    { path: '/:NotFound(.*)*', component: NotFound },
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
