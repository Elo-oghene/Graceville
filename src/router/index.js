// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/landing/Home.vue'; // Adjust the path as necessary
import Ourschool from '../components/landing/Ourschool.vue'; // Corrected the import statement
import Contact from '../components/landing/Contact.vue'
import Admission from '@/components/landing/Admission.vue';
// import About from '../components/landing/About.vue'; // Example component
// import Admission from '../components/landing/Admission.vue'; // Example component

const routes = [
  { path: '/', component: Home },
  { path: '/our', component: Ourschool },
  { path: '/contact', component: Contact },
  { path: '/admission', component: Admission },
  // { path: '/admission', component: Admission },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(), // Use history mode
  routes,
});

export default router;
