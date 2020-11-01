<template>
    <div class="card">
        <div class="header" v-if="$slots.header">
            <slot name="header"> </slot>
        </div>
        <div class="content">
            <slot><div>Default Content</div></slot>
        </div>
        <div class="footer">
            <slot name="footer"><div>Default Footer</div></slot>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$slots);
    },
};
</script>

<style scoped>
.card {
    border: 1px solid #eee;
    box-shadow: 1px 1px 1px #eee;
}
.header {
    background: #eee;
    font-size: 20px;
    padding: 20px;
}

.content {
    padding: 20px 10px;
}

.footer {
    background: #eee;
    font-size: 10px;
}
</style>
