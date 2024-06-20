import http from 'http';
import fs from 'fs';

const port = 8000;

const server = http.createServer(async (req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const data = await fs.promises.readFile('./index.html', 'utf8');
        res.end(data);
    } else if (req.url === '/profile') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const data = await fs.promises.readFile('./profile.html', 'utf8');
        res.end(data);
    } else if (req.url === '/shop') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const data = await fs.promises.readFile('./shop.html', 'utf8');
        res.end(data);
    } else if (req.url === '/shop.js') {
        const data = await fs.promises.readFile('./shop.js', 'utf8');
        res.end(data);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Hit Corrcet Url');
    }
});

server.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
