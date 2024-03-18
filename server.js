const http = require("http")

http.createServer((req, res) => {
    //  设置cors跨域
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    res.setHeader("Content-Type", "application/json")
    console.log("req.url", req.url)

    res.statusCode = 200
    res.end("server start success on 80 port")
}).listen(80, "0.0.0.0")
