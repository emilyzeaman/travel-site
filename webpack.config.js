const path = require('path') //part of the node library
//installed from npm store, for our CSS post processors
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
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
    devServer: {
        before: function(app,server){
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },
mode: 'development',
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