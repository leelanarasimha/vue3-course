const { default: Axios } = require('axios');

const axiosinstance = Axios.create({
    baseURL: 'https://vue-completecourse.firebaseio.com/',
});

axiosinstance.defaults.headers.common['leelainstance'] =
    'leela instance header';

export default axiosinstance;
