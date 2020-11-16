<template>
    <div style="text-align: left">
        <h3>Todos List (Done: {{ doneListCount }})</h3>
        <ul>
            <li v-for="todo in todosList" :key="todo.id">
                <a href="#" @click.prevent="onTodoSelected(todo.id)">
                    {{ todo.text }} - ({{
                        todo.done ? 'Done' : 'Not Done'
                    }})</a
                >
            </li>
        </ul>

        <div v-if="todo">
            <h3>Selected Todo</h3>
            <div>Id: {{ todo.id }}</div>
            <div>Text: {{ todo.text }}</div>
            <div>Done: {{ todo.done }}</div>
        </div>

        <h3>Completed Todos</h3>
        <ul>
            <li v-for="todo in doneTodos" :key="todo.id">
                {{ todo.text }} - ({{ todo.done ? 'Done' : 'Not Done' }})
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selectedId: 0,
        };
    },
    computed: {
        todosList() {
            return this.$store.state.todos;
        },
        doneListCount() {
            return this.$store.getters.doneTodosListCount;
        },
        doneTodos() {
            return this.$store.getters.doneTodos;
        },
        todo() {
            return this.$store.getters.getTodoById(this.selectedId);
        },
    },
    methods: {
        onTodoSelected(id) {
            this.selectedId = id;
        },
    },
};
</script>
