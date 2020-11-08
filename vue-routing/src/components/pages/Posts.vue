<template>
    <div>
        <h3>Post Details</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="post in postDetails" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.description }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Posts',
    data() {
        return {
            postDetails: [],
        };
    },
    mounted() {
        axios
            .get(`https://vue-completecourse.firebaseio.com/posts.json`)
            .then((response) => {
                this.formatPosts(response.data);
            });
    },
    methods: {
        formatPosts(postsData) {
            for (let key in postsData) {
                this.postDetails.push({ ...postsData[key], id: key });
            }
        },
    },
};
</script>
