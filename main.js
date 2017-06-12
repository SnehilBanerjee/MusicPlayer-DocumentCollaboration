// var events=require('events');
// var eventEmitter= new events.EventEmitter();
// var connectHandler=function connected(){
// 	console.log('connection sucesful');
// 	eventEmitter.emit('data_received');
// }
// eventEmitter.on('connection',connectHandler);
// eventEmitter.on('data_received',function(){
// 	console.log('Data recieved succesfully.');
// });
// eventEmitter.emit('connection');
// console.log("Program Ended");





// var fs=require("fs");
// var data='';
// var readerStream =fs.createReadStream('input.txt');
// readerStream.setEncoding('UTF8');
// readerStream.on('data',function(chunk){
// 	data+=chunk;
// });
// readerStream.on('end',function(){
// 	console.log(data);
// });
// readerStream.on('error',function(err){
// 	console.log(err.stack);
// });
// console.log("progarm khatm");


var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})