import { ApplyPluginsType } from '/Users/suyi/gpm/github.com/ergatejs/boilerplate/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    path: '/',
    component:
      require('/Users/suyi/gpm/github.com/ergatejs/boilerplate/app/view/.umi/plugin-layout/Layout.tsx')
        .default,
    routes: [
      {
        path: '/',
        exact: true,
        title: 'site.index',
        icon: 'home',
        access: 'canReadIndex',
        component: require('@/page/index').default,
        menu: {
          name: 'index',
        },
        layout: {
          hideMenu: false,
          hideNav: false,
        },
      },
      {
        path: '/info',
        exact: true,
        title: 'site.info',
        icon: 'setting',
        access: 'canReadInfo',
        component: require('@/page/info').default,
        menu: {
          name: 'info',
        },
        layout: {
          hideNav: false,
          hideMenu: false,
        },
      },
      {
        path: '/login',
        exact: true,
        title: 'site.login',
        component: require('@/page/login').default,
        layout: {
          hideMenu: false,
          hideNav: false,
        },
      },
    ],
  },
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
