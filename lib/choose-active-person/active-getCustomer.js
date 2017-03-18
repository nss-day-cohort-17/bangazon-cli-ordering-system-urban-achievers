'use strict'

const sqlite3 = require('sqlite3').verbose();
const listOfCustomersDB = new sqlite3.Database('bangazon-mt.sqlite')

const getCustomer = () => {
  return new Promise((res, rej) => {

    listOfCustomersDB.get(`SELECT name FROM customers`, (err, result) => {
      if (err) throw err
      // console.log("db if", result.name)
    res(result.name)
    })
  })
}

getCustomer().catch((err) => {
  console.log('oops ', err)
})


module.exports = getCustomer
