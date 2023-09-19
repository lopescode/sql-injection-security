import { database } from "../database";
import { MysqlError } from "mysql";

export class AuthService {
  async unsecureSignIn(email: string, password: string) {
    const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'}'`;

    return new Promise((resolve, reject) => {
      database.query(query, (err: MysqlError | null, results: any[]) => {
        if (err) {
          reject(err);
        } else if (results.length === 0) {
          resolve(null);
        } else {
          const user = results[0];
          resolve(user);
        }
      });
    });
  }

  async signIn(email: string, password: string) {
    const query = `SELECT * FROM users WHERE email = ? AND password = ?`;

    return new Promise((resolve, reject) => {
      database.query(query, [email, password], (err: MysqlError | null, results: any[]) => {
        if (err) {
          reject(err);
        } else if (results.length === 0) {
          resolve(null);
        } else {
          const user = results[0];
          resolve(user);
        }
      });
    });
  }
}
