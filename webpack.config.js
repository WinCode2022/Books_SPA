const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";

module.exports = {
  mode: mode,
  experiments: { topLevelAwait: true },
  entry: {
    scripts: "./src/main.ts",
  },
  output: {
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  devServer: {
    open: true,
    static: {
      directory: "./src",
      watch: true,
    },
  },
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
