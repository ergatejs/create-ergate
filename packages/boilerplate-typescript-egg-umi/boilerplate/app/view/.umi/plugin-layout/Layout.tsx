import React, { useState, useEffect } from "react";
import { ApplyPluginsType, useModel } from "umi";
import { plugin } from "../core/umiExports";

export default props => {
  const [runtimeConfig, setRuntimeConfig] = useState({});

  const initialInfo = (useModel && useModel("@@initialState")) || {
    initialState: undefined,
    loading: false,
    setInitialState: null
  }; // plugin-initial-state 未开启

  useEffect(() => {
    const useRuntimeConfig =
      plugin.applyPlugins({
        key: "layout",
        type: ApplyPluginsType.modify,
        initialValue: initialInfo
      }) || {};
    if (useRuntimeConfig instanceof Promise) {
      useRuntimeConfig.then(config => {
        setRuntimeConfig(config);
      });
      return;
    }
    setRuntimeConfig(useRuntimeConfig);
  }, [initialInfo?.initialState]);
  const userConfig = {
    ...{'name':'Ergate.js','theme':'pro','locale':true,'showBreadcrumb':true,'logo':'https://implementsio.oss-cn-shenzhen.aliyuncs.com/static/media/ergate.svg','navTheme':'light','primaryColor':'#1890ff','layout':'topmenu','contentWidth':'Fixed','fixedHeader':false},
    ...runtimeConfig
  };
  return React.createElement(require("/Users/suyi/gpm/github.com/ergatejs/boilerplate/node_modules/@umijs/plugin-layout/lib/layout/index.js").default, {
    userConfig,
    ...props
  });
};
