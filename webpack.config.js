var webpack = require('webpack');

module.exports = {
    entry: {
        'public.movie': [
            './assets/js/movie.js'
        ]
    },
    output: {
        path: __dirname + '/js/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    }
};