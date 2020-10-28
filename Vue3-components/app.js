const HobbiesComponent = {
    template: `<ul class="list-group">
                <li
                    class="list-group-item"
                    v-for="hobby in hobbies"
                >
                    {{hobby}}
                </li>
            </ul>`,
    data() {
        return {
            hobbies: ['Reading', 'writing', 'playing'],
        };
    },
};

const app = Vue.createApp({
    data() {
        return {};
    },
    components: {
        HobbiesComponent,
    },
});

app.mount('#app');
