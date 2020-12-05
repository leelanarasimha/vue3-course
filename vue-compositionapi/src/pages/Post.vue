<template>
    <div>
        <div>Post Page</div>
        <div>Post id: {{ id }}</div>
        <router-link to="/post/leela">Go to Leela Post</router-link>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
export default {
    setup() {
        const id = ref('');
        const route = useRoute();
        id.value = route.params.id;

        watch(
            () => route.params.id,
            () => {
                id.value = route.params.id;
            },
        );

        return { id };
    },
};
</script>
