var file = require('file-system');
var fs = require('fs');
// update telemetry as fast as possible
var io =require('socket.io-client');
irsdk.init({telemetryUpdateInterval: 0})
var iracing = irsdk.getInstance()
var socket =io('http://vps259018.ovh.net:2389')
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
  socket.emit("CarSetup",data.data.CarSetup)
  })
  
  iracing.on('Telemetry', function (data) {
  console.log('Telemetry:', data.values.Speed)
  socket.emit("speed",data.values.Speed)
})
iracing.on('TelemetryDescription', function (data) {
  console.log('got TelemetryDescription')

  saveSample('TelemetryDescription', Date.now(), data)
})

iracing.on('Telemetry', function (data) {
  console.log('got Telemetry')
  saveSample('Telemetry', Date.now(), data)
})

iracing.on('SessionInfo', function (data) {
  console.log('got SessionInfo')

  saveSample('SessionInfo', Date.now(), data)
})
})
