const path = require('path') //part of the node library
//installed from npm store, for our CSS post processors
const postCSSPlugins = [

require('postcss-simple-vars'),
require('postcss-nested'),
require('autoprefixer')

]
module.exports = {
entry: './app/assets/scripts/App.js', 
output: {
    filename: 'bundled.js', 
    path: path.resolve(__dirname, 'app') //node js path package
    },
mode: 'development',
watch: true, //webpack is actively watching our file changes and continually runs until we say stop (control C)
module: {
    rules:[
        {
            test: /\.css$/i,
            // bundle css files
            // applies and uses styles in the browser itself
            use: ['style-loader','css-loader?url=false', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}]
        }
    ]
}
}

//curly brackets are a JS object