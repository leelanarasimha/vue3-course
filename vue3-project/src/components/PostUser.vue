<template>
    <div>
        <div>{{ user.value }}</div>
        <div>
            <a
                href=""
                @click.prevent="changeuser('Updated leela from child')"
                >Change User</a
            >
        </div>
    </div>
</template>

<script>
export default {
    inject: ['user', 'changeuser'],
    mounted() {
        console.log(this.user);
    },
};
</script>
