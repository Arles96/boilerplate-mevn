const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: `${__dirname}/src/public/js`,
    filename: 'bundle.js',
    publicPath: "/src/public"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loade' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}