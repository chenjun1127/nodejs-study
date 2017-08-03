var mysql = require('mysql');
//连接数据库
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'chenjun',
    password: 'cj123456',
    port: '3306',
    database: 'test_db',
});

connection.connect();
// 删
var delSql = 'DELETE FROM websites where id=7';
connection.query(delSql, (err, result) => {
    if (err) throw err;
    console.log(result);
})

//关闭连接
connection.end();
