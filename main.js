let http = require('http')

let server = http.createServer((req,res)=>{
    res.write('Hello, World!');
    res.end();
})

server.listen(3000);

server.on('listening',()=>{
    console.log('Server Started.')
})
