var express = require('express');
var app = express();
app.use(express.static('public'));
//  主页输出 "Hello World"
app.get('/', function(req, res) {
	console.log("主页 GET 请求");
	res.send("Hello World")
})

var server = app.listen(5200, function() {
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://localhost:5200", host, port)
})