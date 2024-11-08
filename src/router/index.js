import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddContact from '../views/AddContact.vue';
import ContactDetails from '../views/ContactDetails.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/add-contact',
    name: 'AddContact',
    component: AddContact,
  },
  {
    path: '/contact/:id',
    name: 'ContactDetails',
    component: ContactDetails,
    props: true,
  },
  { path: '/about', name: 'About', component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
