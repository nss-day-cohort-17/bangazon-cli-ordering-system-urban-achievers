'use strict'

const {assert: {isFunction, isObject}} = require('chai')
const { productPrompt, setProductsPrompt } = require('../lib/add-product/add-product-prompt.js')

describe('productPrompt', () => {
  it('should be a function', () => {
      isFunction(productPrompt)
    })

})

describe('setProductsPrompt', () => {
  it('should return an object', () => {
      isObject(setProductsPrompt())
    })

})
