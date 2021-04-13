import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('src/layouts/layoutInicio.vue'),
    children: [
      { path: '', component: () => import('pages/inicio/inicio.vue') },
      { path: 'login', component: () => import('pages/login/login.vue') },
      { path: 'teste', component: () => import('pages/inicio/teste.vue') },
      { path: 'teste2', component: () => import('pages/inicio/teste2.vue') },

    ]
  },
  {
    path: '/',
    component: () => import('layouts/layoutBarra.vue'),
    children: [
      { path: 'cadastro', component: () => import('pages/cadastro/cadastro.vue') },
      { path: 'novoUsuario', component: () => import('pages/novoUsuario.vue') },
      { path: 'info', component: () => import('pages/info/info.vue') },
      { path: 'novoPeso', component: () => import('pages/novoPeso.vue') },
      { path: 'grafPeso', component: () => import('pages/grafPeso.vue') },
      { path: 'grafImc', component: () => import('pages/grafImc.vue') },
      { path: 'hidratacao', component: () => import('pages/hidratacao.vue') },
      { path: 'sobre', component: () => import('pages/sobre.vue') }

    ]
  },
  {
    path: '/',
    component: () => import('src/layouts/LayoutMenu.vue'),
    children: [
      { path: 'menu', component: () => import('pages/menu/menu.vue') },

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
