/**
 * 是否是在Mac系统下运行
 *
 * @return   {boolean} 如果是则返回 true
 */
export function isMac () {
  return navigator.userAgent.includes('Mac')
}
