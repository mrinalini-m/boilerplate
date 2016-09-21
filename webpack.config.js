var NpmInstallPlugin = require("npm-install-webpack-plugin");
module.exports = {
  entry: './src/index.jsx',
  output: {
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new NpmInstallPlugin()
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
