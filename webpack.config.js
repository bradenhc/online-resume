const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        edge: '17',
                                        firefox: '60',
                                        chrome: '67',
                                        safari: '11.1'
                                    },
                                    useBuiltIns: 'usage',
                                    corejs: '3.0.0'
                                }
                            ],
                            '@babel/preset-react'
                        ],
                        plugins: [
                            [
                                'module-resolver',
                                {
                                    root: ['./src']
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [new HtmlWebpackPlugin({ template: path.join(__dirname, 'src', 'index.html') })]
};

module.exports = config;
