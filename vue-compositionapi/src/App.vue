<template>
    <div>
        <div>The name of the youtube channel is {{ userName }}</div>

        <h3>UserDetails</h3>
        <div>Name: {{ name }}</div>
        <div>Age: {{ age }}</div>
    </div>
</template>

<script>
import { ref, reactive, isReactive, isRef, toRefs } from 'vue';
export default {
    setup() {
        let name = ref('Leela Web Dev');

        let userDetails = reactive({
            name: 'Leela',
            age: 30,
        });

        console.log(isRef(name));
        console.log(isReactive(userDetails));

        setTimeout(() => {
            name.value = 'Leela';
            userDetails.name = 'Modified Leela';
            userDetails.age = 20;
        }, 3000);

        let userRefs = toRefs(userDetails);

        return {
            userName: name,
            name: userRefs.name,
            age: userRefs.age,
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
