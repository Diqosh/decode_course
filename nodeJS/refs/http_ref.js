const http = require('http')

const server = http.createServer((req,res) => {
    console.log(req.url)
    res.writeHead(200,{
        'Content-Type': 'text/html'
    })
    res.write("hello world")
    res.end()
})

server.listen(3000, ()=>{
    console.log('server is running...')
})