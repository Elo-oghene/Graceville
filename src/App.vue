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

const isLoginPage = computed(() => route.path === '/login');
const isStudentSystemPage = computed(() => route.path === '/studentsystem');
const isSystemFirstSight = computed(() => route.path === '/systemfirstsight');
const isSectionTerm = computed(() => route.path === '/sectionterm');
</script>

<template>
  <div>
    <header v-if="!isLoginPage && !isStudentSystemPage && !isSystemFirstSight && !isSectionTerm">
      <Navbar/>
    </header>
    <router-view></router-view>
  </div>
</template>
