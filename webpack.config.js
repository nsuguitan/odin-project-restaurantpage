const path = require('path');

module.exports = {
  entry: './src/pages/home.js',
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
            name: '/src/images/background.jpg'
          }

      },
    ],
  },
};
