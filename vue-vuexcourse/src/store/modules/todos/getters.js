export default {
    getTodoById: (state) => (id) => {
        return state.todos.find((todo) => todo.id === id);
    },
    doneTodos(state) {
        return state.todos.filter((todo) => todo.done);
    },
    doneTodosListCount(state, getters) {
        return getters.doneTodos.length;
    },
};
