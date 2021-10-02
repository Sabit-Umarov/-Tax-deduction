const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@UI': path.resolve(__dirname, 'src/UI'),
      },
      extensions: ['.js', '.vue', '.json']
    }
  },
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Tax-deduction/'
    : '/'
}
