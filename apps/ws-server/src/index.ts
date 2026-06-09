import { WebSocketServer } from "ws";
import { client } from "@repo/db/client"

const PORT = 3001
const server = new WebSocketServer({port:PORT})

server.on('connection', async (socket)=> {
    socket.send("hey connected")

    const res = await client.users.create({
        data: {
            name: Math.random().toString(),
            password: Math.random().toString()
        }
    })

    console.log(res)

    socket.on('close', () => {
        console.log("Client disconnected")
    })

    socket.on('error', (err) => {
        console.error("Socket error:", err)
    })
})