<template>
    <div>
        <transition>
            <p v-if="showParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris facilisis enim libero, at lacinia diam fermentum id.
                Pellentesque habitant morbi tristique senectus et netus
            </p>
        </transition>

        <div>
            <button class="btn btn-primary" @click.prevent="onToggle()">
                Toggle
            </button>
        </div>
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
.v-enter-active {
    animation: animate-para 1s;
}

.v-leave-active {
    animation: animate-para 1s reverse;
}

@keyframes animate-para {
    0% {
        opacity: 0;
        transform: translateX(0px);
    }

    25% {
        opacity: 0.25;
        transform: translateX(30px);
    }
    50% {
        opacity: 0.5;
        transform: translateX(-30px);
    }
    75% {
        opacity: 0.75;
        transform: translateX(30px);
    }
    100% {
        opacity: 1;
        transform: translateX(0px);
    }
}
</style>
