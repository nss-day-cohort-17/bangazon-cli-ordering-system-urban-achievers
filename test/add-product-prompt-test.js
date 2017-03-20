'use strict'

const {assert: {isFunction}} = require('chai')
const productPrompt = require('../lib/add-product/add-product-prompt.js')

describe('productPrompt', () => {
  it('should be a function', () => {
      isFunction(productPrompt)
    })

})
