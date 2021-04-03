// Set up MySQL connection.
const mysql = require('mysql');
  require('dotenv').config()


  let db;
if (process.env.JAWSDB_COPPER_URL) {
    db = mysql.createConnection(process.env.JAWSDB_COPPER_URL)
} else {

db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  // NOTE: Be sure to add your MySQL password here!
  password: process.env.PASSWORD,
  database: 'burgers_db',
});
}
// Make connection.
db.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${db.threadId}`);
});

// Export connection for our ORM to use.
module.exports = db;
