import { createApp } from 'vue';
import App from './App.vue';
import SinglePost from './components/SinglePost.vue';

const app = createApp(App);

app.component('SinglePost', SinglePost);

app.mount('#app');
