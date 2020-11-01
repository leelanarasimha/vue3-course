<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <Button>
        <em class="fa fa-caret-down"></em>&nbsp; User Profile
    </Button>

    <Button> <em class="fa fa-caret-up"></em>&nbsp; User Data </Button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Button from './components/Button.vue';

export default {
    name: 'App',
    components: {
        HelloWorld,
        Button,
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
