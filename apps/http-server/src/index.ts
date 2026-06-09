import express from 'express'
import { client } from "@repo/db/client"

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hi there")
})

app.post('/signup', async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = await client.users.create({
        data: {
            name: username,
            password: password
        }
    })

    res.status(200).json({
        message: "Signup successful", 
        data: user,
        id: user.id
    })
})

app.listen(3000, () => {
    console.log("HTTP Server is running on port 3000");
})