const express = require('express')
const dotenv = require('dotenv');
const http = require('http');
const {Server} = require('socket.io');
const dbConnect = require('./src/config/db');
const userRouter = require('./src/features/controllers/user.route');

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 9090;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/", userRouter);

server.listen(PORT, async() =>{ 
      await dbConnect();
     console.log(`http://localhost:${PORT}`)
    })