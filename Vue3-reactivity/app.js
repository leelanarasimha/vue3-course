const commonData = {
    commonMessage: 'This is the common message',
};

const app = Vue.createApp({
    data() {
        return {
            message: 'Hello world',
            data: commonData,
            textMessage: '',
        };
    },
    methods: {
        setText() {
            this.textMessage = this.$refs.userText.value;
        },
    },
});

app.mount('#app');

const app2 = Vue.createApp({
    data() {
        return {
            anotherMessage: 'Hello another world',
            data: commonData,
        };
    },
    methods: {
        changeMessage() {
            this.data.commonMessage = 'Changed the message';
        },
    },
});

app2.mount('#app2');
