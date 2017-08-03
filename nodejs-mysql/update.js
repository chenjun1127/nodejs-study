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
// 改
var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
var modSqlParams = ['天猫', 'http://www.tmall.com', '2'];
connection.query(modSql, modSqlParams, (err, result) => {
    if (err) throw err;
    console.log(result);
})

//关闭连接
connection.end();
