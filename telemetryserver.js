var io = require('socket.io')(2389);
console.log("hola telemetricos");
var aSockets = {};
var equipos={};
var aPcConectados=[];
var room;
   // aSockets[idUserto].emit('socketNewMsg', message);
var rooms={}
io.on('connection', function (socket) {
    socket.on('pcConnected',function(idpc){
        socket.join(rooms[idpc]);
        room=idpc;
    });
    socket.on('sessionData', function (data) {
        console.log(data);
        io.sockets.in(room).emit('sessionDataClient', data);
        io.emit('sessionDataClient', data);
    });
    socket.on("connectUser", function (data) {
        console.log("conectUser")
        console.log(data.id)
        aSockets[data.id]= socket;
        socket.join(data.id);
    });
    socket.on('dashboard', function (data) {
        io.sockets.in(room).emit('dashboardClient', data);
        io.emit('dashboardClient', data);
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

});

