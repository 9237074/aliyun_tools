const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./preload.ts"),
  output: {
    path: path.resolve(__dirname, "./dist/js"),
    filename: "aliyun_tools.umd.js",
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: path.resolve(__dirname, "./node_modules"),
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
