export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: " | Ministère de l'Education Nationale de côte d'Ivoire",
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/font-awesome.min.css',
    '~/assets/css/bootstrap-theme.css',
    '~/assets/css/main.css',
    /*'~/assets/form/vendor/bootstrap/css/bootstrap.min.css',
    '~/assets/form/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
    '~/assets/form/fonts/iconic/css/material-design-iconic-font.min.css',
    '~/assets/form/vendor/animate/animate.css',
    '~/assets/form/vendor/css-hamburgers/hamburgers.min.css',
    '~/assets/form/vendor/animsition/css/animsition.min.css',
    '~/assets/form/vendor/select2/select2.min.css',
    '~/assets/form/vendor/daterangepicker/daterangepicker.css',
    '~/assets/form/css/util.css',
    '~/assets/form/css/main.css',*/

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  axios: {
    baseURL: 'http://127.0.0.1:3333/api',
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'admin', method: 'post', propertyName: 'data.token' },
          user: { url: 'administration', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
