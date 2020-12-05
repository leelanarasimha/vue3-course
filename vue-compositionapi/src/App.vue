<template>
    <div>
        <div>
            <router-view> </router-view>
            <hr />
        </div>
        <div>{{ fullName }}</div>

        <div v-if="showLifeCycle">
            <LifeCycle />
        </div>

        <div>
            <button @click.prevent="showLifeCycle = !showLifeCycle">
                Toggle Life Cycle
            </button>
        </div>

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

        <UserData :user-details="userDetails" />
    </div>
</template>

<script>
import { ref, reactive, computed } from 'vue';
import UserData from './components/UserData.vue';
import LifeCycle from './components/LifeCycle.vue';
export default {
    components: {
        UserData,
        LifeCycle,
    },
    setup() {
        let name = ref('Leela Web Dev');
        let showLifeCycle = ref(true);
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
            showLifeCycle,
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
