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
    mixins: [CounterMixin],
};
</script>
