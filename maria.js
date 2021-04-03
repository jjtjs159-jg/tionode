const maria = require('mysql');
const conn = maria.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'jgpark',
  password: '1234',
  database: 'reactnext',
});

// const maria = require('mariadb');
// const conn = maria.createPool({
//   host: 'localhost',
//   port: 3000,
//   user: 'jgpark',
//   password: '1234',
//   database: 'reactnext',
// });


module.exports = conn;