var config = require("./webpack.config.js");
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var compiler = webpack(config);

var PORT = process.env.PORT || 8080,
    IP = process.env.IP || 'localhost';

var server = new webpackDevServer(compiler, {

});

server.listen(PORT, IP, function() {
    console.log('listen server on address: ', IP, PORT);
});