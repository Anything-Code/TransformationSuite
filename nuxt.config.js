import bodyParser from 'body-parser'
import session from 'express-session'
import colors from 'vuetify/lib/util/colors'

// const FileStore = require('session-file-store')(session);

export default {
  head: {
    title: 'Transformation Suite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'Hier finden Sie die innovativsten Produkte zum Thema Digitalisierung, bereitgestellt durch die besten KMUs auf diesem Gebiet in Heidelberg. Außerdem können Sie sich für einen Ausstellungsplatz bewerben und Fragen stellen!' }
    ]
  },
  css: ['~/assets/app.scss'],
  loading: {
    color: '#FFC921',
    failedColor: '#A70553',
    continuous: true
  },
  plugins: [
    '~/plugins/particles.client.js',
    '~/plugins/typewriter.client.js'
  ],
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/pwa', {
      manifest: {
        name: 'Transformation Suite',
        short_name: 'Transformation Suite',
        lang: 'de',
        description: 'Hier finden Sie die innovativsten Produkte zum Thema Digitalisierung, bereitgestellt durch die besten KMUs auf diesem Gebiet in Heidelberg. Außerdem können Sie sich für einen Ausstellungsplatz bewerben und Fragen stellen!'
      }
    }],
    ['@nuxtjs/vuetify', {
      theme: {
        themes: {
          light: {
            primary: '#A70553',
            secondary: '#FFD420',
            accent: '#FFD420',
          },
          dark: {
            primary: '#A70553',
            secondary: '#FFD420',
            accent: '#FFD420',
          },
        },
      },
      customVariables: ['~/assets/variables.scss'],
      defaultAssets: {
        font: {
          family: 'Roboto'
        },
        icons: 'mdi'
      }
    }]
  ],
  /*
  ** Add server middleware
  ** Nuxt.js uses `connect` module as server
  ** So most of express middleware works with nuxt.js server middleware
  */
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    // session middleware
    session({
      // store: new FileStore(),
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      // cookie: { maxAge: 10000 }
    }),
    // Api middleware
    // We add /api/login & /api/logout routes
    '~/api'
  ]
}
