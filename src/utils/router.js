/**
 * 路由公共方法
 */
import {
  navigateTo as _navigateTo,
  redirectTo as _redirectTo,
  switchTab as _switchTab,
  navigateBack,
  reLaunch as _reLaunch,
  getCurrentPages,
  useRouter
} from "@tarojs/taro";

function switchTab(url) {
  const newUrl = createUrl(url);
  return _switchTab({
    url: newUrl
  });
}
function reLaunch(url, param = {}) {
  const newUrl = createUrl(url, param);
  return _reLaunch({
    url: newUrl
  });
}
function createUrl(url, param = {}) {
  const newUrl = `/${url}/index`;
  if (param) {
    return `${newUrl}?routerQuery=${encodeURIComponent(JSON.stringify(param))}`;
  }
  return newUrl;
}
/**
 * @fn navigateTo 需要跳转的应用内非 tabBar 的页面的路径
 * @url 路由url
 * @param 路由参数
 */
function navigateTo(url, param = {}) {
  const newUrl = createUrl(url, param);
  return _navigateTo({
    url: newUrl
  });
}
function redirectTo(url, param = {}) {
  const newUrl = createUrl(url, param);
  return _redirectTo({
    url: newUrl
  });
}
function serialize(data) {
  if ("routerQuery" in data) {
    return JSON.parse(decodeURIComponent(data.routerQuery));
  }
  return data;
}

export {
  navigateTo,
  redirectTo,
  serialize,
  switchTab,
  navigateBack,
  reLaunch,
  getCurrentPages,
  useRouter
};
