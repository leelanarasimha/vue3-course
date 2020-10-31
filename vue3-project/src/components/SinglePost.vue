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
import { Post } from '../services/PostService';
export default {
    emits: {
        'title-changed': (post) => {
            if (post instanceof Post) {
                return true;
            }
            console.log('invalid Post Data');
            return false;
        },
    },
    props: ['data', 'isactive'],
    data() {
        return {
            post: { ...this.data },
        };
    },
    methods: {
        changeTitle() {
            this.post.title = 'changed the title';
            const postData = new Post(
                this.post.id,
                this.post.title,
                this.post.description,
            );
            this.$emit('title-changed', postData);
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
