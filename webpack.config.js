const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const base = '';

const config = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: base
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
        historyApiFallback: {
            rewrites: [{ from: /./, to: base }]
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            variables: {
                title: 'Braden Hitchcock',
                base,
                favicon: 'assets/favicon.ico'
            }
        }),
        new CopyPlugin({ patterns: [{ from: 'images', to: 'images' }, { from: 'data/resume.toml', to: 'resume.toml' }]})
    ],
    resolve: {
        fallback: {
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer/")
        }
    }
};

module.exports = config;
