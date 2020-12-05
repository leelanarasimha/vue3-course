import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';
import Post from './pages/Post.vue';
import Article from './pages/Article.vue';
import Counter from './pages/Counter.vue';
import { createStore } from 'vuex';

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
        {
            path: '/post/:id',
            component: Post,
        },
        {
            path: '/article/:id',
            component: Article,
            props: true,
        },
        {
            path: '/counter',
            component: Counter,
        },
    ],
});

const store = createStore({
    state() {
        return {
            counter: 0,
        };
    },
    getters: {
        counter(state) {
            return state.counter;
        },
    },
    mutations: {
        setCounter(state, data) {
            state.counter += data;
        },
    },
    actions: {
        increment(context) {
            context.commit('setCounter', 1);
        },
    },
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
