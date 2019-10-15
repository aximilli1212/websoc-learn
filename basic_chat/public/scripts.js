const socket = io("http://localhost:4000");
console.log("well we here");
socket.on('messageFromServer',(dataFromServer)=>{
    console.log(dataFromServer);
    socket.emit('messageFromClient',{data:'Data from Client...Yipeee.'})
});

document.querySelector('#message-form').addEventListener('submit',(event)=>{
    event.preventDefault();
    const newMessage = document.querySelector('#user-message').value;
    console.log(newMessage);
    socket.emit('newMessageToServer',{msg:newMessage});

});

socket.on('messageToClients',(msg)=>{
    console.log(msg);
    document.querySelector('#messages').innerHTML+=`<li>${msg.text}</li><br />`;
})


// socket.on('ping',()=>{
//     console.log("Ping was received from the server");
// })
//
// socket.on('pong',(latency)=>{
//     console.log(latency);
//     console.log("pont was sent to the server.")
// })
