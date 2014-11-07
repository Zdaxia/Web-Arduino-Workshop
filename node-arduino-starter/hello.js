console.log('Hello Node.js');

var express = require('express'),
	app = express(),
	server = require('http').Server(app),
	port = 8888;

app.use(express.static(__dirname + '/public'));
server.listen(port, function() {
	console.log('Hey we created a node server!');
	console.log('Server running at port:' + port);
});