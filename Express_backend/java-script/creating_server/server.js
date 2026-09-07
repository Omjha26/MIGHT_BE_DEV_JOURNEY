const http = require("node:http");
const { buffer } = require("node:stream/consumers");

const localhost = "127.0.0.1";

const PORT = 3000;

const server = http.createServer((req , res) =>{
    if(req.method === "GET"){
        if(req.url === "/"){
            res.writeHead(200 , {'Content-Type' : 'text/plain'});
            res.end("Welcome to Elite Backend Dashbord! BOOOOOOOYEAHHHH!");
        }
        else if(req.url === "/profile"){
            res.writeHead(200 , {'Content-Type' : 'text/plain'});
            res.end("Welcome to Elite Backend Profile! BOOOOOOOYEAHHHH!")
        }
        else{
            res.writeHead(404 , {'Content-Type' : 'text/plain'});
            res.end("404 - Resource Not Found");   
        }
    }
    else if(req.method === "POST"){
        const chunks = [];
        if(req.url === "/data"){
            req.on('data' , (chunk) =>{
                chunks.push(chunk);
            })

            req.on('end',() =>{
                const body = Buffer.concat(chunks).toString();

                res.writeHead(200 , {"Content-Type" : "text/plain"});
                res.end(`Received your data : ${body}`); 
                // why ${body}? what is body here?
                // answer: ${body} is a string interpolation or template literal.
                // and body is a variable that stores the data that is received from the client
                // .on() method is used to listen for events
                // 'data' event is emitted when the data is received from the client
                // 'end' event is emitted when the data is finally received from the client

            })
        }
        else{
            res.writeHead(404 , {'Content-Type' : 'text/plain'});
            res.end("404 - Resource Not Found");   
        }
    }
    else{
        res.writeHead(404 , {"Content-Type" : "text/plain"});
        res.end("404 - Resource Not Found");
    }
});


// now suppose the port is already occupied then we need to display error , 
// without that error the error would be messy
/*like this    "PS D:\MIGHT_BE_DEV_JOURNEY\Express_backend\java-script> node server2.js
                node:events:496
                      throw er; // Unhandled 'error' event
                node:events:496
                      throw er; // Unhandled 'error' event
                      ^

                Error: listen EADDRINUSE: address already in use 127.0.0.1:3000
                    at Server.setupListenHandle [as _listen2] (node:net:1937:16)
                    at listenInCluster (node:net:1994:12)
                    at node:net:2203:7
                    at process.processTicksAndRejections (node:internal/process/task_queues:90:21)
                Emitted 'error' event on Server instance at:
                    at emitErrorNT (node:net:1973:8)
                    at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {
                  code: 'EADDRINUSE',
                  errno: -4091,
                  syscall: 'listen',
                  address: '127.0.0.1',
                  port: 3000
                }

                Node.js v22.14.0"
*/

//okay so now to actually first thing that came to my mind was try and catch , but the problem is that the server method is async
// therefore we'll need to catch it async-ly

//=====================================================================================================================
// error.code    |	        Meaning	                  |                      Example                                   |
//=====================================================================================================================|
// EADDRINUSE    |	    Address/Port already in use	  |      Trying to run 2 servers on port 3000                      |
// EACCES	     |      Access/Permission denied	  |      Trying to use restricted port 80 without Admin/Root       |
// ENOENT	     |      No such file or directory	  |      Trying to read a file that doesn't exist                  |
// ECONNREFUSED	 |      Connection refused	          |      Trying to connect to a database/server that is offline    |
// ETIMEDOUT	 |      Connection timed out	      |      Server took too long to respond                           |
//=====================================================================================================================

//  xyz.on('' , callbackfunction)
//.on method takes in two parameters.
// 1. first parameter : Event Name in string format
// 2. second parameter : callback function (that runs when the event is emmited)
//why is it used?
// for example in above code for the POST req , we used .on('data' , callbackfunction) - it is just a method that catches events
// and executes a callback function when that event is emmited
// basically by writing this line of code we're saying
// "Yo man, you just received a chunk of data , just catch it"
// and when the data is finally received in whole we used .on('end' , )
// we're saying "Yo man, the data is finally in your hands , now process it"
// this event-driven architecture is the core of nodeJS

server.on('error' , (error) =>{
    if(error.code === 'EADDRINUSE'){
        console.error(`Error : The ${PORT} is already in use , 
            either change the PORT or close the other server.`)
    }else if (error.code === 'EACCES') {
        console.error(`❌ Error: You do not have permission to access Port ${PORT}.`);
    } else {
        console.error(`❌ Server Error: ${error.message}`);
    }
})

server.listen({ 
    host: localhost,
    port: 3000,
    },
    //call back to display over the terminal 

    // see here instead of callback i could've used it directly , but 
    // i want this to run only after OS confirms me that the port is free
    () => {console.log(`The server is running on http://${localhost}:${PORT}`)}
)