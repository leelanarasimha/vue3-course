<template>
    <div>
        <ul class="list-group">
            <li
                class="list-group-item"
                v-for="hobby in hobbies"
                :key="hobby"
            >
                <slot :hobby="hobby"></slot>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hobbies: ['Reading', 'Writing', 'Learning'],
        };
    },
};
</script>
