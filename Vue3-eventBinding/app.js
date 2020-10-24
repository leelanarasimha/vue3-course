const app = Vue.createApp({
    data() {
        return {
            count: 0,
            name: '',
        };
    },
    methods: {
        submitForm() {
            alert('submitted');
        },
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
