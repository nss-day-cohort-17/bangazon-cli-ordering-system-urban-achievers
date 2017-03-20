'use strict'

const {assert: {isFunction}} = require('chai')
const addToCart = require('../lib/add-product/add-to-cart.js')

describe('addToCart', () => {
  it('should be a function', () => {
      isFunction(addToCart)
    })

})
