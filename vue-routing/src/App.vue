<template>
    <router-view name="navigation"></router-view>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div>
                    <router-view></router-view>
                </div>
                <div>
                    <router-view name="footer"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
};
</script>

<style></style>
