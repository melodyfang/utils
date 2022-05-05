export function isMobile () {
  const ua = navigator.userAgent.toLowerCase()
  return /iphone|android|ucweb|ucbrowser|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(ua) || /ipad/i.test(ua) || document.body.clientWidth <= 768
}