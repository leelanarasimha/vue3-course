<template>
    <div class="card">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="content">
            <slot></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
    border: 1px solid #eee;
    box-shadow: 1px 1px 1px #eee;
}
.header {
    background: #eee;
    font-size: 20px;
}

.content {
    padding: 20px 10px;
}

.footer {
    background: #eee;
    font-size: 10px;
}
</style>
