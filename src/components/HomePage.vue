<template>
    <div class="row">
        <div class="col-12 d-flex justify-content-center">
            <img :src="bunnyUrl" class="bunny-logo" />
        </div>
        <div class="col-12">
            <h1 class="text-center">madeiraboy.com</h1>
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
</style>
