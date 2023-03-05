//var io = require('socket.io')(http);

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })




//console.log("Node is installed xxxnode");
