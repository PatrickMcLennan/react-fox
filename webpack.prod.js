const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = merge(common, {
  mode: `production`,
  output: {
    filename: `app.[contenthash].js`,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss/,
        exclude: /(node_modules)/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: `css-loader`, options: { importLoaders: 1 } },
          {
            loader: `postcss-loader`,
            options: {
              postcssOptions: {
                ident: `postcss`,
                plugins: () => [
                  postcssPresetEnv({
                    stage: 2,
                  }),
                ],
              },
            },
          },
          `sass-loader`,
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
    namedChunks: true,
    moduleIds: `hashed`,
    runtimeChunk: `single`,
    splitChunks: {
      chunks: `all`,
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        react: {
          test: /node_modules\/react((\-dom))?\//,
          name: `react`,
          chunks: `all`,
        },
        jsCss: {
          test: "*.styles.ts",
          name: `jsCss`,
          chunks: `all`,
        },
        styledComponents: {
          test: /node_modules\/styled-components/,
          name: "styled-components",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(`src/template.html`),
      inject: `head`,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "defer",
    }),
    new MiniCssExtractPlugin({
      filename: `[name].[contenthash].css`,
      chunkFilenamefilename: `[name].[contenthash].css`,
    }),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin(),
  ],
});
