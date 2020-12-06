<template>
    <div>
        <div>Contact Component</div>
        <div>{{ counter }}</div>
        <div>
            <button @click.prevent="onIncrement(3)">Increment</button>
        </div>
    </div>
</template>

<script>
import useCounter from '../hooks/useCounter';
export default {
    setup() {
        return useCounter(20);
    },
};
</script>
