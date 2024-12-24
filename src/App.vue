<script setup lang="ts">
import { RouterLink } from 'vue-router';
import HeaderBar from './components/HeaderBar.vue';
</script>

<template>
    <div class="container">
        <HeaderBar />
        <nav class="nav justify-content-center">
            <RouterLink to="/tattoos" exactActiveClass="active" class="nav-link"
                >tattoos</RouterLink
            >
            <RouterLink to="/audio" exactActiveClass="active" class="nav-link"
                >audio</RouterLink
            >
            <RouterLink to="/visuals" exactActiveClass="active" class="nav-link"
                >visuals</RouterLink
            >
            <RouterLink to="/shop" exactActiveClass="active" class="nav-link"
                >shop</RouterLink
            >
            <RouterLink to="/contact" exactActiveClass="active" class="nav-link"
                >contact</RouterLink
            >
        </nav>
        <main>
            <RouterView />
        </main>
    </div>
</template>

<style scoped>
.active {
    font-weight: bold;
}
</style>
