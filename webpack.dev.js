const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: `development`,
  devServer: {
    hot: true,
    open: true,
    overlay: true,
    stats: `minimal`,
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss/,
        exclude: /(node_modules)/,
        use: [`style-loader`, `css-loader`, `sass-loader`],
      },
    ],
  },
  devtool: `source-maps`,
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: path.resolve(`src/template.html`),
      inject: `body`,
    }),
  ],
});
