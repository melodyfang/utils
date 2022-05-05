/**
 * 页面触底判断
 * @param {HTMLElement} [el=document.body] 默认是 body
 */
export function isBottom (el) {
  if (el) {
    return el.scrollTop >= el.scrollHeight - window.innerHeight - 50
  }
  return Math.max(document.body.scrollTop, document.documentElement.scrollTop) >= Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - window.innerHeight - 50
}