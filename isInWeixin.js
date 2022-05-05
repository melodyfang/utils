/**
 * 是否是微信浏览器内
 *
 * @return   {boolean} 如果是微信环境则返回 true
 */
export function isInWeixin() {
  const ua = window.navigator.userAgent
  return !!ua.match(/MicroMessenger/i)
}

/**
 * 是否在微信小程序内
 * [同步方式非异步]
 *
 * @return   {boolean} 如果是微信环境则返回 true
 */
export function isInWXMiniProgram () {
  return (
    (window.__wxjs_environment && window.__wxjs_environment === 'miniprogram') || window.navigator.userAgent.toLowerCase().indexOf('miniprogram') > -1
  )
}
