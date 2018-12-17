const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpackLinkPlugin = require('webpack-link');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpackLinkPlugin({
      localModule: path.resolve(__dirname, '../localModule')
    })
  ],
  module: {
    rules: [
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            //将css文件匹配到先解析css 再将css插入到style中，写法从右往左写
            test:/\.less$/,
            //包依赖
            use:['style-loader','css-loader','less-loader'],
            exclude:/node_modules/
        }      
    ]
  },
  externals: [nodeExternals()]
};
