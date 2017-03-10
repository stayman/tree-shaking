const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build-cjs'),
    filename: 'bundle-cjs.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [path.resolve(__dirname, 'node_modules')],
      loader: 'babel-loader',
      options: {
        presets: ['es2015']
      }
    }]
  }
};
