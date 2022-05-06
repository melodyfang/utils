/**
 * 获取选中节点的文本内容
 *
 * @return  text 选中的文本内容
 */
export function getSelectionText () {
  var text = ''
  if (typeof window.getSelection !== 'undefined') {
    var sel = window.getSelection()
    if (sel.rangeCount) {
      var container = document.createElement('div')
      for (var i = 0, len = sel.rangeCount; i < len; ++i) {
        container.appendChild(sel.getRangeAt(i).cloneContents())
      }
      // text = container.innerHTML
      text = container.innerText
    }
  } else if (typeof document.selection !== 'undefined') {
    if (document.selection.type === 'Text') {
      // text = document.selection.createRange().htmlText
      text = document.selection.createRange().text
    }
  }
  return text
}