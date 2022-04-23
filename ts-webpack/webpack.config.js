
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

mode: 'production',
entry: './src/main.ts',
devServer: {


},
output: {

    filename: 'app.min.js',
    path: path.join(__dirname, 'dist')
},
plugins: [

    new CopyPlugin(
     {
       patterns: [
        { from: "public" }
    ] 
    })
],
resolve: {

    extensions: ['.ts', '.js']
},

module: {
    rules: [{

        test: /\.ts$/,
        use: 'ts-loader', /// remember install -D << devDependencies ts-loader
        exclude: /node_modules/
    }]

}


}