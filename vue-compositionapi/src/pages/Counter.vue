<template>
    <div>
        <div>Counter Page</div>
        <div>{{ counter }}</div>

        <div>
            <button @click.prevent="onIncrement()">
                Increment Counter
            </button>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore();

        const counter = computed(() => {
            return store.getters.counter;
        });

        function onIncrement() {
            store.commit('setCounter', 4);
        }

        return {
            counter,
            onIncrement,
        };
    },
};
</script>
