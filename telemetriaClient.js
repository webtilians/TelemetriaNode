var irsdk = require('node-irsdk')
var file = require('file-system');
var fs = require('fs');
var moment = require('moment')
var datosTelemetria={}
const idPc="pepitogrillo"
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
  socket.emit('pcConnected',{idPc:idPc})
  iracing.once('TelemetryDescription', function (data) {
	//console.log('TelemetryDesc:', data)
	 var dateStr = moment().format().replace(/:/g, '')
	var fileName = './telemetria/' + dateStr + '-telemetry-desc.json'
	fs.writeFile(fileName, JSON.stringify(data, null, 2), function (err) {
		if (err) throw err
	})
	for(var i in data){
		datosTelemetria[i]=[]
	}
  })
	iracing.on('SessionInfo', function (data) {
		//console.log('Telemetry:',data.data.CarSetup)
		socket.emit("sessionData",data)
	})

	iracing.on('Telemetry', function (data) {
	socket.emit("dashboard",data.values)
	for(var i in data.values){
		datosTelemetria[i].push(data.values[i])
		}
})

})
iracing.on('Disconnected', function () {
  console.log('disconnected')
  var dateStr = moment().format().replace(/:/g, '')
	var fileName = './telemetria/' + dateStr + '-telemetry.json'
	fs.writeFile(fileName, JSON.stringify(datosTelemetria), function (err) {
		if (err) throw err
	})
})
