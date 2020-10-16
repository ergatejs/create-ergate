import { IRoute } from 'umi';

const routes: IRoute[] = [
  {
    path: '/info',
    exact: true,
    icon: 'setting',
    name: 'Info',
    title: 'site.info',
    locale: 'menu.info',
    access: 'canReadInfo',
    component: '@/page/info',
    hideInNav: false,
    hideInMenu: false,
  },
  {
    path: '/login',
    exact: true,
    name: 'Login',
    title: 'site.login',
    locale: 'menu.login',
    component: '@/page/login',
    hideInNav: true,
    hideInMenu: true,
  },
  {
    path: '/',
    exact: true,
    icon: 'home',
    name: 'Index',
    title: 'site.index',
    locale: 'menu.index',
    access: 'canReadIndex',
    component: '@/page/index',
    hideInNav: false,
    hideInMenu: false,
  },
];

export default routes;
