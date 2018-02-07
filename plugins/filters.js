import Vue from 'vue'

// 时间格式化
export function formatDate(date, fmt) {
  let newDate = new Date(date)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (newDate.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  let o = {
    'M+': newDate.getUTCMonth() + 1,
    'd+': newDate.getUTCDate(),
    'h+': newDate.getUTCHours(),
    'm+': newDate.getUTCMinutes(),
    's+': newDate.getUTCSeconds(),
    'H+': newDate.getUTCHours()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      )
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

// 截取指定个数的字符串
export function cutString(str, len) {
  if (str !== null) {
    if (str.length * 2 <= len) {
      return str
    }
    let strlen = 0
    let s = ''
    for (let i = 0; i < str.length; i++) {
      s = s + str.charAt(i)
      if (str.charCodeAt(i) > 128) {
        strlen = strlen + 2
        if (strlen >= len) {
          return s.substring(0, s.length - 1) + '...'
        }
      } else {
        strlen = strlen + 1
        if (strlen >= len) {
          return s.substring(0, s.length - 2) + '...'
        }
      }
    }
    return s
  }
}

// 归档格式转换
export function formatArchive(date) {
  let year = date.slice(0, 4)
  let month = date.slice(4)
  if (date.slice(4, 5) === '0') {
    month = date.slice(5)
  }
  return `${year}年${month}月`
}

export const formateImgSize = (url, size) => {
  return `${url}?imageView2/2/w/${size}`
}

export const formateTag = (tag) => {
  switch (tag) {
    case 'fe':
      return '前端'
    case 'android':
      return 'Android'
    case 'ios':
      return 'iOS'
    case 'all':
      return 'ALL'
    case 'timeline':
      return 'Timeline'
    default:
      return tag
  }
}

let filters = {
  formatDate,
  cutString,
  formatArchive,
  formateImgSize,
  formateTag
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

export default filters
