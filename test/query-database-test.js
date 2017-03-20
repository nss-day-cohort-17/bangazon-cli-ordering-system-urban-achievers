'use strict'

const {assert: {isNumber, isObject, isArray}} = require('chai')
const { getProducts,
        getPaymentOptions
      } = require('../lib/queries/query-database.js')


describe('getProducts', () => {
  it('should return an object', () => {
      isObject(getProducts())
    });

  it('should be a function', () => {
      isFunction(getProducts)
    })


})
