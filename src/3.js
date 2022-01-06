const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project1",
};

async function connectionCheck() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connect();
  console.log("Great Job!!");
  let query = `INSERT INTO user(username, password) VALUES ("Ashwini", "pas123") `;
  const list = await connection.query(query);
  
  await connection.end();
  return list;

}

connectionCheck();
