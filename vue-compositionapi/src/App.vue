<template>
    <div>
        <div>The name of the youtube channel is {{ userName }}</div>

        <h3>UserDetails</h3>
        <div>Name: {{ userDetails.name }}</div>
        <div>Age: {{ userDetails.age }}</div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
    setup() {
        let name = ref('Leela Web Dev');

        let userDetails = reactive({
            name: 'Leela',
            age: 30,
        });

        setTimeout(() => {
            console.log('execting time out in setup');
            console.log(name);
            name.value = 'Leela';
            userDetails.name = 'Modified Leela';
            userDetails.age = 30;
        }, 3000);

        return {
            userName: name,
            userDetails: userDetails,
        };
    },
    // data() {
    //     return {
    //         userName: 'Leela Web Dev',
    //     };
    // },
    // mounted() {
    //     setTimeout(() => {
    //         this.userName = 'Leela';
    //     }, 3000);
    // },
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
