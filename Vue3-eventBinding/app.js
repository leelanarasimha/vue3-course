const app = Vue.createApp({
    data() {
        return {
            count: 0,
            name: '',
        };
    },
    methods: {
        onIncrement() {
            this.count++;
        },
        onDecrement() {
            this.count--;
        },
        setName(event, lastName) {
            this.name = event.target.value + lastName;
        },
    },
});

app.mount('#app');
