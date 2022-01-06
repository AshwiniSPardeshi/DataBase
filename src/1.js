const mysql = require("mysql2");

const dbinfo = {
    host : "localhost",
    user : "root",
    password :"cdac",
    database : "userdata"
}

const connection = mysql.createConnection(dbinfo);

connection.connect();

const data = `INSERT INTO info (username, password) values ("Ashwini", "Pas12")` ;

connection.query(data);

connection.end();