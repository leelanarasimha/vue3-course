import { createRouter, createWebHistory } from 'vue-router';
import store from './store/store';
import { IS_USER_AUTHENTICATE_GETTER } from './store/storeconstants';

const Login = () =>
    import(/* webpackChunkName: "Login" */ './pages/Login.vue');
const Signup = () => import('./pages/Signup.vue');
const Home = () => import('./pages/Home.vue');
const Post = () => import('./pages/Post.vue');

const routes = [
    { path: '', component: Home },
    { path: '/login', component: Login, meta: { auth: false } },
    { path: '/signup', component: Signup, meta: { auth: false } },
    { path: '/posts', component: Post, meta: { auth: true } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (
        'auth' in to.meta &&
        to.meta.auth &&
        !store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
    ) {
        next('/login');
    } else if (
        'auth' in to.meta &&
        !to.meta.auth &&
        store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
    ) {
        next('/posts');
    } else {
        next();
    }
});

export default router;
