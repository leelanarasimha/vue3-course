import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const store = createStore({
    state() {
        return {
            count: 2,
            todos: [
                { id: 1, text: 'wakeup early', done: true },
                { id: 2, text: 'do breakfast', done: true },
                { id: 3, text: 'go to school', done: false },
                { id: 4, text: 'sleep early', done: false },
            ],
        };
    },
    getters: {
        doneTodosListCount(state) {
            return state.todos.filter((todo) => todo.done).length;
        },
    },
    mutations: {
        increment(state, payload) {
            state.count = state.count + payload.value;
        },
    },
});
const app = createApp(App);
app.use(store);
app.mount('#app');
