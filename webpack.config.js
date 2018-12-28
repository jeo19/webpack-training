const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  // Bug tracking
  devtool: "inline-source-map",
  entry: {
    app: path.resolve(__dirname, "src", "app.js"),
    bar: path.resolve(__dirname, "src", "bar.js")
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js"
  },
  plugins: [
    new CleanWebpackPlugin(["build"]),
    new HtmlWebpackPlugin({
      title: "Nila webpack v4!",
      inject: "body",
      template: path.resolve(__dirname, "index.html")
    })
  ],
  devServer: {
    port: 8000,
    inline: true,
    overlay: true,
    historyApiFallback: true,
    host: "0.0.0.0"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[path][name]__[local]--[hash:base64:5]"
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      }
    ]
  }
};
