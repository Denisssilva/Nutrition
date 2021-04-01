import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/layoutN.vue'),
    children: [
      { path: '', component: () => import('pages/inicio/inicio.vue') },
      { path: 'cadastro', component: () => import('pages/cadastro/cadastro.vue') },
      { path: 'login', component: () => import('pages/login/login.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'menu', component: () => import('pages/menu/menu.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
