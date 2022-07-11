const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
// const env = require('dotenv').config()
const DotEnv = require("dotenv-webpack");
module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./preload.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "aliyun_tools.umd.js",
    publicPath: "./",
  },
  externalsPresets: { node: true },
  externals: [nodeExternals()], // 为了忽略node_modules中的依赖
  // devtool: "inline-cheap-source-map",
  // devtool: 'source-map',
  module: {
    unknownContextCritical: false,
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: path.resolve(__dirname, "./node_modules"),
      },
    ],
  },
  stats: {
    errorDetails: true,
  },
  plugins: [
    new DotEnv({
      path: path.resolve(__dirname, ".env"),
      systemvars: true,
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
      }),
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
