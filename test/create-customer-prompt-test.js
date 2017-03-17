'use strict'

const {assert: {isFunction, isArray, isObject}} = require('chai')
const newCustomer = require('../lib/create-customer/create-customer-prompt.js')

describe('newCustomer', () => {
  it('should return an object', () => {
    return newCustomer()
      .then((customerObj) => {
        isObject(customerObj)
      })
    })

})
