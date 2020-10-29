<template>
    <div>
        <div class="title">{{ post.title }}</div>
        <div>{{ post.description }}</div>
        <a href="" @click.prevent="changeTitle()"
            >Click here to change title</a
        >
    </div>
</template>

<script>
export default {
    props: ['data', 'isactive'],
    data() {
        return {
            post: this.data,
        };
    },
    methods: {
        changeTitle() {
            this.post.title = 'changed the title';
        },
    },
};
</script>

<style>
.title {
    color: red;
    font-weight: bold;
}
</style>
