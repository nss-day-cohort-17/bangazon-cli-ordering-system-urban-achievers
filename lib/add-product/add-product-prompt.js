'use strict'

const prompt = require('prompt')
const { getProducts } = require('../queries/query-database.js')
let allProducts = "" // empty string to be populated will all existing products and their prices
let productIds = [0] // an array of all the existing products

const setProductsPrompt = () => {  // sets the object which will show up in the prompt
  let productList = {
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
  return productList
}

prompt.start()  // initializes the prompt

const productPrompt = function(promptObj) {
  return new Promise((res, rej) => {  // wrapped in a promise so it waits for an entry before continuing
    prompt.get(promptObj, function(err, prod) {
      if (err) rej(err)
      console.log(prod.selected)
      res(productIds.includes(prod.selected) ? prod.selected : 0)  // the return will be the number of the selected item
    })
  })
}

const addProduct = () => {
  return new Promise((res, rej) => {
    getProducts()  // making a sql SELECT for all the products
      .then((data) => {
        allProducts = "" // reset products string

        data.forEach( (each) => {  // build a string of all the products to add to the prompt line
            allProducts +=`
        ${each.product_id}.  ${each.product_name}  .......  $${each.product_price}`
            productIds.push(each.product_id)
        })
        let promptObj = setProductsPrompt()  // setting the prompt object once the products have been retrieved
        res(productPrompt(promptObj))  // running the prompt
      })
  })
}


module.exports = { productPrompt, setProductsPrompt, addProduct }
