<template>
    <div>
        <div class="title">{{ post.title }}</div>
        <div>{{ post.description }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: 'New Post',
                description: 'Post Description',
            },
        };
    },
};
</script>

<style>
.title {
    color: red;
    font-weight: bold;
}
</style>
