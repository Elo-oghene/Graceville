<script setup>
// import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/landing/Navbar.vue';

const route = useRoute();

// const isLoginPage = computed(() => route.path === '/login');
// const isStudentSystemPage = computed(() => route.path === '/studentsystem');
</script>

<template>
  <div>
    <header>
      <Navbar/>
    </header>
    <router-view></router-view>
  </div>
</template>


<!-- <script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/landing/Navbar.vue';

const route = useRoute();

const isLoginPage = computed(() => route.path === '/login');
const isStudentSystemPage = computed(() => route.path === '/studentsystem');
</script>

<template>
  <div>
    <header v-if="!isLoginPage && !isStudentSystemPage">
      <Navbar/>
    </header>
    <router-view></router-view>
  </div>
</template> -->
