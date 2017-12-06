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

const PAGE_COUNT = 20

export const getDataURLByCategory = (category, page) => {
  return `http://gank.io/api/data/${category}/${PAGE_COUNT}/${page}`
}
