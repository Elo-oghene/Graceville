// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/landing/Home.vue'; // Adjust the path as necessary
import Ourschool from '../components/landing/Ourschool.vue'; // Corrected the import statement
import Contact from '../components/landing/Contact.vue'
import Admission from '@/components/landing/Admission.vue';
import About from '../components/landing/About.vue'
import Login from '../components/auth/Login.vue'
import Studentsystem from '../components/auth/Studentsystem.vue'
import Systemfirstsight from '../components/auth/Systemfirstsight.vue'
import Sectionterm from '../components/auth/Sectionterm.vue'
// import About from '../components/landing/About.vue'; // Example component
// import Admission from '../components/landing/Admission.vue'; // Example component

const routes = [
  { path: '/', component: Home },
  { path: '/our', component: Ourschool },
  { path: '/contact', component: Contact },
  { path: '/admission', component: Admission },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/studentsystem', component: Studentsystem },
  { path: '/systemfirstsight', component: Systemfirstsight},
  { path: '/sectionterm', component: Sectionterm},
  // { path: '/admission', component: Admission },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(), // Use history mode
  routes,
});

export default router;
