'use strict'

const mainPrompt = require('../main/main-prompt.js')
const { getOneProduct } = require('../queries/query-database.js')
const { addProduct } = require('./add-product-prompt.js')
const addtoCart = require('../passing/shoppingCart.js')

const addProductRoute = () => {
  addProduct()  // run the prompt
  .then((id) => {
    parseInt(id) === 0 ? mainPrompt() : getOneProduct(id)
    console.log('entered id:', id)  // select the desired product from database
  })  // if 'zero' was entered, return to main menu
  .then((selectedProduct) => {  // add product to cart
    console.log('selectedProduct:', selectedProduct)
    addtoCart(selectedProduct)
    addProductRoute()  // show list of products again
  })
}

module.exports = addProductRoute
