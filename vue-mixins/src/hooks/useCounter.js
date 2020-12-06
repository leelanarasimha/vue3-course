import { ref } from 'vue';

export default function useCounter(defaultCounter = 0) {
    const counter = ref(defaultCounter);

    function onIncrement(count) {
        counter.value += count;
    }

    return {
        counter,
        onIncrement,
    };
}
