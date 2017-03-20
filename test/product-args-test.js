'use strict'

const {assert: {isFunction, isArray}} = require('chai')
const makeArray = require('../lib/add-product/product-args.js')

describe('makeArray', () => {
  it('should be a function', () => {
      isFunction(makeArray)
    });

  it('should return an array', () => {
      isArray(makeArray())
    })

})
