import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/ModuloPage.vue'
import RolPage from '@/views/RolPage.vue';
import ModuloPage from '../views/ModuloPage.vue';
import VistaPage from '@/views/VistaPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/rol'
  },
  {
    path: '/rol',
    name: 'Rol',
    component: RolPage
  },
  {
    path: '/modulo',
    name: 'Modulo',
    component: ModuloPage
  },
  {
    path: '/vista',
    name: 'Vista',
    component: VistaPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
