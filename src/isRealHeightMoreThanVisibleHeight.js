/**
 * 内容是否超过容器高度
 */
export function isRealHeightMoreThanVisibleHeight (el, innerHTML) {
  if (!el) return false

  const computedStyle = window.getComputedStyle(el, null)
  const width = computedStyle.getPropertyValue('width')
  const height = computedStyle.getPropertyValue('height') // 获取到的高度是浮点数
  const fontSize = computedStyle.getPropertyValue('font-size')
  const lineHeight = computedStyle.getPropertyValue('line-height')
  const fontWeight = computedStyle.getPropertyValue('font-weight')
  const measumentElement = document.createElement('div')
  measumentElement.style.width = width
  measumentElement.style.fontSize = fontSize
  measumentElement.style.whiteSpace = 'normal'
  measumentElement.style.fontWeight = fontWeight
  measumentElement.style.lineHeight = lineHeight
  measumentElement.style.wordBreak = 'break-all'
  measumentElement.style.position = 'absolute'
  measumentElement.innerHTML = innerHTML
  document.body.appendChild(measumentElement)
  const measurementHeight = measumentElement.getBoundingClientRect().height // offsetHeight返回的是整数; getBoundingClientRect()返回的是浮点数
  document.body.removeChild(measumentElement)
  return parseInt(measurementHeight) > parseInt(height)
}