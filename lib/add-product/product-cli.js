'use strict'

const mainPrompt = require('../main/main-prompt.js')
const { getOneProduct } = require('../queries/query-database.js')
const { addProduct } = require('./add-product-prompt.js')

addProduct()  // running the prompt
.then((id) => {  // finding the selected product
  parseInt(id) === 0 ? mainPrompt() : getOneProduct(id)  // if 'zero' was entered, return to main menu
})
.then((selectedProduct) => {  // adding product to cart

})
