import Axios from 'axios';
import {
    SET_USER_TOKEN_DATA_MUTATION,
    SIGNUP_ACTION,
} from '../../storeconstants';

export default {
    async [SIGNUP_ACTION](context, payload) {
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

        if (response.status === 200) {
            context.commit(SET_USER_TOKEN_DATA_MUTATION, {
                email: response.data.email,
                token: response.data.idToken,
                expiresIn: response.data.expiresIn,
                refreshToken: response.data.resfreshToken,
                userId: response.data.localId,
            });
        }
    },
};
