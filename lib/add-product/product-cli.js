'use strict'

const mainPrompt = require('../main/main-prompt.js')
const { getOneProduct } = require('../queries/query-database.js')
const { addProduct } = require('./add-product-prompt.js')

const runProductCli = () => {
  addProduct()  // run the prompt
  .then((id) => {
    parseInt(id) === 0 ? mainPrompt() : getOneProduct(id)  // select the desired product from database
  })  // if 'zero' was entered, return to main menu
  .then((selectedProduct) => {  // add product to cart

    runProductCli()  // show list of products again
  })
}

module.exports = runProductCli;
