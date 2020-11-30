<template>
    <div>
        <div>The name of the youtube channel is {{ userName }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: 'Leela Web Dev',
        };
    },

    mounted() {
        setTimeout(() => {
            this.userName = 'Leela';
        }, 3000);
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
