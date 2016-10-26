module.exports = function (server) {

	var io = require('socket.io')(server);


	var rtc = io.of('/rtc').on('connection', function (socket) {

	  socket.on('emit', function (data) {

	  	console.log(data);

	  	//rtc.emit('msg', data); //everyone in RTC chanel will get this, even the socket calling it
	    socket.broadcast.emit('msg', data);

	  });

	});

}