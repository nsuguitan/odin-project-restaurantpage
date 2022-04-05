const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.(png|jpe?g|gif)$/i,
            type: 'asset/resource',
              generator: {
                filename: '../src/images/background.jpg',
                filename: '../src/images/carousel1.jpeg',
                filename: '../src/images/carousel2.jpeg',
                filename: '../src/images/carousel3.jpeg',
                filename: '../src/images/carousel4.jpeg',
                filename: '../src/images/carousel5.jpeg',
                filename: '../src/images/blacktea.png',
            },
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
    ],
  },
};
