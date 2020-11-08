<template>
    <div>
        <h3>Create Post</h3>
        <form @submit.prevent="onCreatePost()">
            <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" v-model="title" />
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea
                    class="form-control"
                    v-model="description"
                ></textarea>
            </div>

            <div>
                <button type="submit" class="btn btn-primary">
                    Create Post
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    data() {
        return {
            title: '',
            descriotion: '',
        };
    },

    methods: {
        onCreatePost() {
            Axios.post(
                `https://vue-completecourse.firebaseio.com/posts.json`,
                {
                    title: this.title,
                    description: this.description,
                },
            ).then((response) => {
                console.log(response);
                this.$router.push('/posts');
            });
        },
    },
};
</script>
