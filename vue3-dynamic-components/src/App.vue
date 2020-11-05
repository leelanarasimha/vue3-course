<template>
    <div>
        <div>
            <button @click="onActiveSelected">Active Hobbies</button>
            <button @click="onInactiveSelected">InActive Hobbies</button>
        </div>

        <div>
            <a href="" @click.prevent="onOpenModal()">Open Modal</a>
        </div>

        <keep-alive>
            <component :is="selectedComponent"></component>
        </keep-alive>

        <teleport to="body">
            <modal-dialog
                v-if="showModal"
                @closemodal="showModal = false"
            ></modal-dialog>
        </teleport>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import ModalDialog from './components/ModalDialog.vue';

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
            showModal: false,
        };
    },
    name: 'App',
    components: {
        ActiveHobbies,
        InactiveHobbies,
        ModalDialog,
    },
    methods: {
        onOpenModal() {
            this.showModal = true;
        },
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
