const http = require('http');
const fs = require('fs').promises; // Use promises API for async/await

const server = http.createServer(async (req, res) => {
    try {
        if (req.url === "/") {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("Home");
        } else if (req.url === "/about") {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("About");
        } else if (req.url === "/form") {
            let data = await fs.readFile("./index.html", "utf8");
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    } catch (error) {
        res.end("Internal Server Error");
    }
});

server.listen(3000, () => {
    console.log("Server listening at port 3000");
});
