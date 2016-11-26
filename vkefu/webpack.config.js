var path = require("path")
var webpack = require('webpack')
var ignoreFiles = new webpack.IgnorePlugin(/\.\/iSlider.js$/)
var HtmlWebpackPlugin = require('html-webpack-plugin')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
    entry: {
        vendor: ["jquery","bootstrap","bootstrapTable"],
        app: ["./src/main.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        //publicPath: "/src/",
        filename: "[name].js"
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'vue$': 'vue/dist/vue',
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components'),
            'jquery': path.resolve(__dirname, './node_modules/jquery/src/jquery.js'),
            'bootstrap': path.resolve(__dirname, './node_modules/bootstrap/dist/js/bootstrap.js'),
            'bootstrapTable': path.resolve(__dirname, './node_modules/bootstrap-table/src/bootstrap-table.js')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        preLoaders: [
            {
                test: /\.vue$/,
                loader: 'eslint',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'eslint',
                include: projectRoot,
                exclude: /node_modules|assets/
            }
        ],
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=819200'
            }
        ]
    },
    devtool: '#eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'build/index-temp.html',
            inject: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor"],
            minChunks: Infinity
        })
    ],
    vue: {
        loaders: {
            js: 'babel!eslint',
            less: 'vue-style!css!less',
            sass: 'vue-style!css!sass'
        }
    },
    eslint: {
        formatter: require('eslint-friendly-formatter')
    }
}