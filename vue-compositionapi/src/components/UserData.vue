<template>
    <div>
        <h3>UserDetails</h3>
        <div>Name: {{ user.name }}</div>
        <div>Age: {{ user.age }}</div>

        <div>{{ fullDetails }}</div>
        <button @click.prevent="changeName">Change Name</button>
    </div>
</template>

<script>
import { computed, reactive } from 'vue';
export default {
    props: {
        userDetails: {
            required: true,
        },
    },

    setup(props) {
        const user = reactive(props.userDetails);

        const fullDetails = computed(() => {
            return user.name + 'age: ' + user.age;
        });
        function changeName() {
            user.name = 'Modified Leela';
        }

        return {
            changeName,
            user,
            fullDetails,
        };
    },
};
</script>
