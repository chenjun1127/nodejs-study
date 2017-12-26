/*
 * @Author: chenjun
 * @Date:   2017-12-26 17:41:30
 * @Last Modified by:   chenjun
 * @Last Modified time: 2017-12-26 17:56:17
 */
const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    fs.readFile(pathname.substring(1), (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html,charset=utf-8' });
            res.write(data.toString());
        }
        res.end();
    })
})

server.listen(3100, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3100/');
})