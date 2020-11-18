export default {
    namespaced: true,
    state() {
        return {
            count: 2,
        };
    },
    mutations: {
        increment(state, payload) {
            state.count = state.count + payload.value;
        },
    },
    getters: {},
    actions: {
        increment(context, payload) {
            console.log(context);
            setTimeout(() => {
                context.commit('increment', payload);
            }, 2000);
        },

        actionA(context) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    context.commit('increment', { value: 1 });
                    resolve('Leela Web Dev');
                }, 2000);
            });
        },
        actionB(context) {
            context.dispatch('actionA').then((response) => {
                console.log(response);
                console.log('calling success from actionB');
            });
        },
    },
};
