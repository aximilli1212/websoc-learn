const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));


const expressServer = app.listen(4400);

const io = socketio(expressServer);

io.on("connection",(socket)=>{
     socket.emit('messageFromServer',{data:"Welcome to the socket io sever, Greatest Avenger."});
     socket.on('messageFromClient',(msg)=>{
         console.log("We received a message from then client");
         console.log(msg);
     })

    socket.on('newMessageToServer',(msg)=>{
         console.log(msg);
         io.emit('messageToClients',{text:msg.msg});
    })
});
