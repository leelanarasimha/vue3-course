<template>
    <div>
        <h3>Post Details</h3>
        <div>
            <div>Id: {{ id }}</div>
            <div>Title: {{ post.title }}</div>
            <div>Descripton: {{ post.description }}</div>
        </div>

        <div>
            <router-link to="/posts/-MLaNim5IIMPM0y5EiNj"
                >go to post id -MLaNim5IIMPM0y5EiNj</router-link
            >
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
    props: ['id'],
    data() {
        return {
            post: '',
        };
    },
    watch: {
        id() {
            console.log('props details');
            this.getPostDetails();
        },
    },
    // watch: {
    //     $route() {
    //         console.log('watch called');
    //         this.getPostDetails();
    //     },
    // },
    created() {
        // this.$watch(
        //     () => this.$route.params,
        //     () => {
        //         this.getPostDetails();
        //     },
        // );
        this.getPostDetails();
    },
    methods: {
        getPostDetails() {
            Axios.get(`posts.json?id=${this.id}`).then((response) => {
                this.post = response.data[this.id];
            });
        },
    },
};
</script>
