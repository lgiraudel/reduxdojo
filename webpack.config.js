var webpack = require('webpack');
var path = require('path');

module.exports = {
    cche: true,
    entry: {
        main: './client/index.jsx'
    },
    output: {
        path: 'public/build',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: [
                path.resolve(__dirname, 'client')
            ],
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'stage-0', 'react']
            }
        }]
    }
};
