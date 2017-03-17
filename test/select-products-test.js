'use strict'

const {assert: {isFunction}} = require('chai')
const selectProducts = require('../lib/add-product/select-products.js')

describe('selectProducts', () => {
  it('should be a function', () => {
      isFunction(selectProducts)
    })

})
