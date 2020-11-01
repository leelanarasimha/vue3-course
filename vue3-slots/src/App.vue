<template>
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <Button>
        <em class="fa fa-caret-down"></em>&nbsp; User Profile
    </Button>

    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <profile-card>
                    <template #header>
                        <div>Header Title</div>
                    </template>

                    <template #default>
                        <div>Content</div>
                        <div>Contrent message</div>
                    </template>

                    <template #footer>
                        <div>Footer Message</div>
                    </template>
                </profile-card>
            </div>
            <div class="col-md-4">
                <profile-card> </profile-card>
            </div>
        </div>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Button from './components/Button.vue';
import ProfileCard from './components/ProfileCard.vue';

export default {
    name: 'App',
    components: {
        HelloWorld,
        Button,
        ProfileCard,
    },
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
