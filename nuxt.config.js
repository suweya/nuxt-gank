module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-gank',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#2d8cf0' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    /**
     * vendor config
     */
    vendor: ['iview', 'axios']
  },
  /**
   * Plugin Config
   */
  plugins: ['@/plugins/iview', '@/plugins/filters'],
  /**
   * Global CSS
   */
  css: [
    'iview/dist/styles/iview.css',
    'normalize.css',
    '~/assets/global.css'
  ],
  /**
   * Route Config
   */
  router: {
    linkActiveClass: '',
    middleware: ['route'],
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  }
}
