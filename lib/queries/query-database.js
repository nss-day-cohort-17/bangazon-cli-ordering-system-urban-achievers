'use strict'

const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const db = new sqlite3.Database(path.join(__dirname, '..', '..','bangazon-mt.sqlite'))

const getProducts = () => {  // selecting all products from the products table
  return new Promise((resolve, reject) => {
      db.all(`
        SELECT * FROM products`, (err, data) => {
          if(err) reject(err)
          resolve(data)
        })
    })
}

const getPaymentOptions = () => {
  return {}
}


module.exports = {
    getProducts,
    getPaymentOptions
  }
