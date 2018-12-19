var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
    mode: "development",
    devtool : 'source-map', // 제품빌드시 옵션 삭제로 불필요한 map파일 제외
    entry: {main : __dirname + '/src/main.js'},
    output: { 
        path: __dirname + '/public', 
        filename: '[name]-[hash].js' // [엔트리명] - [해쉬값]
    },
    devServer : {
        contentBase : './public',
        inline:true, 
        historyApiFallback :true,
        port : 7777
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:"직원정보 조회",
            template:__dirname + '/assets/index.html',
            filename: 'index.html'
        }),
        new UglifyJsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { 
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                ],
            }
        ]
    }
 };
 