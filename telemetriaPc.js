var file = require('file-system');
var fs = require('fs');
// update telemetry as fast as possible
var io = require('socket.io')(2389);
irsdk.init({telemetryUpdateInterval: 0})
var iracing = irsdk.getInstance()
function saveSample (type, time, data) {
  var fileName = './telemetria/' + time + '-' + type + '.json'
  file.writeFile(fileName, JSON.stringify(data), function (err) {
    if (err) throw err
  })
}
iracing.on('Connected', function () {
  console.log('connected')
  
  iracing.on('SessionInfo', function (data) {
    console.log('Telemetry:',data.data.CarSetup)
    io.sockets.emit("CarSetup",data.data.CarSetup)
    console.log('got SessionInfo')
    saveSample('SessionInfo', Date.now(), data)
  })
  
  iracing.on('Telemetry', function (data) {
    console.log('Telemetry:', data.values.Speed)
    io.sockets.emit("speed",data.values.Speed)
    console.log('got Telemetry')
    saveSample('Telemetry', Date.now(), data)
  })
  
  iracing.on('TelemetryDescription', function (data) {
    console.log('got TelemetryDescription')
    saveSample('TelemetryDescription', Date.now(), data)
  })
})
