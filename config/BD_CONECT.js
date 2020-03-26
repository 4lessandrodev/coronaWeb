// get the client
const mysql = require('mysql2');
/*
// Create the connection pool. The pool-specific settings are the defaults
const conect = mysql.createPool({
  host: 'mysql18-farm76.kinghost.net',
  user: 'alessandrodev',
  database: 'alessandrodev',
  password: 'combatendocorona1190',
  waitForConnections: true,
  connectionLimit: 15,
  queueLimit: 0
});
module.exports = conect;



*/
//LOCAL 
// get the client

// Create the connection pool. The pool-specific settings are the defaults
const conect = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  database: 'corona_bd',
  password: 'admin',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = conect;
