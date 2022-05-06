/**
 * 获取 dom offset
 */
export function offset (dom) {
  const res = {
    left: dom.offsetLeft || 0,
    top: dom.offsetTop || 0
  }

  let parent = dom.offsetParent

  while (parent) {
    res.left += parent.offsetLeft
    res.top += parent.offsetTop
    parent = parent.offsetParent
  }

  res.right = res.left + dom.clientWidth
  res.bottom = res.top + dom.clientHeight

  return res
}
