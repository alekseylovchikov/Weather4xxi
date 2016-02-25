var webpackConfig = require("./webpack.config.js");
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');

webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
var compiler = webpack(webpackConfig);
var server = new webpackDevServer(compiler, {
    hot: true,
    historyApiFallback: false,
    headers: { "Access-Control-Allow-Origin": "http://localhost:8080", "X-Custom-Header": "yes" },
    stats: { colors: true },
});

server.listen(8080, 'localhost', function() {
    
});