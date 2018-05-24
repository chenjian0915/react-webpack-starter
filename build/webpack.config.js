const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

var config = {
  entry : {
    app : path.join(__dirname,'../client/app.js')
  },
  output : {
    path : path.join(__dirname,'../dist'),
    filename : '[name].[hash].js',
    publicPath : '/public/'
  },
  resolve : {
    //可以在引入模块进省略扩展名的文件
    extensions: ['.js','.jsx','.json'],
  },

  module: {
    rules : [
      {test : /.jsx$/,loader: "babel-loader"},
      {test : /.js$/,loader: "babel-loader" , exclude : [path.join(__dirname,'../node_modules')]},
        { test: /\.css$/, loader: "style-loader!css-loader" },
        {
            test:/\.less$/,
            use:[
                'style-loader'
                ,'css-loader'
                ,'less-loader'
            ]
        },

    ]
  },

  plugins : [
    new HTMLPlugin({
      template : path.join(__dirname,'../client/template.html')
    })
  ]
}

if(isDev){
    config.devServer={
        host : '0.0.0.0',
        port : '8888',
        contentBase: path.join(__dirname,'../dist'),
        hot : true, //热更新开启
        overlay : {
            errors: true, },
        publicPath: '/public',
        historyApiFallback: {
            index: '/public/index.html'
        },
        proxy : {
          '/api' : 'http://localhost:3333'
        }
    }
    config.plugins.push(new webpack.HotModuleReplacementPlugin());	
}
module.exports = config;

















