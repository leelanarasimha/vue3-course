<template>
    <div class="modal">
        <div>Modal Dialog</div>
        <div>
            <button @click.prevent="closeModal">Okay</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeModal() {
            this.$emit('closemodal');
        },
    },
};
</script>

<style scoped>
.modal {
    position: fixed;
    background: #fff;
    border: 1px solid #a1a1a1;
    box-shadow: 1px 1px 1px #000;
    width: 40%;
    top: 20%;
    margin-left: 30%;
    padding: 20px;
}
</style>
