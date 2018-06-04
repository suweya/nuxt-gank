export const convertCategory = tag => {
  switch (tag) {
    case 'fe':
      return encodeURIComponent('前端')
    case 'android':
      return 'Android'
    case 'ios':
      return 'iOS'
    case 'all':
      return 'all'
  }
}

export const PAGE_COUNT = 20

export const getDataURLByCategory = (category, page) => {
  return `http://gank.io/api/data/${category}/${PAGE_COUNT}/${page}`
}

/**
 * @desc 获取操作系统类型
 * @return {String}
 */
export function getOS() {
  /*eslint-disable*/
  var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || ''
  var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || ''
  var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || ''

  if (/mac/i.test(appVersion)) return 'MacOSX'
  if (/win/i.test(appVersion)) return 'windows'
  if (/linux/i.test(appVersion)) return 'linux'
  if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) 'ios'
  if (/android/i.test(userAgent)) return 'android'
  if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'
}
