'use strict'

const {assert: {isFunction}} = require('chai')
const insertProduct = require('../lib/add-product/insert-product.js')

describe('insertProduct', () => {
  it('should be a function', () => {
      isFunction(insertProduct)
    })

})
