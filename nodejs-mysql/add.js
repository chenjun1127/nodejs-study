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
//增加
var addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
var addSqlParams = ['新浪', 'http://www.sina.com', '10210', 'CN'];
connection.query(addSql, addSqlParams, (err, result) => {
    if (err) throw err;
    console.log(result);
})

//关闭连接
connection.end();
