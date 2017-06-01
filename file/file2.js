var fs = require('fs');
/****************读取文件数据***********************/
// 异步读取

fs.readFile('./files/test2.txt', function (err, data) {
    if (err) {
        console.log(err.stack);
    }
    console.log("异步读取: " + data.toString());
})
// 同步读取
var data = fs.readFileSync('./files/test2.txt');
console.log("同步读取: " + data.toString() + '\n');