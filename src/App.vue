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
    <header>
      <Navbar/>
    </header>
    <router-view></router-view>
  </div>
</template> -->


<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/landing/Navbar.vue';

const route = useRoute();

// Check if the current route matches any of the listed routes
const isLoginPage = computed(() => route.path === '/login');
const isStudentSystemPage = computed(() => route.path === '/studentsystem');
const isSystemFirstSight = computed(() => route.path === '/systemfirstsight');
const isSectionTerm = computed(() => route.path === '/sectionterm');
const isWaecNeco = computed(() => route.path === '/waecneco');

// Logic to hide the navbar only if we're on specific routes
const showNavbar = computed(() => {
  return !(
    isLoginPage.value ||
    isStudentSystemPage.value ||
    isSystemFirstSight.value ||
    isSectionTerm.value ||
    isWaecNeco.value
  );
});
</script>

<template>
  <div>
    <header v-if="showNavbar">
      <Navbar />
    </header>
    <router-view></router-view>
  </div>
</template>
