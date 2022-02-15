import { Plugin } from '/Users/suyi/gpm/github.com/ergatejs/boilerplate/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: [
    'patchRoutes',
    'rootContainer',
    'render',
    'onRouteChange',
    'dva',
    'getInitialState',
    'locale',
    'locale',
    'layout',
    'request',
  ],
});
plugin.register({
  apply: require('/Users/suyi/gpm/github.com/ergatejs/boilerplate/app/view/app.ts'),
  path: '/Users/suyi/gpm/github.com/ergatejs/boilerplate/app/view/app.ts',
});
plugin.register({
  apply: require('/Users/suyi/gpm/github.com/ergatejs/boilerplate/app/view/.umi/plugin-access/rootContainer.ts'),
  path: '/Users/suyi/gpm/github.com/ergatejs/boilerplate/app/view/.umi/plugin-access/rootContainer.ts',
});
plugin.register({
  apply: require('/Users/suyi/gpm/github.com/ergatejs/boilerplate/app/view/.umi/plugin-dva/runtime.tsx'),
  path: '/Users/suyi/gpm/github.com/ergatejs/boilerplate/app/view/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('/Users/suyi/gpm/github.com/ergatejs/boilerplate/app/view/.umi/plugin-locale/runtime.tsx'),
  path: '/Users/suyi/gpm/github.com/ergatejs/boilerplate/app/view/.umi/plugin-locale/runtime.tsx',
});
plugin.register({
  apply: require('@@/plugin-layout/runtime.tsx'),
  path: '@@/plugin-layout/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
