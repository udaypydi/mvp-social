const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = function({ plugins }) {
    return ({
        entry: {
            index: paths.entry
        },
        output: {
            path: paths.output,
            filename: '[name].bundle.js'
        },
        module: {
            rules: [
                {
                    test: /(.js|.jsx)/,
                    exclude: /(node_modules|bower_components)/,
                    use: 'babel-loader',
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                      'style-loader',
                      'css-loader',
                      'sass-loader',
                    ],
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader', 'postcss-loader'],
                },
                {
                    test: /\.(png|jpe?g|gif|eot|woff|woff2|ttf|svg)$/i,
                    use: [
                      {
                        loader: 'file-loader',
                      },
                    ],
                },
            ]
        },
        plugins: [
            ...plugins,
            new HtmlWebpackPlugin({
                template: paths.template,
                hash: true,
                title: 'Social MVP',
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[hash].css',
                chunkFilename: '[id].[hash].css'
            }),
        ],
        resolve: {
            extensions: ['.js', '.jsx', '.scss', '.css'],
            alias: {
                uielements: paths.uielements,
                assets: paths.assets,
                src: paths.src,
                components: paths.components,
                'react/jsx-runtime': 'react/jsx-runtime'
            }
        },
    });
}
