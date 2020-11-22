import Axios from 'axios';
import { SIGNUP_ACTION } from '../../storeconstants';

export default {
    async [SIGNUP_ACTION](_, payload) {
        let postData = {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
        };
        let response = await Axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA9HEOZrRHZP026VQObeDz2PVD_GLpMV50
        `,
            postData,
        );

        console.log(response);
    },
};
