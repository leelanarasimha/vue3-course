<template>
    <div>
        <div>
            <button @click.prevent="onPostsClick()">
                CLick to Posts Page
            </button>
        </div>
        <div>Home Page</div>
    </div>
</template>

<script>
export default {
    methods: {
        onPostsClick() {
            this.$router.push('/posts');
            //this.$router.go(1);
        },
    },
};
</script>
