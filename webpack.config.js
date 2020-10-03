const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mdxVersion = '2.0.0';

module.exports = {
    entry: {
        js: './src/js.js',
        post: './src/post.js',
        page: './src/page.js',
        search: './src/search.js',
        ac: './src/ac.js',
        toc: './src/toc.js',
        login: './src/login.js',
        ajax: './src/ajax.js',
        ajax_other: './src/ajax_other.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'js'),
        publicPath: '/wp-content/themes/mdx/js',
        chunkFilename: '[name].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: { 
                    name: 'common',
                    chunks: 'all',
                    minSize: 10,
                    minChunks: 2
                }
            }
        }
    },
    devtool: 'source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [
                    'cache-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ],
            },
            {
                test: /\.js$/,
                use: [
                    'cache-loader',
                    'babel-loader'
                ],
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: '../img/social-icons',
                            publicPath: './img/social-icons',
                            name: '[name].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: '../fonts/',
                            name: '[name].[ext]',
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../style.css'
        }),
        new webpack.BannerPlugin({
            banner: `/*
Theme Name: MDx
Theme URI: https://flyhigher.top/develop/788.html
Description: MDx - Material Design WordPress Theme
Version: ${mdxVersion}
Author: AxtonYao
Author URI: https://flyhigher.top
Tags: Material Design, Personal Blog, Simple Theme
*/`,
            test: /\.css$/,
            raw: true
        })
    ]
};