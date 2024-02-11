const mysql = require('mysql2');

// Create a connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '*****',
  database: 'local'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL!');

  // Perform a simple query
  connection.query('SELECT * FROM test', (queryErr, results, fields) => {
    if (queryErr) {
      console.error('Error executing query:', queryErr);
      return;
    }
    console.log('Query results:', results);

    // Close the connection when done
    connection.end((endErr) => {
      if (endErr) {
        console.error('Error closing MySQL connection:', endErr);
        return;
      }
      console.log('MySQL connection closed');
    });
  });
});
