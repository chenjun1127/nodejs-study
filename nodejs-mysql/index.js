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
//查询
var sql = 'SELECT * FROM websites';
connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
})

//关闭连接
connection.end();
