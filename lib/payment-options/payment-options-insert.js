'use strict'

const sqlite3 = require('sqlite3').verbose();

const customerDb = new sqlite3.Database('bangazon-mt.sqlite');

// const insertPaymentOption = (arr) => {
// 	customerDb.run(`INSERT INTO payment_options VALUES
// 		(null, "Donny", "${arr[0]}", ${arr[1]})`)

// }
