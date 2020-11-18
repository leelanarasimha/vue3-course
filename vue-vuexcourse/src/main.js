import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const counterModule = {
    namespaced: true,
    state() {
        return {
            count: 2,
        };
    },
    mutations: {
        increment(state, payload) {
            state.count = state.count + payload.value;
        },
    },
    getters: {},
    actions: {
        increment(context, payload) {
            console.log(context);
            setTimeout(() => {
                context.commit('increment', payload);
            }, 2000);
        },

        actionA(context) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    context.commit('increment', { value: 1 });
                    resolve('Leela Web Dev');
                }, 2000);
            });
        },
        actionB(context) {
            context.dispatch('actionA').then((response) => {
                console.log(response);
                console.log('calling success from actionB');
            });
        },
    },
};

const todosModule = {
    namespaced: true,
    state() {
        return {
            todos: [
                { id: 1, text: 'wakeup early', done: true },
                { id: 2, text: 'do breakfast', done: true },
                { id: 3, text: 'go to school', done: false },
                { id: 4, text: 'sleep early', done: false },
            ],
        };
    },
    mutations: {},
    getters: {
        getTodoById: (state) => (id) => {
            return state.todos.find((todo) => todo.id === id);
        },
        doneTodos(state) {
            return state.todos.filter((todo) => todo.done);
        },
        doneTodosListCount(state, getters) {
            return getters.doneTodos.length;
        },
    },
    actions: {
        actionB() {
            console.log('firing from todos module actionB');
        },
    },
};

const store = createStore({
    modules: {
        counter: counterModule,
        todos: todosModule,
    },
    state() {
        return {};
    },
    getters: {},
    mutations: {},
    actions: {},
});
const app = createApp(App);
app.use(store);
app.mount('#app');
