<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="box" :class="{ animate: animate }"></div>
                <div class="my-3">
                    <button
                        class="btn btn-primary"
                        @click.prevent="onAnimateClick()"
                    >
                        Click Me
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            animate: false,
        };
    },
    methods: {
        onAnimateClick() {
            this.animate = true;
        },
    },
};
</script>

<style>
.box {
    width: 100px;
    height: 100px;
    border: 1px solid red;
    background: red;
}

.animate {
    animation: animate-box 1s forwards;
}

@keyframes animate-box {
    0% {
        transform: translateX(0px) scaleX(1);
    }
    50% {
        transform: translateX(100px) scaleX(1.5);
    }
    100% {
        transform: translateX(200px) scaleX(1);
    }
}
</style>
