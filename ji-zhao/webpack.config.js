const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');  //分离css等文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');  //压缩文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清理历史打包文件
const path = require('path');

module.exports = {
	devtool:'cheap-module-source-map',
	entry:{
        app:['react-hot-loader/patch',path.join(__dirname,'/src/main.js')],
        vendor:['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    //入口文件
	output:{
		path:path.join(__dirname,"/dist"),    //打包后文件存放的地方
		filename:"[name].[chunkhash].js",			//打包后输出的文件名
	    chunkFilename: '[name].[chunkhash].js',
        publicPath : '/dist/'
    },
	module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                      fallback: "style-loader",
                      use: ["css-loader","postcss-loader"]
                })
            },{
                test:/\.(png|gif|jpg)/,
                use:[
                    {
                        loader:'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(), //通过模块调用次数给模块分配ids，常用的ids就会分配更短的id，使ids可预测，减小文件大小
		new UglifyJSPlugin({
			output: {
	        	comments: false,
	      	},
	      	compress: {
	        	warnings: false
	      	}
		}),
        new webpack.DefinePlugin({          //指定环境删除或添加文件
          'process.env': {
              'NODE_ENV': JSON.stringify('production')
           }
       }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname+'/src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.HashedModuleIdsPlugin(),  //改变文件后hash变化自动更改文件名
        new webpack.optimize.CommonsChunkPlugin({   
            name: 'runtime'
        }),             //改变文件后hash变化自动更改文件名
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin({
             filename: '[name].[contenthash:5].css',
             allChunks: true
        })
	],
    resolve:{
        alias:{
            redux1:path.join(__dirname,'src/redux'),
            image:path.join(__dirname,'src/common/image'),
            component:path.join(__dirname,'src/component'),
            router:path.join(__dirname,'src/router'),
            pages:path.join(__dirname,'src/pages') 
        }
    }
}


//注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。