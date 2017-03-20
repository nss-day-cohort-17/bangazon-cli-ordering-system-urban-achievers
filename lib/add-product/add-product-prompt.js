'use strict'

const prompt = require('prompt')
const { getProducts } = require('../queries/query-database.js')

getProducts()
  .then((data) => console.log("all products:", data))

const products = {
  properties: {

    selected: {
      description: `
            ******* List of Products *******

            ${each.product_id}.  ${each.product_name}  ${each.product_price}

            Select one to add to your cart (enter number only)`,
      type: 'number',
      required: true
    }
  }
}

prompt.start()

const productPrompt = function() {
  return new Promise((res, rej) => {
    prompt.get(products, function(err, prod) {
      if (err) rej(err)
      console.log(prod.selected)
      res(prod.selected)
    })
  })
}

module.exports = mainPrompt
