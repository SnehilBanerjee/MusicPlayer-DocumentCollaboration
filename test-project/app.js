var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require("fs");


app.get('/', function(req, res){
  res.sendfile('index.html');
});
users = [];
io.on('connection', function(socket){
  console.log('A user connected');
  socket.on('setUsername', function(data){
    console.log(data);
    if(users.indexOf(data) > -1){
      socket.emit('userExists', data + ' username is taken! Try some other username.');
    }
    else{
      users.push(data);
      socket.emit('userSet', {username: data});
    }
  });
  socket.on('msg', function(data){	
      //Send message to everyone
      console.log(data);
        io.sockets.emit('newmsg', data); 
        fs.appendFile('input.txt',data.message,function(err){
        	if(err){
        		return console.error(err);
        	}
        });



//});
});});
http.listen(3000);
