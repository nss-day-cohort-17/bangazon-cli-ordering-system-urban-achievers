'use strict'

const {assert: {isNumber, isObject, isArray}} = require('chai')
const { getProducts,
        getOneProduct,
        getPaymentOptions
      } = require('../lib/queries/query-database.js')


describe('getProducts', () => {
  it('should return an object', () => {
      getProducts()
      .then((prods) => {
        isObject(prods)
      })
    })
})

describe('getOneProduct', () => {
  it('should return an object', () => {
      getOneProduct()
      .then((prod) => {
        isObject(prod)
      })
    })
})
