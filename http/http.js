/*
 * @Author: chenjun
 * @Date:   2017-12-26 18:03:42
 * @Last Modified by:   chenjun
 * @Last Modified time: 2017-12-26 18:55:26
 */
const http = require('http');
const util = require('util');
const fs = require('fs');

let server = http.createServer((req, res) => {
    if (req.url == '/') {
        http.get('http://www.xiami.com/ajax/recommend-rooms?_=1514282991944', (response) => {
            let data = '';
            response.on('data', (chunk) => {
                data += chunk;
            })
            response.on('end', () => {
                res.writeHead(200, { 'Content-Type': 'text/html,charset=utf-8' });
                res.end(data);
            })
        }).on('error', (e) => {
            console.error(`错误: ${e.message}`);
        });
    }
});

server.listen(3100, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3100/');
})