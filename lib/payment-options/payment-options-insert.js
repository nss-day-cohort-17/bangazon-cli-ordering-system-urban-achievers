'use strict'

const sqlite3 = require('sqlite3').verbose();

// const customerDb = new sqlite3.Database('bangazon-mt.sqlite');
const path = require('path');
const customerDb = new sqlite3.Database(path.join(__dirname, '..', '..','bangazon-mt.sqlite'))

const {setCurrentCustomer: customer_id} = require('../passing/active-user.js');
// console.log(setCurrentCustomer)

const insertPaymentOption = (array) => {
	customerDb.run(`INSERT INTO payment_options VALUES
		(null, ${customer_id}, "${array[0]}", ${array[1]})`)
}

module.exports = insertPaymentOption
