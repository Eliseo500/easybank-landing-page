const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')
  ],
  autoprefixer: { browsers: ['last 4 versions', 'iOS >= 8'] }
};