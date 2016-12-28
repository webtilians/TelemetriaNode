var io = require('socket.io')(2389);
console.log("hola telemetricos");
var aSockets = {};
var equipos={};
var aPcConectados=[];

   // aSockets[idUserto].emit('socketNewMsg', message);

io.on('connection', function (socket) {
    socket.on('pcConnected',function(idpc){
        aSockets[data.idpc]= socket;
        socket.join(idpc);
    });
    
    
    console.log('a user connected->', socket.acks.id);
    socket.emit("hola", {saludo: "hola"});
    socket.on('CarSetup', function (data) {
        console.log(data);
    });
    console.log(Object.keys(aSockets));
    socket.on("connectUser", function (data) {
        console.log("conectUser")
        console.log(data.id)
        aSockets[data.id]= socket;
        socket.join(id);
    });
    socket.on('dashboard', function (data) {
        io.sockets.in(room).emit('dashboardClient', data);
        
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

});

