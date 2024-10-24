import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Create the app instance first
const app = createApp(App);

// Use the router with the app instance
app.use(router);

// Mount the app
app.mount('#app');

