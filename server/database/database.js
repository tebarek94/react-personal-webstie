import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const dbCon = mysql.createConnection({
  host: process.env.host,
  password: process.env.password,
  database: process.env.database,
  user: process.env.user,
});
export default dbCon;
