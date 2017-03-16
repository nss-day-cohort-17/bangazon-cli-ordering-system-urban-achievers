'use strict'

const {assert: {isFunction, isArray}} = require('chai')
const grabCustomer = require('../lib/create-customer/customer-args.js')

describe('grabCustomer', () => {
  it('should be a function', () => {
    isFunction(grabCustomer)
  });

  it('should return an array', () => {
    isArray(grabCustomer())
  })

})
