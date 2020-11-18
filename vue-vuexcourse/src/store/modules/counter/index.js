import {
    COUNTER_ACTIONA,
    COUNTER_ACTIONB,
    COUNTER_INCREMENT,
    COUNTER_ON_INCREMENT,
} from '../../storecontants';

export default {
    namespaced: true,
    state() {
        return {
            count: 2,
        };
    },
    mutations: {
        [COUNTER_ON_INCREMENT](state, payload) {
            state.count = state.count + payload.value;
        },
    },
    getters: {},
    actions: {
        [COUNTER_INCREMENT](context, payload) {
            console.log(context);
            setTimeout(() => {
                context.commit(COUNTER_ON_INCREMENT, payload);
            }, 2000);
        },

        [COUNTER_ACTIONA](context) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    context.commit(COUNTER_ON_INCREMENT, { value: 1 });
                    resolve('Leela Web Dev');
                }, 2000);
            });
        },
        [COUNTER_ACTIONB](context) {
            context.dispatch('actionA').then((response) => {
                console.log(response);
                console.log('calling success from actionB');
            });
        },
    },
};
