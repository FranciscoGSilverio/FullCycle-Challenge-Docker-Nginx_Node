const mysql = require("mysql");

const mySqlConfig = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const connection = mysql.createConnection(mySqlConfig);

const sqlQuery = `INSERT INTO people(name) values('Francisco')`

const setupDb = () => {
    connection.query(sqlQuery)
    connection.end();
}

module.exports = setupDb;
