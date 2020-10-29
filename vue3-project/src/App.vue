<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>Posts</h2>
                <single-post></single-post>
                <hr />

                <single-post></single-post>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                {
                    title: 'New Post 1',
                    description: 'Post Description',
                },
                {
                    title: 'New Post 1',
                    description: 'Post Description',
                },
            ],
        };
    },
    name: 'App',
    components: {},
};
</script>

<style></style>
