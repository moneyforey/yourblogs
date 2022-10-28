const express = require('express')
const dotenv = require('dotenv');
const dbConnect = require('./src/config/db');
const userRouter = require('./src/features/controllers/user.route');

dotenv.config();
const server = express();

const PORT = process.env.PORT || 9090;

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use("/", userRouter);

server.listen(PORT, async() =>{ 
      await dbConnect();
     console.log(`http://localhost:${PORT}`)
    })