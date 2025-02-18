import { WebSocket } from "ws";
const wss = new WebSocket.Server({ port: 8080 });
wss.on("connection",function(socket){
    console.log("New connection connected");
    socket.on("message", (message) => {
        console.log(message.toString()==="ping");
        if (message.toString() === "ping") {
            socket.send("pong");
        }
    }
    );
})