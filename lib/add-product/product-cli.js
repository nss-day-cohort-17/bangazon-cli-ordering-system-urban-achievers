'use strict'

const mainPrompt = require('./main-prompt.js')
const { getOneProduct } = require('../queries/query-database.js')
const { addProduct } = require('./add-product-prompt.js')

addProduct()  // running the prompt
.then((id) => {  // finding the selected product
  parseInt(id) === 0 ? mainPrompt() : getOneProduct(id)
})
.then((selectedProduct) => {  // adding product to cart

})
