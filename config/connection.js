var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connecntion = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connecntion = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "d1i2n3a4",
    database: "burgers_db"
  });
}

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "d1i2n3a4",
//   database: "burgers_db"
// });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
