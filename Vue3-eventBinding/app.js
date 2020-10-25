const app = Vue.createApp({
    data() {
        return {
            count: 0,
            name: '',
            lastName: '',
            confirmedName: '',
        };
    },

    watch: {
        count(value) {
            if (value > 5) {
                this.count = 0;
            }
        },
    },

    computed: {
        fullName() {
            console.log('executing computed');
            return this.name + this.lastName;
        },
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
