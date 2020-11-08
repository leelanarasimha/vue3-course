<template>
    <div>
        <h3>Post Details</h3>
        <div>
            <div>Id: {{ id }}</div>
            <div>Title: {{ post.title }}</div>
            <div>Descripton: {{ post.description }}</div>
        </div>

        <div>
            <router-link class="btn btn-warning" to="/posts"
                >Back to Posts</router-link
            >
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    data() {
        return {
            post: '',
            id: '',
        };
    },
    created() {
        this.id = this.$route.params.id;
        Axios.get(`posts.json?id=${this.id}`).then((response) => {
            this.post = response.data[this.id];
        });
    },
};
</script>
