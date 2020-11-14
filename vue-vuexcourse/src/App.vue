<template>
    <div>
        <counter></counter>

        <div>
            <h3>App Vue counter</h3>
            {{ count }}
        </div>
    </div>
</template>

<script>
import Counter from './components/Counter.vue';
export default {
    name: 'App',
    computed: {
        count() {
            return this.$store.state.count;
        },
    },
    components: {
        Counter,
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
