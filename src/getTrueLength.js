/**
 * 获取字符串的真实长度（字节长度）
 * 英文: 1 个字符，中文: 2 个字符，表情: 4 个字符，数字: 1 个字符
 * @param {string} str
 * @returns
 */
export function getTrueLength (str){
  const len = str.length
  let truelen = 0
  for (let x = 0; x < len; x++) {
    if (str.charCodeAt(x) > 128) {
      truelen += 2
    } else {
      truelen += 1
    }
  }
  return truelen
}