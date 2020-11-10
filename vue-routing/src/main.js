import { createApp } from 'vue';
import App from './App.vue';
import Posts from './components/pages/Posts.vue';
import CreatePost from './components/pages/CreatePost.vue';
import PostItem from './components/pages/PostItem.vue';
import NotFound from './components/pages/NotFound.vue';
import NoPost from './components/pages/NoPost.vue';
import PostsFooter from './components/PostsFooter.vue';
import CreatePostFooter from './components/CreatePostFooter.vue';
import Navigation from './components/TheNavigation.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Axios from 'axios';

const routes = [
    {
        path: '/',
        redirect: '/posts',
    },
    {
        name: 'posts',
        path: '/posts',
        components: {
            default: Posts,
            footer: PostsFooter,
            navigation: Navigation,
        },
        beforeEnter: () => {
            console.log('router based before each');
        },
        children: [
            {
                path: '',
                component: NoPost,
            },
            {
                name: 'single-post',
                path: ':id',
                component: PostItem,
                props: true,
            },
        ],
    },

    {
        path: '/createpost',
        components: {
            default: CreatePost,
            footer: CreatePostFooter,
            navigation: Navigation,
        },
    },

    { path: '/:NotFound(.*)*', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'active',
});

router.beforeEach((to, _1, next) => {
    console.log('Global before each');
    if (to.path === '/createpost') {
        next();
    } else {
        next();
    }
});

router.afterEach(() => {
    console.log('Router after each');
});

Axios.defaults.baseURL = 'https://vue-completecourse.firebaseio.com/';

const app = createApp(App);
app.use(router);
app.mount('#app');
