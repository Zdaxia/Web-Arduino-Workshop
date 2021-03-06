//Send: LED

var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(9001), // WebSocket port
	port = 8888, // HTTP port
	SerialPort = require("serialport").SerialPort,
	fs = require('fs'),
	// $ ls /dev/tty.* 
	// use $ ls /dev/tty.*  to list serial port you are using.
	sPort = "/dev/tty.usbmodemfd131", //Change this sPort to your using port which your arduino linked with.
	// create an instance (object)
	arduino = new SerialPort(sPort, {
		baudrate: 9600
	});


// create web server using express
server.listen(port, function() {
	console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

console.log('the server is running on port: ' + port);


// init socket.io
io.set('log level', 1); // 1 - reduces the socket's logging in the Terminal 
//The amount of detail that the server should output to the logger.0 - error, 1 - warn, 2 - info, 3 - debug

io.sockets.on('connection', function(socket) {
	console.log('Ooooooh, someone just poked me :)-----> SOCKET IO IS WORKING');

	//Websocket get data from web client
	socket.on('led', function(data) {

		console.log(data);

		var ledOn = new Buffer(1),
			ledOff = new Buffer(1);

		ledOn[0] = 0x01;
		ledOff[0] = 0x00;

		if (data === true) {
			// turn on led
			arduino.write(ledOn); //send data to arduino
			console.log('LED ON');
		} else {
			// turn off
			arduino.write(ledOff); //send data to arduino
			console.log('LED OFF');
		}

	});

});



//Geting data from Arduino and send it to web client. 

//get and send data from potentiometer
var getData,
	sendData;

//get and send data from button
var getDataButton,
	sendDataButton;

arduino.on('open', function() {
	console.log('port id on');

});


arduino.on('data', function(data) {

	console.log('Get data from arduino');
	getData += data;

	if (getData.indexOf('B') >= 0 && getData.indexOf('E') >= 0) {

		sendData = getData.substring(getData.indexOf('B') + 1, getData.indexOf('E'));
		getData = '';
		//console.log('Received data='+ getData);
		console.log(sendData);
		io.sockets.emit('pot', sendData);

	};



	getDataButton += data;

	if (getDataButton.indexOf('J') >= 0 && getDataButton.indexOf('K') >= 0) {

		sendDataButton = getDataButton.substring(getDataButton.indexOf('J') + 1, getDataButton.indexOf('K'));
		getDataButton = '';
		//console.log('Received data='+ getDataButton);
		console.log(sendDataButton);
		io.sockets.emit('ardButton', sendDataButton);

	};

});