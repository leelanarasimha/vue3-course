const app = Vue.createApp({
    data() {
        return {
            count: 0,
            name: 'Leela Web Dev',
            confirmedName: '',
        };
    },
    methods: {
        setConfirmedName() {
            this.confirmedName = this.name;
        },
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
