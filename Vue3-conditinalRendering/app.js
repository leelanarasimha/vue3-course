const app = Vue.createApp({
    data() {
        return {
            hobbies: [],
            enteredHobbyValue: '',
        };
    },
    methods: {
        onHobbySubmit() {
            this.hobbies.push(this.enteredHobbyValue);
        },
    },
});

app.mount('#app');
