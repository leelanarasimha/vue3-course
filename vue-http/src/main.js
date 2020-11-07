import Axios from 'axios';
import { createApp } from 'vue';
import App from './App.vue';

Axios.defaults.baseURL = 'https://vue-completecourse.firebaseio.com/';
Axios.defaults.headers.post['leela'] = 'Leela Web Dev post config';
Axios.defaults.headers.get['leela'] = 'Leela Web Dev get config';

Axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        config.headers.common['interceptorheader'] = 'Interceptor Header';
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

Axios.interceptors.response.use(
    function(response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        response.data = { hai: 'hai' };
        return response;
    },
    function(error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    },
);

createApp(App).mount('#app');
