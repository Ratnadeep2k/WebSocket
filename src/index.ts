import { WebSocket } from "ws";
const wss = new WebSocket.Server({ port: 8080 });
wss.on("connection",function(socket){
    console.log("New connection");
    setInterval(() => {
        socket.send("Hello Hello");
    },500)
    socket.on("message",(e)=>{
        console.log(e.toString());
    })
})