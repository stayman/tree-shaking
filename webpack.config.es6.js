const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build-es6'),
    filename: 'bundle-es6.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [path.resolve(__dirname, 'node_modules')],
      loader: 'babel-loader',
      options: {
        presets: [['es2015', {'modules': false}]]
      }
    }]
  }
};
