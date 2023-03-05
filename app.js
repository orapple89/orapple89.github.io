var express = require('express'),
    app = express(),
    http = require('http'),
    socketIO = require('socket.io'),
    server, io;

app.get('/', function (req, res) {
res.sendFile(__dirname + '/index.html');
});

server = http.Server(app);
server.listen(5000);

io = socketIO(server);

io.on('connection', function (socket) {
  socket.emit('greeting-from-server', {
      greeting: 'Hello Client'
  });
  socket.on('greeting-from-client', function (message) {
    console.log(message);
  });
});

/*
const express = require('express');
const app = express();
const port = 3000;

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
//const io = new Server(httpServer, {options});

io.on("connection", socket => {
  // either with send()
  socket.send("Hello!");


// or with emit() and custom event names
  socket.emit("greetings", "Hey!", { "ms": "jane" }, Buffer.from([4, 3, 3, 1]));

  // handle the event sent with socket.send()
  socket.on("message", (data) => {
    console.log(data);
  });

  // handle the event sent with socket.emit()
  socket.on("salutations", (elem1, elem2, elem3) => {
    console.log(elem1, elem2, elem3);
  });
});

httpServer.listen(3000);
*/


//WARNING !!! app.listen(3000); will not work here, as it creates a new HTTP server
/*
//****express test****
app.get('/', (req,res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
*/
 
  
//***node test***
//console.log("Node is installed xxxnode");
