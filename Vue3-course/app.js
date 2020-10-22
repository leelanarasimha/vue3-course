const app = Vue.createApp({
    data() {
        return {
            title: 'Create a Post Data',
            text1: '<h1>Learn Vue</h1>',
            text2: 'Master Vue',
            link: 'https://vuejs.org'
        }
    },
    methods: {
        getText() {
            return this.text1;
        },
        getAnotherText() {
            return this.text2;
        }  
    }
});

app.mount('#app');