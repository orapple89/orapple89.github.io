const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

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
