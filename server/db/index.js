const mysql = require('mysql');
const Promise = require('bluebird');
const database = 'blackmarket';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '22557787a',
  database: 'blackmarket'
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to ${database} database as ID ${db.threadId}`))
  .then(() => db.queryAsync(`USE ${database}`))


module.exports = db;