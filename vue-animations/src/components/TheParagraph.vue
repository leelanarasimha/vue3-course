<template>
    <div class="text-center">
        <transition>
            <p v-if="showParagraph">Hai Leela</p>
        </transition>

        <button class="btn btn-primary" @click.prevent="onToggle()">
            Toggle Text
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showParagraph: true,
        };
    },

    methods: {
        onToggle() {
            this.showParagraph = !this.showParagraph;
        },
    },
};
</script>

<style scoped>
.v-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

.v-enter-to {
    opacity: 1;
    transform: translateY(0px);
}

.v-enter-active {
    transition: all 1s;
}

.v-leave-from {
    opacity: 1;
    transform: translateY(0px);
}

.v-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.v-leave-active {
    transition: all 1s;
}
</style>
