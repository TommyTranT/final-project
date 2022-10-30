const Pool = require("pg").Pool;
//we need to require the pool, then create the environment on which it will run

const pool = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "wishlist"
});


//export the db
module.exports = pool;