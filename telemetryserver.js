var io = require('socket.io')(2389);
console.log("hola telemetricos");
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.emit("hola",{saludo:"hola"});
    socket.on('CarSetup', function (data) {
       console.log(data);
    });
      socket.on('speed', function (data) {
       console.log(data);
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    
});

