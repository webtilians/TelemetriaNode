var io = require('socket.io')(2389);
console.log("hola telemetricos");
var aSockets = {};

io.on('connection', function (socket) {
    
    aSockets[data.idUser] = socket;
    console.log(Object.keys(aSockets));
    console.log('a user connected->', socket.acks.id);
    socket.emit("hola", {saludo: "hola"});
    socket.on('CarSetup', function (data) {
        console.log(data);
    });
    socket.on("connectUser", function (data) {
        console.log("conectUser")
        console.log(data.id)

    });
    socket.on('dashboard', function (data) {
        console.log(data.Speed);
        io.emit('dashboardClient', data);
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

});
