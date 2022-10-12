const express = require('express');


const server = express();


server.get('/',(req,res)=>{
    res.send('<h1>hello world</h1>');
})

server.post("/signup",(req,res)=>[
    
])

server.listen(8080,()=>{
    console.log('http://localhost:8080');
})