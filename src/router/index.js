import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import ProductPage from '@/views/ProductPage.vue';
import EditPage from '@/views/EditPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/product',
    name: 'product',
    component: ProductPage,
  },
  {
    path: '/edit',
    name: 'edit',
    component: EditPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
