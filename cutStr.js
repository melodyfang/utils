import { subString } from './subString'

/**
 * 超过指定字符后进行截断，显示 ...
 * @param {*} str 
 * @param {*} len 
 * @returns 
 */
export function cutStr (str, len) {
  if (!str) {
    return ''
  }
  let result = subString(str, len)
  return result !== str ? result + '...' : result
}