'use strict'

const prompt = require('prompt')
const { getProducts } = require('../queries/query-database.js')
let allProducts = ""

const setProductsPrompt = () => {
  let promptObj = {
    properties: {

      selected: {
        description: `
              ******* List of Products *******
              ${allProducts}
              0. Return to Main Menu
              Select one to add to your cart (enter number only)`,
        type: 'number',
        required: true
      }
    }
  }
  return promptObj
}

            ${each.product_id}.  ${each.product_name}  ${each.product_price}

prompt.start()

const productPrompt = function() {
  return new Promise((res, rej) => {
    prompt.get(promptObj, function(err, prod) {
      if (err) rej(err)
      console.log(prod.selected)
      res(prod.selected)
    })
  })
}

getProducts()
  .then((data) => console.log("all products:", data))


module.exports = mainPrompt
