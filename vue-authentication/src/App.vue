<template>
    <TheNavigation />
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';
export default {
    name: 'App',
    components: {
        TheNavigation,
    },
};
</script>
