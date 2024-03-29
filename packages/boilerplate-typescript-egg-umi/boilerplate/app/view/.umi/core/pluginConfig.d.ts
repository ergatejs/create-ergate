/** Created by Umi Plugin **/

export interface IConfigFromPlugins {
  routes?: {
    /**
     * Any valid URL path
     */
    path?: string;
    /**
     * A React component to render only when the location matches.
     */
    component?: string | (() => any);
    wrappers?: string[];
    /**
     * navigate to a new location
     */
    redirect?: string;
    /**
     * When true, the active class/style will only be applied if the location is matched exactly.
     */
    exact?: boolean;
    routes?: any[];
    [k: string]: any;
  }[];
  history?: {
    type?: 'browser' | 'hash' | 'memory';
    options?: {};
  };
  polyfill?: {
    imports?: string[];
  };
  alias?: {};
  analyze?: {
    analyzerMode?: 'server' | 'static' | 'disabled';
    analyzerHost?: string;
    analyzerPort?: any;
    openAnalyzer?: boolean;
    generateStatsFile?: boolean;
    statsFilename?: string;
    logLevel?: 'info' | 'warn' | 'error' | 'silent';
    defaultSizes?: 'stat' | 'parsed' | 'gzip';
    [k: string]: any;
  };
  /**
   * postcss autoprefixer, default flexbox: no-2009
   */
  autoprefixer?: {};
  base?: string;
  chainWebpack?: () => any;
  chunks?: string[];
  /**
   * more css-loader options see https://webpack.js.org/loaders/css-loader/#options
   */
  cssLoader?: {
    url?: boolean | (() => any);
    import?: boolean | (() => any);
    modules?: boolean | string | {};
    sourceMap?: boolean;
    importLoaders?: number;
    onlyLocals?: boolean;
    esModule?: boolean;
    localsConvention?:
      | 'asIs'
      | 'camelCase'
      | 'camelCaseOnly'
      | 'dashes'
      | 'dashesOnly';
  };
  cssModulesTypescriptLoader?: {
    mode?: 'emit' | 'verify';
  };
  cssnano?: {};
  copy?: string[];
  define?: {};
  devScripts?: {};
  /**
   * devServer configs
   */
  devServer?: {
    /**
     * devServer port, default 8000
     */
    port?: number;
    host?: string;
    https?: {} | boolean;
    http2?: boolean;
    headers?: {};
    [k: string]: any;
  };
  devtool?: string;
  /**
   * Code splitting for performance optimization
   */
  dynamicImport?: {
    /**
     * loading the component before loaded
     */
    loading?: string;
  };
  exportStatic?: {
    htmlSuffix?: boolean;
    dynamicRoot?: boolean;
  };
  externals?: {} | string | (() => any);
  extraBabelPlugins?: any[];
  extraBabelPresets?: any[];
  extraPostCSSPlugins?: any[];
  hash?: boolean;
  ignoreMomentLocale?: boolean;
  inlineLimit?: number;
  lessLoader?: {};
  manifest?: {
    fileName?: string;
    publicPath?: string;
    basePath?: string;
  };
  mountElementId?: '';
  mpa?: {};
  nodeModulesTransform?: {
    type?: 'all' | 'none';
    exclude?: string[];
  };
  outputPath?: '';
  plugins?: string[];
  postcssLoader?: {};
  presets?: string[];
  proxy?: {};
  publicPath?: string;
  runtimePublicPath?: boolean;
  singular?: boolean;
  styleLoader?: {};
  targets?: {};
  terserOptions?: {};
  theme?: {};
  /**
   * More options see https://www.npmjs.com/package/fork-ts-checker-webpack-plugin#options
   */
  forkTSChecker?: {
    /**
     * Path to tsconfig.json file
     */
    tsconfig?: string;
    /**
     * Allows overriding TypeScript options. Should be specified in the same format as you would do for the compilerOptions property in tsconfig.json.
     */
    compilerOptions?: {};
    eslint?: boolean;
    eslintOptions?: {};
    async?: boolean;
    ignoreDiagnostics?: number[];
    formatter?: any;
    formatterOptions?: {};
    silent?: boolean;
    checkSyntacticErrors?: boolean;
  };
  favicon?: string;
  headScripts?: any[];
  links?: any[];
  metas?: any[];
  scripts?: any[];
  styles?: any[];
  title?: string;
  mock?: {
    exclude?: string[];
  };
  antd?: {
    dark?: boolean;
    compact?: boolean;
  };
  dva?: {
    immer?: boolean;
    hmr?: boolean;
    skipModelValidate?: boolean;
    extraModels?: string[];
  };
  locale?: {
    default?: string;
    useLocalStorage?: boolean;
    baseNavigator?: boolean;
    title?: boolean;
    antd?: boolean;
    baseSeparator?: string;
  };
  layout?: {};
  request?: {
    dataField?: '';
  };
  [k: string]: any;
}
