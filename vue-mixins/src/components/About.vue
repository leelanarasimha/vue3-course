<template>
    <div>
        <div>About Component</div>
        <div>{{ counter }}</div>
        <div>{{ name }}</div>
        <div>
            <button @click.prevent="onIncrement(10)">Increment</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import useCounter from '../hooks/useCounter';
export default {
    setup() {
        const name = ref('Leela');
        const counterData = useCounter(10);

        return {
            name,
            ...counterData,
        };
    },
};
</script>
