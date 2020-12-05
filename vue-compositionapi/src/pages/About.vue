<template>
    <div>
        <div>ABout Page</div>
        <button @click="goToContact">Go to Contact Page</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        function goToContact() {
            router.push('/contact');
        }

        return {
            goToContact,
        };
    },
};
</script>
