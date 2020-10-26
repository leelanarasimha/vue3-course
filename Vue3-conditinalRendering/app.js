const app = Vue.createApp({
    data() {
        return {
            hobbies: [],
            enteredHobbyValue: '',
            userDetails: {
                firstName: 'Leela',
                lastName: 'Web Dev',
                age: 34,
            },
        };
    },
    methods: {
        onHobbySubmit() {
            this.hobbies.push(this.enteredHobbyValue);
        },
    },
});

app.mount('#app');
