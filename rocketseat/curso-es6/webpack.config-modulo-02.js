module.exports = {
    entry: './modulo-02/main.js',
    output: {
        path: __dirname,
        filename: 'modulo-02/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { 
                    loader: 'babel-loader',
                }
            }
        ],
    },
};