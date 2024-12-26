<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
    <div class="container">
        <footer class="py-3 my-4">
            <p class="text-center text-body-secondary">
                ©{{ currentYear }} madeiraboy
            </p>
        </footer>
    </div>
</template>
