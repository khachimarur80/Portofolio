import { createRouter, createWebHistory } from 'vue-router';

import IndexView from '@/views/Index.vue';

const routes = [
  { path: '/', component: IndexView, meta: { title: 'Kei' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
