/**
 * 检查是否是极客邦域
 *
 * 如果是在 App webview 中会给 App 发送通知调起登录，否则跳转到账户中心页面进行登录
 */
export function checkGeekbangDomain (url) {
  return url ? (!!url.match(/^https*\:\/\/([\w]+?)\.geekbang\.org/i)) : false
}