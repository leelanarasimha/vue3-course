<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <a href="" @click.prevent="changeTitle()"
                    >Click to change title</a
                >
                <h2>Posts</h2>
                <div v-for="post in posts" :key="post.title">
                    <single-post :data="post" isactive="1"></single-post>
                    <hr />
                </div>
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
                    description: 'Post Description 1',
                },
                {
                    title: 'New Post 2',
                    description: 'Post Description 2',
                },
            ],
        };
    },
    methods: {
        changeTitle() {
            this.posts[0].title = 'change the title in parent';
        },
    },
    name: 'App',
    components: {},
};
</script>

<style></style>
