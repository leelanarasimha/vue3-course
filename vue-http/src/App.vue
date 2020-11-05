<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <post></post>
            </div>
        </div>
    </div>
</template>

<script>
import Post from './components/Post.vue';
export default {
    name: 'App',
    components: {
        Post,
    },
};
</script>

<style></style>
