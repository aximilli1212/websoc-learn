// We need http because we dont have express
const http = require('http');

// We need socket.io its 3rd party!
const socketio = require('socket.io');

// We make an http server with node
const server = http.createServer((req,res)=>{
    res.end("Iam connected Dude.")
});

const io = socketio(server);

io.on('connection',(socket,req)=>{
    // ws.send becomes socket.emit?
        socket.emit('welcome',"Welcome to websocket server!!");
        socket.on('message',(msg)=>{
            console.log(msg);
        })
})

server.listen(9000);
