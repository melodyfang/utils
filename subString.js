/**
 * 截取指定长度的字符串
 *
 * 该截取方法区分全半角字符，需要将全角字符的长度 x2
 *
 * @param    {string}  str 要截取的字符串
 * @param    {number}  len 要截取的字符串长度
 * @return   {string}      截取完毕的字符串
 */
export function subString (str, len) {
  const str2 = str.slice(0, len)
  const i = str2.replace(/[x00-xff]/g, '').length
  switch (i) {
  case 0:
    return str2
  case len:
    return str.slice(0, len >> 1)
  default:
    const k = len - i
    const str3 = str.slice(k, len)
    const j = str3.replace(/[x00-xff]/g, '').length
    return j ? str.slice(0, k) + subString(str3, j) : str.slice(0, k)
  }
}
