// main.js
import { createApp } from 'vue';
import App from './App.vue';
import portFolio from './components/portFolio.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/portFolio', component: portFolio }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
