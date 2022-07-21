import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('@/views/PostsView.vue'),
  },
  {
    path: '/post/:id',
    name: 'postDetail',
    component: () => import('@/views/PostDetailView.vue'),
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import('@/views/ModalView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
