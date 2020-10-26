const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpackBaseConfig = require('./webpack.base.config');

const handler = (percentage, message, ...args) => {
    console.info(Math.round(percentage * 100), message, ...args);
};
  
module.exports = {
    mode: 'production',
    devtool: 'cheap-source-map',
    ...webpackBaseConfig({
        plugins: [
            new CleanWebpackPlugin(),
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                defaultSizes: 'gzip'
            }),
            new webpack.ProgressPlugin(handler),
        ]
    }),
};
