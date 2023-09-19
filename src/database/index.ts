import { createConnection } from 'mysql';
import 'dotenv/config'

export const database = createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_SCHEMA,
  port: 3306,
});

