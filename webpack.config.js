'use strict';

const path = require('path');
const autoprefixer = require('autoprefixer');

const config = {

    entry: path.join(__dirname, '/frontend/src/app.jsx'),

    output: {
        path: path.join(__dirname, '/frontend/dist/js'),
        filename: 'app_webpack.js',
    },

	module: {
        loaders : [

            {
                test: /\.jsx?$/,
                include: path.join(__dirname, '/frontend/src'),
                loader : 'babel-loader',
                query: {
                    presets: ["react",'es2015']
                }
            },

            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader?-url', 'postcss-loader', 'sass-loader']
            },

            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader?-url', 'postcss-loader']
            }

        ]
    },
    watch: true
};

module.exports = config;
