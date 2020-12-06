export default {
    data() {
        return {
            counter: 0,
        };
    },
    mounted() {
        console.log('mounted from mixin');
    },
    methods: {
        onIncrement(count) {
            this.counter += count;
        },
    },
};
