export default {
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        onIncrement(count) {
            this.counter += count;
        },
    },
};
