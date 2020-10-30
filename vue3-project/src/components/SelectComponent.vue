<template>
    <div v-bind="$attrs"></div>
    <div>
        <select v-bind="$attrs">
            <option value="">Select</option>
            <option value="1">1</option>
        </select>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: [],
    data() {
        return {};
    },
    mounted() {
        console.log(this.$attrs);
    },
};
</script>
