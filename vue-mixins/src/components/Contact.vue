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
import CounterMixin from '../mixins/CounterMixin';
export default {
    data() {
        return {
            counter: 5,
        };
    },
    mounted() {
        console.log('mounted from component');
    },
    mixins: [CounterMixin],
};
</script>
