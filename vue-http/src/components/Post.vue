<template>
    <div>
        <h2>Create Post</h2>
        <hr />

        <div class="alert alert-success" v-if="isSuccess">
            Post Created Successfully
        </div>
        <form @submit.prevent="onCreatePost">
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

            <div class="mt-3">
                <button type="submit" class="btn btn-primary">
                    Create Post
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            title: '',
            description: '',
            isSuccess: false,
        };
    },
    methods: {
        onCreatePost() {
            axios
                .post(
                    `https://vue-completecourse.firebaseio.com/posts.json`,
                    { title: this.title, description: this.description },
                )
                .then((response) => {
                    this.isSuccess = true;
                    console.log(response);
                });
        },
    },
};
</script>
