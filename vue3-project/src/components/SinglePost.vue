<template>
    <div>
        <div class="title">{{ post.title }}</div>
        <post-user></post-user>
        <div>{{ post.description }}</div>

        <a href="" @click.prevent="changeTitle()"
            >Click here to change title</a
        >
        <div>{{ user.value }}</div>
    </div>
</template>
<script>
import { Post } from '../services/PostService';
import PostUser from './PostUser';
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
    components: {
        PostUser,
    },
    inject: ['user'],
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
