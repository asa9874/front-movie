const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DotEnv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      fs: false, // fs 모듈 사용 방지
      path: false, // path 모듈 사용 방지
    },
  },
  devServer: {
    static: "./dist",
    open: true,
    historyApiFallback: true,
  },
  output: {
    publicPath: "/",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new DotEnv({
      path: './.env', 
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|mjs|ts)$/i,
        exclude: /node_modules/,
        use: { loader: "ts-loader" },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  
};
