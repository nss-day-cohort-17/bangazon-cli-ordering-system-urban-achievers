'use strict'

const {assert: {isFunction}} = require('chai')
const addProduct = require('../lib/add-product/add-product-prompt.js')

describe('addProduct', () => {
  it('should be a function', () => {
      isFunction(addProduct)
    })

})
