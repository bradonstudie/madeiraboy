<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { NavItem } from '../../interfaces';

interface propTypes {
    navItems: NavItem[];
}

const props = defineProps<propTypes>();
</script>

<template>
    <nav class="nav justify-content-center">
        <RouterLink
            v-for="navItem in props.navItems"
            :key="navItem.path"
            :to="navItem.path"
            exactActiveClass="active"
            class="nav-link"
            >{{ navItem.title }}</RouterLink
        >
    </nav>
</template>

<style scoped>
.nav-link {
    color: black;
    font-family: 'Times New Roman', serif;
    font-size: 1.25rem;
    text-transform: lowercase;
}
</style>
