const express = require("express")
const app = express()

const PORT = 3000

app.get("/hello" , (req , res , next) =>{
    res.send("this is navigated to the api /hello and it says hello")
})


app.get("/" , (req, res , next) => {
    res.send("This is the express server")
})

app.listen(PORT , ()=>{
    console.log(`Express Server is RUNNING ! Visit http://localhost:${PORT}/`)
})


// THIS IS HOW YOU DO IT IN NODE JS

// const http = require("http");

// const server = http.createServer((req , res) =>{
//     res.write("This is my first server!");
//     res.end();
// })

// const port = 3000;

// server.listen(port , () =>{
//     console.log(`This server is running on  http://localhost:${port}/`)
// })

