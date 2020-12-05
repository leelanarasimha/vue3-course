<template>
    <div>
        <div>About Component</div>
        <div>{{ counter }}</div>
        <div>
            <button @click.prevent="onIncrement(10)">Increment</button>
        </div>
    </div>
</template>

<script>
import CounterMixin from '../mixins/CounterMixin';
export default {
    mixins: [CounterMixin],
};
</script>
