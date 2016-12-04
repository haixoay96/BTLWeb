var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'duclinh',
    password: '123456',
    database: 'btlweb'
});
connection.connect((error) => {
    if (error) {
        console.log('Connect mysql error!');
        console.error(error);
        process.exit(0);
    }
    console.log('Mysql connect succesfull!');
});
module.exports.db = connection;
