<template>
    <div>
        <h3>UserDetails</h3>
        <div>Name: {{ user.name }}</div>
        <div>Age: {{ user.age }}</div>

        <div>{{ fullDetails }}</div>
        <button @click.prevent="changeName">Change Name</button>

        <div>
            <input type="text" ref="ageref" />
            <button @click.prevent="changeAge()">Change Age</button>
        </div>
    </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
export default {
    props: {
        userDetails: {
            required: true,
        },
    },

    setup(props) {
        const ageref = ref(null);
        const user = reactive(props.userDetails);

        const fullDetails = computed(() => {
            return user.name + 'age: ' + user.age;
        });
        function changeName() {
            user.name = 'Modified Leela';
        }

        function changeAge() {
            user.age = ageref.value.value;
        }

        return {
            changeName,
            user,
            fullDetails,
            ageref,
            changeAge,
        };
    },
};
</script>
