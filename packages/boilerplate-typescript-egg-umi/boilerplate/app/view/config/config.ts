import { defineConfig } from 'umi';

export default defineConfig({
  // base
  hash: true,
  singular: true,
  runtimePublicPath: true,
  outputPath: '../public/',
  manifest: {
    fileName: '../../config/manifest.json',
    publicPath: '../public/',
  },

  // preset
  dva: {
    immer: true,
  },

  layout: {
    name: 'Ergate.js',
    logo: 'https://implementsio.oss-cn-shenzhen.aliyuncs.com/static/media/ergate.svg',
    locale: true,
    theme: 'pro',

    // @ant-design/pro-layout
    navTheme: 'light',
    primaryColor: '#1890ff',
    layout: 'topmenu',
    contentWidth: 'Fixed',
    fixedHeader: false,
  },

  locale: {
    default: 'zh-CN',
    antd: true,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },

  antd: {
    dark: false,
  },

  // project
  title: 'site.title',

  routes: [
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
  ],
});
