import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const connection = knex({
    client: "mysql",
    connection: {
       user: process.env.DB_USER,
       host: process.env.DB_HOST,
       database: process.env.DB_NAME,
       password: process.env.DB_PASSWORD,
       port: 3306
    }
 })

export default connection