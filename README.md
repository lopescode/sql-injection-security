# SQL Injection Security

### What is SQL Injection?

SQL Injection is a type of attack that allows the attacker to extract database information from the website's database. This is done by injecting SQL commands into the input fields of the website. This is possible when the website does not properly sanitize the user input.

### How to prevent SQL Injection?

The best way to prevent SQL Injection is to use prepared statements. Prepared statements are SQL statements that are sent to and parsed by the database server separately from any parameters. This way it is impossible for an attacker to inject malicious SQL.

### How to test for SQL Injection?

There are many ways to test for SQL Injection. One of the most common ways is to use a single quote (') in the input field. If the website is vulnerable to SQL Injection, the website will throw an error. Another way is to use the SQL Injection cheat sheet. This cheat sheet contains many SQL Injection payloads that can be used to test for SQL Injection.

### SQL Injection Cheat Sheet

The SQL Injection cheat sheet can be found [here](https://portswigger.net/web-security/sql-injection/cheat-sheet).

## SQL Injection Sample Code

### How can I run this code?

#### 1. Install the dependencies
To get started, install the required dependencies by running the following command:
  ```bash
  npm install
  ```

#### 2. Run the seed script
Next, populate your database with initial data using the seed script:
  ```bash
  npm run seed
  ```

#### 3. Run the server
Launch the server by executing the following command:
  ```bash
  npm start
  ```

#### 4. Run the tests (optional)
I've included some tests to illustrate the difference between a secure endpoint and an insecure one. You can execute these tests with the following command:
  ```bash
  npm test
  ```

The first test is designed to sign in a user without requiring a password, demonstrating the vulnerability of SQL injection. The second test is intended to prevent user sign-in as it is a protected endpoint.
