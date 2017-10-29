const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	devtool:'inline-source-map',
	entry:{
        app:['react-hot-loader/patch',path.join(__dirname,'/src/main.js')],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },//入口文件
	output:{
		path:path.join(__dirname,"/build"),    //打包后文件存放的地方
		filename:"[name].[hash].js",			//打包后输出的文件名
	    chunkFilename: '[name].[chunkhash].js'
    },
	devServer:{
		contentBase:path.join(__dirname,'/build'), //本地服务器加载的页面所在目录
		historyApiFallback:true, //不跳转,让所有的404定位到index;
		inline:true,    //实时刷新
		port:8888     //端口号
	},
	module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: ['babel-loader?cacheDirectory=true'],
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
		new ExtractTextPlugin("style.css"),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname+'/src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
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