<template>
    <div>
        <div>Life Cycle Hooks</div>

        <div>{{ state.name }}</div>

        <div>
            <button @click.prevent="state.name = 'Updated Leela web dev'">
                Update Name
            </button>
        </div>
    </div>
</template>

<script>
import {
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onMounted,
    onRenderTracked,
    onRenderTriggered,
    onUnmounted,
    onUpdated,
    reactive,
} from 'vue';
export default {
    setup() {
        const state = reactive({
            name: 'Leela Web Dev',
        });

        onBeforeMount(() => {
            console.log('before Mounted');
        });

        onMounted(() => {
            console.log('on mounted');
        });

        onBeforeUpdate(() => {
            console.log('on before updated');
        });

        onUpdated(() => {
            console.log('on updated');
        });

        onBeforeUnmount(() => {
            console.log('on before un mounted');
        });

        onUnmounted(() => {
            console.log('on unmounted');
        });

        onRenderTracked((e) => {
            console.log(e);
        });

        onRenderTriggered((e) => {
            console.log(e);
        });

        return { state };
    },
};
</script>
