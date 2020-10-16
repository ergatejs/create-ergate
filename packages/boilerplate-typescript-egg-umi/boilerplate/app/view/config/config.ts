import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  // project
  title: 'site.title',

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

  // layout
  layout: {
    name: '{{name}}',
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

  // locale
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

  routes,
});
