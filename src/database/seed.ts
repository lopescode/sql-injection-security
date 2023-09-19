import { database } from './index';
import { MysqlError } from 'mysql';

database.connect((err: MysqlError | null) => {
  if (err) {
    console.error('Error when connecting to MySQL:', err);
    return;
  }

  console.log('Successfully connected to MySQL');

  // Create the 'users' table after successfully connecting
  database.query('CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255), password VARCHAR(255))', (err: MysqlError | null) => {
    if (err) {
      console.error('Error when creating the `users` table:', err);
      // Close the database connection if an error occurs during table creation
      database.end((err?: MysqlError) => {
        if (err) {
          console.error('Error when closing the connection to MySQL:', err);
        }
      });
      return;
    }

    // Insert a record into the 'users' table after table creation
    database.query(`INSERT INTO users (email, password) VALUES ('test@test.com', '123456')`, (err: MysqlError | null) => {
      if (err) {
        console.error('Error when inserting a record into the `users` table:', err);
      }

      // Close the database connection after inserting the record
      database.end((err?: MysqlError) => {
        if (err) {
          console.error('Error when closing the connection to MySQL:', err);
        } else {
          console.log('Connection to MySQL closed');
        }
      });
    });
  });
});
