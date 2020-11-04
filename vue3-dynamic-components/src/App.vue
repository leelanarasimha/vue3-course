<template>
    <div>
        <div>
            <button @click="onActiveSelected">Active Hobbies</button>
            <button @click="onInactiveSelected">InActive Hobbies</button>
        </div>

        <keep-alive>
            <component :is="selectedComponent"></component>
        </keep-alive>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const ActiveHobbies = defineAsyncComponent(() => {
    return import(
        /* webpackChunkName: 'activehobbies' */ './components/ActiveHobbies.vue'
    );
});

const InactiveHobbies = defineAsyncComponent(() => {
    return import(
        /* webpackChunkName: 'inactivehobbies' */ './components/InactiveHobbies.vue'
    );
});

export default {
    data() {
        return {
            selectedComponent: 'active-hobbies',
        };
    },
    name: 'App',
    components: {
        ActiveHobbies,
        InactiveHobbies,
    },
    methods: {
        onActiveSelected() {
            this.selectedComponent = 'active-hobbies';
        },
        onInactiveSelected() {
            this.selectedComponent = 'inactive-hobbies';
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
