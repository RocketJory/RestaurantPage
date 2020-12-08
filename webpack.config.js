const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: { 
        index: path.resolve(__dirname, "src", "index.js") 
    },
    output: {
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],
    module: {
        rules: [
          {
            //CSS LOADER
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          // {
          //   test: /\.(jpg|png)$/i,
          //   use: {
          //       loader: 'url-loader',
          //       options: {
          //           limit: 8192,
          //           name: './img/[name].[ext]',
          //         },
          //   },
          // }
          {
            test: /\.(gif|png|jpe?g)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'img/',
                }
              }
            ]
          }
        ],
    }
}