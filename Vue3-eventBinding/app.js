const app = Vue.createApp({
    data() {
        return {
            count: 0,
            name: 'Leela',
            confirmedName: '',
        };
    },
    methods: {
        outputFullName() {
            console.log('executing full name');
            return this.name + ' Web Dev';
        },
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
        setName(event) {
            this.name = event.target.value;
        },
    },
});

app.mount('#app');
