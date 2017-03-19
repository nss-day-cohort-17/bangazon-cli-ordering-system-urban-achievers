'use strict'

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon-mt.sqlite')

const getProducts = () => {
  let allProducts = {}
  db.run(`SELECT * FROM products`)

  return allProducts
}

const getPaymentOptions = () => {
  reurn {}
}


module.exports = { getProducts, getPaymentOptions }
