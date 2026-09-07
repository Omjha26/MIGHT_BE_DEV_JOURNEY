const http = require("node:http");

const localhost = "127.0.0.1";

const PORT = 3000;

const server = http.createServer((req , res) =>{
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Elite Engineer Here!! BOOOOOOOOOOYEAHHHHHHHH!!");
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