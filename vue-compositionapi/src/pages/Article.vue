<template>
    <div>
        <div>Article Page</div>
        <div>Article id : {{ id }}</div>

        <div>
            <router-link to="/article/leela"
                >Go to leela article</router-link
            >
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    setup() {},
};
</script>
