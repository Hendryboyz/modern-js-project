const { DefinePlugin } = require('webpack');
const Dotnev = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new Dotnev({
      path: './.env.development'
    }),
  ],
};
