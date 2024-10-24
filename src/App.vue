<script setup>
import Navbar from './components/landing/Navbar.vue';
import Home from './components/landing/Home.vue';
</script>
<template>
  <header class="bg-black">
    <Navbar/>
  </header>
  <router-view />
</template>

<style scoped>

</style>
