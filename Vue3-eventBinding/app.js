const app = Vue.createApp({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        onIncrement() {
            this.count++;
        },
        onDecrement() {
            this.count--;
        }
    }
});

app.mount('#app');