'use strict'

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon-mt.sqlite')

const getProducts = () => {  // selecting all products from the products table
  return new Promise((resolve, reject) => {
      db.all(`
        SELECT * FROM products`, (err, data) => {
          if(err) reject(err)
          resolve(data)
        })
    })
}

const getOneProduct = (id) => {
            console.log("id:", id)
  return new Promise((resolve, reject) => {
      db.all(`
        SELECT * FROM products WHERE product_id = ${parseInt(id)}`, (err, data) => {
          if(err) reject(err)
          console.log(data)
          resolve(data)
        })
    })
}
const getPaymentOptions = () => {
  return {}
}


module.exports = {
    getProducts,
    getOneProduct,
    getPaymentOptions
  }
