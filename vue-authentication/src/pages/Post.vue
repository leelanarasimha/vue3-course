<template>
    <div>
        <h2>Posts Details</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tbody>
                    <tr v-for="post in posts" :key="post.id">
                        <td>{{ post.id }}</td>
                        <td>{{ post.title }}</td>
                        <td>{{ post.description }}</td>
                    </tr>
                </tbody>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapMutations } from 'vuex';
import {
    GET_USER_TOKEN_GETTER,
    LOADING_SPINNER_SHOW_MUTATION,
} from '../store/storeconstants';
export default {
    data() {
        return {
            posts: [],
        };
    },
    computed: {
        ...mapGetters('auth', {
            token: GET_USER_TOKEN_GETTER,
        }),
    },
    mounted() {
        this.showLoading(true);
        axios
            .get(
                `https://vue-completecourse.firebaseio.com/posts.json?auth=${this.token}`,
            )
            .then((response) => {
                this.formatPosts(response.data);
                this.showLoading(false);
            })
            .catch(() => {
                this.showLoading(false);
            });
    },
    methods: {
        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION,
        }),
        formatPosts(posts) {
            for (let key in posts) {
                this.posts.push({ ...posts[key], id: key });
            }
            console.log(this.posts);
        },
    },
};
</script>

<style scoped></style>
