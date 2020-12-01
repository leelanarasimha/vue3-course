<template>
    <div>
        <div>{{ fullName }}</div>

        <div style="margin-top: 30px">
            <input
                type="text"
                placeholder="First Name"
                @input="changeFirstName"
            />&nbsp;
            <input
                type="text"
                placeholder="Last Name"
                @input="changeLastName"
            />
        </div>

        <h3>UserDetails</h3>
        <div>Name: {{ userDetails.name }}</div>
        <div>Age: {{ userDetails.age }}</div>
        <button @click.prevent="changeName">Change Name</button>
    </div>
</template>

<script>
import { ref, reactive, computed } from 'vue';
export default {
    setup() {
        let name = ref('Leela Web Dev');
        let firstName = ref('');
        let lastName = ref('');

        let userDetails = reactive({
            name: 'Leela',
            age: 30,
        });

        const fullName = computed(() => {
            return firstName.value + ' ' + lastName.value;
        });

        function changeFirstName(event) {
            firstName.value = event.target.value;
        }

        function changeLastName(event) {
            lastName.value = event.target.value;
        }

        function changeName() {
            userDetails.name = 'Modified Leela';
        }

        return {
            userName: name,
            userDetails,
            changeName,
            changeFirstName,
            changeLastName,
            fullName,
        };
    },
    // data() {
    //     return {
    //         userName: 'Leela Web Dev',
    //     };
    // },
    // mounted() {
    //     setTimeout(() => {
    //         this.userName = 'Leela';
    //     }, 3000);
    // },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
