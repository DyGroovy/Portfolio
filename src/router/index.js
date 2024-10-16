import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '@/components/LoginPage.vue';
import ProfilePage from '@/components/ProfilePage.vue';
import PortfolioShowcase from '@/components/PortfolioShowcase.vue';
import ContactPage from '@/components/ContactPage.vue';
import CreativePage from '@/components/CreativePage.vue';

const routes = [
  { path: '/', redirect: '/login' }, // Redirect to login page
  { path: '/login', component: LoginPage },
  { path: '/portfolio/profile', component: ProfilePage },
  { path: '/portfolio/showcase', component: PortfolioShowcase },
  { path: '/portfolio/contact', component: ContactPage },
  { path: '/portfolio/creative', component: CreativePage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
