'use strict'
const prompt = require('prompt')
const sqlite3 = require('sqlite3').verbose();
const listOfCustomersDB = new sqlite3.Database('../../bangazon-mt.sqlite')
let customers =[]
const getCustomer = () => {
  return new Promise((res, rej) => {
 // if (err) rej(err)
    listOfCustomersDB.all(`SELECT name, customer_id FROM customers`, (err, result) => {
      if (err) rej(err)
        customers.push({
          name: result[0].name,
          id: result[0].customer_id
        })
        // console.log("get", result[0].name)

        res(customers)
    })
  })
}




module.exports = getCustomer
