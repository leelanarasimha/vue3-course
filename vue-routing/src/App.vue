<template>
    <Navigation />
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from './components/TheNavigation.vue';
export default {
    name: 'App',
    components: {
        Navigation,
    },
};
</script>

<style></style>
