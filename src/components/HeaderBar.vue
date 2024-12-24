<template>
    <div class="row">
        <div class="col-12 d-flex justify-content-center">
            <RouterLink to="/">
                <img :src="bunnyUrl" class="bunny-logo" />
            </RouterLink>
        </div>
        <div class="col-12">
            <RouterLink to="/">
                <h1 class="text-center">madeiraboy.com</h1>
            </RouterLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
import bunnyUrl from '../assets/bunny.png';
</script>

<style scoped>
.bunny-logo {
    width: 10rem;
}

a {
    text-decoration: none;
}
</style>
