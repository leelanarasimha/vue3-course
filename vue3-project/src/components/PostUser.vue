<template>
    <div>
        <div>{{ user.value }}</div>
    </div>
</template>

<script>
export default {
    inject: ['user'],
    mounted() {
        console.log(this.user);
    },
};
</script>
