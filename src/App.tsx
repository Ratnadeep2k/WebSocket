import { useEffect, useRef, useState } from 'react'
import './App.css'
function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  //when first this commonent is loaded, we want to connect to the websocket server
  function sendMessage() {
    if(!socket){
      return;
    }
    const messagee = inputRef.current?.value || '';
    //send a message to the websocket server
    //@ts-ignore
    socket.send(messagee);
  }
  useEffect(()=>{
    //connect to the websocket server
    const ws = new WebSocket('ws://localhost:8080')
    setSocket(ws);
    ws.onmessage=(message)=>{
      alert(message.data);
    }
  },[])
  return (
    <>
      <div>
        <h1 >WebSockets Chat</h1>
        <p>Open the console to see the WebSocket messages.</p>
        <input ref={inputRef} type="text" placeholder="message" ></input>
        <button onClick={sendMessage}>Send</button>
      </div>
       
    </>
  )
}

export default App
