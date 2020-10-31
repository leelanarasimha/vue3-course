<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="my-4">
                    <div>{{ user }}</div>
                    <a href="" @click.prevent="changeUser()"
                        >Click to change User Name</a
                    >
                </div>
                <a href="" @click.prevent="changeTitle()"
                    >Click to change title</a
                >
                <h2>Posts</h2>
                <div v-for="post in posts" :key="post.title">
                    <single-post
                        :data="post"
                        isactive="1"
                        @title-changed="onTitleChange"
                    ></single-post>
                    <hr />
                </div>
            </div>

            <div class="col-md-4">
                <h3>Latest Posts</h3>
                <ul class="list-group">
                    <li
                        class="list-group-item"
                        v-for="post in posts"
                        :key="post.title"
                    >
                        {{ post.title }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
export default {
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: 'New Post 1',
                    description: 'Post Description 1',
                },
                {
                    id: 2,
                    title: 'New Post 2',
                    description: 'Post Description 2',
                },
            ],
            user: 'Leela Web Dev',
        };
    },
    provide() {
        return {
            user: computed(() => this.user),
        };
    },
    methods: {
        changeUser() {
            this.user = 'Updated Leela Web Dev';
        },
        onTitleChange(event) {
            let index = this.posts.findIndex(
                (post) => post.id === event.id,
            );
            this.posts[index].title = event.title;
        },
        changeTitle() {
            this.posts[0].title = 'change the title in parent';
        },
        selectChange(event) {
            console.log(event.target.value);
        },
    },
    name: 'App',
    components: {},
};
</script>

<style></style>
