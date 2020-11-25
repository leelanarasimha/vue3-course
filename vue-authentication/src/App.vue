<template>
    <TheNavigation />
    <the-loader v-if="showLoading"></the-loader>
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
import TheLoader from './components/TheLoader.vue';
import { mapState } from 'vuex';
export default {
    name: 'App',
    computed: {
        ...mapState({
            showLoading: (state) => state.showLoading,
        }),
    },
    components: {
        TheNavigation,
        TheLoader,
    },
};
</script>
