// Connecting to database
const env = require("dotenv").config();
const Pool = require('pg').Pool;
const isProduction = process.env.NODE_ENV || 'development'
let pool;
if (isProduction) {
    pool = new Pool({
        user: "postgres",
        password: "sakat",
        host: "127.0.0.1",
        port: 5432,
        database: "todoapp"
    });
} else {
    pool = new Pool({
        user: "postgres",
        password: "sakat",
        host: "127.0.0.1",
        port: 5432,
        database: "todoapp"
    });
}
module.exports = pool;





