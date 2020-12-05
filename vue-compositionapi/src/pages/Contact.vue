<template>
    <div>
        <div>Contact Page</div>

        <button @click="goToAbout">Go to About Page</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        function goToAbout() {
            router.push('/about');
        }

        return {
            goToAbout,
        };
    },
};
</script>
