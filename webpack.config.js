
const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: './index.html'
})

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // 模式
    mode: 'development',

    performance: {
        hints:false
    },

    devtool: 'eval-source-map',
    // 保证运行报错的行数与源代码行数一致

    // 入口
    entry: path.join(__dirname, './src/index.js'),

    // 出口
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/main.js',
        // js文件输出路径
    },

    // 加载器
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            {
                test: /\.jpg|png|gif$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 20000,
                        outputPath: 'images',
                        // 图片输出路径
                    }
                }
            },
            // limit 转换前图片最大字节数
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ],
    },

    // 插件
    plugins: [htmlPlugin, new CleanWebpackPlugin()],

    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 80,

    }
}