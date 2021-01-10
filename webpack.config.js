// LAUDETUR IESUS CHRISTUS
const HtmlWebpackPlugin = require('html-webpack-plugin');
//recorderis: en el webpack.config.js van mis loaders y los plugins. en module ubico las reglas que son cada uno de mis loaders
module.exports = {
    module: {
        rules: [
            {
                test: /\.html/,
                use:[
                    {
                        loader: 'html-loader',
                        options: {minimize:true}
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {presets:['@babel/preset-env']}
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/,
                use:['file-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                template: './src/index.html',
                filename: './index.html'
            }
        ),

    ]
};