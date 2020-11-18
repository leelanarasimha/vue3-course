import { createStore } from 'vuex';
import counterModule from './modules/counter/index';
import todosModule from './modules/todos/index';

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

export default store;
