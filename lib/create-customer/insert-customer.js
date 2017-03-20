
'use strict'

const sqlite3 = require('sqlite3').verbose();
const customerDb = new sqlite3.Database('bangazon-mt.sqlite')

const insertCustomer = (arr) => {
  customerDb.run(`INSERT INTO customers VALUES
        (
        null, "${arr[0]}", "${arr[1]}", "${arr[2]}", "${arr[3]}", ${arr[4]}, ${arr[5]}
        )`
      )
}

module.exports = insertCustomer
