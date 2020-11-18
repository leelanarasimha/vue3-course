import actions from './actions';
import getters from './getters';

export default {
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
    getters: getters,
    actions: actions,
};
