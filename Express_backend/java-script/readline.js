const readLine = require('readline')

const r1 = readLine.createInterface(
    {
        input : process.stdin,
        output : process.stdout
    }
);

r1.question(
    "What is your name? ", 
    function(name){
        console.log(`Hello ! , ${name}`);
        r1.close();
    }
)