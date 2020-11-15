<template>
    <div>
        <counter></counter>

        <div>
            <h3>App Vue counter</h3>
            {{ count }}
        </div>
        <div>
            <button @click.prevent="onIncrement()">Increment</button>
        </div>

        <div>
            <todos-list></todos-list>
        </div>

        <div>Todos list complete : {{ doneListCount }}</div>
    </div>
</template>

<script>
import Counter from './components/Counter.vue';
import TodosList from './components/TodosList.vue';
export default {
    name: 'App',
    computed: {
        count() {
            return this.$store.state.count;
        },
        doneListCount() {
            return this.$store.getters.doneTodosListCount;
        },
    },
    components: {
        Counter,
        TodosList,
    },
    methods: {
        onIncrement() {
            this.$store.commit('increment', { value: 2 });
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
