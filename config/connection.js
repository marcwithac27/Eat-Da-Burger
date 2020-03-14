// Set up MySQL connection.
const mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
connection= mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "100Grovewood!",
  database: "burger_db"
});
};

// Make connection.
connection.connect() 

// Export connection for our ORM to use.
module.exports = connection;
