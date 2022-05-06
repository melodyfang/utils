/**
 * 日期过滤
 * @type Function
 * @param {Date} 时间戳
 */
export function date (timestamp, type, format) {
  if (type === 'today') {
    timestamp = Date.now()
  }

  timestamp = formatTimestamp(timestamp)

  if (type === 'timestamp') {
    return timestamp
  }

  if (type === 'near') {
    return near(timestamp, format)
  }

  if (timestamp) {
    let _date = new Date(timestamp)
    let _year = _date.getFullYear()
    let _month = _date.getMonth() + 1 + ''
    let _day = _date.getDate() + ''
    let _hour = _date.getHours() + ''
    let _minute = _date.getMinutes() + ''
    let _second = _date.getSeconds() + ''

    let weekMap = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

    _month = _month.length === 2 ? _month : '0' + _month
    _day = _day.length === 2 ? _day : '0' + _day
    _hour = _hour.length === 2 ? _hour : '0' + _hour
    _minute = _minute.length === 2 ? _minute : '0' + _minute
    _second = _second.length === 2 ? _second : '0' + _second

    switch (type) {
      case 'today':
        return new Date(_year, _month - 1, _day, 1, 0, 0)
      case 'prevDay':
        return new Date(_year, _month - 1, --_day)
      case 'nextDay':
        return new Date(_year, _month - 1, ++_day)
      case 'prevWeek':
        return new Date(_year, _month - 1, -7)
      case 'nextWeek':
        return new Date(_year, _month - 1, (_day | 0) + 7)
      case 'year':
        format = 'YYYY 年 MM 月 DD 日'
        break
      case 'date':
        format = 'M 月 D 日 hh-mm'
        break
      case 'datepicker':
        format = 'YYYY-MM-DD hh-mm-ss'
        break
      case 'time':
        format = 'hh-mm-ss'
        break
      default:
        break
    }

    // 默认只传两个参数， format 值为 type
    if (!format) {
      format = type
    }

    format = format.replace('YYYY', _year)
    format = format.replace('MM', _month)
    format = format.replace('M', _month.replace(/^0{1}/gi, ''))
    format = format.replace('DD', _day)
    format = format.replace('D', _day.replace(/^0{1}/gi, ''))

    format = format.replace('hh-mm', 'hh:mm')
    format = format.replace('mm-ss', 'mm:ss')

    format = format.replace('hh', _hour)
    format = format.replace('mm', _minute)
    format = format.replace('ss', _second)

    format = format.replace('W', weekMap[_date.getDay()])

    return format
  }

  return ''
}

function near (timestamp, format = 'YYYY 年 MM 月 DD 日 hh:mm') {
  const minutes = (Date.now() - timestamp) / 1000 / 60 | 0
  const minute = minutes % 60 | 0
  const hour = minutes / 60 | 0
  // const day = hour / 24 | 0

  if (hour === 0) {
    return minute < 10 ? '刚刚' : `${minute} 分钟前`
  } else if (hour < 24) {
    return `${hour} 小时前`
  } else {
    // return day < 8 ? `${day} 天前` : date(timestamp, format)
    return date(timestamp, format)
  }
}

/**
 * 输出一个有效地时间戳
 * @param {timestamp} time 时间戳
 */
function formatTimestamp (time) {
  if (!time) {
    return 0
  }

  if (typeof time === 'object') {
    time = Date.now()
  }

  if (typeof time === 'string' && !/^\d+$/gi.test(time)) {
    // 兼容 safari Date 格式 只能是 YYYY/MM/DD
    time = time.replace(/-/g, '/')

    try {
      time = (new Date(time)).getTime()

      if (time) {
        return time
      }
    } catch (e) { }
  }

  if (time) {
    time += ''

    if (time.length < 12) {
      // const length = 13 - time.length
      // time = time * Math.pow(10, length > 1 ? length : 0)

      // 在确认为秒的时候，固定为 3 位
      time = time + '000'
    }

    return time - 0
  }

  return 0
}