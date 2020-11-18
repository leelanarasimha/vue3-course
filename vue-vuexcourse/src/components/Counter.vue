<template>
    <div>
        <div>{{ count }}</div>

        <div>
            <button @click.prevent="onIncrement()">Increment1</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { COUNTER_ACTIONB } from '../store/storecontants';
export default {
    data() {
        return {};
    },
    computed: {
        ...mapState({
            count: (state) => state.counter.count,
        }),
    },
    methods: {
        ...mapActions('counter', {
            onIncrement: COUNTER_ACTIONB,
        }),
    },
};
</script>
