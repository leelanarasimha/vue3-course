<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="my-4">
                    <select-component
                        data-status="1"
                        id="selectbox"
                        @change="selectChange"
                    ></select-component>
                </div>
                <a href="" @click.prevent="changeTitle()"
                    >Click to change title</a
                >
                <h2>Posts</h2>
                <div v-for="post in posts" :key="post.title">
                    <single-post :data="post" isactive="1"></single-post>
                    <hr />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SelectComponent from './components/SelectComponent.vue';
export default {
    data() {
        return {
            posts: [
                {
                    title: 'New Post 1',
                    description: 'Post Description 1',
                },
                {
                    title: 'New Post 2',
                    description: 'Post Description 2',
                },
            ],
        };
    },
    methods: {
        changeTitle() {
            this.posts[0].title = 'change the title in parent';
        },
        selectChange(event) {
            console.log(event.target.value);
        },
    },
    name: 'App',
    components: {
        SelectComponent,
    },
};
</script>

<style></style>
