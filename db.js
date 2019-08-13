var mysql = require('mysql');

var con = {
    host: "10.1.1.125",
    user: "root",
    password: "",
    database: 'test',
    timezone: 'utc'
}
var db;

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection(con);
        db.connect(function (err) {
            if (!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return db;
}
module.exports = connectDatabase();
