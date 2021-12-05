var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
var CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    cache: false,
    entry: './src/index.ts',
    mode: "development",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename: "[file].js.map",
        publicPath: '',
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][file].[ext]',
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        roots: [
            path.resolve(__dirname, 'app'),
            path.resolve(__dirname, 'node_modules')
        ],
        extensions: [
            '', '.ts', '.js'
        ]
    },
    devServer: {
        watchOptions: {
            poll: true,
            ignored: '/node_modules/',
        },
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 9000,
        publicPath: '',
        hot: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' },
                { from: path.resolve(__dirname, "src/index.html") },
            ]
        }),
        new webpack.DefinePlugin({
            PROD: JSON.stringify(process.env.NODE_ENV)
        }),
    ],
};
//# sourceMappingURL=webpack.development.config.js.map