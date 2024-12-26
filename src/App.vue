<script setup lang="ts">
import { FooterBar, HeaderBar, NavigationMenu } from './components/layout';
import type { NavItem } from './interfaces';

const navItems: NavItem[] = [
    { path: '/tattoos', title: 'tattoos' },
    { path: '/audio', title: 'audio' },
    { path: '/visuals', title: 'visuals' },
    { path: '/shop', title: 'shop' },
    { path: '/contact', title: 'contact' },
];
</script>

<template>
    <div class="container">
        <HeaderBar />
        <NavigationMenu :nav-items="navItems" />
        <main>
            <RouterView />
        </main>
        <FooterBar />
    </div>
</template>

<style scoped>
.active {
    font-weight: bold;
}
</style>
