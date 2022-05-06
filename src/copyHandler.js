import dsBridge from 'dsbridge'
/**
 * 拷贝文字
 * @param str
 */
export function copyHandler (str) {
  if (dsBridge.hasNativeMethod('common.copy')) {
    dsBridge.call('common.copy', { text: str }, dsBridge.call('common.toast', '复制成功'))
  } else {
    this.notifyApp({
      type: 'copy',
      data: str
    })
  }
}
