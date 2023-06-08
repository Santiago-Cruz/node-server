const taskList= require('./functions/taskList')
const http= require('http');
const host= 'localhost';
const port= 3000;


const server= http.createServer((req, res) => {

    if (req.method === 'GET' && req.url=== '/tasks'){
        res.statusCode= 200;
        res.end(JSON.stringify(taskList));
    }
})

server.listen(port, host, ()=>{
    console.log("servidor ON");
})