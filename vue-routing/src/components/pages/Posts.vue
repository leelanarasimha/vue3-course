<template>
    <div class="row">
        <div class="col-md-8">
            <div>
                <h3>Post Details</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="post in postDetails" :key="post.id">
                            <td>{{ post.id }}</td>
                            <td>{{ post.title }}</td>
                            <td>{{ post.description }}</td>
                            <td>
                                <router-link
                                    :to="{
                                        name: 'single-post',
                                        params: { id: post.id },
                                        query: { sort: 'asc' },
                                    }"
                                    class="btn btn-primary"
                                    >Show Details</router-link
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-md-4">
            <router-view></router-view>
        </div>
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
        axios.get(`posts.json`).then((response) => {
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
