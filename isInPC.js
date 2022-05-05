  /**
   * 是否是 PC 环境
   *
   * @return   {boolean} 如果是 PC 环境则返回 true
   */
export function isInPC () {
  const ua = navigator.userAgent
  const agents = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod'
  ]
  let flag = true
  for (let v = 0; v < agents.length; v++) {
    if (ua.indexOf(agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}
