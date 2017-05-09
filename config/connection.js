// MySQL connection.
var mysql = require("mysql");
var config = require('./config.js');
var dbConnection = mysql.createConnection(config);

// Make connection.
dbConnection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + dbConnection.threadId);
});

// Export connection for ORM to use.
module.exports = dbConnection;