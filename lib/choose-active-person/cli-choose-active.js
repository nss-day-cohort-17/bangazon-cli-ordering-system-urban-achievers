'use strict'

const sqlite3 = require('sqlite3').verbose();
const listOfCustomersDB = new sqlite3.Database('bangazon-mt.sqlite')



// get all customers
// display in prompt
// get Select * from customer where name = name
// return object of * to global application
