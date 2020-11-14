<template>
    <div>
        <div class="mb-3">
            <button @click.prevent="onAdd()">Add</button>
            <button @click.prevent="onRemove()">Remove</button>
            <button @click.prevent="onShuffle()">Shuffle</button>
        </div>

        <transition-group tag="div" name="list">
            <span
                class="mx-1 list-item"
                v-for="number in numbers"
                :key="number"
                >{{ number }}</span
            >
        </transition-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            nextNum: 10,
        };
    },
    methods: {
        onAdd() {
            this.numbers.unshift(this.nextNum);
            this.nextNum++;
        },
        onShuffle() {
            this.numbers.reverse();
        },
        onRemove() {
            let randomIndex = Math.floor(
                Math.random() * this.numbers.length,
            );
            this.numbers = this.numbers.filter(
                (number) => number !== this.numbers[randomIndex],
            );
        },
    },
};
</script>

<style scoped>
.list-item {
    display: inline-block;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.list-enter-to,
.list-leave-from {
    opacity: 1;
    transform: translateY(0px);
}

.list-enter-active {
    transition: all 1s ease-in;
}

.list-leave-active {
    transition: all 1s ease-out;
}
</style>
